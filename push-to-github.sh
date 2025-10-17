#!/bin/bash

# 推送到GitHub的脚本
# 使用方法: 将下面的 YOUR_REPO_URL 替换为你的实际仓库地址

REPO_URL="https://github.com/username/repo-name.git"  # 替换为你的仓库地址

echo "🚀 开始推送代码到远程仓库..."

# 添加远程仓库
echo "📡 添加远程仓库..."
git remote add origin $REPO_URL

# 设置默认分支为main
echo "🌿 设置默认分支为main..."
git branch -M main

# 推送到远程仓库
echo "⬆️ 推送代码到远程仓库..."
git push -u origin main

echo "✅ 推送完成！"
echo "🔗 访问你的仓库: $REPO_URL"

# 显示当前状态
echo "📊 当前状态:"
git status
git log --oneline -3