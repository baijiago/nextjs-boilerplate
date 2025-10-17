import tailwindAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";
const config: Config = {
darkMode: ["class"],
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
container: {
center: true,
padding: "2rem",
screens: {
"2xl": "1400px",
},
},
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
DEFAULT: "hsl(var(--primary))",
foreground: "hsl(var(--primary-foreground))",
},
secondary: {
DEFAULT: "hsl(var(--secondary))",
foreground: "hsl(var(--secondary-foreground))",
},
destructive: {
DEFAULT: "hsl(var(--destructive))",
foreground: "hsl(var(--destructive-foreground))",
},
muted: {
DEFAULT: "hsl(var(--muted))",
foreground: "hsl(var(--muted-foreground))",
},
accent: {
DEFAULT: "hsl(var(--accent))",
foreground: "hsl(var(--accent-foreground))",
},
popover: {
DEFAULT: "hsl(var(--popover))",
foreground: "hsl(var(--popover-foreground))",
},
card: {
DEFAULT: "hsl(var(--card))",
foreground: "hsl(var(--card-foreground))",
},
chart: {
"1": "hsl(var(--chart-1))",
"2": "hsl(var(--chart-2))",
"3": "hsl(var(--chart-3))",
"4": "hsl(var(--chart-4))",
"5": "hsl(var(--chart-5))",
},
sidebar: {
DEFAULT: "hsl(var(--sidebar-background))",
foreground: "hsl(var(--sidebar-foreground))",
primary: "hsl(var(--sidebar-primary))",
"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
accent: "hsl(var(--sidebar-accent))",
"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
border: "hsl(var(--sidebar-border))",
ring: "hsl(var(--sidebar-ring))",
},
// Bento Grid 色彩体系 - 低饱和度主色调 + 同色系渐变
bento: {
  // 主色调：豆沙绿 - 温和且有生命力
  primary: "hsl(145, 25%, 55%)", // 主色
  "primary-light": "hsl(145, 25%, 75%)", // 主色浅色
  "primary-dark": "hsl(145, 25%, 35%)", // 主色深色

  // 辅助色：雾蓝 - 平静专业
  secondary: "hsl(210, 22%, 65%)", // 辅助色
  "secondary-light": "hsl(210, 22%, 85%)", // 辅助色浅色
  "secondary-dark": "hsl(210, 22%, 45%)", // 辅助色深色

  // 强调色：浅紫 - 温暖亲和
  accent: "hsl(270, 20%, 70%)", // 强调色
  "accent-light": "hsl(270, 20%, 90%)", // 强调色浅色
  "accent-dark": "hsl(270, 20%, 50%)", // 强调色深色

  // 中性色系 - 层次分明的灰度
  neutral: {
    50: "hsl(210, 15%, 98%)", // 最浅背景
    100: "hsl(210, 12%, 95%)", // 浅背景
    200: "hsl(210, 10%, 88%)", // 边框/分割线
    300: "hsl(210, 8%, 75%)", // 禁用状态
    400: "hsl(210, 6%, 60%)", // 次要文字
    500: "hsl(210, 5%, 45%)", // 正文文字
    600: "hsl(210, 4%, 35%)", // 重要文字
    700: "hsl(210, 4%, 25%)", // 标题文字
    800: "hsl(210, 3%, 15%)", // 主标题
    900: "hsl(210, 3%, 8%)",  // 最深色
  },

  // 功能色 - 保持低饱和度
  success: "hsl(142, 35%, 60%)", // 成功状态
  warning: "hsl(38, 45%, 65%)", // 警告状态
  error: "hsl(0, 40%, 65%)", // 错误状态
  info: "hsl(210, 35%, 65%)", // 信息状态
},

// 保留原有心理测评配色（兼容性）
psychology: {
primary: "hsl(145, 25%, 55%)", // 对应 bento.primary
secondary: "hsl(210, 22%, 65%)", // 对应 bento.secondary
accent: "hsl(270, 20%, 70%)", // 对应 bento.accent
calm: "hsl(210, 15%, 98%)", // 浅色背景
warm: "hsl(145, 25%, 75%)", // 温暖背景
success: "hsl(142, 35%, 60%)",
warning: "hsl(38, 45%, 65%)",
danger: "hsl(0, 40%, 65%)",
// 模块功能区分色
identify: "hsl(142, 35%, 60%)", // 识别/分类
info: "hsl(210, 35%, 65%)", // 信息/提示
emotion: "hsl(320, 30%, 65%)", // 情感/交互
},
},
borderRadius: {
lg: "var(--radius)",
md: "calc(var(--radius) - 2px)",
sm: "calc(var(--radius) - 4px)",
},
keyframes: {
"accordion-down": {
from: {
height: "0",
},
to: {
height: "var(--radix-accordion-content-height)",
},
},
"accordion-up": {
from: {
height: "var(--radix-accordion-content-height)",
},
to: {
height: "0",
},
},
"fade-in": {
"0%": { opacity: "0", transform: "translateY(10px)" },
"100%": { opacity: "1", transform: "translateY(0)" },
},
"pulse-scale": {
"0%, 100%": { transform: "scale(1)" },
"50%": { transform: "scale(1.05)" },
},
},
animation: {
"accordion-down": "accordion-down 0.2s ease-out",
"accordion-up": "accordion-up 0.2s ease-out",
"fade-in": "fade-in 0.5s ease-out",
"pulse-scale": "pulse-scale 2s ease-in-out infinite",
},
fontFamily: {
// Bento Grid 字体体系 - 清晰且有节奏感
sans: [
  "Inter", // 主字体 - 现代简洁
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "sans-serif"
],
// 中文支持
"sans-cn": [
  "Inter",
  "PingFang SC", // 苹果系统中文
  "Source Han Sans CN", // 思源黑体
  "Noto Sans CJK SC", // Google Noto
  "Microsoft YaHei", // 微软雅黑
  "sans-serif"
],
mono: ["Fira Code", "JetBrains Mono", "monospace"],
},

// 字体大小层级 - 清晰的文字层级
fontSize: {
// 模块标题（字重 600-700，字号 18-22px）
"module-title": ["1.375rem", { lineHeight: "1.4", fontWeight: "600" }], // 22px
"module-title-sm": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px

// 功能文字（字重 500，字号 14-16px）
"module-content": ["1rem", { lineHeight: "1.5", fontWeight: "500" }], // 16px
"module-content-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "500" }], // 14px

// 辅助说明（字重 400，字号 12-13px）
"module-caption": ["0.8125rem", { lineHeight: "1.4", fontWeight: "400" }], // 13px
"module-caption-sm": ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }], // 12px

// 保持原有尺寸
xs: "0.75rem",
sm: "0.875rem",
base: "1rem",
lg: "1.125rem",
xl: "1.25rem",
"2xl": "1.5rem",
"3xl": "1.875rem",
"4xl": "2.25rem",
"5xl": "3rem",
"6xl": "3.75rem",
},
},
},
plugins: [tailwindAnimate],
};
export default config;