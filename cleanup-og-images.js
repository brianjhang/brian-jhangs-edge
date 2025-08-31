#!/usr/bin/env node

/**
 * OG 圖像清理腳本
 * 用途：清理重複、多餘的 PNG 檔案，只保留與 MDX 檔案對應的正確版本
 */

import { readdir, unlink, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 找到所有 MDX 檔案並建立應該存在的 PNG 檔案列表
async function getExpectedPngFiles() {
  const expectedFiles = [];
  const contentDir = join(__dirname, 'src/content');
  
  async function scanDirectory(dir, basePath = '') {
    const items = await readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory()) {
        await scanDirectory(join(dir, item.name), join(basePath, item.name));
      } else if (item.name.endsWith('.mdx')) {
        // 計算對應的 PNG 路徑
        let pngFileName;
        if (item.name === 'complete-guide.mdx') {
          pngFileName = 'complete-guide.png';
        } else {
          pngFileName = item.name.replace('.mdx', '.png');
        }
        
        const pngPath = join('public/images/og', basePath, pngFileName);
        expectedFiles.push(pngPath);
      }
    }
  }
  
  await scanDirectory(contentDir);
  return expectedFiles;
}

// 找到所有存在的 PNG 檔案
async function getExistingPngFiles() {
  const existingFiles = [];
  const ogDir = join(__dirname, 'public/images/og');
  
  async function scanDirectory(dir, basePath = '') {
    try {
      const items = await readdir(dir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          await scanDirectory(join(dir, item.name), join(basePath, item.name));
        } else if (item.name.endsWith('.png')) {
          const pngPath = join('public/images/og', basePath, item.name);
          existingFiles.push(pngPath);
        }
      }
    } catch (error) {
      // 目錄不存在，跳過
    }
  }
  
  await scanDirectory(ogDir);
  return existingFiles;
}

async function main() {
  console.log('🧹 開始清理多餘的 OG 圖像檔案...\n');
  
  // 獲取應該存在和實際存在的檔案列表
  const expectedFiles = await getExpectedPngFiles();
  const existingFiles = await getExistingPngFiles();
  
  console.log(`📊 統計：`);
  console.log(`  • 預期 PNG 檔案數量：${expectedFiles.length}`);
  console.log(`  • 實際 PNG 檔案數量：${existingFiles.length}`);
  
  // 找出多餘的檔案（存在但不應該存在的）
  const extraFiles = existingFiles.filter(file => !expectedFiles.includes(file));
  
  // 找出缺失的檔案（應該存在但不存在的）
  const missingFiles = expectedFiles.filter(file => !existingFiles.includes(file));
  
  console.log(`\n📋 分析結果：`);
  console.log(`  • 多餘檔案：${extraFiles.length} 個`);
  console.log(`  • 缺失檔案：${missingFiles.length} 個`);
  
  if (extraFiles.length > 0) {
    console.log(`\n🗑️  要刪除的多餘檔案：`);
    for (const file of extraFiles) {
      console.log(`  - ${file}`);
      try {
        await unlink(file);
        console.log(`    ✅ 已刪除`);
      } catch (error) {
        console.log(`    ❌ 刪除失敗: ${error.message}`);
      }
    }
  }
  
  if (missingFiles.length > 0) {
    console.log(`\n⚠️  缺失的檔案（需要重新生成）：`);
    for (const file of missingFiles) {
      console.log(`  - ${file}`);
    }
    console.log(`\n💡 建議運行 'node scripts/simple-png-generator.js --all' 重新生成缺失檔案`);
  }
  
  console.log(`\n🎉 清理完成！`);
  console.log(`📊 最終統計：應保留 ${expectedFiles.length} 個 PNG 檔案`);
}

main().catch(console.error);