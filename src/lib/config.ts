/**
 * 环境配置文件
 * 心理测评系统专用API配置
 */

// 开发环境配置
export const DEV_CONFIG = {
  apiBaseUrl: 'http://localhost:8080',
  wsUrl: 'ws://localhost:8080/ws',
  clientId: 'sri-web-dev',
  environment: 'development'
} as const;

// 测试环境配置
export const TEST_CONFIG = {
  apiBaseUrl: 'https://test-api.sri-psych-eval.com',
  wsUrl: 'wss://test-api.sri-psych-eval.com/ws',
  clientId: 'sri-web-test',
  environment: 'testing'
} as const;

// 生产环境配置
export const PROD_CONFIG = {
  apiBaseUrl: 'https://api.sri-psych-eval.com',
  wsUrl: 'wss://api.sri-psych-eval.com/ws',
  clientId: 'sri-web-prod',
  environment: 'production'
} as const;

// 当前环境配置
export const getCurrentConfig = () => {
  const env = import.meta.env.MODE || 'development';

  switch (env) {
    case 'production':
      return PROD_CONFIG;
    case 'testing':
      return TEST_CONFIG;
    default:
      return DEV_CONFIG;
  }
};

// API 端点配置（专用路径，避免冲突）
export const API_ENDPOINTS = {
  // 认证相关
  auth: {
    login: '/v2/auth/sri-login',
    logout: '/v2/auth/sri-logout',
    refresh: '/v2/auth/sri-refresh',
    verify: '/v2/auth/sri-verify',
    register: '/v2/auth/sri-register',
    forgotPassword: '/v2/auth/sri-forgot-password',
    resetPassword: '/v2/auth/sri-reset-password',
  },

  // 用户管理
  user: {
    profile: '/v2/user/sri-profile',
    updateProfile: '/v2/user/sri-profile',
    preferences: '/v2/user/sri-preferences',
    sessions: '/v2/user/sri-sessions',
  },

  // 测评相关
  assessment: {
    start: '/v2/assessment/sri-start',
    submit: '/v2/assessment/sri-submit',
    results: '/v2/assessment/sri-results',
    history: '/v2/assessment/sri-history',
    export: '/v2/assessment/sri-export',
  },

  // 量表管理
  scales: {
    list: '/v2/scales/sri-list',
    details: '/v2/scales/sri-details',
    validate: '/v2/scales/sri-validate',
  },

  // 数据分析
  analytics: {
    overview: '/v2/analytics/sri-overview',
    trends: '/v2/analytics/sri-trends',
    export: '/v2/analytics/sri-export',
  }
} as const;

// 请求头配置
export const REQUEST_HEADERS = {
  'X-SRI-Client': 'sexual-repression-calculator',
  'X-API-Version': '2.0',
  'X-Client-Platform': 'web',
  'Content-Type': 'application/json',
} as const;

// 存储键名配置（专用前缀）
export const STORAGE_KEYS = {
  accessToken: 'sri_access_token_v2',
  refreshToken: 'sri_refresh_token_v2',
  userProfile: 'sri_user_profile_v2',
  preferences: 'sri_user_preferences_v2',
  sessionData: 'sri_session_data_v2',
  rememberUser: 'sri_remember_user_v2',
} as const;

// 错误代码映射
export const ERROR_CODES = {
  // 认证错误
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  REFRESH_TOKEN_INVALID: 'REFRESH_TOKEN_INVALID',

  // 业务错误
  ASSESSMENT_NOT_FOUND: 'ASSESSMENT_NOT_FOUND',
  SCALE_NOT_AVAILABLE: 'SCALE_NOT_AVAILABLE',
  INVALID_RESPONSE_DATA: 'INVALID_RESPONSE_DATA',

  // 系统错误
  NETWORK_ERROR: 'NETWORK_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
} as const;

// 错误消息映射
export const ERROR_MESSAGES = {
  [ERROR_CODES.INVALID_CREDENTIALS]: '用户名或密码错误',
  [ERROR_CODES.ACCOUNT_LOCKED]: '账户已被锁定，请联系管理员',
  [ERROR_CODES.TOKEN_EXPIRED]: '登录已过期，请重新登录',
  [ERROR_CODES.REFRESH_TOKEN_INVALID]: '会话无效，请重新登录',
  [ERROR_CODES.ASSESSMENT_NOT_FOUND]: '测评记录不存在',
  [ERROR_CODES.SCALE_NOT_AVAILABLE]: '量表暂不可用',
  [ERROR_CODES.INVALID_RESPONSE_DATA]: '提交的数据格式错误',
  [ERROR_CODES.NETWORK_ERROR]: '网络连接失败，请检查网络',
  [ERROR_CODES.SERVER_ERROR]: '服务器错误，请稍后重试',
  [ERROR_CODES.RATE_LIMIT_EXCEEDED]: '请求过于频繁，请稍后再试',
} as const;

export default {
  getCurrentConfig,
  API_ENDPOINTS,
  REQUEST_HEADERS,
  STORAGE_KEYS,
  ERROR_CODES,
  ERROR_MESSAGES,
};