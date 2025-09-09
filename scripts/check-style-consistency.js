#!/usr/bin/env node

/**
 * 檢查樣式一致性腳本
 * 用於確保各頁面使用全域樣式，避免重複定義
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 需要檢查的重複樣式模式
const duplicatePatterns = [
  /\.tag\s*\{[^}]+\}/g,
  /\.difficulty\s*\{[^}]+\}/g,
  /\.category\s*\{[^}]+\}/g,
  /\.breadcrumb\s*\{[^}]+\}/g
];

// 需要檢查的檔案
const filesToCheck = [
  'src/pages/**/*.astro',
  'src/components/**/*.astro',
  'src/layouts/**/*.astro'
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  duplicatePatterns.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        type: ['tag', 'difficulty', 'category', 'breadcrumb'][index],
        matches: matches
      });
    }
  });
  
  return issues;
}

function main() {
  console.log('🔍 檢查樣式一致性...\n');
  
  let totalIssues = 0;
  
  filesToCheck.forEach(pattern => {
    const files = glob.sync(pattern);
    
    files.forEach(file => {
      // 跳過 global.css
      if (file.includes('global.css')) return;
      
      const issues = checkFile(file);
      
      if (issues.length > 0) {
        console.log(`⚠️  ${file}:`);
        issues.forEach(issue => {
          console.log(`   - 發現重複定義的 .${issue.type} 樣式`);
          totalIssues++;
        });
        console.log('');
      }
    });
  });
  
  if (totalIssues === 0) {
    console.log('✅ 樣式一致性檢查通過！沒有發現重複定義。');
  } else {
    console.log(`❌ 發現 ${totalIssues} 個樣式重複定義問題。`);
    console.log('💡 建議: 移除這些重複定義，使用 /src/styles/global.css 中的全域樣式。');
    console.log('📖 詳細指南: /docs/GLOBAL_STYLES_GUIDE.md');
  }
}

main();