# 心理测评系统 - 认证接口文档

## 概述

本文档描述了心理测评系统（Sexual Repression Index Calculator）的专用认证接口。所有接口都使用专门的路径和标识符，确保与其他项目不会产生冲突。

## 基础信息

- **基础URL**: `https://api.sri-psych-eval.com`
- **API版本**: `v2`
- **客户端标识**: `sexual-repression-calculator`
- **内容类型**: `application/json`

## 专用请求头

所有请求都必须包含以下专用头部：

```http
X-SRI-Client: sexual-repression-calculator
X-API-Version: 2.0
X-Client-Platform: web
Content-Type: application/json
```

## 认证接口

### 1. 用户登录

**接口地址**: `POST /v2/auth/sri-login`

**请求体**:
```json
{
  "username": "string",          // 用户名或邮箱
  "password": "string",          // 密码
  "captcha": "string",          // 验证码（可选）
  "clientId": "sri-web-client", // 客户端标识
  "deviceInfo": {
    "userAgent": "string",
    "timestamp": 1672531200000,
    "timezone": "Asia/Shanghai"
  }
}
```

**响应体**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",     // 访问令牌
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...", // 刷新令牌
  "user": {
    "id": "sri_user_12345",
    "username": "psychologist01",
    "email": "user@example.com",
    "role": "psychologist",
    "lastLogin": "2025-01-01T12:00:00Z",
    "permissions": ["read_assessments", "create_assessments"]
  },
  "message": "登录成功"
}
```

### 2. 用户登出

**接口地址**: `POST /v2/auth/sri-logout`

**请求头**: `Authorization: Bearer {token}`

**请求体**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 3. 刷新令牌

**接口地址**: `POST /v2/auth/sri-refresh`

**请求体**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**响应体**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 4. 验证令牌

**接口地址**: `GET /v2/auth/sri-verify`

**请求头**: `Authorization: Bearer {token}`

**响应体**:
```json
{
  "valid": true,
  "user": {
    "id": "sri_user_12345",
    "username": "psychologist01",
    "role": "psychologist"
  }
}
```

## 用户管理接口

### 1. 获取用户资料

**接口地址**: `GET /v2/user/sri-profile`

**请求头**: `Authorization: Bearer {token}`

**响应体**:
```json
{
  "user": {
    "id": "sri_user_12345",
    "username": "psychologist01",
    "email": "user@example.com",
    "role": "psychologist",
    "lastLogin": "2025-01-01T12:00:00Z",
    "permissions": ["read_assessments", "create_assessments"],
    "profile": {
      "firstName": "张",
      "lastName": "医生",
      "department": "心理科",
      "license": "PSY2025001"
    }
  }
}
```

## 测评相关接口

### 1. 开始测评

**接口地址**: `POST /v2/assessment/sri-start`

**请求头**: `Authorization: Bearer {token}`

**请求体**:
```json
{
  "type": "quick",              // 测评类型: quick | full
  "demographics": {
    "age": 25,
    "gender": "female",
    "education": "bachelor"
  }
}
```

**响应体**:
```json
{
  "sessionId": "sri_session_67890",
  "questions": [...],           // 问题列表
  "estimatedTime": 15           // 预估完成时间（分钟）
}
```

### 2. 提交测评结果

**接口地址**: `POST /v2/assessment/sri-submit`

**请求头**: `Authorization: Bearer {token}`

**请求体**:
```json
{
  "sessionId": "sri_session_67890",
  "responses": [
    {
      "questionId": "Q001",
      "scaleId": "SIS_SES",
      "answer": 4,
      "timestamp": 1672531200000
    }
  ]
}
```

### 3. 获取测评结果

**接口地址**: `GET /v2/assessment/sri-results/{sessionId}`

**请求头**: `Authorization: Bearer {token}`

**响应体**:
```json
{
  "sessionId": "sri_session_67890",
  "results": {
    "overallScore": 65,
    "scaleResults": {
      "SIS_SES": {
        "totalScore": 32,
        "percentile": 70,
        "interpretation": "中等水平"
      }
    }
  },
  "completedAt": "2025-01-01T12:30:00Z"
}
```

## 错误处理

所有接口在发生错误时，都会返回统一的错误格式：

```json
{
  "success": false,
  "errorCode": "INVALID_CREDENTIALS",
  "message": "用户名或密码错误",
  "details": {
    "field": "password",
    "reason": "密码格式不正确"
  }
}
```

### 常见错误代码

- `INVALID_CREDENTIALS`: 登录凭据无效
- `ACCOUNT_LOCKED`: 账户被锁定
- `TOKEN_EXPIRED`: 令牌过期
- `REFRESH_TOKEN_INVALID`: 刷新令牌无效
- `RATE_LIMIT_EXCEEDED`: 请求频率超限
- `ASSESSMENT_NOT_FOUND`: 测评记录不存在
- `INVALID_RESPONSE_DATA`: 响应数据格式错误

## 环境配置

### 开发环境
- **API地址**: `http://localhost:8080`
- **WebSocket**: `ws://localhost:8080/ws`

### 测试环境
- **API地址**: `https://test-api.sri-psych-eval.com`
- **WebSocket**: `wss://test-api.sri-psych-eval.com/ws`

### 生产环境
- **API地址**: `https://api.sri-psych-eval.com`
- **WebSocket**: `wss://api.sri-psych-eval.com/ws`

## 安全考虑

1. **令牌管理**:
   - 访问令牌有效期：15分钟
   - 刷新令牌有效期：30天
   - 使用JWT格式，包含用户信息和权限

2. **请求签名**:
   - 所有请求都包含时间戳验证
   - 使用HMAC-SHA256进行请求签名
   - 防止重放攻击

3. **数据加密**:
   - 传输层使用TLS 1.3加密
   - 敏感数据使用AES-256加密存储
   - 密码使用bcrypt哈希

4. **访问控制**:
   - 基于角色的权限控制(RBAC)
   - API限流保护
   - 异常访问监控

## 示例代码

参考 `src/lib/auth.ts` 中的 `AuthService` 类来正确使用这些接口。

```typescript
// 登录示例
const response = await AuthService.login({
  username: 'psychologist01',
  password: 'securePassword123'
});

if (response.success) {
  console.log('登录成功:', response.user);
} else {
  console.error('登录失败:', response.message);
}
```