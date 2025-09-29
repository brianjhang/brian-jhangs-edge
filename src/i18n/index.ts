export const languages = {
  zh: '中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.home': '首頁',
    'nav.about': '關於',
    'nav.ai': 'AI 小百科',
    'nav.crypto': '幣圈筆記',
    'nav.startup': '創業筆記',
    'nav.build': '建設日誌',
    'site.title': "Brian Jhang's Edge",
    'site.description': '探索 AI×創業×Crypto 的無限可能',
    'footer.copyright': '© 2025 Brian Jhang. 保留所有權利。',
    'language.switch': '語言',
    'read.more': '閱讀更多',
    'back.to.home': '回到首頁',
    'hero.title': 'AI × Startups × Crypto',
    'hero.subtitle': 'Deep Insights for Builders ・ AI × Startups × Crypto：一人公司的實踐藍圖',
    'featured.title': '知識精選',
    'latest.title': '最新文章',
    'explore.title': '探索主題',
    'ai.description': '從基礎概念到實際應用，深入淺出的 AI 知識分享，幫助你理解人工智慧的發展與影響。',
    'startup.description': '經典商業理論的現代應用，市場驗證、產品開發、團隊建設的實戰框架。',
    'crypto.description': '客觀中立的加密貨幣分析，從基礎概念到深度研究，建立正確認知。',
    'build.description': '記錄專案建設過程、技術決策和問題解決的實戰經驗分享。',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.ai': 'AI Encyclopedia',
    'nav.crypto': 'Crypto Notes',
    'nav.startup': 'Startup Notes',
    'nav.build': 'Build Log',
    'site.title': "Brian Jhang's Edge",
    'site.description': 'Exploring Infinite Possibilities of AI×Startup×Crypto',
    'footer.copyright': '© 2025 Brian Jhang. All rights reserved.',
    'language.switch': 'Language',
    'read.more': 'Read More',
    'back.to.home': 'Back to Home',
    'hero.title': 'AI × Startups × Crypto',
    'hero.subtitle': 'Deep Insights for Builders ・ Exploring infinite possibilities at the intersection of AI, entrepreneurship, and cryptocurrency',
    'featured.title': 'Featured Content',
    'latest.title': 'Latest Articles',
    'explore.title': 'Explore Topics',
    'ai.description': 'From basic concepts to practical applications, in-depth AI knowledge sharing to help you understand the development and impact of artificial intelligence.',
    'startup.description': 'Modern applications of classic business theories, practical frameworks for market validation, product development, and team building.',
    'crypto.description': 'Objective and neutral cryptocurrency analysis, from basic concepts to in-depth research, building correct understanding.',
    'build.description': 'Recording project building processes, technical decisions, and practical experience sharing in problem-solving.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return '/';
  }

  const currentLang = getLangFromUrl(url);

  if (currentLang === defaultLang) {
    return `/${path}`;
  }

  return `/${currentLang}/${path}`;
}

export function getRelativeLocaleUrl(locale: string, path: string = '') {
  if (locale === defaultLang) {
    return path || '/';
  }
  return `/${locale}${path}`;
}