#!/usr/bin/env node

/**
 * 文章生成工具
 *
 * 功能：
 * - 互動式選擇系列、分類、語言
 * - 自動生成符合規範的 frontmatter
 * - 支援多語言文章創建
 * - 自動驗證 frontmatter 格式
 *
 * 使用方式：
 * npm run create:article
 */

import { createInterface } from 'readline';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 配置
const SERIES_CONFIG = {
  ai: {
    name: 'AI 小百科',
    categories: ['tools', 'trends', 'concepts', 'practical', 'llm', 'databases', 'gemini', 'projects'],
    type: 'education'
  },
  startup: {
    name: '創業筆記',
    categories: ['concepts', 'book', 'naval', 'thiel', 'bezos', 'lean'],
    type: 'education'
  },
  crypto: {
    name: '幣圈筆記',
    categories: ['btc', 'eth', 'sol', 'concepts', 'rwa', 'layer2', 'stablecoin'],
    type: 'education'
  },
  build: {
    name: '建設日誌',
    categories: ['development', 'design', 'growth', 'reflection'],
    type: 'log'
  }
};

const DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];
const LANGUAGES = {
  'zh-TW': '繁體中文',
  'en': 'English'
};

// 創建 readline 介面
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promise 化的問題詢問
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// 顯示選項列表
function displayOptions(options, title) {
  console.log(`\n${title}:`);
  options.forEach((opt, idx) => {
    console.log(`  ${idx + 1}. ${opt}`);
  });
}

// 獲取當前日期 (YYYY-MM-DD)
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 生成 frontmatter
function generateFrontmatter(config) {
  const {
    title,
    description,
    series,
    category,
    slug,
    lang,
    summary,
    keywords,
    tags,
    difficulty,
    type
  } = config;

  const date = getCurrentDate();

  let frontmatter = `---
title: "${title}"
description: "${description}"
date: "${date}"
updated: "${date}"
series: "${series}"
category: "${category}"
slug: "${slug}"
type: "${type}"
lang: "${lang}"
summary: "${summary}"
keywords:
`;

  keywords.forEach(keyword => {
    frontmatter += `  - "${keyword}"\n`;
  });

  frontmatter += `tags:
`;

  tags.forEach(tag => {
    frontmatter += `  - "${tag}"\n`;
  });

  frontmatter += `difficulty: "${difficulty}"
featured: false
---

# ${title}

## 簡介

${summary}

## 內容

（在此撰寫文章內容）

## 總結

（在此撰寫總結）
`;

  return frontmatter;
}

// 主流程
async function main() {
  console.log('📝 文章生成工具\n');

  try {
    // 1. 選擇系列
    displayOptions(Object.keys(SERIES_CONFIG), '選擇文章系列');
    const seriesIdx = parseInt(await question('\n請輸入編號: ')) - 1;
    const seriesKeys = Object.keys(SERIES_CONFIG);

    if (seriesIdx < 0 || seriesIdx >= seriesKeys.length) {
      throw new Error('無效的系列選擇');
    }

    const series = seriesKeys[seriesIdx];
    const seriesConfig = SERIES_CONFIG[series];
    console.log(`✓ 已選擇: ${seriesConfig.name}`);

    // 2. 選擇分類
    displayOptions(seriesConfig.categories, '選擇文章分類');
    const categoryIdx = parseInt(await question('\n請輸入編號: ')) - 1;

    if (categoryIdx < 0 || categoryIdx >= seriesConfig.categories.length) {
      throw new Error('無效的分類選擇');
    }

    const category = seriesConfig.categories[categoryIdx];
    console.log(`✓ 已選擇: ${category}`);

    // 3. 選擇語言
    displayOptions(Object.values(LANGUAGES), '選擇文章語言');
    const langIdx = parseInt(await question('\n請輸入編號: ')) - 1;
    const langKeys = Object.keys(LANGUAGES);

    if (langIdx < 0 || langIdx >= langKeys.length) {
      throw new Error('無效的語言選擇');
    }

    const lang = langKeys[langIdx];
    console.log(`✓ 已選擇: ${LANGUAGES[lang]}`);

    // 4. 輸入文章基本資訊
    console.log('\n📋 請輸入文章資訊:\n');

    const articleSlug = await question('文章 slug (例如: example-article): ');
    if (!articleSlug || !/^[a-z0-9-]+$/.test(articleSlug)) {
      throw new Error('Slug 只能包含小寫字母、數字和連字號');
    }

    const title = await question('文章標題: ');
    if (!title) {
      throw new Error('標題不能為空');
    }

    const description = await question('SEO 描述 (150-160 字元): ');
    if (!description) {
      throw new Error('描述不能為空');
    }

    const summary = await question('文章摘要: ');
    if (!summary) {
      throw new Error('摘要不能為空');
    }

    const keywordsInput = await question('關鍵字 (用逗號分隔): ');
    const keywords = keywordsInput.split(',').map(k => k.trim()).filter(k => k);
    if (keywords.length === 0) {
      throw new Error('至少需要一個關鍵字');
    }

    const tagsInput = await question('標籤 (用逗號分隔): ');
    const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t);
    if (tags.length === 0) {
      throw new Error('至少需要一個標籤');
    }

    // 5. 選擇難度
    displayOptions(DIFFICULTIES, '選擇文章難度');
    const difficultyIdx = parseInt(await question('\n請輸入編號: ')) - 1;

    if (difficultyIdx < 0 || difficultyIdx >= DIFFICULTIES.length) {
      throw new Error('無效的難度選擇');
    }

    const difficulty = DIFFICULTIES[difficultyIdx];
    console.log(`✓ 已選擇: ${difficulty}`);

    // 6. 生成 slug 和檔案路徑
    const slug = lang === 'en'
      ? `en/${series}/${category}/${articleSlug}`
      : `${series}/${category}/${articleSlug}`;

    const fileName = lang === 'en'
      ? `${articleSlug}-en.mdx`
      : `${articleSlug}.mdx`;

    const contentDir = join(process.cwd(), 'src', 'content', series, category);
    const filePath = join(contentDir, fileName);

    // 7. 檢查檔案是否已存在
    if (existsSync(filePath)) {
      throw new Error(`檔案已存在: ${filePath}`);
    }

    // 8. 生成 frontmatter
    const frontmatter = generateFrontmatter({
      title,
      description,
      series,
      category,
      slug,
      lang,
      summary,
      keywords,
      tags,
      difficulty,
      type: seriesConfig.type
    });

    // 9. 確認創建
    console.log('\n📄 即將創建的文章:');
    console.log(`   檔案路徑: ${filePath}`);
    console.log(`   文章 slug: ${slug}`);
    console.log(`   語言: ${LANGUAGES[lang]}`);
    console.log(`   系列: ${seriesConfig.name}`);
    console.log(`   分類: ${category}`);
    console.log(`   難度: ${difficulty}`);

    const confirm = await question('\n確定創建? (y/n): ');

    if (confirm.toLowerCase() !== 'y') {
      console.log('❌ 已取消');
      rl.close();
      return;
    }

    // 10. 創建目錄（如果不存在）
    if (!existsSync(contentDir)) {
      mkdirSync(contentDir, { recursive: true });
      console.log(`✓ 已創建目錄: ${contentDir}`);
    }

    // 11. 寫入檔案
    writeFileSync(filePath, frontmatter, 'utf-8');
    console.log(`\n✅ 文章創建成功！`);
    console.log(`\n📁 檔案位置: ${filePath}`);
    console.log(`\n💡 下一步:`);
    console.log(`   1. 編輯文章內容`);
    console.log(`   2. 運行驗證: npm run validate:frontmatter`);
    console.log(`   3. 本地測試: npm run dev`);

  } catch (error) {
    console.error(`\n❌ 錯誤: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
