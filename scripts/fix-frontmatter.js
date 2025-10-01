#!/usr/bin/env node

/**
 * Frontmatter 自動修正工具
 * 批量修正文章的 frontmatter 格式問題
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = 'src/content';
const SERIES = ['ai', 'crypto', 'startup', 'build'];

const stats = {
  total: 0,
  fixed: 0,
  skipped: 0,
  errors: []
};

/**
 * 生成 slug（如果缺少）
 */
function generateSlug(filePath, series, data) {
  // 從檔案路徑生成 slug
  const fileName = filePath.split('/').pop().replace(/\.(mdx|md)$/, '');
  const pathParts = filePath.replace(`${CONTENT_DIR}/${series}/`, '').split('/');

  // 移除檔名，保留目錄結構
  pathParts.pop();

  // 檢查是否為英文版本
  const isEnglish = data.lang === 'en' || fileName.endsWith('-en');

  let slug;
  if (pathParts.length > 0) {
    // 有子目錄，例如: practical/article-name.mdx
    const category = pathParts.join('/');
    slug = isEnglish ? `en/${series}/${category}/${fileName}` : `${series}/${category}/${fileName}`;
  } else {
    // 沒有子目錄，直接在系列根目錄
    slug = isEnglish ? `en/${series}/${fileName}` : `${series}/${fileName}`;
  }

  // 移除舊的語言後綴
  slug = slug.replace(/-en$/, '').replace(/-zh-tw$/, '');

  return slug;
}

/**
 * 修正單個文章
 */
async function fixArticle(filePath, series) {
  const content = await readFile(filePath, 'utf-8');
  const { data, content: articleContent } = matter(content);

  let modified = false;
  const fixes = [];

  // 1. 添加缺少的 updated 欄位（使用 date 的值）
  if (!data.updated && data.date) {
    data.updated = data.date;
    modified = true;
    fixes.push('added updated field');
  }

  // 2. 生成或修正 slug
  if (!data.slug || data.slug.includes('-en') || data.slug.includes('-zh-tw')) {
    const oldSlug = data.slug;
    data.slug = generateSlug(filePath, series, data);
    modified = true;
    fixes.push(`slug: ${oldSlug} → ${data.slug}`);
  }

  // 3. 添加缺少的 keywords（從 tags 複製或創建空陣列）
  if (!data.keywords) {
    data.keywords = data.tags ? [...data.tags] : [];
    modified = true;
    fixes.push('added keywords field');
  }

  // 4. 添加缺少的 featured
  if (data.featured === undefined) {
    data.featured = false;
    modified = true;
    fixes.push('added featured field');
  }

  // 5. 添加缺少的 type
  if (!data.type) {
    data.type = 'education';
    modified = true;
    fixes.push('added type field');
  }

  // 6. 添加缺少的 lang
  if (!data.lang) {
    // 從 slug 推斷語言
    data.lang = data.slug?.startsWith('en/') ? 'en' : 'zh-TW';
    modified = true;
    fixes.push('added lang field');
  }

  // 7. 確保 tags 是陣列
  if (data.tags && !Array.isArray(data.tags)) {
    data.tags = [data.tags];
    modified = true;
    fixes.push('fixed tags to array');
  }

  // 8. 確保 keywords 是陣列
  if (data.keywords && !Array.isArray(data.keywords)) {
    data.keywords = [data.keywords];
    modified = true;
    fixes.push('fixed keywords to array');
  }

  // 9. 從目錄路徑推斷 category（如果缺少）
  if (!data.category) {
    const pathParts = filePath.replace(`${CONTENT_DIR}/${series}/`, '').split('/');
    if (pathParts.length > 1) {
      data.category = pathParts[0]; // 使用子目錄名稱
      modified = true;
      fixes.push(`added category from path: ${data.category}`);
    }
  }

  // 10. 修正類別格式（移除中文）
  if (data.category && /[\u4e00-\u9fa5]/.test(data.category)) {
    // 包含中文，需要轉換
    const categoryMap = {
      'AI 技術': 'trends',
      'AI 技術教育': 'trends',
      '深度分析': 'trends',
      '實用技巧': 'tools',
      '實用技術': 'practical',
      '人工智慧教育': 'llm',
      '創業教育': 'book',
      '創業商業教育': 'book',
      '產品開發': 'feature',
      '加密貨幣教育': 'concepts',
      'AI 原生創業': 'concepts',
      'stablecoin': 'concepts'
    };

    const oldCategory = data.category;
    const newCategory = categoryMap[data.category];
    if (newCategory) {
      data.category = newCategory;
      modified = true;
      fixes.push(`category: ${oldCategory} → ${newCategory}`);
    }
  }

  // 11. 修正難度格式（移除中文）
  if (data.difficulty && /[\u4e00-\u9fa5]/.test(data.difficulty)) {
    const difficultyMap = {
      '入門': 'beginner',
      '中等': 'intermediate',
      '進階': 'advanced'
    };

    const oldDifficulty = data.difficulty;
    const newDifficulty = difficultyMap[data.difficulty];
    if (newDifficulty) {
      data.difficulty = newDifficulty;
      modified = true;
      fixes.push(`difficulty: ${oldDifficulty} → ${newDifficulty}`);
    }
  }

  // 12. 添加缺少的 description
  if (!data.description && data.summary) {
    data.description = data.summary;
    modified = true;
    fixes.push('added description from summary');
  }

  // 13. 添加缺少的 difficulty
  if (!data.difficulty) {
    data.difficulty = 'intermediate'; // 預設中等難度
    modified = true;
    fixes.push('added difficulty (default: intermediate)');
  }

  // 14. 修正 slug 格式（確保包含系列前綴）
  if (data.slug && !data.slug.startsWith(`${series}/`) && !data.slug.startsWith(`en/${series}/`)) {
    const oldSlug = data.slug;
    // 檢查是否只是缺少系列前綴
    if (oldSlug.includes('/')) {
      // 例如: bezos/article-name -> startup/bezos/article-name
      data.slug = `${series}/${oldSlug}`;
    } else {
      // 例如: article-name -> startup/book/article-name (根據目錄結構)
      data.slug = generateSlug(filePath, series, data);
    }
    modified = true;
    fixes.push(`slug prefix: ${oldSlug} → ${data.slug}`);
  }

  if (modified) {
    // 重新生成 frontmatter
    const newContent = matter.stringify(articleContent, data);
    await writeFile(filePath, newContent, 'utf-8');
    return { modified: true, fixes };
  }

  return { modified: false, fixes: [] };
}

/**
 * 掃描並修正系列
 */
async function fixSeries(series) {
  const seriesDir = join(CONTENT_DIR, series);
  const files = await readdir(seriesDir, { recursive: true });

  for (const file of files) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

    stats.total++;
    const filePath = join(seriesDir, file);

    try {
      const result = await fixArticle(filePath, series);

      if (result.modified) {
        stats.fixed++;
        const relPath = filePath.replace(CONTENT_DIR + '/', '');
        console.log(`✅ ${relPath}`);
        result.fixes.forEach(fix => console.log(`   • ${fix}`));
      } else {
        stats.skipped++;
      }
    } catch (error) {
      stats.errors.push({
        file: filePath,
        error: error.message
      });
      console.error(`❌ ${filePath}: ${error.message}`);
    }
  }
}

/**
 * 顯示報告
 */
function displayReport() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 Frontmatter 修正報告');
  console.log('='.repeat(60));
  console.log(`總計檢查: ${stats.total} 個文章`);
  console.log(`✅ 已修正: ${stats.fixed}`);
  console.log(`➡️  已跳過: ${stats.skipped} (無需修正)`);
  console.log(`❌ 錯誤: ${stats.errors.length}`);

  if (stats.errors.length > 0) {
    console.log('\n錯誤詳情:');
    stats.errors.forEach(({ file, error }) => {
      console.log(`  • ${file}: ${error}`);
    });
  }

  console.log('='.repeat(60));

  if (stats.fixed > 0) {
    console.log('\n💡 建議下一步:');
    console.log('   1. 檢查修正結果: git diff');
    console.log('   2. 重新驗證: npm run validate:frontmatter');
    console.log('   3. 測試建置: npm run build');
  }
}

/**
 * 主函數
 */
async function main() {
  console.log('🔧 開始自動修正 Frontmatter...\n');

  for (const series of SERIES) {
    console.log(`📁 處理系列: ${series}`);
    await fixSeries(series);
    console.log('');
  }

  displayReport();
}

main().catch(console.error);
