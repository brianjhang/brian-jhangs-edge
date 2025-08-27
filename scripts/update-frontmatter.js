#!/usr/bin/env node

/**
 * 批量更新文章 frontmatter 將 SVG 改為 PNG
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 檔案對應表
const updateMapping = [
  // Crypto 系列
  { file: 'src/content/crypto/eth/complete-guide.mdx', old: 'ethereum-complete-guide.svg', new: 'ethereum-complete-guide.png' },
  { file: 'src/content/crypto/bnb/complete-guide.mdx', old: 'bnb-complete-guide.svg', new: 'bnb-complete-guide.png' },
  { file: 'src/content/crypto/sol/complete-guide.mdx', old: 'solana-complete-guide.svg', new: 'solana-complete-guide.png' },
  { file: 'src/content/crypto/coins/cardano-complete-guide.mdx', old: 'cardano-complete-guide.svg', new: 'cardano-complete-guide.png' },
  { file: 'src/content/crypto/top-10/doge-complete-guide.mdx', old: 'doge-complete-guide.svg', new: 'doge-complete-guide.png' },
  { file: 'src/content/crypto/xrp/complete-guide.mdx', old: 'xrp-complete-guide.svg', new: 'xrp-complete-guide.png' },
  { file: 'src/content/crypto/usdc/usdc-complete-guide.mdx', old: 'usdc-complete-guide.svg', new: 'usdc-complete-guide.png' },
  { file: 'src/content/crypto/usdt/complete-guide.mdx', old: 'usdt-complete-guide.svg', new: 'usdt-complete-guide.png' },
  
  // AI 系列
  { file: 'src/content/ai/llm/claude-complete-guide.mdx', old: 'claude-complete-guide.svg', new: 'claude-complete-guide.png' },
  { file: 'src/content/ai/llm/chatgpt-complete-guide.mdx', old: 'chatgpt-complete-guide.svg', new: 'chatgpt-complete-guide.png' },
  { file: 'src/content/ai/llm/prompt-engineering-complete-guide.mdx', old: 'prompt-engineering-complete-guide.svg', new: 'prompt-engineering-complete-guide.png' },
  { file: 'src/content/ai/projects/claude-4-sonnet-complete-guide.mdx', old: 'claude-4-sonnet-complete-guide.svg', new: 'claude-4-sonnet-complete-guide.png' },
  { file: 'src/content/ai/practical/fine-tuning-complete-guide.mdx', old: 'fine-tuning-complete-guide.svg', new: 'fine-tuning-complete-guide.png' },
  { file: 'src/content/ai/tools/notebooklm-ultimate-guide.mdx', old: 'notebooklm-ultimate-guide.svg', new: 'notebooklm-ultimate-guide.png' },
  { file: 'src/content/ai/llm/transformer-architecture.mdx', old: 'transformer-architecture.svg', new: 'transformer-architecture.png' },
  { file: 'src/content/ai/trends/ai-agent-technology.mdx', old: 'ai-agent-technology.svg', new: 'ai-agent-technology.png' },
  { file: 'src/content/ai/trends/o1-reasoning-revolution.mdx', old: 'o1-reasoning-revolution.svg', new: 'o1-reasoning-revolution.png' },
  
  // Startup 系列
  { file: 'src/content/startup/concepts/ai-native-lean-startup-pgv.mdx', old: 'ai-native-lean-startup-pgv.svg', new: 'ai-native-lean-startup-pgv.png' },
  { file: 'src/content/startup/book/naval-compound-interest-mindset.mdx', old: 'naval-compound-interest-mindset.svg', new: 'naval-compound-interest-mindset.png' },
  { file: 'src/content/startup/book/naval-long-term-games.mdx', old: 'naval-long-term-games.svg', new: 'naval-long-term-games.png' },
  { file: 'src/content/startup/book/naval-specific-knowledge-moat.mdx', old: 'naval-specific-knowledge-moat.svg', new: 'naval-specific-knowledge-moat.png' },
  { file: 'src/content/startup/book/naval-perpetual-learner.mdx', old: 'naval-perpetual-learner.svg', new: 'naval-perpetual-learner.png' },
  { file: 'src/content/startup/book/naval-wealth-principles.mdx', old: 'naval-wealth-principles.svg', new: 'naval-wealth-principles.png' },
  { file: 'src/content/startup/book/naval-sales-build.mdx', old: 'naval-sales-build.svg', new: 'naval-sales-build.png' },
  { file: 'src/content/startup/book/zero-to-one-competition-myth.mdx', old: 'zero-to-one-competition-myth.svg', new: 'zero-to-one-competition-myth.png' },
  { file: 'src/content/startup/thiel/contrarian-thinking-ultimate-guide.mdx', old: 'contrarian-thinking-ultimate-guide.svg', new: 'contrarian-thinking-ultimate-guide.png' }
];

function updateFrontmatter() {
  let updatedCount = 0;
  let errorCount = 0;

  console.log('🚀 開始批量更新 frontmatter...');

  for (const mapping of updateMapping) {
    const filePath = path.join(__dirname, '..', mapping.file);
    
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const oldContent = content;
        
        // 替換 ogImage 路徑
        content = content.replace(
          new RegExp(mapping.old.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g'),
          mapping.new
        );
        
        if (content !== oldContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✓ 更新: ${mapping.file}`);
          console.log(`  ${mapping.old} -> ${mapping.new}`);
          updatedCount++;
        } else {
          console.log(`⚠️  未找到需要更新的內容: ${mapping.file}`);
        }
      } else {
        console.log(`❌ 檔案不存在: ${filePath}`);
        errorCount++;
      }
    } catch (error) {
      console.error(`❌ 更新失敗: ${mapping.file}`, error.message);
      errorCount++;
    }
  }

  console.log('');
  console.log('📊 更新統計:');
  console.log(`✅ 成功更新: ${updatedCount} 個檔案`);
  console.log(`❌ 失敗或跳過: ${errorCount} 個檔案`);
  console.log('');
  console.log('🎉 批量更新完成！');
}

updateFrontmatter();