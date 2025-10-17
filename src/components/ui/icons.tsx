/**
 * 统一线性简约风格图标库
 * 遵循2px线条粗细，3px圆角半径，抽象几何设计
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

const defaultProps = {
  size: 20,
  className: "w-5 h-5"
};

// 导航类图标
export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M15 12L10 7L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 6L8 2L14 6V14C14 14.5 13.5 15 13 15H3C2.5 15 2 14.5 2 14V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 15V10H10V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M3 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 功能操作图标
export const CopyIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <rect x="6" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 14V4C4 3 5 2 6 2H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 7L8 10L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RefreshIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 8C2 5 4.5 2.5 8 2.5C10.5 2.5 12.5 4 13.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 8C14 11 11.5 13.5 8 13.5C5.5 13.5 3.5 12 2.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 6H13.5V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10H2.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="15" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="5" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M7.5 8.5L12.5 6.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M7.5 11.5L12.5 13.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const SkipIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 2L14 8L2 14V2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 11L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 状态指示图标
export const CheckIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 6L7 10L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AlertIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7 2L2 12H14L9 2C8.5 1 7.5 1 7 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M8 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="0.5" fill="currentColor"/>
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="4" r="0.5" fill="currentColor"/>
  </svg>
);

export const LoadingIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={`${className} animate-spin`}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="24" strokeDashoffset="6"/>
  </svg>
);

// 内容类图标
export const BrainIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3C14 3 16 4 17 6C18 5 20 5 21 7C21 8 21 9 20 10C22 11 22 14 20 15C21 16 21 17 20 18C19 20 17 20 16 19C15 20 13 21 12 21C11 21 9 20 8 19C7 20 5 20 4 18C3 17 3 16 4 15C2 14 2 11 4 10C3 9 3 8 4 7C5 5 7 5 8 6C9 4 11 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12C9 11 10 10 11 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 12C15 11 14 10 13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 3V13C2 13.5 2.5 14 3 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 3C2 2.5 2.5 2 3 2H7L8 3H13C13.5 3 14 3.5 14 4V12C14 12.5 13.5 13 13 13H3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const FileIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M9 2H4C3.5 2 3 2.5 3 3V13C3 13.5 3.5 14 4 14H12C12.5 14 13 13.5 13 13V6L9 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 2V6H13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M6 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 12V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 12V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="10" r="1" fill="currentColor"/>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 21V19C3 17 5 15 9 15C13 15 15 17 15 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21V19C21 17.5 19.5 16 17.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const HistoryIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 2C11.5 2 14 4.5 14 8C14 11.5 11.5 14 8 14C4.5 14 2 11.5 2 8C2 6 3 4 4.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 3H4.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 功能特性图标
export const HeartIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 13L2.5 7.5C1.5 6.5 1.5 4.5 2.5 3.5C3.5 2.5 5.5 2.5 6.5 3.5L8 5L9.5 3.5C10.5 2.5 12.5 2.5 13.5 3.5C14.5 4.5 14.5 6.5 13.5 7.5L8 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 2L6 7V15C6 21 10 26 16 28C22 26 26 21 26 15V7L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M11 2L5 10H9L8 18L14 10H10L11 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// 社交图标
export const GithubIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1C4 1 1 4 1 8C1 11 3 13.5 5.5 14.5C6 14.5 6 14 6 14V12.5C4 13 3.5 11.5 3.5 11.5C3 10.5 2.5 10 2.5 10C1.5 9.5 2.5 9.5 2.5 9.5C3.5 9.5 4 10.5 4 10.5C5 12 6.5 11.5 6.5 11C6.5 10.5 7 10 7.5 9.5C5.5 9.5 3.5 8.5 3.5 6.5C3.5 5.5 4 4.5 4.5 4C4.5 3.5 4 2.5 5 2.5C5 2.5 6 2.5 7 3.5C7.5 3.5 8 3.5 8.5 3.5C9 3.5 9.5 3.5 10 3.5C11 2.5 12 2.5 12 2.5C13 2.5 12.5 3.5 12.5 4C13 4.5 13.5 5.5 13.5 6.5C13.5 8.5 11.5 9.5 9.5 9.5C10 10 10.5 10.5 10.5 11V14C10.5 14 10.5 14.5 11 14.5C13.5 13.5 15 11 15 8C15 4 12 1 8 1Z" fill="currentColor"/>
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M28 16C28 22 22 27 16 27C14 27 12 26.5 10 25.5L4 28L6.5 22C5.5 20 5 18 5 16C5 10 11 5 16 5C22 5 28 10 28 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <circle cx="20" cy="16" r="1" fill="currentColor"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 6H18" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 18H18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const TrendingIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 11L6 7L9 10L14 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 5H14V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1L10 6H15L11 9L13 14L8 11L3 14L5 9L1 6H6L8 1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = "w-3 h-3", size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className={className}>
    <path d="M6 1L7 4L10 5L7 6L6 9L5 6L2 5L5 4L6 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 2L10 3L11 2L10 1L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 8L4 9L5 8L4 7L3 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M12 10L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MoreHorizontalIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="3" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="13" cy="8" r="1" fill="currentColor"/>
  </svg>
);

export const DotIcon: React.FC<IconProps> = ({ className = "w-2 h-2", size = 8 }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className={className}>
    <circle cx="4" cy="4" r="2" fill="currentColor"/>
  </svg>
);

export const GripVerticalIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="5" cy="4" r="1" fill="currentColor"/>
    <circle cx="5" cy="8" r="1" fill="currentColor"/>
    <circle cx="5" cy="12" r="1" fill="currentColor"/>
    <circle cx="11" cy="4" r="1" fill="currentColor"/>
    <circle cx="11" cy="8" r="1" fill="currentColor"/>
    <circle cx="11" cy="12" r="1" fill="currentColor"/>
  </svg>
);

export const PanelLeftIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 3V13" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const CircleIcon: React.FC<IconProps> = ({ className = "w-2 h-2", size = 8 }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className={className}>
    <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1"/>
  </svg>
);