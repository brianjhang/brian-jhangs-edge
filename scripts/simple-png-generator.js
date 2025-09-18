#!/usr/bin/env node

/**
 * 高品質 PNG OG 圖片生成器（智慧增量版）
 * 用途: 批量生成文章的 PNG 格式 Open Graph 圖片
 * 特色: 支援中文字體、智慧標題分行、ImageMagick 轉換、增量更新
 * 使用: 
 *   node scripts/simple-png-generator.js         # 只生成新的或變更的檔案
 *   node scripts/simple-png-generator.js --all   # 強制重新生成所有檔案
 */

import { readdir, readFile, writeFile, mkdir, stat, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// 檢查是否強制重新生成所有檔案
const forceRegenerate = process.argv.includes('--all') || process.argv.includes('-f');

// 主題配置（參考比特幣成功案例的風格）
const themes = {
  ai: { 
    bg: '#1e293b', 
    primary: '#60a5fa', 
    name: 'AI小百科',
    seriesColor: '#60a5fa'
  },
  crypto: { 
    bg: '#0c0a09', 
    primary: '#fbbf24', 
    name: '幣圈筆記',
    seriesColor: '#fbbf24'
  },
  startup: { 
    bg: '#0a0a0a', 
    primary: '#10b981', 
    name: '創業筆記',
    seriesColor: '#10b981'
  }
};

function processTitle(title) {
  // 移除系列標記，提取主標題
  const cleanTitle = title.replace(/｜Brian's (AI小百科|幣圈筆記|創業筆記)$/, '');
  
  // 智慧分行處理（參考比特幣的成功模式）
  if (cleanTitle.length <= 25) {
    return [cleanTitle];
  }
  
  // 尋找適當的斷點
  const breakPoints = ['：', '｜', '、', '與', '如何', '為什麼', '的', '界的'];
  
  for (const bp of breakPoints) {
    const pos = cleanTitle.indexOf(bp);
    if (pos > 8 && pos < cleanTitle.length - 8) {
      const firstLine = cleanTitle.substring(0, pos + (bp === '：' ? 1 : 0));
      const secondLine = cleanTitle.substring(pos + (bp === '：' ? 1 : 0)).trim();
      
      if (firstLine.length <= 25 && secondLine.length <= 25) {
        return [firstLine, secondLine];
      }
    }
  }
  
  // 強制分行 - 改善邏輯
  const midPoint = Math.floor(cleanTitle.length / 2);
  let breakPoint = midPoint;
  
  // 向前找適當的斷點
  for (let i = midPoint; i >= midPoint - 8 && i > 0; i--) {
    if (['：', '｜', '、', '的', ' ', '-'].includes(cleanTitle[i])) {
      breakPoint = i + (cleanTitle[i] === '：' ? 1 : 0);
      break;
    }
  }
  
  const firstLine = cleanTitle.substring(0, breakPoint).trim();
  const secondLine = cleanTitle.substring(breakPoint).trim();
  
  return [firstLine, secondLine];
}

function generateSVG(title, series = 'ai') {
  const theme = themes[series] || themes.ai;
  const titleLines = processTitle(title);
  
  // 計算文字位置（參考比特幣模式）
  const baseY = titleLines.length === 1 ? 280 : 250;
  const lineSpacing = 50;
  
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .title { 
          font-family: 'Arial', 'PingFang TC', 'Microsoft YaHei', sans-serif; 
          font-size: 40px; 
          font-weight: bold; 
          fill: white;
          text-anchor: middle;
        }
        .subtitle { 
          font-family: 'Arial', 'PingFang TC', 'Microsoft YaHei', sans-serif; 
          font-size: 28px; 
          font-weight: 600; 
          fill: ${theme.primary};
          text-anchor: middle;
        }
      </style>
      <!-- 背景漸層 -->
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:${theme.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
        </radialGradient>
      </defs>
    </defs>
    
    <!-- 背景 -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    
    <!-- 背景紋理 -->
    <defs>
      <pattern id="dots" patternUnits="userSpaceOnUse" width="60" height="60">
        <circle cx="7" cy="7" r="2" fill="${theme.primary}" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#dots)"/>
    
    <!-- 標題 -->
    ${titleLines.map((line, index) => 
      `<text x="600" y="${baseY + index * lineSpacing}" class="title">${line}</text>`
    ).join('\n    ')}
    
    <!-- 副標題 -->
    <text x="600" y="${baseY + titleLines.length * lineSpacing + 80}" class="subtitle">Brian's ${theme.name}</text>
    
    <!-- 底部裝飾線 -->
    <rect x="0" y="622" width="1200" height="8" fill="${theme.primary}"/>
  </svg>`;
}

async function convertSVGToPNG(svgContent, outputPath) {
  // 寫入臨時 SVG 檔案
  const tempSvgPath = outputPath.replace('.png', '.temp.svg');
  await writeFile(tempSvgPath, svgContent);

  try {
    // 使用改進的 ImageMagick 命令，明確指定中文字體支援
    const { execSync } = await import('child_process');

    // 使用多個字體回退選項，確保中文渲染正確
    const command = `magick "${tempSvgPath}" -density 300 -background transparent -resize 1200x630 -quality 95 -font "PingFang-TC-Regular" "${outputPath}"`;

    try {
      execSync(command, { stdio: 'pipe' });
    } catch (fontError) {
      // 如果 PingFang TC 失敗，嘗試其他中文字體
      console.log('嘗試替代字體...');
      const fallbackCommand = `magick "${tempSvgPath}" -density 300 -background transparent -resize 1200x630 -quality 95 -font "Arial-Unicode-MS" "${outputPath}"`;
      try {
        execSync(fallbackCommand, { stdio: 'pipe' });
      } catch (fallbackError) {
        // 最後的回退選項
        const finalCommand = `magick "${tempSvgPath}" -density 300 -background transparent -resize 1200x630 -quality 95 "${outputPath}"`;
        execSync(finalCommand, { stdio: 'pipe' });
      }
    }

    // 清理臨時檔案
    await import('fs').then(fs => fs.unlinkSync(tempSvgPath));

    return true;
  } catch (error) {
    console.error(`轉換失敗: ${error.message}`);
    return false;
  }
}

// 檢查檔案是否需要更新
async function needsUpdate(mdxFilePath, pngFilePath) {
  if (forceRegenerate) {
    return true;
  }
  
  try {
    // 檢查 PNG 檔案是否存在
    await access(pngFilePath);
    
    // 比較文件修改時間
    const mdxStat = await stat(mdxFilePath);
    const pngStat = await stat(pngFilePath);
    
    // 如果 MDX 檔案較新，則需要更新
    return mdxStat.mtime > pngStat.mtime;
  } catch {
    // PNG 檔案不存在，需要生成
    return true;
  }
}

async function processAllContent() {
  const mode = forceRegenerate ? '重新生成所有檔案' : '智慧增量更新';
  console.log(`🎨 開始生成高品質 PNG（${mode}）...`);
  
  const contentDir = join(rootDir, 'src/content');
  const outputDir = join(rootDir, 'public/images/og');
  
  // 確保輸出資料夾存在（包含子目錄）
  await mkdir(join(outputDir, 'ai'), { recursive: true });
  await mkdir(join(outputDir, 'crypto'), { recursive: true });
  await mkdir(join(outputDir, 'startup'), { recursive: true });
  await mkdir(join(outputDir, 'startup/concepts'), { recursive: true });
  await mkdir(join(outputDir, 'startup/book'), { recursive: true });
  await mkdir(join(outputDir, 'startup/thiel'), { recursive: true });
  
  const series = ['ai', 'crypto', 'startup'];
  let totalProcessed = 0;
  let totalGenerated = 0;
  let totalSuccess = 0;
  let totalSkipped = 0;
  
  for (const seriesName of series) {
    console.log(`\\n📖 處理 ${seriesName.toUpperCase()} 系列...`);
    
    try {
      const seriesDir = join(contentDir, seriesName);
      const { processed, generated, success, skipped } = await processSeriesDirectory(seriesDir, seriesName, outputDir);
      totalProcessed += processed;
      totalGenerated += generated;
      totalSuccess += success;
      totalSkipped += skipped;
      
      if (generated > 0) {
        console.log(`✅ ${seriesName} 系列完成，檢查 ${processed} 個檔案，生成 ${generated} 個，成功 ${success} 個`);
      } else {
        console.log(`✅ ${seriesName} 系列完成，檢查 ${processed} 個檔案，無需更新`);
      }
    } catch (error) {
      console.log(`⚠️  跳過 ${seriesName}: ${error.message}`);
    }
  }
  
  console.log(`\\n🎉 全部完成！`);
  console.log(`📊 總計檢查 ${totalProcessed} 個檔案，生成 ${totalGenerated} 個，成功 ${totalSuccess} 個，跳過 ${totalSkipped} 個`);
  console.log('📁 檔案位置: public/images/og/{series}/*.png');
}

async function processSeriesDirectory(dir, series, outputDir) {
  const items = await readdir(dir, { withFileTypes: true });
  let processed = 0;
  let generated = 0;
  let success = 0;
  let skipped = 0;
  
  for (const item of items) {
    if (item.isDirectory()) {
      const subResult = await processSeriesDirectory(join(dir, item.name), series, outputDir);
      processed += subResult.processed;
      generated += subResult.generated;
      success += subResult.success;
      skipped += subResult.skipped;
    } else if (item.name.endsWith('.mdx')) {
      const filePath = join(dir, item.name);
      const content = await readFile(filePath, 'utf-8');
      const { data } = matter(content);
      
      if (data.title) {
        processed++;
        
        // 生成檔名和路徑，保持目錄結構對應
        let fileName;
        let subDir = '';
        
        // 取得相對於 series 目錄的路徑
        const seriesBasePath = join(rootDir, 'src/content', series);
        const relativeDir = dir.replace(seriesBasePath, '').replace(/^\//, '');
        if (relativeDir) {
          subDir = relativeDir + '/';
        }
        
        if (item.name === 'complete-guide.mdx') {
          fileName = 'complete-guide.png';
        } else {
          fileName = item.name.replace('.mdx', '.png');
        }
        
        // 構建完整輸出路徑，保持目錄結構
        const outputPath = join(outputDir, series, subDir, fileName);
        
        // 檢查是否需要更新
        const shouldUpdate = await needsUpdate(filePath, outputPath);
        
        if (!shouldUpdate) {
          console.log(`  ⏭️  跳過: ${fileName} (已是最新)`);
          skipped++;
          continue;
        }
        
        // 確保輸出目錄存在
        await mkdir(dirname(outputPath), { recursive: true });
        
        try {
          console.log(`  🎨 生成: ${fileName}`);
          const svg = generateSVG(data.title, series);
          const isSuccess = await convertSVGToPNG(svg, outputPath);
          
          if (isSuccess) {
            console.log(`  ✅ 完成: ${fileName}`);
            success++;
          } else {
            console.log(`  ❌ 失敗: ${fileName}`);
          }
          generated++;
        } catch (error) {
          console.error(`  ❌ 生成失敗 ${fileName}:`, error.message);
          generated++;
        }
      }
    }
  }
  
  return { processed, generated, success, skipped };
}

// 執行生成
processAllContent().catch(console.error);