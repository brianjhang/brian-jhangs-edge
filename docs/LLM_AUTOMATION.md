# 內容生成系統說明

## 概述

Brian Jhang's Edge 採用人工輔助方式生成高質量的三主題文章（AI 小百科、幣圈筆記、創業筆記），使用 Claude Code 進行內容創作與管理。

> **📝 現況**：目前使用 Claude Code 人工輔助方式進行內容生成，已移除舊有的自動化腳本。

## 系統特點

### 🎯 三大內容系列
- **AI 小百科** (`/ai/`): 深入淺出的AI技術解析
- **幣圈筆記** (`/crypto/`): 客觀教育導向的加密貨幣分析  
- **創業筆記** (`/startup/`): 經典商業智慧的現代應用

### 📝 人工輔助功能
- 使用 Claude Code 進行專業內容生成
- 手動創建正確格式的 MDX 文件
- 人工生成多平台社交媒體內容
- 手動更新主題清單狀態

### 📱 多平台社交內容
生成規範詳見各主題風格指導檔案：
- **Twitter/X**: 3條推文
- **Threads**: 3條推文（單一hashtag）
- **Facebook**: 2個教育版本
- **小紅書**: 簡體中文版本
- **今日頭條**: 簡體中文正式版本

## 使用方法

### 環境設定

1. **安裝依賴**
```bash
npm install
```

2. **配置 LLM API**
```bash
# 環境變數設定
export LLM_PROVIDER=claude  # claude|openai|gemini
export LLM_API_KEY=your_api_key_here
export LLM_MODEL=claude-3-5-sonnet-20241022
```

### 工作流程

目前使用 Claude Code 人工輔助方式：
1. 查閱 `src/content/ideas/` 中的主題規劃
2. 手動創建 MDX 內容文件
3. 使用 `npm run dev` 檢查文章格式與顯示效果

### 現在的工作流程

1. **手動內容生成**：使用 Claude Code 人工輔助
2. **主題管理**：手動更新 `src/content/ideas/` 中的主題清單
3. **社交內容**：手動創建在 `docs/internal/social-content-YYYY-MM-DD.md`

## 文件結構

```
src/content/
├── ai/              # AI 小百科系列
│   ├── llm/         # LLM 和對話式 AI 相關內容
│   ├── concepts/    # AI 核心概念
│   ├── tools/       # AI 工具與應用
│   └── trends/      # AI 趨勢與前瞻
├── crypto/          # 幣圈筆記系列
│   ├── btc/         # 比特幣相關
│   ├── eth/         # 以太坊相關
│   ├── usdt/        # 穩定幣相關
│   └── defi/        # DeFi 生態系統
├── startup/         # 創業筆記系列
│   ├── book/        # 商業書籍和創業智慧
│   ├── strategy/    # 商業策略
│   └── growth/      # 成長與管理
└── ideas/           # 主題管理
    ├── ai-topics.md     # AI主題清單與狀態追蹤
    ├── crypto-topics.md # 加密貨幣主題清單
    └── startup-topics.md # 創業主題清單

docs/internal/
└── social-content-YYYY-MM-DD.md  # 社交媒體內容

# 開發工具
package.json  # 包含 npm run dev 等開發指令
```

## 主題管理

### 主題清單格式

每個系列的主題清單都使用 markdown 表格格式：

```markdown
| 序號 | 主題 | 類型 | 預計發表 | 狀態 |
|------|------|------|----------|------|
| 1 | ChatGPT 完全解析 | 知名項目 | 2025-08-20 | ✅ 已發表 |
| 2 | Claude 深度解析 | 知名項目 | 2025-08-21 | 📝 待寫 |
```

### 狀態更新

目前需要手動更新主題狀態從 `📝 待寫` 為 `✅ 已發表`。未來將實現自動更新功能。

## 內容標準

完整的寫作風格與內容標準請參考各主題規劃檔案：
- **AI 小百科**：`src/content/ideas/ai-topics.md`
- **創業筆記**：`src/content/ideas/startup-topics.md` 
- **幣圈筆記**：`src/content/ideas/crypto-topics.md`

## 社交媒體內容規範

詳細的社交媒體風格規範請參考各系列主題檔案：
- **AI 小百科**: `src/content/ideas/ai-topics.md`
- **創業筆記**: `src/content/ideas/startup-topics.md` 
- **幣圈筆記**: `src/content/ideas/crypto-topics.md`

### 通用注意事項
- 簡體中文版本：移除 markdown 格式符號，適應本地表達習慣
- 遵循各平台內容規範和社群準則

## 質量控制

### 自動檢查
- Frontmatter 格式驗證
- 文章長度檢查
- 風險聲明包含（crypto系列）
- 社交媒體格式檢查

### 人工審核
建議生成後進行以下檢查：
- 內容準確性和時效性
- 語言表達的自然度
- 社交媒體內容的平台適配性
- 法規合規性（特別是crypto內容）

## 擴展功能

### 未來改進方向
- [ ] 支援多語言生成
- [ ] 整合圖片生成
- [ ] 自動SEO優化
- [ ] 社交媒體自動發布
- [ ] 內容效果分析
- [ ] A/B測試支援

### 自定義配置
- 調整內容長度
- 修改寫作風格  
- 自定義主題權重
- 配置發布時程

## 故障排除

### 常見問題

1. **LLM API 調用失敗**
   - 檢查 API key 設定
   - 確認 API quota 限制
   - 查看網路連接狀態

2. **主題清單解析錯誤**  
   - 檢查 markdown 表格格式
   - 確認狀態標記正確
   - 驗證日期格式

3. **文件生成失敗**
   - 檢查目錄權限
   - 確認路徑存在
   - 查看磁碟空間

### 文章檢查
```bash
# 啟動開發伺服器檢查文章顯示
npm run dev
```

## 貢獻指南

歡迎提出改進建議和bug報告。請確保：
- 遵循現有代碼風格
- 添加適當的錯誤處理
- 更新相關文檔
- 測試新功能的穩定性

---

*最後更新: 2025-08-22*