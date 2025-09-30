/**
 * 智能連結生成工具
 * 用於多語言內容回退策略 Phase 2
 */

export interface Article {
  slug: string;
  id: string;
  data: {
    lang?: string;
    series: string;
    category?: string;
    [key: string]: any;
  };
}

export interface TranslationStatus {
  exists: boolean;
  url?: string;
}

/**
 * 從 slug 推斷語言
 * @param slug 文章 slug
 * @returns 語言代碼 ('en', 'zh-TW', 等)
 */
export function getLanguageFromSlug(slug: string): string {
  const languageCodes = ['en', 'zh-cn', 'ja-jp', 'ko-kr'];
  const slugParts = slug.split('/');
  return languageCodes.includes(slugParts[0]) ? slugParts[0] : 'zh-TW';
}

/**
 * 檢查文章是否有指定語言的翻譯
 * @param article 文章物件
 * @param targetLang 目標語言
 * @param translationMap 翻譯映射表
 * @returns 翻譯狀態
 */
export function hasTranslation(
  article: Article,
  targetLang: string,
  translationMap: Record<string, Record<string, string | null>>
): TranslationStatus {
  // 獲取文章的基礎 slug（不含語言前綴）
  const baseSlug = getBaseSlug(article.slug, article.data.series);

  // 檢查翻譯映射表
  const translations = translationMap[baseSlug];
  if (!translations) {
    return { exists: false };
  }

  const translatedUrl = translations[targetLang];
  return {
    exists: !!translatedUrl,
    url: translatedUrl || undefined
  };
}

/**
 * 獲取文章的基礎 slug（不含語言和系列前綴）
 * @param slug 完整 slug
 * @param series 系列名稱
 * @returns 基礎 slug
 */
export function getBaseSlug(slug: string, series: string): string {
  let baseSlug = slug;

  // 移除語言前綴
  if (baseSlug.startsWith('en/')) {
    baseSlug = baseSlug.replace('en/', '');
  }

  // 移除系列前綴
  const seriesPrefix = `${series}/`;
  if (baseSlug.startsWith(seriesPrefix)) {
    baseSlug = baseSlug.replace(seriesPrefix, '');
  }

  return baseSlug;
}

/**
 * 生成文章連結的智能邏輯
 * @param article 文章物件
 * @param currentInterfaceLang 當前介面語言
 * @param translationMap 翻譯映射表
 * @returns 最終生成的 URL
 */
export function generateArticleLink(
  article: Article,
  currentInterfaceLang: string,
  translationMap: Record<string, Record<string, string | null>>
): string {
  const translationStatus = hasTranslation(article, currentInterfaceLang, translationMap);
  const series = article.data.series;

  // 如果存在目標語言版本，返回翻譯 URL
  if (translationStatus.exists && translationStatus.url) {
    return `/${translationStatus.url}`;
  }

  // 不存在翻譯版本，根據目標語言生成對應的 URL
  const articleLang = article.data.lang || getLanguageFromSlug(article.slug);

  // 如果原文就是目標語言，直接返回 canonical URL
  if (articleLang === currentInterfaceLang) {
    const canonicalUrl = getCanonicalUrl(article);
    return `/${canonicalUrl}`;
  }

  // 原文與目標語言不同，返回目標語言的 URL（觸發 Smart Fallback）
  const baseSlug = getBaseSlug(article.slug, series);

  if (currentInterfaceLang === 'en') {
    // 英文介面：返回英文路由，由英文模板處理 Fallback
    return `/en/${series}/${baseSlug}`;
  }

  // 中文介面（預設）：返回中文路由
  return `/${series}/${baseSlug}`;
}

/**
 * 獲取文章的 canonical URL（原始語言版本）
 * @param article 文章物件
 * @returns canonical URL
 */
export function getCanonicalUrl(article: Article): string {
  const lang = article.data.lang || getLanguageFromSlug(article.slug);
  const series = article.data.series;
  let url = article.slug;

  // 如果是中文（預設語言），返回不含語言前綴的 URL
  if (lang === 'zh-TW' || lang === 'zh-tw') {
    url = url.replace(/^en\//, '');

    // 確保 URL 包含 series 前綴
    const seriesPrefix = `${series}/`;
    if (!url.startsWith(seriesPrefix) && !url.startsWith('en/')) {
      url = `${seriesPrefix}${url}`;
    }

    return url;
  }

  // 其他語言保留語言前綴，同樣確保包含 series
  if (!url.includes(`/${series}/`) && !url.startsWith(`en/${series}/`)) {
    // 如果有語言前綴，在語言前綴後加入 series
    if (url.startsWith('en/')) {
      url = url.replace('en/', `en/${series}/`);
    } else {
      url = `${series}/${url}`;
    }
  }

  return url;
}

/**
 * 批量處理文章連結生成
 * @param articles 文章陣列
 * @param currentInterfaceLang 當前介面語言
 * @param translationMap 翻譯映射表
 * @returns 帶有 displayUrl 的文章陣列
 */
export function generateArticleLinks(
  articles: Article[],
  currentInterfaceLang: string,
  translationMap: Record<string, Record<string, string | null>>
): Array<Article & { displayUrl: string }> {
  return articles.map(article => ({
    ...article,
    displayUrl: generateArticleLink(article, currentInterfaceLang, translationMap)
  }));
}