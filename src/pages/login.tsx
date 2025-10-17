/**
 * 登录页面组件
 * 为心理测评系统定制的专用登录界面
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { BrainIcon, EyeIcon, LoadingIcon, ShieldIcon, AlertIcon } from '@/components/ui/icons';
import { useAuth, UserCredentials } from '@/lib/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [credentials, setCredentials] = useState<UserCredentials>({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof UserCredentials) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // 清除错误信息
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      setError('请输入用户名和密码');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await login(credentials);

      if (response.success) {
        // 如果选择记住我，设置较长的会话时间
        if (rememberMe) {
          localStorage.setItem('sri_remember_user', credentials.username);
        }

        // 登录成功，跳转到主页
        navigate('/', { replace: true });
      } else {
        setError(response.message || '登录失败，请检查用户名和密码');
      }
    } catch (err) {
      setError('网络连接失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 页面加载时检查是否有记住的用户名
  React.useEffect(() => {
    const rememberedUser = localStorage.getItem('sri_remember_user');
    if (rememberedUser) {
      setCredentials(prev => ({ ...prev, username: rememberedUser }));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            {/* Logo 区域 */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BrainIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-gray-900">
              心理测评系统
            </CardTitle>
            <CardDescription className="text-gray-600">
              请登录您的专业账户以访问测评工具
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 错误提示 */}
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertIcon className="w-4 h-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {/* 用户名输入 */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  用户名 / 邮箱
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="请输入用户名或邮箱"
                  value={credentials.username}
                  onChange={handleInputChange('username')}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                  autoComplete="username"
                />
              </div>

              {/* 密码输入 */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  密码
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="请输入密码"
                    value={credentials.password}
                    onChange={handleInputChange('password')}
                    className="h-11 pr-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    disabled={isSubmitting}
                    autoComplete="current-password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-9 w-9 px-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isSubmitting}
                  >
                    <EyeIcon className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              </div>

              {/* 记住我 & 忘记密码 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                    记住我
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  忘记密码？
                </Link>
              </div>

              {/* 登录按钮 */}
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting || loading}
              >
                {isSubmitting ? (
                  <>
                    <LoadingIcon className="w-4 h-4 mr-2" />
                    登录中...
                  </>
                ) : (
                  '登录账户'
                )}
              </Button>
            </form>

            {/* 安全提示 */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start space-x-3">
                <ShieldIcon className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-600">
                  <p className="font-medium mb-1">安全提醒</p>
                  <p>您的登录信息采用端到端加密传输，我们承诺保护您的隐私安全。</p>
                </div>
              </div>
            </div>

            {/* 注册链接 */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">还没有账户？</span>
              <Link
                to="/register"
                className="ml-1 text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
              >
                立即注册
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 页脚信息 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 心理测评系统 | 专业版</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:text-gray-700">隐私政策</Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-gray-700">服务条款</Link>
          </p>
        </div>
      </div>
    </div>
  );
}