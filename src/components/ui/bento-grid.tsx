/**
 * Bento Grid 布局系统
 * 提供不规则网格模块布局，支持响应式设计
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  interactive?: boolean;
}

// Bento Grid 容器
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      // 核心网格布局 - 基于 CSS Grid 的不规则拼贴网格
      "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
      "gap-3 md:gap-4", // 8-12px 间隙分隔
      "auto-rows-[minmax(120px,auto)]", // 动态行高
      className
    )}>
      {children}
    </div>
  );
}

// Bento Grid 项目/模块
export function BentoItem({
  children,
  className,
  size = 'md',
  variant = 'neutral',
  interactive = false
}: BentoItemProps) {
  // 模块大小定义 - 基于网格 span 实现不规则布局
  const sizeClasses = {
    sm: "col-span-1 row-span-1", // 最小模块
    md: "col-span-2 row-span-1", // 标准模块
    lg: "col-span-2 md:col-span-3 row-span-2", // 大模块
    xl: "col-span-2 md:col-span-4 lg:col-span-4 row-span-2" // 超大模块
  };

  // 色彩体系 - 低饱和主色调 + 同色系渐变
  const variantClasses = {
    primary: "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200/60 hover:border-slate-300/80",
    secondary: "bg-gradient-to-br from-blue-50/80 to-blue-100/60 border-blue-200/50 hover:border-blue-300/70",
    accent: "bg-gradient-to-br from-purple-50/80 to-purple-100/60 border-purple-200/50 hover:border-purple-300/70",
    neutral: "bg-gradient-to-br from-gray-50/90 to-white border-gray-200/40 hover:border-gray-300/60"
  };

  const baseClasses = cn(
    // 基础拼贴模块样式
    "relative overflow-hidden rounded-xl", // 圆角矩形
    "border border-solid", // 1-2px 浅色边框
    "backdrop-blur-sm", // 背景虚化效果
    "shadow-sm hover:shadow-md", // 轻微阴影，hover 时加深
    "transition-all duration-300 ease-out", // 平滑过渡动效

    // 响应式模块大小
    sizeClasses[size],

    // 色彩变体
    variantClasses[variant],

    // 交互效果 - 不超过 2 种基础动效
    interactive && [
      "cursor-pointer",
      "hover:scale-[1.02]", // 微小放大
      "active:scale-[0.98]" // 点击回弹
    ],

    className
  );

  const MotionDiv = interactive ? motion.div : 'div';
  const motionProps = interactive ? {
    whileHover: { y: -2 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <MotionDiv
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </MotionDiv>
  );
}

// 预设的特殊布局模块
export function BentoHero({ children, className }: BentoGridProps) {
  return (
    <BentoItem
      size="xl"
      variant="primary"
      className={cn("p-8 text-center", className)}
      interactive
    >
      {children}
    </BentoItem>
  );
}

export function BentoCard({ children, className }: BentoGridProps) {
  return (
    <BentoItem
      size="md"
      variant="neutral"
      className={cn("p-6", className)}
      interactive
    >
      {children}
    </BentoItem>
  );
}

export function BentoWidget({ children, className }: BentoGridProps) {
  return (
    <BentoItem
      size="sm"
      variant="secondary"
      className={cn("p-4 flex items-center justify-center", className)}
      interactive
    >
      {children}
    </BentoItem>
  );
}

export function BentoFeature({ children, className }: BentoGridProps) {
  return (
    <BentoItem
      size="lg"
      variant="accent"
      className={cn("p-6", className)}
      interactive
    >
      {children}
    </BentoItem>
  );
}