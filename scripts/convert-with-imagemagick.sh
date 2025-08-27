#!/bin/bash

# SVG to PNG 批量轉換腳本 (使用 ImageMagick)
# 使用方法: bash scripts/convert-with-imagemagick.sh

# 檢查 ImageMagick 是否安裝
if ! command -v convert &> /dev/null; then
    echo "ImageMagick 未安裝，正在安裝..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "請先安裝 Homebrew 或手動安裝 ImageMagick"
        exit 1
    fi
fi

# 設定基礎路徑
BASE_PATH="public/images/og"

# 轉換函數
convert_svg_to_png() {
    local series=$1
    local svg_file=$2
    local png_file=$3
    
    local svg_path="${BASE_PATH}/${series}/${svg_file}"
    local png_path="${BASE_PATH}/${series}/${png_file}"
    
    if [ -f "$svg_path" ]; then
        echo "轉換: $svg_file -> $png_file"
        convert "$svg_path" -resize 1200x630 -background white -alpha remove "$png_path"
        echo "✓ 完成: $png_path"
    else
        echo "⚠️  檔案不存在: $svg_path"
    fi
}

echo "🚀 開始批量轉換 SVG 到 PNG..."

# Crypto 系列
echo "📈 處理 Crypto 系列..."
convert_svg_to_png "crypto" "ethereum-complete-guide.svg" "ethereum-complete-guide.png"
convert_svg_to_png "crypto" "bnb-complete-guide.svg" "bnb-complete-guide.png"
convert_svg_to_png "crypto" "solana-complete-guide.svg" "solana-complete-guide.png"
convert_svg_to_png "crypto" "cardano-complete-guide.svg" "cardano-complete-guide.png"
convert_svg_to_png "crypto" "doge-complete-guide.svg" "doge-complete-guide.png"
convert_svg_to_png "crypto" "xrp-complete-guide.svg" "xrp-complete-guide.png"
convert_svg_to_png "crypto" "usdc-complete-guide.svg" "usdc-complete-guide.png"
convert_svg_to_png "crypto" "usdt-complete-guide.svg" "usdt-complete-guide.png"

# AI 系列
echo "🤖 處理 AI 系列..."
convert_svg_to_png "ai" "claude-complete-guide.svg" "claude-complete-guide.png"
convert_svg_to_png "ai" "chatgpt-complete-guide.svg" "chatgpt-complete-guide.png"
convert_svg_to_png "ai" "prompt-engineering-complete-guide.svg" "prompt-engineering-complete-guide.png"
convert_svg_to_png "ai" "claude-4-sonnet-complete-guide.svg" "claude-4-sonnet-complete-guide.png"
convert_svg_to_png "ai" "fine-tuning-complete-guide.svg" "fine-tuning-complete-guide.png"
convert_svg_to_png "ai" "notebooklm-ultimate-guide.svg" "notebooklm-ultimate-guide.png"
convert_svg_to_png "ai" "transformer-architecture.svg" "transformer-architecture.png"
convert_svg_to_png "ai" "ai-agent-technology.svg" "ai-agent-technology.png"
convert_svg_to_png "ai" "o1-reasoning-revolution.svg" "o1-reasoning-revolution.png"

# Startup 系列
echo "🚀 處理 Startup 系列..."
convert_svg_to_png "startup" "ai-native-lean-startup-pgv.svg" "ai-native-lean-startup-pgv.png"
convert_svg_to_png "startup" "naval-compound-interest-mindset.svg" "naval-compound-interest-mindset.png"
convert_svg_to_png "startup" "naval-long-term-games.svg" "naval-long-term-games.png"
convert_svg_to_png "startup" "naval-specific-knowledge-moat.svg" "naval-specific-knowledge-moat.png"
convert_svg_to_png "startup" "naval-perpetual-learner.svg" "naval-perpetual-learner.png"
convert_svg_to_png "startup" "naval-wealth-principles.svg" "naval-wealth-principles.png"
convert_svg_to_png "startup" "naval-sales-build.svg" "naval-sales-build.png"
convert_svg_to_png "startup" "zero-to-one-competition-myth.svg" "zero-to-one-competition-myth.png"
convert_svg_to_png "startup" "contrarian-thinking-ultimate-guide.svg" "contrarian-thinking-ultimate-guide.png"

echo ""
echo "🎉 批量轉換完成！"
echo "📊 共轉換 26 個檔案"
echo "📁 檔案位置: public/images/og/{series}/*.png"