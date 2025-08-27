#!/usr/bin/env node

/**
 * SVG to PNG 批量轉換腳本
 * 需要安裝: npm install sharp
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 檔案對應表
const fileMapping = {
  // Crypto 系列
  'ethereum-complete-guide.svg': 'ethereum-complete-guide.png',
  'bnb-complete-guide.svg': 'bnb-complete-guide.png',
  'solana-complete-guide.svg': 'solana-complete-guide.png',
  'cardano-complete-guide.svg': 'cardano-complete-guide.png',
  'doge-complete-guide.svg': 'doge-complete-guide.png',
  'xrp-complete-guide.svg': 'xrp-complete-guide.png',
  'usdc-complete-guide.svg': 'usdc-complete-guide.png',
  'usdt-complete-guide.svg': 'usdt-complete-guide.png',
  
  // AI 系列
  'claude-complete-guide.svg': 'claude-complete-guide.png',
  'chatgpt-complete-guide.svg': 'chatgpt-complete-guide.png',
  'prompt-engineering-complete-guide.svg': 'prompt-engineering-complete-guide.png',
  'claude-4-sonnet-complete-guide.svg': 'claude-4-sonnet-complete-guide.png',
  'fine-tuning-complete-guide.svg': 'fine-tuning-complete-guide.png',
  'notebooklm-ultimate-guide.svg': 'notebooklm-ultimate-guide.png',
  'transformer-architecture.svg': 'transformer-architecture.png',
  'ai-agent-technology.svg': 'ai-agent-technology.png',
  'o1-reasoning-revolution.svg': 'o1-reasoning-revolution.png',
  
  // Startup 系列
  'ai-native-lean-startup-pgv.svg': 'ai-native-lean-startup-pgv.png',
  'naval-compound-interest-mindset.svg': 'naval-compound-interest-mindset.png',
  'naval-long-term-games.svg': 'naval-long-term-games.png',
  'naval-specific-knowledge-moat.svg': 'naval-specific-knowledge-moat.png',
  'naval-perpetual-learner.svg': 'naval-perpetual-learner.png',
  'naval-wealth-principles.svg': 'naval-wealth-principles.png',
  'naval-sales-build.svg': 'naval-sales-build.png',
  'zero-to-one-competition-myth.svg': 'zero-to-one-competition-myth.png',
  'contrarian-thinking-ultimate-guide.svg': 'contrarian-thinking-ultimate-guide.png'
};

const basePath = path.join(__dirname, '..', 'public', 'images', 'og');

async function convertSvgToPng() {
  try {
    // 檢查是否安裝了 sharp
    try {
      require('sharp');
    } catch (error) {
      console.log('正在安裝 sharp...');
      execSync('npm install sharp', { stdio: 'inherit' });
    }

    const sharp = require('sharp');
    
    for (const [svgFile, pngFile] of Object.entries(fileMapping)) {
      const series = getSeriesFromFile(svgFile);
      const svgPath = path.join(basePath, series, svgFile);
      const pngPath = path.join(basePath, series, pngFile);
      
      if (fs.existsSync(svgPath)) {
        console.log(`轉換: ${svgFile} -> ${pngFile}`);
        
        await sharp(svgPath)
          .resize(1200, 630)
          .png()
          .toFile(pngPath);
          
        console.log(`✓ 完成: ${pngPath}`);
      } else {
        console.log(`⚠️  檔案不存在: ${svgPath}`);
      }
    }
    
    console.log('\\n🎉 批量轉換完成！');
    
  } catch (error) {
    console.error('轉換失敗:', error);
  }
}

function getSeriesFromFile(filename) {
  if (filename.includes('ethereum') || filename.includes('bitcoin') || 
      filename.includes('bnb') || filename.includes('solana') ||
      filename.includes('cardano') || filename.includes('doge') ||
      filename.includes('xrp') || filename.includes('usdc') || 
      filename.includes('usdt')) {
    return 'crypto';
  } else if (filename.includes('claude') || filename.includes('chatgpt') ||
             filename.includes('prompt') || filename.includes('fine-tuning') ||
             filename.includes('notebooklm') || filename.includes('transformer') ||
             filename.includes('ai-agent') || filename.includes('o1-reasoning')) {
    return 'ai';
  } else {
    return 'startup';
  }
}

convertSvgToPng();