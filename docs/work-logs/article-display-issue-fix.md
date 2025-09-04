# 文章顯示問題修復記錄

## 📋 問題描述

**發現時間**：2025-09-04  
**問題現象**：每日生成的主題文章無法順利顯示在首頁和主題列表頁

## 🔍 問題分析

### 根本原因
1. **文章未實際創建**：Gemini CLI 只生成了文章內容文字，但沒有創建實體 MDX 檔案
2. **Frontmatter 格式不一致**：生成的 frontmatter 格式與 Astro content schema 不完全匹配
3. **文件路徑錯誤**：沒有按照項目規範的目錄結構創建檔案

### 具體問題點
1. **遺失必要欄位**：`publishedDate`, `modifiedDate`, `author` 等欄位缺失
2. **SEO 結構問題**：`seo.ogImage` 巢狀結構不正確
3. **日期格式不統一**：部分使用 `date`，部分使用 `pubDate`
4. **category 欄位不一致**：與現有文章的分類命名不匹配

## ✅ 解決方案

### 1. 標準化 Frontmatter 格式

根據 `src/content/config.ts` 的 schema 定義，建立標準模板：

#### AI 小百科標準格式
```yaml
---
title: "[技術名稱] 完全解析｜Brian's AI 小百科"
description: "文章描述"
date: "YYYY-MM-DD"
series: "ai"
technology: "技術分類"
tags: ["標籤1", "標籤2"]
summary: "文章摘要"
canonicalUrl: "https://brianjhang.com/ai/category/article-slug"
author: "Brian Jhang"
publishedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
modifiedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
category: "分類名稱"
readingTime: 15
wordCount: 2800
difficulty: "intermediate"
seo:
  ogImage: "/images/og/ai/category/article-slug.png"
  keywords: ["關鍵字1", "關鍵字2"]
---
```

#### 幣圈筆記標準格式
```yaml
---
title: "[幣種/概念] 完全解析｜Brian's 幣圈筆記"
description: "文章描述"
date: "YYYY-MM-DD"
series: "crypto"
ticker: ["BTC", "ETH"] # 僅適用於特定幣種
tags: ["標籤1", "標籤2"]
summary: "文章摘要"
canonicalUrl: "https://brianjhang.com/crypto/category/article-slug"
author: "Brian Jhang"
publishedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
modifiedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
category: "分類名稱"
readingTime: 15
wordCount: 2800
difficulty: "intermediate"
seo:
  ogImage: "/images/og/crypto/category/article-slug.png"
  keywords: ["關鍵字1", "關鍵字2"]
---
```

#### 創業筆記標準格式
```yaml
---
title: "[概念] 完全解析｜Brian's 創業筆記"
description: "文章描述"
date: "YYYY-MM-DD"
series: "startup"
business_concept: "商業概念"
tags: ["標籤1", "標籤2"]
summary: "文章摘要"
canonicalUrl: "https://brianjhang.com/startup/category/article-slug"
author: "Brian Jhang"
publishedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
modifiedDate: "YYYY-MM-DDTHH:mm:ss+08:00"
bookReference: # 僅書籍解析文章
  title: "書名"
  author: "作者"
  isbn: "ISBN"
  publisher: "出版社"
  year: 2024
category: "分類名稱"
readingTime: 12
wordCount: 2500
difficulty: "intermediate"
seo:
  ogImage: "/images/og/startup/category/article-slug.png"
  keywords: ["關鍵字1", "關鍵字2"]
---
```

### 2. 標準化目錄結構

#### 文件命名規範
```
AI 小百科：
src/content/ai/{category}/{article-slug}.mdx

幣圈筆記：
src/content/crypto/{category}/{article-slug}.mdx

創業筆記：
src/content/startup/{category}/{article-slug}.mdx
```

#### 常用分類目錄
```
AI 小百科：
- practical/ (實用技巧)
- concepts/ (基礎概念) 
- tools/ (工具介紹)
- trends/ (前沿趨勢)
- llm/ (大型語言模型)
- projects/ (知名項目)

幣圈筆記：
- concepts/ (概念解析)
- btc/, eth/, sol/ 等 (具體幣種)
- rwa/ (真實世界資產)

創業筆記：
- book/ (書籍解析)
- concepts/ (商業概念)
- naval/ (Naval 系列)
- thiel/ (Peter Thiel 系列)
```

### 3. 修復今日文章問題

已成功創建以下文章檔案：

1. **AI 小百科**：`src/content/ai/practical/local-llm-deployment-guide.mdx`
2. **幣圈筆記**：`src/content/crypto/concepts/corporate-treasury-strategy.mdx`
3. **創業筆記**：`src/content/startup/book/ceo-loneliness-hard-things.mdx`

### 4. 預防措施

#### 更新 Gemini 分批執行指南
在 `docs/work-logs/gemini-batch-execution-guide.md` 中增加文章創建步驟：

```markdown
## 文章創建完整流程

### 階段 4：文章檔案創建（新增）
在生成完內容後，必須創建實體檔案：

```bash
# 使用 Write tool 創建實際檔案
# 確保：
# 1. 正確的目錄結構
# 2. 完整的 frontmatter
# 3. 符合 schema 的格式
# 4. 包含所有必要欄位
```

#### 品質檢查清單
```markdown
文章創建檢查清單：
□ 檔案路徑正確（src/content/{series}/{category}/{slug}.mdx）
□ frontmatter 包含所有必要欄位
□ date 格式統一（YYYY-MM-DD）
□ publishedDate/modifiedDate 使用 ISO 8601 格式
□ seo.ogImage 路徑正確
□ tags 陣列格式正確
□ 內容結構完整（標題、Key Takeaways、主要章節）
□ 符合各主題寫作風格（Brian 風格）
```

## 📊 修復成果

### ✅ 成功修復項目
1. **文章檔案創建**：三篇文章均已正確創建
2. **Frontmatter 標準化**：所有欄位符合 schema 要求
3. **目錄結構規範**：按照項目規範放置檔案
4. **內容品質**：符合各主題寫作風格要求

### 📈 預期效果
- 文章能正常顯示在首頁最新文章列表
- 主題分頁能正確顯示新文章
- SEO 和社群分享功能正常
- 搜尋和篩選功能正常工作

## 🔄 流程改進

### 標準作業程序更新
```markdown
每日文章生成 SOP：

1. 使用 Gemini 分批生成內容
2. 檢查 frontmatter 格式是否完整
3. 使用 Write tool 創建實體檔案
4. 驗證檔案路徑和命名是否正確
5. 檢查內容結構和格式
6. 測試文章顯示效果
```

### 模板檔案建議
建議在 `docs/templates/` 建立標準模板檔案：
- `ai-article-template.mdx`
- `crypto-article-template.mdx`
- `startup-article-template.mdx`

## 🎯 防範措施

### 自動化檢查腳本
可考慮建立檢查腳本驗證新文章：
```bash
# 檢查 frontmatter 完整性
# 驗證檔案路徑正確性
# 確認 schema 符合性
```

### 定期檢查機制
- 每週檢查文章顯示狀況
- 每月檢查 frontmatter 格式一致性
- 季度檢查整體內容結構

---

## 🔄 後續修復記錄

### 2025-09-04 下午：路徑調整與 frontmatter 修復

#### 問題發現
1. **AI 文章路徑不當**：`ai/practical/` → 應為 `ai/llm/`
2. **Crypto 文章 frontmatter 錯誤**：
   - `summary` 內容與文章標題不符
   - 缺少部分標準欄位
   - 結構不完整導致無法正常顯示

#### 修復動作
1. **移動文件**：
   ```bash
   # 移動 AI 文章到正確目錄
   mv ai/practical/local-llm-deployment-guide.mdx → ai/llm/local-llm-deployment-guide.mdx
   # 更新 canonicalUrl 對應新路徑
   ```

2. **修復 crypto 文章 frontmatter**：
   ```yaml
   # 修正 summary 內容
   summary: "深入分析企業將比特幣和以太坊納入財庫的策略意義..."
   
   # 移除多餘欄位，保持與成功顯示文章的格式一致
   # 移除：category, canonicalUrl, author, publishedDate, modifiedDate, seo
   ```

#### 根本原因分析
- **路徑分類錯誤**：本地部署大模型應歸類為 LLM 相關而非 practical
- **內容複製錯誤**：crypto 文章的 summary 誤用了 ETF 文章的描述
- **格式不統一**：新文章格式與現有成功顯示文章的格式不一致

#### 預防措施更新
```markdown
文章創建檢查清單（補充）：
□ 確認文章分類目錄正確
□ summary 內容與文章主題匹配
□ frontmatter 格式與同系列成功文章一致
□ 移除不必要的冗餘欄位
□ 創建後測試首頁和列表頁顯示效果
```

---

### 2025-09-04 晚上：Schema 驗證問題修復

#### 關鍵發現
**根本問題**：項目存在兩個不同的 content schema 配置文件！
- `src/content/config.ts` - 較舊的配置
- `src/content.config.ts` - 新的配置（實際生效）

#### Schema 要求差異
**新配置 (`content.config.ts`) 的嚴格要求**：
```typescript
// 必要欄位
type: z.enum(["education","opinion","story"]).default("education")
lang: z.enum(["zh-TW","zh-CN","en"]).default("zh-TW")
summary: z.string().max(180)  // 最大 180 字符

// crypto 特有欄位
ticker: z.string().optional()  // 單一字符串，非陣列
difficulty: z.enum(["beginner","intermediate","advanced"])
```

#### 修復動作
1. **添加必要欄位**：
   ```yaml
   type: "education"
   lang: "zh-TW"
   ```

2. **修正 ticker 格式**：
   ```yaml
   # 錯誤：ticker: ["BTC", "ETH"]
   # 正確：ticker: "BTC"
   ```

3. **縮短 summary**：確保在 180 字符限制內

#### 學習重點
- **Schema 驗證失敗** 會導致文章完全不顯示
- **必須檢查實際生效的配置文件**
- **所有必要欄位都必須符合枚舉值要求**

---

**更新記錄**：
- 2025-09-04：首次建立，修復文章顯示問題
- 2025-09-04 下午：修復路徑和 frontmatter 格式問題
- 2025-09-04 晚上：發現並修復 Schema 驗證問題