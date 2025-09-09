/**
 * 計算預估閱讀時間
 * @param {string} content - 文章內容
 * @returns {number} 預估閱讀時間（分鐘）
 */
export function calculateReadingTime(content) {
  if (!content) return 0;
  
  // 移除 markdown 標記和特殊字符
  const plainText = content
    .replace(/!\[.*?\]\(.*?\)/g, '') // 移除圖片
    .replace(/\[.*?\]\(.*?\)/g, '') // 移除連結
    .replace(/```[\s\S]*?```/g, '') // 移除代碼塊
    .replace(/`.*?`/g, '') // 移除行內代碼
    .replace(/#+ /g, '') // 移除標題符號
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗體
    .replace(/\*(.*?)\*/g, '$1') // 移除斜體
    .replace(/\n+/g, ' ') // 替換換行符
    .trim();

  // 中文字符數 + 英文詞數
  const chineseChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (plainText.match(/[a-zA-Z]+/g) || []).length;
  
  // 中文閱讀速度約400字/分鐘，英文約200詞/分鐘
  const readingTimeMinutes = (chineseChars / 400) + (englishWords / 200);
  
  // 至少1分鐘，四捨五入
  return Math.max(1, Math.round(readingTimeMinutes));
}

/**
 * 格式化閱讀時間顯示
 * @param {number} minutes - 預估分鐘數
 * @returns {string} 格式化字符串
 */
export function formatReadingTime(minutes) {
  if (minutes === 1) return '1分鐘';
  return `${minutes}分鐘`;
}