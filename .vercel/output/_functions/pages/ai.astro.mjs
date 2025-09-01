import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CWpwL5Fv.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bg6XP5RA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const aiPosts = await getCollection("ai");
  const sortedPosts = aiPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AI\u5C0F\u767E\u79D1 - Brian Jhang's Edge", "description": "\u6DF1\u5165\u6DFA\u51FA\u7684AI\u6280\u8853\u89E3\u6790\uFF0C\u5F9E\u57FA\u790E\u6982\u5FF5\u5230\u5BE6\u6230\u61C9\u7528\uFF0C\u5E6B\u52A9\u4F60\u638C\u63E1\u4EBA\u5DE5\u667A\u6167\u7684\u6838\u5FC3\u77E5\u8B58", "data-astro-cid-hmykidg2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-hmykidg2> <div class="breadcrumb" data-astro-cid-hmykidg2> <a href="/" data-astro-cid-hmykidg2>首頁</a> / <span data-astro-cid-hmykidg2>AI小百科</span> </div> </div> <div class="series-header" data-astro-cid-hmykidg2> <div class="container" data-astro-cid-hmykidg2> <h1 data-astro-cid-hmykidg2>🤖 Brian's AI小百科</h1> <p class="series-description" data-astro-cid-hmykidg2>深入淺出的AI技術解析，從基礎概念到實戰應用，幫助你掌握人工智慧的核心知識。每篇文章都經過精心設計，適合不同程度的讀者學習。</p> <div class="series-stats" data-astro-cid-hmykidg2> <div class="stat" data-astro-cid-hmykidg2> <span class="number" data-astro-cid-hmykidg2>${aiPosts.length}</span> <div class="label" data-astro-cid-hmykidg2>篇文章</div> </div> <div class="stat" data-astro-cid-hmykidg2> <span class="number" data-astro-cid-hmykidg2>${aiPosts.reduce((total, post) => total + (post.data.readingTime || 0), 0)}</span> <div class="label" data-astro-cid-hmykidg2>分鐘閱讀</div> </div> </div> </div> </div> <div class="posts-section" data-astro-cid-hmykidg2> <div class="container" data-astro-cid-hmykidg2> <div class="posts-grid" data-astro-cid-hmykidg2> ${sortedPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(`location.href='/ai/${post.slug}'`, "onclick")} data-astro-cid-hmykidg2> <div class="post-meta" data-astro-cid-hmykidg2> <time data-astro-cid-hmykidg2>${post.data.date}</time> <span class="difficulty"${addAttribute(post.data.difficulty, "data-level")} data-astro-cid-hmykidg2> ${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u9032\u968E" : "\u9AD8\u7D1A"} </span> </div> <h2 data-astro-cid-hmykidg2><a${addAttribute(`/ai/${post.slug}`, "href")} data-astro-cid-hmykidg2>${post.data.title}</a></h2> <p class="post-summary" data-astro-cid-hmykidg2>${post.data.summary}</p> <div class="post-footer" data-astro-cid-hmykidg2> <div class="tags" data-astro-cid-hmykidg2> ${post.data.tags?.slice(0, 3).map((tag) => renderTemplate`<span class="tag" data-astro-cid-hmykidg2>${tag}</span>`)} </div> <div class="reading-time" data-astro-cid-hmykidg2>${post.data.readingTime} 分鐘</div> </div> </article>`)} </div> </div> </div>  ` })}`;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/ai/index.astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/ai/index.astro";
const $$url = "/ai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
