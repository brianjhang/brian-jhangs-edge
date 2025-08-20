#!/usr/bin/env node

/**
 * LLM 自動化三主題文章生成系統
 * 
 * 功能：
 * 1. 根據主題清單自動生成AI、加密貨幣、創業智慧文章
 * 2. 使用 LLM 生成高質量內容
 * 3. 自動創建MDX文件並包含正確的frontmatter
 * 4. 同時生成對應的社交媒體內容
 * 
 * 使用方式：
 * node scripts/llm-auto-generator.mjs --series=ai|crypto|founder [--date=YYYY-MM-DD]
 */

import fs from "node:fs/promises";
import path from "node:path";

const CONTENT_DIR = "src/content/daily";
const IDEAS_DIR = "src/content/ideas";
const SOCIAL_DIR = "docs/internal";

// 從環境變數或配置文件讀取 LLM API 配置
const LLM_CONFIG = {
  // 可以配置為 OpenAI, Claude, Gemini 等
  provider: process.env.LLM_PROVIDER || "claude",
  apiKey: process.env.LLM_API_KEY,
  model: process.env.LLM_MODEL || "claude-3-5-sonnet-20241022"
};

/**
 * 解析命令行參數
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (const arg of args) {
    if (arg.startsWith('--series=')) {
      options.series = arg.split('=')[1];
    } else if (arg.startsWith('--date=')) {
      options.date = arg.split('=')[1];
    }
  }
  
  if (!options.series || !['ai', 'crypto', 'founder'].includes(options.series)) {
    console.error('Usage: node scripts/llm-auto-generator.mjs --series=ai|crypto|founder [--date=YYYY-MM-DD]');
    process.exit(1);
  }
  
  options.date = options.date || new Date().toISOString().slice(0, 10);
  return options;
}

/**
 * 讀取主題清單並找到下一個要寫的主題
 */
async function getNextTopic(series) {
  const topicFiles = {
    ai: `${IDEAS_DIR}/ai-topics.md`,
    crypto: `${IDEAS_DIR}/crypto-topics.md`,
    founder: `${IDEAS_DIR}/founder-topics.md`
  };
  
  const content = await fs.readFile(topicFiles[series], 'utf-8');
  
  // 解析markdown表格，找到第一個待發表的主題
  const lines = content.split('\n');
  const today = new Date().toISOString().slice(0, 10);
  
  for (const line of lines) {
    if (line.includes('📝 待寫') && line.includes(today)) {
      // 解析表格行，提取主題信息
      const cells = line.split('|').map(cell => cell.trim());
      return parseTopicFromLine(cells, series);
    }
  }
  
  // 如果沒有找到今天的主題，使用第一個待寫主題
  for (const line of lines) {
    if (line.includes('📝 待寫')) {
      const cells = line.split('|').map(cell => cell.trim());
      return parseTopicFromLine(cells, series);
    }
  }
  
  throw new Error(`No pending topics found for series: ${series}`);
}

/**
 * 從表格行解析主題信息
 */
function parseTopicFromLine(cells, series) {
  // 根據不同系列的表格結構解析
  switch (series) {
    case 'ai':
      return {
        title: cells[2], // 主題
        type: cells[3],  // 類型
        priority: 'high'
      };
    case 'crypto':
      return {
        symbol: cells[2],  // 幣種
        title: cells[3],   // 主題  
        rank: cells[1],    // 排名
        priority: 'high'
      };
    case 'founder':
      return {
        book: cells[2],    // 書籍
        title: cells[3],   // 主題
        quote: cells[5],   // 金句
        priority: 'high'
      };
    default:
      throw new Error(`Unknown series: ${series}`);
  }
}

/**
 * 生成文章內容的提示詞
 */
function generateContentPrompt(series, topic, date) {
  const basePrompt = `你是 Brian Jhang's Edge 的內容創作者，專注於 Startups × AI × Web3 的知識分享。請為以下主題創作一篇高質量的文章：

日期：${date}
系列：${series}
主題：${topic.title}

`;

  const seriesPrompts = {
    ai: `這是「AI 小百科」系列文章。

文章要求：
- 字數：2000-2500字
- 風格：深入淺出，技術性但易懂
- 結構：引言 → 技術背景 → 深度解析 → 實戰應用 → 常見問題 → 未來展望 → 學習資源
- 語言：繁體中文，台灣用語習慣
- 目標：幫助讀者理解AI技術原理和應用

請包含：
1. 技術原理的白話解釋
2. 實際應用案例
3. 與其他AI技術的比較
4. 實用的工具推薦
5. 學習資源和進階建議

主題類型：${topic.type}
`,

    crypto: `這是「幣圈筆記」系列文章。

文章要求：
- 字數：2500-3000字  
- 風格：客觀教育，避免投資建議
- 結構：項目概述 → 技術架構 → 生態系統 → 經濟模型 → 發展歷程 → 分析 → 未來展望 → 學習資源
- 語言：繁體中文，台灣用語習慣
- 重要：必須包含風險聲明，不可有任何投資建議

${topic.symbol ? `幣種：${topic.symbol}` : ''}
${topic.rank ? `市值排名：#${topic.rank}` : ''}

必須包含：
⚠️ **風險聲明**：
- 加密貨幣投資存在極高風險，價格波動劇烈
- 本文僅為教育目的，不構成任何投資建議  
- 請進行獨立研究和風險評估
- 只投資您能承受完全損失的資金
`,

    founder: `這是「創業筆記」系列文章。

文章要求：
- 字數：2500-3000字
- 風格：實戰導向，結合現代創業環境
- 結構：金句呈現 → 背景脈絡 → 深度解析 → 現實案例 → 實戰應用 → 現代啟示
- 語言：繁體中文，台灣用語習慣
- 目標：提供可執行的創業智慧

${topic.book ? `書籍：${topic.book}` : ''}
${topic.quote ? `核心金句：${topic.quote}` : ''}

請包含：
1. 金句的深層含義解析
2. 成功和失敗的實際案例
3. 具體的行動框架
4. 在AI/Web3時代的新理解
5. 對不同階段創業者的建議
`
  };

  return basePrompt + seriesPrompts[series] + `

請用MDX格式輸出，包含適當的標題層級和格式。`;
}

/**
 * 生成frontmatter
 */
function generateFrontmatter(series, topic, date) {
  const base = {
    date,
    series,
    lang: "zh-TW",
    readingTime: Math.floor(Math.random() * 3) + 3, // 3-5分鐘
    social: { thread: true, ig: true, x: true, fb: true }
  };

  switch (series) {
    case 'ai':
      return {
        ...base,
        title: `${topic.title}：完全解析`,
        type: "education",
        tags: ["AI", "技術", "教學"],
        summary: `深入解析${topic.title}的技術原理、應用場景和未來發展。`,
        links: []
      };
      
    case 'crypto':
      return {
        ...base,
        title: `${topic.symbol || topic.title}：完全指南`,
        type: "education", 
        ticker: topic.symbol || "",
        tags: ["加密貨幣", "區塊鏈", "教育"],
        summary: `深入分析${topic.title}的技術特點、生態系統和發展前景。`,
        links: topic.symbol ? [
          { title: "Market (CoinGecko)", url: `https://www.coingecko.com/en/coins/${topic.symbol.toLowerCase()}` }
        ] : []
      };
      
    case 'founder':
      return {
        ...base,
        title: `${topic.title}：${topic.book || '創業智慧'}`,
        type: "wisdom",
        tags: ["創業", "商業智慧", "經典著作"],
        summary: `解析${topic.book || '經典創業'}中的核心理念，提供現代創業的實戰指南。`,
        links: []
      };
      
    default:
      return base;
  }
}

/**
 * 生成社交媒體內容的提示詞
 */
function generateSocialPrompt(series, topic, articleContent) {
  return `基於以下文章內容，為各個社交媒體平台創作推廣內容：

文章標題：${topic.title}
系列：${series}

文章摘要：
${articleContent.slice(0, 500)}...

請為以下平台創作內容：

1. **Twitter/X** (3條推文)
   - 每條280字以內
   - 包含相關hashtag (3-5個)
   - 要有吸引力的開頭

2. **Threads** (2條推文)  
   - 每條只使用1個最重要的hashtag
   - 較長內容，可以更詳細

3. **Facebook** (2個版本)
   - 較長的深度內容
   - 教育和科普導向

4. **小紅書版本** (簡體中文)
   - 移除markdown格式
   - 適合復製貼上編輯

5. **今日頭條版本** (簡體中文)
   - 移除markdown格式  
   - 更正式的文章風格

請確保：
- 內容引人入勝但不誇大
- 符合各平台的調性
- 繁體中文版本使用台灣用語
- 簡體中文版本符合大陸用戶習慣
- 適當的風險提醒（特別是crypto系列）
`;
}

/**
 * 調用LLM API生成內容
 */
async function callLLM(prompt) {
  // 這裡需要根據配置的LLM provider實作API調用
  // 暫時返回模擬內容，實際使用時需要接入真實的LLM API
  
  console.log('📝 正在調用 LLM 生成內容...');
  console.log('Provider:', LLM_CONFIG.provider);
  console.log('Model:', LLM_CONFIG.model);
  
  // TODO: 實作真實的LLM API調用
  // 例如：OpenAI API, Claude API, 或本地LLM
  
  throw new Error(`LLM API integration not implemented yet. 
  
請先實作以下功能：
1. 在環境變數中設定 LLM_API_KEY
2. 選擇 LLM provider (claude/openai/gemini)
3. 實作對應的API調用邏輯

提示詞已準備就緒：
${prompt.slice(0, 200)}...
`);
}

/**
 * 生成文章檔案
 */
async function generateArticle(series, topic, date) {
  const contentPrompt = generateContentPrompt(series, topic, date);
  const frontmatter = generateFrontmatter(series, topic, date);
  
  // 調用LLM生成文章內容
  const articleContent = await callLLM(contentPrompt);
  
  // 組合完整的MDX文件
  const frontmatterYaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return `${key}:\n${Object.entries(value).map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`).join('\n')}`;
      }
      return `${key}: ${JSON.stringify(value)}`;
    })
    .join('\n');
    
  const fullContent = `---\n${frontmatterYaml}\n---\n\n${articleContent}`;
  
  // 生成檔案名稱
  let filename;
  if (series === 'crypto' && topic.symbol) {
    filename = `${date}-${topic.symbol.toLowerCase()}.mdx`;
  } else {
    const slug = topic.title.toLowerCase()
      .replace(/[：，。！？]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 20);
    filename = `${date}-${slug}.mdx`;
  }
  
  // 寫入檔案
  const outputDir = path.join(CONTENT_DIR, series);
  await fs.mkdir(outputDir, { recursive: true });
  
  const filepath = path.join(outputDir, filename);
  await fs.writeFile(filepath, fullContent, 'utf-8');
  
  console.log(`✅ 文章已生成: ${filepath}`);
  return { filepath, content: articleContent, frontmatter };
}

/**
 * 生成社交媒體內容
 */
async function generateSocialContent(series, topic, articleContent, date) {
  const socialPrompt = generateSocialPrompt(series, topic, articleContent);
  
  // 調用LLM生成社交媒體內容  
  const socialContent = await callLLM(socialPrompt);
  
  // 儲存社交媒體內容
  const socialFilename = `social-content-${date}-${series}.md`;
  const socialPath = path.join(SOCIAL_DIR, socialFilename);
  
  await fs.mkdir(SOCIAL_DIR, { recursive: true });
  await fs.writeFile(socialPath, `# ${date} 社交媒體內容 - ${series.toUpperCase()}\n\n${socialContent}`, 'utf-8');
  
  console.log(`✅ 社交媒體內容已生成: ${socialPath}`);
  return socialPath;
}

/**
 * 更新主題清單狀態
 */
async function updateTopicStatus(series, topic, date) {
  const topicFiles = {
    ai: `${IDEAS_DIR}/ai-topics.md`,
    crypto: `${IDEAS_DIR}/crypto-topics.md`, 
    founder: `${IDEAS_DIR}/founder-topics.md`
  };
  
  // 讀取文件並更新狀態
  let content = await fs.readFile(topicFiles[series], 'utf-8');
  
  // 將 📝 待寫 替換為 ✅ 已發表
  content = content.replace(/📝 待寫/, '✅ 已發表');
  
  await fs.writeFile(topicFiles[series], content, 'utf-8');
  console.log(`✅ 主題狀態已更新`);
}

/**
 * 主函數
 */
async function main() {
  try {
    const options = parseArgs();
    console.log(`🚀 開始生成 ${options.series} 系列文章 (${options.date})`);
    
    // 1. 獲取下一個主題
    const topic = await getNextTopic(options.series);
    console.log(`📋 選定主題: ${topic.title}`);
    
    // 2. 生成文章
    const { filepath, content, frontmatter } = await generateArticle(options.series, topic, options.date);
    
    // 3. 生成社交媒體內容
    await generateSocialContent(options.series, topic, content, options.date);
    
    // 4. 更新主題狀態
    await updateTopicStatus(options.series, topic, options.date);
    
    console.log(`🎉 完成！文章和社交媒體內容已生成`);
    console.log(`📁 文章路徑: ${filepath}`);
    
  } catch (error) {
    console.error('❌ 生成失敗:', error.message);
    process.exit(1);
  }
}

// 執行主函數
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main, generateContentPrompt, generateSocialPrompt };