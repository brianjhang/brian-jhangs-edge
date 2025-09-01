import { d as createAstro, c as createComponent, e as defineStyleVars, m as maybeRenderHead, b as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate } from './astro/server_U-kaEscN.mjs';
/* empty css                          */
import { g as getCollection } from './_astro_content_Bg6XP5RA.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://brianjhang.com");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items, category = "ai" } = Astro2.props;
  const categoryThemes = {
    ai: { color: "#3b82f6", hoverColor: "#60a5fa" },
    crypto: { color: "#f59e0b", hoverColor: "#fbbf24" },
    startup: { color: "#10b981", hoverColor: "#34d399" }
  };
  const theme = categoryThemes[category];
  const $$definedVars = defineStyleVars([{
    categoryColor: theme.color,
    categoryHoverColor: theme.hoverColor
  }]);
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb" aria-label="麵包屑導航" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}> <ol class="breadcrumb-list" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}> ${items.map((item, index) => renderTemplate`<li class="breadcrumb-item" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}> ${item.href ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qaanghzh": true, "style": $$definedVars }, { "default": ($$result2) => renderTemplate` <a${addAttribute(item.href, "href")} class="breadcrumb-link" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}> ${item.label} </a> ${index < items.length - 1 && renderTemplate`<span class="breadcrumb-separator" aria-hidden="true" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}>/</span>`}` })}` : renderTemplate`<span class="breadcrumb-current" aria-current="page" data-astro-cid-qaanghzh${addAttribute($$definedVars, "style")}> ${item.label} </span>`} </li>`)} </ol> </nav> `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/components/Breadcrumb.astro", void 0);

const $$Astro = createAstro("https://brianjhang.com");
const $$RelatedArticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedArticles;
  const {
    currentSlug,
    currentCategory,
    currentTags = [],
    maxItems = 3
  } = Astro2.props;
  const allPosts = await getCollection(currentCategory);
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);
  const relatedPosts = otherPosts.map((post) => {
    let score = 0;
    if (post.data.tags && currentTags.length > 0) {
      const matchingTags = post.data.tags.filter(
        (tag) => currentTags.includes(tag)
      );
      score += matchingTags.length * 3;
    }
    const currentSubCategory = currentSlug.split("/")[0];
    const postSubCategory = post.slug.split("/")[0];
    if (currentSubCategory === postSubCategory) {
      score += 2;
    }
    if (post.data.difficulty === currentCategory) {
      score += 1;
    }
    return { post, score };
  }).sort((a, b) => b.score - a.score);
  const recommendedPosts = relatedPosts.slice(0, maxItems);
  if (recommendedPosts.length < maxItems) {
    const remainingCount = maxItems - recommendedPosts.length;
    const recentPosts = otherPosts.filter((post) => !recommendedPosts.find((rp) => rp.post.slug === post.slug)).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, remainingCount).map((post) => ({ post, score: 0 }));
    recommendedPosts.push(...recentPosts);
  }
  const categoryConfig = {
    ai: {
      title: "AI\u5C0F\u767E\u79D1",
      color: "#3b82f6",
      icon: "\u{1F916}",
      prefix: "/ai"
    },
    crypto: {
      title: "\u5E63\u5708\u7B46\u8A18",
      color: "#f59e0b",
      icon: "\u{1F48E}",
      prefix: "/crypto"
    },
    startup: {
      title: "\u5275\u696D\u7B46\u8A18",
      color: "#10b981",
      icon: "\u{1F680}",
      prefix: "/startup"
    }
  };
  const config = categoryConfig[currentCategory];
  function getPostUrl(post) {
    return `${config.prefix}/${post.slug}/`;
  }
  function truncateTitle(title, maxLength = 60) {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  const $$definedVars = defineStyleVars([{ categoryColor: config.color }]);
  return renderTemplate`${recommendedPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="related-articles" aria-labelledby="related-heading" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><div class="related-header" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><h2 id="related-heading" class="related-title" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><span class="related-icon" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${config.icon}</span>
相關${config.title}</h2><p class="related-subtitle" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>延伸閱讀推薦</p></div><div class="related-grid" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${recommendedPosts.map(({ post, score }) => renderTemplate`<article class="related-card" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><a${addAttribute(getPostUrl(post), "href")} class="related-link" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><div class="related-content" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><h3 class="related-card-title" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${truncateTitle(post.data.title)}</h3><p class="related-summary" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${post.data.summary || post.data.description || "\u6DF1\u5165\u4E86\u89E3\u76F8\u95DC\u4E3B\u984C\u7684\u5C08\u696D\u77E5\u8B58\u8207\u5BE6\u7528\u6280\u5DE7"}</p><div class="related-meta" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><span class="related-date" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>
📅 ${formatDate(post.data.date)}</span>${post.data.difficulty && renderTemplate`<span class="related-difficulty" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u4E2D\u968E" : "\u9032\u968E"}</span>`}<span class="related-reading-time" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>
⏱️ ${post.data.readingTime || 5} 分鐘
</span></div>${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="related-tags" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>${post.data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="related-tag" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>#${tag}</span>`)}</div>`}</div><div class="related-arrow" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}></path></svg></div></a></article>`)}</div><div class="related-footer" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}><a${addAttribute(config.prefix, "href")} class="view-all-link" data-astro-cid-2zkmu4eg${addAttribute($$definedVars, "style")}>
查看所有${config.title} →
</a></div></section>`}`;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/components/RelatedArticles.astro", void 0);

export { $$Breadcrumb as $, $$RelatedArticles as a };
