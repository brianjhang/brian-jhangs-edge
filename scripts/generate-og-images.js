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
  
  // 截斷過長標題
  const truncatedTitle = title.length > 50 ? title.substring(0, 50) + '...' : title;
  
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .title { 
          font-family: 'Arial', sans-serif; 
          font-size: 48px; 
          font-weight: bold; 
          fill: white;
          text-anchor: middle;
        }
        .subtitle { 
          font-family: 'Arial', sans-serif; 
          font-size: 32px; 
          font-weight: 600; 
          fill: ${theme.primary};
          text-anchor: middle;
        }
        .emoji {
          font-size: 120px;
          text-anchor: middle;
        }
      </style>
    </defs>
    
    <!-- 背景 -->
    <rect width="1200" height="630" fill="${theme.bg}"/>
    
    <!-- Emoji -->
    <text x="600" y="200" class="emoji">${theme.emoji}</text>
    
    <!-- 標題 -->
    <text x="600" y="320" class="title">${truncatedTitle}</text>
    
    <!-- 副標題 -->
    <text x="600" y="400" class="subtitle">Brian's ${theme.name}</text>
    
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