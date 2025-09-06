# OG 圖片自動化系統使用指南

> **完整自動化的 Open Graph 圖片管理系統**  
> **版本**: 1.0.0 | **建立日期**: 2025-09-01 | **狀態**: 已完成

---

## 🎯 系統概述

OG 圖片自動化系統提供了完整的 Open Graph 圖片管理解決方案，從路徑同步到圖片生成，再到清理維護，實現了全流程自動化管理。

### ✨ 核心特色

1. **🔄 智慧同步**：自動檢查 MDX 內容與 OG 圖片的路徑對應關係
2. **📁 目錄管理**：自動建立缺失的目錄結構
3. **⏱️ 增量更新**：根據檔案修改時間進行智慧更新
4. **🎨 品牌一致**：三大主題系列的視覺品牌統一
5. **🧹 自動清理**：清理多餘檔案並提供安全備份

---

## 🛠️ 系統架構

### 技術架構說明

#### 1. 靜態生成 (scripts/simple-png-generator.js)
- **優點**: 高品質、完全可控、支援複雜設計
- **用途**: 正式發布前的批量生成
- **特色**: 
  - 智慧增量更新
  - 中文字體支援
  - ImageMagick 高品質轉換
  - 主題化設計

#### 2. 動態生成 (src/pages/api/og/[...slug].ts)
- **優點**: 開發體驗佳、即時生成、無需預存
- **用途**: 開發階段和動態內容
- **特色**:
  - 基於 @vercel/og 的 Edge Runtime
  - 支援 URL 參數動態生成
  - 自動快取優化

### 檔案結構
```
scripts/
├── sync-og-paths.js           # 路徑同步腳本（新）
├── simple-png-generator.js    # 圖片生成腳本（已有）
└── cleanup-og-images.js       # 清理腳本（已有）

public/images/og/              # OG 圖片輸出目錄
├── ai/                       # AI 小百科圖片
├── crypto/                   # 幣圈筆記圖片
└── startup/                  # 創業筆記圖片

src/content/                  # MDX 內容目錄
├── ai/                      # 對應 public/images/og/ai/
├── crypto/                  # 對應 public/images/og/crypto/  
└── startup/                 # 對應 public/images/og/startup/
```

### 路徑映射規則
- **MDX 檔案**: `src/content/{series}/{category}/article.mdx`
- **OG 圖片**: `public/images/og/{series}/{category}/article.png`
- **特殊處理**: `complete-guide.mdx` → `complete-guide.png`

---

## 📋 使用指南

### 1. 路徑結構同步

#### 基本同步
```bash
# 增量同步檢查（推薦日常使用）
npm run og:sync

# 預覽模式 - 查看將要進行的變更
npm run og:sync-preview

# 完整重建同步 - 強制檢查所有檔案
npm run og:sync-full
```

#### 同步功能說明
- **掃描內容**：自動掃描所有 MDX 檔案
- **路徑對應**：檢查每個 MDX 檔案對應的 OG 圖片路徑
- **目錄建立**：自動建立缺失的目錄結構
- **狀態報告**：提供詳細的同步狀態和統計資訊

### 2. OG 圖片生成

#### 智慧生成
```bash
# 增量生成 - 只生成新的或修改過的檔案（推薦）
npm run og:generate

# 強制重新生成所有圖片
npm run og:generate-all
```

#### 生成特色
- **中文字體支援**：完美支援繁體中文顯示
- **品牌主題**：AI 藍色 / 創業綠色 / Crypto 橘色
- **智慧分行**：自動處理長標題的分行顯示
- **高品質輸出**：1200x630 標準 OG 尺寸，PNG 格式

### 3. 清理與維護

#### 檔案清理
```bash
# 清理多餘的 OG 圖片檔案
npm run og:clean
```

#### 清理功能
- **安全備份**：多餘檔案會備份到帶時間戳的目錄
- **缺失提醒**：顯示需要重新生成的檔案清單
- **統計報告**：詳細的清理統計和建議操作

---

## 🔧 進階配置

### 腳本參數

#### sync-og-paths.js 參數
```bash
node scripts/sync-og-paths.js [選項]

選項：
  --full      完整同步模式，檢查所有檔案
  --dry-run   預覽模式，不執行實際變更
  --verbose   詳細輸出模式
  -v          詳細輸出模式（簡寫）
```

#### simple-png-generator.js 參數
```bash
node scripts/simple-png-generator.js [選項]

選項：
  --all       強制重新生成所有圖片
  -f          強制重新生成所有圖片（簡寫）
```

### 自訂配置

系統配置位於 `scripts/sync-og-paths.js` 中的 CONFIG 對象：

```javascript
const CONFIG = {
  contentDir: join(rootDir, 'src/content'),      // MDX 內容目錄
  ogDir: join(rootDir, 'public/images/og'),      // OG 圖片目錄
  series: ['ai', 'crypto', 'startup'],           // 支援的系列
  supportedExtensions: ['.mdx'],                 // 支援的檔案類型
  ogExtension: '.png'                            // OG 圖片格式
};
```

---

## 📊 工作流程範例

### 日常內容管理流程
```bash
# 1. 新增或修改 MDX 內容後，檢查同步狀態
npm run og:sync-preview

# 2. 執行同步以建立目錄結構
npm run og:sync

# 3. 生成對應的 OG 圖片
npm run og:generate

# 4. 清理不需要的檔案（可選）
npm run og:clean
```

### 完整重建流程
```bash
# 1. 完整同步檢查
npm run og:sync-full

# 2. 重新生成所有圖片
npm run og:generate-all

# 3. 清理多餘檔案
npm run og:clean
```

---

## 🎨 視覺品牌系統

### 主題配色
- **🤖 AI 小百科**：`#60a5fa` (藍色)
- **🚀 創業筆記**：`#10b981` (綠色)  
- **💎 幣圈筆記**：`#fbbf24` (橘色)

### 圖片規格
- **尺寸**：1200 × 630 像素（標準 OG 規格）
- **格式**：PNG（高品質，支援透明）
- **字體**：支援中文字體（Arial, PingFang TC, Microsoft YaHei）
- **佈局**：主標題 + 系列副標題 + 品牌色彩裝飾

---

## 🔍 故障排除

### 常見問題

#### 1. 圖片生成失敗
**問題**：ImageMagick 轉換失敗
**解決方案**：
```bash
# 檢查 ImageMagick 安裝
which magick

# macOS 安裝
brew install imagemagick

# Ubuntu/Debian 安裝  
apt-get install imagemagick
```

#### 2. 路徑不同步
**問題**：MDX 檔案與 OG 圖片路徑不對應
**解決方案**：
```bash
# 使用預覽模式檢查問題
npm run og:sync-preview --verbose

# 執行完整同步重建
npm run og:sync-full
```

#### 3. 中文字體顯示問題
**問題**：生成的圖片中文字無法正常顯示
**解決方案**：
- 確保系統已安裝中文字體
- 檢查 SVG 中的字體配置

### 除錯模式

開啟詳細輸出模式進行除錯：
```bash
# 同步腳本詳細輸出
npm run og:sync -- --verbose

# 或直接執行
node scripts/sync-og-paths.js --dry-run --verbose
```

---

## 📈 統計與監控

### 系統統計資訊
同步腳本會提供以下統計：
- 📄 掃描檔案數量
- 🔄 需要同步的項目
- 📁 建立的目錄數量
- ⏭️ 跳過的檔案數量  
- ❌ 錯誤數量

### 建議操作
系統會根據檢查結果提供建議：
- 需要生成 OG 圖片時：`npm run og:generate`
- 需要清理檔案時：`npm run og:clean`
- 發現錯誤時：檢查檔案格式和路徑

---

## 🚀 未來規劃

### 可能的增強功能
1. **批次處理**：支援更大量的內容檔案處理
2. **自訂模板**：支援不同類型內容的 OG 圖片模板
3. **雲端整合**：與 CDN 或雲端儲存整合
4. **效能優化**：多執行緒並行處理大量檔案
5. **監控整合**：與 CI/CD 流程整合自動監控

---

## 📞 技術支援

如遇到問題或需要協助：
1. 檢查本文件的故障排除章節
2. 使用 `--verbose` 模式獲取詳細除錯資訊
3. 查看系統日誌和錯誤訊息
4. 參考 `docs/work-logs/` 中的相關記錄

---

**✨ 由 Claude Code AI 開發 | 2025-09-01**