#!/usr/bin/env node

/**
 * SVG OG 圖片生成器
 * 用途: 生成 SVG 格式的 Open Graph 圖片
 * 注意: 目前項目使用 PNG 格式，此工具保留供參考
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// 創建一個簡單的 SVG 圖片生成器
function generateOGImage(title, series = 'ai') {
  const themes = {
    ai: { bg: '#0f172a', primary: '#60a5fa', emoji: '🤖', name: 'AI小百科' },
    crypto: { bg: '#0c0a09', primary: '#fbbf24', emoji: '💰', name: '幣圈筆記' },
    startup: { bg: '#0a0a0a', primary: '#f97316', emoji: '🚀', name: '創業筆記' }
  };
  
  const theme = themes[series] || themes.ai;
  
  // 智慧分行處理標題
  function splitTitle(text) {
    // 如果標題短，直接返回
    if (text.length <= 25) return [text];
    
    // 移除 series 標記，專注於主標題
    const cleanTitle = text.replace(/｜Brian's (AI小百科|幣圈筆記|創業筆記)$/, '');
    
    if (cleanTitle.length <= 25) return [cleanTitle];
    
    // 尋找適當的斷點 - 優先使用標點符號
    const breakPoints = ['：', '｜', '、', '的', '與', '如何', '為什麼'];
    
    for (const bp of breakPoints) {
      const pos = cleanTitle.indexOf(bp);
      if (pos > 10 && pos < 30) {
        const firstLine = cleanTitle.substring(0, pos + bp.length);
        const secondLine = cleanTitle.substring(pos + bp.length).trim();
        
        if (secondLine.length > 0 && firstLine.length <= 25 && secondLine.length <= 25) {
          return [firstLine, secondLine];
        }
      }
    }
    
    // 如果找不到好的斷點，在空格或適當位置分割
    const midPoint = Math.floor(cleanTitle.length / 2);
    let breakPoint = midPoint;
    
    // 向前找空格或標點
    for (let i = midPoint; i >= midPoint - 5 && i > 0; i--) {
      if ([' ', '、', '，'].includes(cleanTitle[i])) {
        breakPoint = i + 1;
        break;
      }
    }
    
    const firstLine = cleanTitle.substring(0, breakPoint).trim();
    const secondLine = cleanTitle.substring(breakPoint).trim();
    
    return firstLine.length > 25 || secondLine.length > 25 
      ? [cleanTitle.substring(0, 25) + '...']
      : [firstLine, secondLine];
  }
  
  const titleLines = splitTitle(title);
  
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .title { 
          font-family: 'Arial', sans-serif; 
          font-size: 40px; 
          font-weight: bold; 
          fill: white;
          text-anchor: middle;
        }
        .subtitle { 
          font-family: 'Arial', sans-serif; 
          font-size: 28px; 
          font-weight: 600; 
          fill: ${theme.primary};
          text-anchor: middle;
        }
        .emoji {
          font-size: 100px;
          text-anchor: middle;
        }
      </style>
    </defs>
    
    <!-- 背景 -->
    <rect width="1200" height="630" fill="${theme.bg}"/>
    
    <!-- Emoji -->
    <text x="600" y="180" class="emoji">${theme.emoji}</text>
    
    <!-- 標題 -->
    ${titleLines.map((line, index) => 
      `<text x="600" y="${280 + index * 50}" class="title">${line}</text>`
    ).join('\n    ')}
    
    <!-- 副標題 -->
    <text x="600" y="${titleLines.length === 1 ? 380 : 430}" class="subtitle">Brian's ${theme.name}</text>
    
    <!-- 底部裝飾線 -->
    <rect x="0" y="622" width="1200" height="8" fill="${theme.primary}"/>
  </svg>`;
}

async function processContent() {
  const contentDir = join(rootDir, 'src/content');
  const outputDir = join(rootDir, 'public/images/og');
  
  // 確保輸出資料夾存在
  await mkdir(join(outputDir, 'ai'), { recursive: true });
  await mkdir(join(outputDir, 'crypto'), { recursive: true });
  await mkdir(join(outputDir, 'startup'), { recursive: true });
  
  // 處理各個系列
  const series = ['ai', 'crypto', 'startup'];
  
  for (const seriesName of series) {
    const seriesDir = join(contentDir, seriesName);
    
    try {
      await processDirectory(seriesDir, seriesName, outputDir);
    } catch (error) {
      console.log(`Skipping ${seriesName}: ${error.message}`);
    }
  }
}

async function processDirectory(dir, series, outputDir) {
  const items = await readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    if (item.isDirectory()) {
      await processDirectory(join(dir, item.name), series, outputDir);
    } else if (item.name.endsWith('.mdx')) {
      const filePath = join(dir, item.name);
      const content = await readFile(filePath, 'utf-8');
      const { data } = matter(content);
      
      if (data.title) {
        const slug = item.name.replace('.mdx', '');
        const svgContent = generateOGImage(data.title, series);
        const outputPath = join(outputDir, series, `${slug}.svg`);
        
        await writeFile(outputPath, svgContent);
        console.log(`Generated: ${outputPath}`);
      }
    }
  }
}

// 執行生成
processContent().catch(console.error);