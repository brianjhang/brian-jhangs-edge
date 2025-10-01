#!/usr/bin/env node

/**
 * Frontmatter 自動驗證工具
 * 檢查所有 MDX 文章的 frontmatter 格式是否符合規範
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = 'src/content';
const SERIES = ['ai', 'crypto', 'startup', 'build'];

// 必填欄位定義
const REQUIRED_FIELDS = {
  common: ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary', 'keywords', 'tags', 'difficulty', 'featured'],
  crypto: ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary', 'keywords', 'tags', 'difficulty', 'featured'],
  startup: ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary', 'keywords', 'tags', 'difficulty', 'featured'],
  ai: ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary', 'keywords', 'tags', 'difficulty', 'featured'],
  build: ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary', 'difficulty']
};

// 類別定義
const VALID_CATEGORIES = {
  ai: ['tools', 'trends', 'concepts', 'practical', 'llm', 'databases', 'gemini', 'projects'],
  crypto: ['btc', 'eth', 'sol', 'concepts', 'rwa', 'defi', 'nft', 'layer2'],
  startup: ['concepts', 'book', 'naval', 'thiel', 'bezos', 'lean'],
  build: ['log', 'update', 'feature']
};

// 難度等級
const VALID_DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];

// 語言代碼
const VALID_LANGUAGES = ['zh-TW', 'en', 'zh-CN', 'ja-JP'];

// 統計數據
const stats = {
  total: 0,
  passed: 0,
  failed: 0,
  warnings: 0,
  errors: []
};

/**
 * 驗證 slug 格式
 */
function validateSlugFormat(slug, series, filePath) {
  const issues = [];

  // 檢查是否為新格式
  const newFormatRegex = /^(en\/)?(ai|crypto|startup|build)\/.+$/;

  if (!newFormatRegex.test(slug)) {
    issues.push({
      severity: 'error',
      field: 'slug',
      message: `Slug 格式不符合新標準。應為 "${series}/category/article-name" 或 "en/${series}/category/article-name"`,
      current: slug,
      file: filePath
    });
  }

  // 檢查是否包含正確的系列前綴
  if (!slug.includes(`${series}/`) && !slug.includes(`en/${series}/`)) {
    issues.push({
      severity: 'error',
      field: 'slug',
      message: `Slug 應包含系列前綴 "${series}/"`,
      current: slug,
      file: filePath
    });
  }

  // 檢查是否使用舊格式（語言後綴）
  if (slug.endsWith('-en') || slug.endsWith('-zh-tw')) {
    issues.push({
      severity: 'error',
      field: 'slug',
      message: '不應使用舊的語言後綴格式（-en, -zh-tw）',
      current: slug,
      file: filePath
    });
  }

  return issues;
}

/**
 * 驗證必填欄位
 */
function validateRequiredFields(data, series, filePath) {
  const issues = [];
  const requiredFields = REQUIRED_FIELDS[series] || REQUIRED_FIELDS.common;

  for (const field of requiredFields) {
    if (!data[field] && data[field] !== false) {
      issues.push({
        severity: 'error',
        field: field,
        message: `缺少必填欄位`,
        file: filePath
      });
    }
  }

  return issues;
}

/**
 * 驗證字串欄位格式
 */
function validateStringFields(data, filePath) {
  const issues = [];
  const stringFields = ['title', 'description', 'date', 'updated', 'series', 'category', 'slug', 'type', 'lang', 'summary'];

  for (const field of stringFields) {
    if (data[field] && typeof data[field] !== 'string') {
      issues.push({
        severity: 'error',
        field: field,
        message: `應為字串格式，請使用引號包裹`,
        current: typeof data[field],
        file: filePath
      });
    }
  }

  return issues;
}

/**
 * 驗證類別
 */
function validateCategory(category, series, filePath) {
  const issues = [];
  const validCategories = VALID_CATEGORIES[series];

  if (validCategories && !validCategories.includes(category)) {
    issues.push({
      severity: 'warning',
      field: 'category',
      message: `類別可能不正確`,
      current: category,
      expected: validCategories.join(', '),
      file: filePath
    });
  }

  return issues;
}

/**
 * 驗證難度
 */
function validateDifficulty(difficulty, filePath) {
  const issues = [];

  if (difficulty && !VALID_DIFFICULTIES.includes(difficulty)) {
    issues.push({
      severity: 'error',
      field: 'difficulty',
      message: `難度等級不正確`,
      current: difficulty,
      expected: VALID_DIFFICULTIES.join(', '),
      file: filePath
    });
  }

  return issues;
}

/**
 * 驗證語言
 */
function validateLanguage(lang, filePath) {
  const issues = [];

  if (lang && !VALID_LANGUAGES.includes(lang)) {
    issues.push({
      severity: 'warning',
      field: 'lang',
      message: `語言代碼可能不正確`,
      current: lang,
      expected: VALID_LANGUAGES.join(', '),
      file: filePath
    });
  }

  return issues;
}

/**
 * 驗證陣列欄位
 */
function validateArrayFields(data, filePath) {
  const issues = [];
  const arrayFields = ['keywords', 'tags'];

  for (const field of arrayFields) {
    if (data[field]) {
      if (!Array.isArray(data[field])) {
        issues.push({
          severity: 'error',
          field: field,
          message: `應為陣列格式`,
          current: typeof data[field],
          file: filePath
        });
      } else if (data[field].length === 0) {
        issues.push({
          severity: 'warning',
          field: field,
          message: `陣列為空`,
          file: filePath
        });
      }
    }
  }

  return issues;
}

/**
 * 驗證日期格式
 */
function validateDateFormat(date, fieldName, filePath) {
  const issues = [];
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (date && !dateRegex.test(date)) {
    issues.push({
      severity: 'error',
      field: fieldName,
      message: `日期格式不正確，應為 YYYY-MM-DD`,
      current: date,
      file: filePath
    });
  }

  return issues;
}

/**
 * 驗證單個文章
 */
function validateArticle(filePath, content) {
  const issues = [];

  try {
    const { data } = matter(content);
    const series = data.series;

    // 必填欄位檢查
    issues.push(...validateRequiredFields(data, series, filePath));

    // 字串格式檢查
    issues.push(...validateStringFields(data, filePath));

    // Slug 格式檢查
    if (data.slug) {
      issues.push(...validateSlugFormat(data.slug, series, filePath));
    }

    // 類別檢查
    if (data.category) {
      issues.push(...validateCategory(data.category, series, filePath));
    }

    // 難度檢查
    if (data.difficulty) {
      issues.push(...validateDifficulty(data.difficulty, filePath));
    }

    // 語言檢查
    if (data.lang) {
      issues.push(...validateLanguage(data.lang, filePath));
    }

    // 陣列欄位檢查
    issues.push(...validateArrayFields(data, filePath));

    // 日期格式檢查
    if (data.date) {
      issues.push(...validateDateFormat(data.date, 'date', filePath));
    }
    if (data.updated) {
      issues.push(...validateDateFormat(data.updated, 'updated', filePath));
    }

    return issues;

  } catch (error) {
    return [{
      severity: 'error',
      field: 'parsing',
      message: `無法解析 frontmatter: ${error.message}`,
      file: filePath
    }];
  }
}

/**
 * 掃描系列目錄
 */
async function scanSeries(series) {
  const seriesDir = join(CONTENT_DIR, series);
  const files = await readdir(seriesDir, { recursive: true });

  for (const file of files) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

    stats.total++;
    const filePath = join(seriesDir, file);
    const content = await readFile(filePath, 'utf-8');
    const issues = validateArticle(filePath, content);

    if (issues.length === 0) {
      stats.passed++;
    } else {
      stats.failed++;

      const errors = issues.filter(i => i.severity === 'error');
      const warnings = issues.filter(i => i.severity === 'warning');

      stats.errors.push({
        file: filePath,
        errors,
        warnings
      });

      stats.warnings += warnings.length;
    }
  }
}

/**
 * 顯示報告
 */
function displayReport() {
  console.log('\n📋 Frontmatter 驗證報告');
  console.log('='.repeat(60));
  console.log(`📊 總計檢查: ${stats.total} 個文章`);
  console.log(`✅ 通過: ${stats.passed}`);
  console.log(`❌ 失敗: ${stats.failed}`);
  console.log(`⚠️  警告: ${stats.warnings}`);

  if (stats.errors.length > 0) {
    console.log('\n🔍 詳細錯誤:');
    console.log('='.repeat(60));

    for (const { file, errors, warnings } of stats.errors) {
      const relPath = file.replace(CONTENT_DIR + '/', '');
      console.log(`\n📄 ${relPath}`);

      if (errors.length > 0) {
        console.log('  ❌ 錯誤:');
        for (const error of errors) {
          console.log(`     • [${error.field}] ${error.message}`);
          if (error.current) console.log(`       當前值: ${error.current}`);
          if (error.expected) console.log(`       期望值: ${error.expected}`);
        }
      }

      if (warnings.length > 0) {
        console.log('  ⚠️  警告:');
        for (const warning of warnings) {
          console.log(`     • [${warning.field}] ${warning.message}`);
          if (warning.current) console.log(`       當前值: ${warning.current}`);
          if (warning.expected) console.log(`       建議值: ${warning.expected}`);
        }
      }
    }
  }

  console.log('\n' + '='.repeat(60));

  if (stats.failed === 0) {
    console.log('✅ 所有文章 frontmatter 格式正確！');
  } else {
    console.log(`❌ 發現 ${stats.failed} 個文章需要修正`);
    process.exit(1);
  }
}

/**
 * 主函數
 */
async function main() {
  console.log('🔍 開始驗證 Frontmatter...\n');

  for (const series of SERIES) {
    console.log(`📁 掃描系列: ${series}`);
    await scanSeries(series);
  }

  displayReport();
}

main().catch(console.error);
