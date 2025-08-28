# Scripts Directory

這個目錄包含專案的實用腳本工具。

## 可用腳本

### `simple-png-generator.js`
**主要工具** - 高品質 PNG OG 圖片生成器

- **用途**: 批量生成所有文章的 PNG 格式 Open Graph 圖片
- **特色**: 
  - 支援中文字體顯示
  - 智慧標題分行處理
  - 使用 ImageMagick 進行 SVG 到 PNG 的高品質轉換
  - 支援 AI、Crypto、Startup 三個系列的主題配色
- **使用方法**: 
  ```bash
  node scripts/simple-png-generator.js
  ```
- **輸出位置**: `public/images/og/{series}/*.png`

### `generate-og-images.js`
**參考工具** - SVG OG 圖片生成器

- **用途**: 生成 SVG 格式的 Open Graph 圖片
- **狀態**: 保留供參考，目前專案使用 PNG 格式
- **使用方法**: 
  ```bash
  node scripts/generate-og-images.js
  ```

## 系統需求

### ImageMagick
PNG 生成器需要系統安裝 ImageMagick：

```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# 下載並安裝 ImageMagick 官方版本
```

## 主題配色

腳本支援三個系列的專屬配色：

- **AI 小百科**: 深藍背景 + 藍色主色 (#60a5fa)
- **幣圈筆記**: 深棕背景 + 金色主色 (#fbbf24)  
- **創業筆記**: 黑色背景 + 橘色主色 (#f97316)

## 檔案命名規則

生成的 PNG 檔案遵循以下命名規則：
- 一般文章: `{filename}.png`
- 完整指南類: `{category}-complete-guide.png`

例如：
- `chatgpt-complete-guide.png`
- `ethereum-complete-guide.png`
- `naval-wealth-principles.png`