// FAQ 解析器 - 將 Markdown FAQ 內容轉換為結構化 Schema
// 用於 GEO 優化，提升 FAQ 內容在 AI 搜尋引擎中的表現

/**
 * 解析文章內容中的 FAQ 結構
 * @param {string} content 文章內容
 * @param {string} title 文章標題
 * @returns {Object|null} FAQ Schema 或 null
 */
export function parseFAQ(content, title) {
  // 檢查是否包含 FAQ 內容
  const hasFAQ = content.includes('FAQ') ||
                 content.includes('常見問題') ||
                 content.includes('Q:') ||
                 content.includes('問:') ||
                 content.includes('Q1:') ||
                 content.includes('**Q');

  if (!hasFAQ) {
    return null;
  }

  // 提取 FAQ 問答對
  const faqPairs = extractFAQPairs(content);

  if (faqPairs.length === 0) {
    return null;
  }

  // 生成 FAQ Schema
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${title} - 常見問題`,
    "description": `關於 ${title} 的常見問題解答`,
    "mainEntity": faqPairs.map((faq, index) => ({
      "@type": "Question",
      "position": index + 1,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Person",
          "name": "Brian Jhang"
        }
      }
    }))
  };
}

/**
 * 從內容中提取 FAQ 問答對
 * @param {string} content 文章內容
 * @returns {Array} FAQ 問答對陣列
 */
function extractFAQPairs(content) {
  const faqPairs = [];

  // 各種 FAQ 格式的正則表達式
  const patterns = [
    // **Q1: 問題** \n A: 答案格式
    /\*\*Q\d*:?\s*([^*]+?)\*\*\s*\n\s*A:?\s*([^*\n]+(?:\n(?!\*\*Q)[^\n]*)*)/gi,

    // Q: 問題 \n A: 答案格式
    /Q:?\s*([^\n]+?)\s*\n\s*A:?\s*([^Q\n]+(?:\n(?!Q:)[^\n]*)*)/gi,

    // 問: 問題 \n 答: 答案格式
    /問:?\s*([^\n]+?)\s*\n\s*答:?\s*([^問\n]+(?:\n(?!問:)[^\n]*)*)/gi,

    // **問題內容**格式（不含Q:標記）
    /\*\*([^*]+?\?)\*\*\s*\n\s*([^*\n]+(?:\n(?!\*\*)[^\n]*)*)/gi
  ];

  // 嘗試各種格式
  for (const pattern of patterns) {
    const matches = [...content.matchAll(pattern)];

    for (const match of matches) {
      const question = cleanText(match[1]);
      const answer = cleanText(match[2]);

      if (question && answer && question.length > 5 && answer.length > 10) {
        faqPairs.push({
          question: question,
          answer: answer
        });
      }
    }
  }

  // 去重複
  const uniqueFAQs = [];
  const seenQuestions = new Set();

  for (const faq of faqPairs) {
    const normalizedQuestion = faq.question.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!seenQuestions.has(normalizedQuestion)) {
      seenQuestions.add(normalizedQuestion);
      uniqueFAQs.push(faq);
    }
  }

  return uniqueFAQs;
}

/**
 * 清理文本內容
 * @param {string} text 原始文本
 * @returns {string} 清理後的文本
 */
function cleanText(text) {
  if (!text) return '';

  return text
    .replace(/\n+/g, ' ') // 替換換行符為空格
    .replace(/\s+/g, ' ') // 合併多個空格
    .replace(/[*_`]/g, '') // 移除 Markdown 格式符號
    .trim(); // 去除首尾空格
}

/**
 * 驗證 FAQ Schema 是否有效
 * @param {Object} schema FAQ Schema
 * @returns {boolean} 是否有效
 */
export function validateFAQSchema(schema) {
  if (!schema || schema['@type'] !== 'FAQPage') {
    return false;
  }

  if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
    return false;
  }

  return schema.mainEntity.every(entity =>
    entity['@type'] === 'Question' &&
    entity.name &&
    entity.acceptedAnswer &&
    entity.acceptedAnswer['@type'] === 'Answer' &&
    entity.acceptedAnswer.text
  );
}