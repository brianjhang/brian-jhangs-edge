import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bg6XP5RA.mjs';
import { $ as $$Layout } from '../chunks/Layout_CWpwL5Fv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const startupPosts = await getCollection("startup");
  const sortedPosts = startupPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5275\u696D\u7B46\u8A18 - Brian Jhang's Edge", "description": "\u5275\u696D\u8DEF\u4E0A\u5BE6\u6230\u5FC3\u5F97\u8207\u5546\u696D\u667A\u6167\uFF0C\u5F9E\u7D93\u5178\u7406\u8AD6\u5230\u73FE\u4EE3\u61C9\u7528\uFF0C\u966A\u59B3\u4E00\u8D77\u6210\u9577", "data-astro-cid-czuc3kof": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrap" data-astro-cid-czuc3kof> <div class="breadcrumb" data-astro-cid-czuc3kof> <a href="/" data-astro-cid-czuc3kof>首頁</a> / <span data-astro-cid-czuc3kof>創業筆記</span> </div> </div> <div class="series-header" data-astro-cid-czuc3kof> <div class="wrap" data-astro-cid-czuc3kof> <h1 data-astro-cid-czuc3kof>🚀 Brian's 創業筆記</h1> <p class="series-description" data-astro-cid-czuc3kof>創業路上實戰心得與商業智慧，從經典理論到現代應用。每篇都是踩過坑後的真實分享，希望能為你的創業旅程提供一些啟發。</p> <div class="series-stats" data-astro-cid-czuc3kof> <div class="stat" data-astro-cid-czuc3kof> <span class="number" data-astro-cid-czuc3kof>${startupPosts.length}</span> <div class="label" data-astro-cid-czuc3kof>篇文章</div> </div> <div class="stat" data-astro-cid-czuc3kof> <span class="number" data-astro-cid-czuc3kof>${startupPosts.reduce((total, post) => total + (post.data.readingTime || 0), 0)}</span> <div class="label" data-astro-cid-czuc3kof>分鐘閱讀</div> </div> </div> </div> </div> <div class="posts-section" data-astro-cid-czuc3kof> <div class="wrap" data-astro-cid-czuc3kof> <div class="posts-grid" data-astro-cid-czuc3kof> ${sortedPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(`location.href='/startup/${post.slug}'`, "onclick")} data-astro-cid-czuc3kof> <div class="post-meta" data-astro-cid-czuc3kof> <time data-astro-cid-czuc3kof>${post.data.date}</time> <div class="meta-right" data-astro-cid-czuc3kof> <span class="difficulty"${addAttribute(post.data.difficulty, "data-level")} data-astro-cid-czuc3kof> ${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u9032\u968E" : "\u9AD8\u7D1A"} </span> </div> </div> <h2 data-astro-cid-czuc3kof><a${addAttribute(`/startup/${post.slug}`, "href")} data-astro-cid-czuc3kof>${post.data.title}</a></h2> <p class="post-summary" data-astro-cid-czuc3kof>${post.data.summary}</p> ${post.data.bookReference && renderTemplate`<div class="book-reference" data-astro-cid-czuc3kof> <span data-astro-cid-czuc3kof>📚</span> <span data-astro-cid-czuc3kof>${post.data.bookReference.title} - ${post.data.bookReference.author}</span> </div>`} <div class="post-footer" data-astro-cid-czuc3kof> <div class="tags" data-astro-cid-czuc3kof> ${post.data.tags?.slice(0, 3).map((tag) => renderTemplate`<span class="tag" data-astro-cid-czuc3kof>${tag}</span>`)} </div> <div class="reading-time" data-astro-cid-czuc3kof>${post.data.readingTime} 分鐘</div> </div> </article>`)} </div> </div> </div>  ` })}`;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/startup/index.astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/startup/index.astro";
const $$url = "/startup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
