#!/bin/bash

# 批量替换脚本 - 将所有 lucide-react 图标替换为自定义图标

# 定义图标映射关系
declare -A icon_map=(
    ["ArrowLeft"]="ArrowLeftIcon"
    ["ArrowRight"]="ArrowRightIcon"
    ["ArrowUp"]="ArrowUpIcon"
    ["Home"]="HomeIcon"
    ["Menu"]="MenuIcon"
    ["Copy"]="CopyIcon"
    ["Download"]="DownloadIcon"
    ["RefreshCw"]="RefreshIcon"
    ["Share2"]="ShareIcon"
    ["SkipForward"]="SkipIcon"
    ["Search"]="SearchIcon"
    ["X"]="CloseIcon"
    ["Check"]="CheckIcon"
    ["CheckCircle"]="CheckCircleIcon"
    ["CheckCircle2"]="CheckCircleIcon"
    ["AlertTriangle"]="AlertIcon"
    ["AlertCircle"]="InfoIcon"
    ["Loader2"]="LoadingIcon"
    ["Brain"]="BrainIcon"
    ["FileText"]="FileIcon"
    ["BookOpen"]="BookIcon"
    ["BarChart3"]="ChartIcon"
    ["Target"]="TargetIcon"
    ["Clock"]="ClockIcon"
    ["Users"]="UsersIcon"
    ["History"]="HistoryIcon"
    ["Heart"]="HeartIcon"
    ["Shield"]="ShieldIcon"
    ["Zap"]="ZapIcon"
    ["Eye"]="EyeIcon"
    ["Github"]="GithubIcon"
    ["MessageCircle"]="MessageIcon"
    ["Smartphone"]="PhoneIcon"
    ["TrendingUp"]="ChartIcon"
    ["Star"]="CheckCircleIcon"
    ["Info"]="InfoIcon"
    ["Sparkles"]="CheckCircleIcon"
)

# 要处理的文件列表（重要的页面和组件）
files=(
    "src/pages/results.tsx"
    "src/pages/guide.tsx"
    "src/pages/history.tsx"
    "src/pages/science.tsx"
    "src/pages/404.tsx"
    "src/components/assessment/consent-form.tsx"
    "src/components/assessment/demographics-form.tsx"
    "src/components/assessment/progress-indicator.tsx"
    "src/components/assessment/question-card.tsx"
    "src/components/common/loading-screen.tsx"
    "src/components/common/share-card.tsx"
    "src/components/common/share-result.tsx"
    "src/components/common/social-share-floating.tsx"
)

echo "开始批量替换图标..."

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "处理文件: $file"

        # 首先替换导入语句
        for old_icon in "${!icon_map[@]}"; do
            new_icon="${icon_map[$old_icon]}"

            # 替换组件使用
            sed -i "s/<${old_icon} /<${new_icon} /g" "$file"
            sed -i "s/<${old_icon}>/<${new_icon}>/g" "$file"
        done

        # 替换导入语句为自定义图标
        if grep -q "from.*lucide-react" "$file"; then
            # 提取所有使用的图标名称
            icons_used=$(grep -o '[A-Z][a-zA-Z]*Icon' "$file" | sort -u | tr '\n' ',' | sed 's/,$//')

            # 替换导入语句
            sed -i "/from.*lucide-react/d" "$file"

            # 在文件开头添加新的导入
            if [ ! -z "$icons_used" ]; then
                import_line="import { $icons_used } from '@/components/ui/icons';"
                sed -i "1i $import_line" "$file"
            fi
        fi

        echo "✓ 完成: $file"
    else
        echo "⚠ 文件不存在: $file"
    fi
done

echo "批量替换完成！"