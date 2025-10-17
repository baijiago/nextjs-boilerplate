/**
 * 心理测评系统认证模块
 * 专用登录接口，避免与其他项目冲突
 */

// 认证相关类型定义
export interface UserCredentials {
  username: string;
  password: string;
  captcha?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  refreshToken?: string;
  user?: UserProfile;
  message?: string;
  errorCode?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  role: 'admin' | 'psychologist' | 'researcher' | 'user';
  lastLogin?: Date;
  permissions: string[];
}

export interface AuthError {
  code: 'INVALID_CREDENTIALS' | 'ACCOUNT_LOCKED' | 'CAPTCHA_REQUIRED' | 'SYSTEM_ERROR';
  message: string;
  retryAfter?: number;
}

// 专用API端点配置
const AUTH_CONFIG = {
  baseUrl: process.env.VITE_API_BASE_URL || 'https://api.sri-psych-eval.com',
  endpoints: {
    login: '/v2/auth/sri-login',
    logout: '/v2/auth/sri-logout',
    refresh: '/v2/auth/sri-refresh',
    verify: '/v2/auth/sri-verify',
    profile: '/v2/user/sri-profile'
  },
  headers: {
    'X-SRI-Client': 'sexual-repression-calculator',
    'X-API-Version': '2.0',
    'Content-Type': 'application/json'
  }
};

// Token 管理
class TokenManager {
  private static readonly ACCESS_TOKEN_KEY = 'sri_access_token_v2';
  private static readonly REFRESH_TOKEN_KEY = 'sri_refresh_token_v2';
  private static readonly USER_KEY = 'sri_user_profile_v2';

  static setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  static clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static setUserProfile(user: UserProfile): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  static getUserProfile(): UserProfile | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }
}

// HTTP 请求工具
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${AUTH_CONFIG.baseUrl}${endpoint}`;
  const token = TokenManager.getAccessToken();

  const config: RequestInit = {
    ...options,
    headers: {
      ...AUTH_CONFIG.headers,
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API请求失败:', error);
    throw error;
  }
}

// 认证服务类
export class AuthService {
  /**
   * 用户登录
   */
  static async login(credentials: UserCredentials): Promise<AuthResponse> {
    try {
      const response = await apiRequest<AuthResponse>(
        AUTH_CONFIG.endpoints.login,
        {
          method: 'POST',
          body: JSON.stringify({
            ...credentials,
            clientId: 'sri-web-client',
            deviceInfo: {
              userAgent: navigator.userAgent,
              timestamp: Date.now(),
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
          }),
        }
      );

      if (response.success && response.token && response.refreshToken) {
        TokenManager.setTokens(response.token, response.refreshToken);
        if (response.user) {
          TokenManager.setUserProfile(response.user);
        }
      }

      return response;
    } catch (error) {
      return {
        success: false,
        message: '登录请求失败，请检查网络连接',
        errorCode: 'NETWORK_ERROR'
      };
    }
  }

  /**
   * 用户登出
   */
  static async logout(): Promise<void> {
    try {
      const refreshToken = TokenManager.getRefreshToken();
      if (refreshToken) {
        await apiRequest(AUTH_CONFIG.endpoints.logout, {
          method: 'POST',
          body: JSON.stringify({ refreshToken }),
        });
      }
    } catch (error) {
      console.error('登出请求失败:', error);
    } finally {
      TokenManager.clearTokens();
    }
  }

  /**
   * 刷新访问令牌
   */
  static async refreshAccessToken(): Promise<boolean> {
    try {
      const refreshToken = TokenManager.getRefreshToken();
      if (!refreshToken) {
        return false;
      }

      const response = await apiRequest<AuthResponse>(
        AUTH_CONFIG.endpoints.refresh,
        {
          method: 'POST',
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (response.success && response.token && response.refreshToken) {
        TokenManager.setTokens(response.token, response.refreshToken);
        return true;
      }

      return false;
    } catch (error) {
      console.error('刷新令牌失败:', error);
      TokenManager.clearTokens();
      return false;
    }
  }

  /**
   * 验证当前登录状态
   */
  static async verifyAuth(): Promise<boolean> {
    try {
      const token = TokenManager.getAccessToken();
      if (!token) {
        return false;
      }

      const response = await apiRequest<{ valid: boolean }>(
        AUTH_CONFIG.endpoints.verify,
        { method: 'GET' }
      );

      return response.valid;
    } catch (error) {
      // Token可能过期，尝试刷新
      return await this.refreshAccessToken();
    }
  }

  /**
   * 获取当前用户信息
   */
  static async getCurrentUser(): Promise<UserProfile | null> {
    try {
      // 先从本地存储获取
      const cachedUser = TokenManager.getUserProfile();
      if (cachedUser) {
        return cachedUser;
      }

      // 如果本地没有，从服务器获取
      const response = await apiRequest<{ user: UserProfile }>(
        AUTH_CONFIG.endpoints.profile,
        { method: 'GET' }
      );

      if (response.user) {
        TokenManager.setUserProfile(response.user);
        return response.user;
      }

      return null;
    } catch (error) {
      console.error('获取用户信息失败:', error);
      return null;
    }
  }

  /**
   * 检查是否已登录
   */
  static isAuthenticated(): boolean {
    return TokenManager.getAccessToken() !== null;
  }

  /**
   * 检查用户权限
   */
  static hasPermission(permission: string): boolean {
    const user = TokenManager.getUserProfile();
    return user?.permissions?.includes(permission) ?? false;
  }

  /**
   * 检查用户角色
   */
  static hasRole(role: UserProfile['role']): boolean {
    const user = TokenManager.getUserProfile();
    return user?.role === role;
  }
}

// React Hook for authentication state
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    AuthService.isAuthenticated()
  );
  const [user, setUser] = React.useState<UserProfile | null>(
    TokenManager.getUserProfile()
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const isValid = await AuthService.verifyAuth();
      setIsAuthenticated(isValid);

      if (isValid) {
        const userProfile = await AuthService.getCurrentUser();
        setUser(userProfile);
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials: UserCredentials): Promise<AuthResponse> => {
    setLoading(true);
    const response = await AuthService.login(credentials);

    if (response.success) {
      setIsAuthenticated(true);
      setUser(response.user || null);
    }

    setLoading(false);
    return response;
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    await AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    setLoading(false);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    hasPermission: AuthService.hasPermission,
    hasRole: AuthService.hasRole,
  };
}

// 路由守卫 HOC
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  requiredRole?: UserProfile['role']
) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, user, loading } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!loading) {
        if (!isAuthenticated) {
          navigate('/login');
          return;
        }

        if (requiredRole && (!user || user.role !== requiredRole)) {
          navigate('/unauthorized');
          return;
        }
      }
    }, [isAuthenticated, user, loading, navigate]);

    if (loading) {
      return <div>验证身份中...</div>;
    }

    if (!isAuthenticated) {
      return null;
    }

    if (requiredRole && (!user || user.role !== requiredRole)) {
      return null;
    }

    return <Component {...props} />;
  };
}