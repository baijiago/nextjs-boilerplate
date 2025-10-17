/**
 * 主页组件 - 性压抑指数计算器的首页
 * 重构为 Bento Grid 布局体系
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BrainIcon,
  ClockIcon,
  ShieldIcon,
  UsersIcon,
  ChartIcon,
  FileIcon,
  HeartIcon,
  ZapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BookIcon,
  TargetIcon,
  HistoryIcon,
  MenuIcon,
  GithubIcon
} from '@/components/ui/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  BentoGrid,
  BentoItem,
  BentoHero,
  BentoCard,
  BentoWidget,
  BentoFeature
} from '@/components/ui/bento-grid';

export default function Home() {
  return (
    <div className="bento-container">
      {/* 导航栏 - 固定在顶部 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-bento-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo 区域 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bento-primary rounded-lg flex items-center justify-center">
                <BrainIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="bento-title-sm text-bento-primary">SRI Calculator</h1>
                <p className="bento-caption text-bento-neutral-500">性压抑指数计算器</p>
              </div>
            </div>

            {/* 移动端菜单 */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MenuIcon className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 mt-4">
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/guide" className="flex items-center gap-2">
                        <BookIcon className="w-4 h-4" />
                        使用指南
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/science" className="flex items-center gap-2">
                        <FileIcon className="w-4 h-4" />
                        科学依据
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/history" className="flex items-center gap-2">
                        <HistoryIcon className="w-4 h-4" />
                        历史记录
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <a
                        href="https://github.com/lamos22/Sexual-Repression-Calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/guide" className="flex items-center gap-2">
                  <BookIcon className="w-4 h-4" />
                  <span className="bento-content-sm">使用指南</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/science" className="flex items-center gap-2">
                  <FileIcon className="w-4 h-4" />
                  <span className="bento-content-sm">科学依据</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/history" className="flex items-center gap-2">
                  <HistoryIcon className="w-4 h-4" />
                  <span className="bento-content-sm">历史记录</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/banlanzs/Sexual-Repression-Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 - Bento Grid 布局 */}
      <main className="container mx-auto px-4 py-8">
        <BentoGrid>
          {/* 英雄模块 - 超大模块 */}
          <BentoHero className="col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-8 row-span-3">
            <div className="space-y-6">
              <Badge className="bg-bento-primary/10 text-bento-primary border-bento-primary/20">
                <HeartIcon className="w-4 h-4 mr-2" />
                基于科学研究的心理测评工具
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-bento-primary via-bento-secondary to-bento-accent bg-clip-text text-transparent">
                性压抑指数计算器
              </h1>

              <p className="bento-content max-w-3xl mx-auto text-center">
                专业的性心理健康自我评估工具，基于多个经过验证的心理测量量表，
                帮助您科学地了解自己的性心理特征，促进性健康和亲密关系的发展。
              </p>

              {/* CTA 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/assessment?type=quick">
                  <Button
                    size="lg"
                    className="bg-bento-primary hover:bg-bento-primary-dark text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <ZapIcon className="w-5 h-5 mr-2" />
                    开始快速测评
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/assessment?type=full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-bento-primary text-bento-primary hover:bg-bento-primary hover:text-white transition-colors px-8 py-4 text-lg font-medium"
                  >
                    <TargetIcon className="w-5 h-5 mr-2" />
                    完整版测评
                  </Button>
                </Link>
              </div>
            </div>
          </BentoHero>

          {/* 核心指标模块 - 4个小模块 */}
          <BentoWidget className="col-span-1 row-span-1">
            <div className="text-center">
              <ClockIcon className="w-8 h-8 text-bento-info mx-auto mb-2" />
              <div className="bento-title text-bento-primary">8-15</div>
              <div className="bento-caption">分钟快测</div>
            </div>
          </BentoWidget>

          <BentoWidget className="col-span-1 row-span-1">
            <div className="text-center">
              <ChartIcon className="w-8 h-8 text-bento-primary mx-auto mb-2" />
              <div className="bento-title text-bento-primary">4</div>
              <div className="bento-caption">核心维度</div>
            </div>
          </BentoWidget>

          <BentoWidget className="col-span-1 row-span-1">
            <div className="text-center">
              <ShieldIcon className="w-8 h-8 text-bento-success mx-auto mb-2" />
              <div className="bento-title text-bento-primary">100%</div>
              <div className="bento-caption">隐私保护</div>
            </div>
          </BentoWidget>

          <BentoWidget className="col-span-1 row-span-1">
            <div className="text-center">
              <UsersIcon className="w-8 h-8 text-bento-accent mx-auto mb-2" />
              <div className="bento-title text-bento-primary">科学</div>
              <div className="bento-caption">研究验证</div>
            </div>
          </BentoWidget>

          {/* 智能适应性评估亮点 */}
          <BentoFeature className="col-span-2 md:col-span-4 lg:col-span-6 row-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bento-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UsersIcon className="w-6 h-6 text-bento-primary" />
              </div>
              <div className="text-left space-y-3">
                <h3 className="bento-title text-bento-primary">智能适应性评估</h3>
                <p className="bento-content">
                  系统会根据您的年龄段和个人背景自动选择最适合的量表组合，为14-17岁青少年提供专门的保护机制，
                  为无性经验用户提供文化敏感的评估内容，确保每个人都能获得准确和适宜的评估体验。
                </p>
              </div>
            </div>
          </BentoFeature>

          {/* 快速测评卡片 */}
          <BentoCard className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bento-primary/10 rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-5 h-5 text-bento-primary" />
                  </div>
                  <div>
                    <h3 className="bento-title-sm text-bento-primary">快速测评版</h3>
                    <p className="bento-caption">适合初次使用和快速了解</p>
                  </div>
                </div>
                <Badge className="bg-bento-primary/10 text-bento-primary">推荐</Badge>
              </div>

              <div className="space-y-3">
                {[
                  'SIS/SES-SF 14项量表',
                  'Mosher性内疚10项简版',
                  'KISS-9性羞耻量表',
                  'SOS性观感筛查版'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-bento-success" />
                    <span className="bento-content-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-bento-neutral-100 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="bento-content-sm">预计用时</span>
                  <span className="bento-content-sm font-semibold text-bento-primary">8-15 分钟</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bento-content-sm">题目数量</span>
                  <span className="bento-content-sm font-semibold text-bento-primary">33-42 题</span>
                </div>
              </div>

              <Link to="/assessment?type=quick" className="block">
                <Button className="w-full bg-bento-primary hover:bg-bento-primary-dark text-white">
                  开始快速测评
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </BentoCard>

          {/* 完整测评卡片 */}
          <BentoCard className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bento-secondary/10 rounded-lg flex items-center justify-center">
                  <TargetIcon className="w-5 h-5 text-bento-secondary" />
                </div>
                <div>
                  <h3 className="bento-title-sm text-bento-secondary">完整测评版</h3>
                  <p className="bento-caption">更全面深入的专业分析</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  '完整版SIS/SES量表',
                  '完整Mosher性内疚量表',
                  'KISS-9 + 额外维度分析',
                  'BSAS性态度量表校标'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-bento-success" />
                    <span className="bento-content-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-bento-secondary/5 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="bento-content-sm">预计用时</span>
                  <span className="bento-content-sm font-semibold text-bento-secondary">25-40 分钟</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bento-content-sm">题目数量</span>
                  <span className="bento-content-sm font-semibold text-bento-secondary">58-126 题</span>
                </div>
              </div>

              <Link to="/assessment?type=full" className="block">
                <Button
                  variant="outline"
                  className="w-full border-bento-secondary text-bento-secondary hover:bg-bento-secondary hover:text-white transition-colors"
                >
                  开始完整测评
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </BentoCard>

          {/* 科学基础模块 - 4个中等模块 */}
          <BentoCard className="col-span-1 md:col-span-2 row-span-2">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                <ChartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="bento-title-sm">双控制模型</h3>
              <p className="bento-content-sm text-bento-neutral-600">
                基于Janssen等人的SIS/SES双控制模型，测量性抑制和性兴奋系统
              </p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 md:col-span-2 row-span-2">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto">
                <HeartIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="bento-title-sm">性内疚测量</h3>
              <p className="bento-content-sm text-bento-neutral-600">
                采用Mosher性内疚量表，评估性相关的内疚感和道德负担
              </p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 md:col-span-2 row-span-2">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto">
                <ShieldIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="bento-title-sm">性羞耻评估</h3>
              <p className="bento-content-sm text-bento-neutral-600">
                使用KISS-9量表测量性相关的羞耻体验和自我接纳
              </p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 md:col-span-2 row-span-2">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <BrainIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="bento-title-sm">性观感调查</h3>
              <p className="bento-content-sm text-bento-neutral-600">
                SOS量表评估对性刺激的情绪取向和接近回避倾向
              </p>
            </div>
          </BentoCard>

          {/* 隐私保护承诺 */}
          <BentoFeature className="col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-8 row-span-2">
            <div className="text-center space-y-4">
              <ShieldIcon className="w-16 h-16 text-bento-primary mx-auto" />
              <h2 className="bento-title text-bento-primary">您的隐私是我们的首要关注</h2>
              <p className="bento-content max-w-3xl mx-auto">
                所有评估数据仅在您的设备本地处理和存储，不会上传到任何服务器。
                您拥有完全的数据控制权，可以随时删除或导出您的评估历史。
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  '本地数据存储',
                  '完全匿名化',
                  '可随时删除'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-bento-success" />
                    <span className="bento-content-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoFeature>
        </BentoGrid>

        {/* 最终 CTA */}
        <section className="text-center mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-bento-neutral-800">准备好开始您的性心理健康之旅了吗？</h2>
          <p className="bento-content max-w-2xl mx-auto">
            通过科学的自我评估，更好地了解自己，促进健康的性心理发展和亲密关系。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment?type=quick">
              <Button size="lg" className="bg-bento-primary hover:bg-bento-primary-dark text-white px-8 py-4">
                <ZapIcon className="w-5 h-5 mr-2" />
                立即开始测评
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild className="border-bento-primary text-bento-primary hover:bg-bento-primary hover:text-white transition-colors px-8 py-4">
              <Link to="/guide">
                <BookIcon className="w-5 h-5 mr-2" />
                了解更多信息
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-bento-neutral-200 bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BrainIcon className="w-6 h-6 text-bento-primary" />
                <span className="bento-title-sm text-bento-primary">SRI Calculator</span>
              </div>
              <p className="bento-content-sm text-bento-neutral-600">
                基于科学研究的性压抑指数计算器，帮助您更好地了解自己的性心理健康。
              </p>
            </div>

            <div>
              <h4 className="bento-title-sm mb-3">评估工具</h4>
              <ul className="space-y-2">
                <li><Link to="/assessment?type=quick" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">快速测评</Link></li>
                <li><Link to="/assessment?type=full" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">完整测评</Link></li>
                <li><Link to="/history" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">历史记录</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="bento-title-sm mb-3">资源</h4>
              <ul className="space-y-2">
                <li><Link to="/guide" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">使用指南</Link></li>
                <li><Link to="/science" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">科学依据</Link></li>
                <li><a href="#" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">隐私政策</a></li>
              </ul>
            </div>

            <div>
              <h4 className="bento-title-sm mb-3">支持</h4>
              <ul className="space-y-2">
                <li><a href="#" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">常见问题</a></li>
                <li><a href="#" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">专业咨询</a></li>
                <li><a href="#" className="bento-content-sm text-bento-neutral-600 hover:text-bento-primary">危机资源</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-bento-neutral-200 mt-8 pt-8 text-center">
            <p className="bento-content-sm text-bento-neutral-500">
              © 2025 性压抑指数计算器. 仅供教育和自我了解使用，不能替代专业心理健康服务。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}