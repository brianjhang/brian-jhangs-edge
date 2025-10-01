#!/usr/bin/env node

/**
 * 批量添加缺少的 OG 圖片欄位到 MDX 文章
 *
 * 功能：
 * - 檢查文章是否已有 image 欄位
 * - 檢查對應的 WebP 圖片是否存在
 * - 自動添加 image 欄位到 frontmatter
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONTENT_DIR = join(process.cwd(), 'src/content');
const PUBLIC_DIR = join(process.cwd(), 'public');

// 獲取所有 MDX 檔案
function getAllMdxFiles(dir) {
  let results = [];
  const list = readdirSync(dir);

  list.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllMdxFiles(filePath));
    } else if (file.endsWith('.mdx')) {
      results.push(filePath);
    }
  });

  return results;
}

// 從檔案路徑生成預期的圖片路徑
function getExpectedImagePath(filePath) {
  // 從 src/content/ai/trends/article.mdx 提取資訊
  const relativePath = relative(CONTENT_DIR, filePath);
  const parts = relativePath.split('/');

  if (parts.length < 3) return null;

  const series = parts[0]; // ai, startup, crypto, build
  const category = parts[1]; // trends, tools, etc.
  const fileName = parts[parts.length - 1].replace('.mdx', '');

  // 檢查 WebP 圖片是否存在
  const webpPath = `/images/og/${series}/${category}/${fileName}.webp`;
  const fullWebpPath = join(PUBLIC_DIR, webpPath);

  if (existsSync(fullWebpPath)) {
    return webpPath;
  }

  return null;
}

// 處理單個檔案
function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: body } = matter(content);

  // 如果已經有 image 欄位，跳過
  if (frontmatter.image) {
    return { skipped: true, reason: 'already-has-image' };
  }

  // 獲取預期的圖片路徑
  const imagePath = getExpectedImagePath(filePath);

  if (!imagePath) {
    return { skipped: true, reason: 'no-image-file' };
  }

  // 添加 image 欄位到 frontmatter
  frontmatter.image = imagePath;

  // 重新組合檔案
  const newContent = matter.stringify(body, frontmatter);

  // 寫回檔案
  writeFileSync(filePath, newContent, 'utf-8');

  return { updated: true, imagePath };
}

// 主程式
function main() {
  console.log('🔍 掃描所有 MDX 文章...\n');

  const allFiles = getAllMdxFiles(CONTENT_DIR);
  console.log(`📊 找到 ${allFiles.length} 個 MDX 檔案\n`);

  let updated = 0;
  let skippedHasImage = 0;
  let skippedNoImage = 0;

  const updates = [];

  allFiles.forEach(filePath => {
    const result = processFile(filePath);
    const relativePath = relative(process.cwd(), filePath);

    if (result.updated) {
      updated++;
      updates.push(`  ✅ ${relativePath}`);
      console.log(`✅ ${relativePath}`);
      console.log(`   → ${result.imagePath}`);
    } else if (result.reason === 'already-has-image') {
      skippedHasImage++;
    } else if (result.reason === 'no-image-file') {
      skippedNoImage++;
      console.log(`⚠️  ${relativePath} (圖片檔案不存在)`);
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 處理結果統計:');
  console.log('='.repeat(60));
  console.log(`✅ 已更新: ${updated} 篇`);
  console.log(`⏭️  已有圖片: ${skippedHasImage} 篇`);
  console.log(`⚠️  無圖片檔: ${skippedNoImage} 篇`);
  console.log(`📝 總計: ${allFiles.length} 篇`);
  console.log('='.repeat(60));

  if (skippedNoImage > 0) {
    console.log('\n💡 提示: 有些文章沒有對應的 OG 圖片檔案');
    console.log('   可以使用 npm run og:generate 生成缺少的圖片');
  }

  if (updated > 0) {
    console.log('\n✅ 更新完成！請執行以下命令驗證:');
    console.log('   npm run validate:frontmatter');
    console.log('   npm run build');
  }
}

main();
