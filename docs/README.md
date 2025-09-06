# 📚 Brian's Edge 文檔目錄

> **專案內部文檔與工作流程指導**  
> 最後更新：2025-09-05 **| 已完成文檔重整**

---

## 📁 目錄結構說明

### 🎯 **核心指導文檔**（已重新整理）

| 檔案 | 用途 | 狀態 | 使用頻率 |
|------|------|------|----------|
| 📋 `README.md` | **文檔導航中心** | ✅ 使用中 | 每日 |
| 📝 `02-writing-standards.md` | **統一寫作標準與風格** + 文章難度評判 | ✅ 使用中 | 每篇文章 |
| 🔍 `03-data-verification-ai-collaboration.md` | **數據驗證與AI協作** + 快速模板庫 | ✅ 使用中 | 數據核實 |
| 🖼️ `04-og-image-system.md` | **OG 圖片完整系統指南** (含技術架構) | ✅ 使用中 | 圖片生成 |
| 🗺️ `99-development-roadmap.md` | **開發路線圖** | 🔄 規劃中 | 長期規劃 |

### 📊 **規劃與管理**

| 目錄 | 用途 | 說明 |
|------|------|------|
| `content-production/` | 內容生產系統 | 主控工作流程與品質框架 |
| `topics/` | 主題規劃與寫作風格指導 | AI、Crypto、Startup 三系列 |
| `agents/` | AI Agent 品質評估系統 | 首席內容官 Agent |
| `templates/` | 內容模板與檢查清單 | 標準化模板庫 |
| `work-logs/` | 日常工作日誌與問題追蹤 | 開發進度記錄 |
| `internal/` | 社交媒體內容存檔 | `social-content-{date}.md` |

### 🗂️ **存檔資料**

| 目錄 | 用途 | 說明 |
|------|------|------|
| `_archive/` | 歷史文檔存檔 | 舊版寫作指南、工作流程等 |
| `_internal_drafts/` | 內部草稿暫存 | 社交媒體內容草稿 |

---

## 🚀 **快速導航**

### 日常內容創作
```bash
1. 文檔導航: docs/README.md
2. 寫作標準: docs/02-writing-standards.md (含難度評判)  
3. 數據驗證: docs/03-data-verification-ai-collaboration.md (含快速模板)
4. OG 圖片: docs/04-og-image-system.md (完整系統)
5. 主題規劃: docs/topics/
6. 內容模板: docs/templates/
7. 主控流程: docs/content-production/00-MASTER-WORKFLOW.md
8. 品質框架: docs/content-production/01-content-quality-framework.md
```

### 系統管理
```bash
1. 工作日誌: docs/work-logs/
2. 開發路線: docs/99-development-roadmap.md
3. AI 協作: CLAUDE.md (Gemini CLI + Qwen Code CLI)
4. 存檔文檔: docs/_archive/
```

---

## 📋 **文檔使用指南**

### 🎯 **內容創作者必讀**
- **導航中心**: `README.md` - 文檔總覽與快速導航
- **寫作標準**: `02-writing-standards.md` - Brian風格、三系列標準與難度評判系統
- **數據驗證**: `03-data-verification-ai-collaboration.md` - 高精度數據檢核、AI協作與快速模板庫
- **OG圖片系統**: `04-og-image-system.md` - 圖片生成標準與技術架構
- **主題指導**: `topics/` 目錄下的主題規劃檔案
- **模板庫**: `templates/` 目錄中的標準化模板

### 🤖 **開發者與AI協作**
- **三工具協作**: `CLAUDE.md` - Claude Code + Gemini CLI + Qwen Code CLI
- **已實施功能**: `04-og-image-system.md` - OG圖片完整自動化系統
- **技術文檔**: `work-logs/` - 開發過程記錄
- **開發路線**: `99-development-roadmap.md` - 長期規劃

### 📱 **社交媒體管理**
- **內容存檔**: `internal/social-content-{date}.md`
- **草稿暫存**: `_internal_drafts/` 目錄
- **歷史文檔**: `_archive/` 目錄中的舊版指導

---

## 🔄 **檔案狀態說明**

| 狀態 | 意義 | 行動 |
|------|------|------|
| ✅ 使用中 | 日常工作的主要參考檔案 | 持續更新維護 |
| 🔄 規劃中 | 技術規劃，尚未實施 | 待開發實施 |
| 📝 待更新 | 內容需要同步更新 | 優先更新 |
| 🗂️ 存檔 | 歷史記錄，參考用 | 保留不修改 |

---

## ⚠️ **重要提醒**

### 📁 **檔案管理原則**
- **核心指導文檔**: `02-writing-standards.md`、`03-data-verification-ai-collaboration.md` 等，變更需謹慎
- **templates/**: 模板庫，變更需確保向後兼容
- **topics/**: 主題規劃，變更影響內容品質
- **content-production/**: 核心生產系統，變更需謹慎測試
- **_archive/**: 歷史文檔，僅供參考不再修改

### ✅ **文檔重整完成 (2025-09-05)**
- **✅ 合併文檔**: 寫作標準、數據驗證、AI協作指南已統一整合
- **✅ 檔案重命名**: 採用數字前綴排序，提升文檔組織效率
- **✅ 新增AI協作**: 整合 Gemini CLI 和 Qwen Code CLI 三工具協作模式  
- **✅ 模板庫整合**: 數據驗證快速模板庫已集成到協作指南中
- **✅ Frontmatter 規範**: MDX 文章結構標準已整合到寫作指南中  
- **✅ 檔案清理**: 已清除備份檔案和重複內容，精簡文檔結構
- **✅ 使用建議**: 優先使用 `README.md` 作為文檔導航入口點

### 🔒 **安全注意**
- 所有 `docs/` 目錄內容已從 GitHub 移除
- 包含內部規劃和敏感資訊，僅本地使用
- `.gitignore` 已配置排除整個 `docs/` 目錄

---

## 📞 **文檔維護**

**負責人**: Brian Jhang  
**更新頻率**: 系統變更時同步更新  
**問題回報**: 記錄在 `work-logs/` 相關日誌中

---

*📝 這個 README 會隨著專案發展持續更新，確保文檔結構清晰易懂*