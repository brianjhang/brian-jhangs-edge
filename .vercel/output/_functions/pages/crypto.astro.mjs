import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bg6XP5RA.mjs';
import { $ as $$Layout } from '../chunks/Layout_CWpwL5Fv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const cryptoPosts = await getCollection("crypto");
  const sortedPosts = cryptoPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5E63\u5708\u7B46\u8A18 - Brian Jhang's Edge", "description": "\u5BA2\u89C0\u4E2D\u7ACB\u7684\u52A0\u5BC6\u8CA8\u5E63\u6559\u80B2\u5167\u5BB9\uFF0C\u5F9E\u57FA\u790E\u77E5\u8B58\u5230\u6DF1\u5EA6\u5206\u6790\uFF0C\u7406\u6027\u770B\u5F85\u5340\u584A\u93C8\u4E16\u754C", "data-astro-cid-c25liwmi": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrap" data-astro-cid-c25liwmi> <div class="breadcrumb" data-astro-cid-c25liwmi> <a href="/" data-astro-cid-c25liwmi>首頁</a> / <span data-astro-cid-c25liwmi>幣圈筆記</span> </div> </div> <div class="series-header" data-astro-cid-c25liwmi> <div class="wrap" data-astro-cid-c25liwmi> <h1 data-astro-cid-c25liwmi>📒 Brian's 幣圈筆記</h1> <p class="series-description" data-astro-cid-c25liwmi>客觀中立的加密貨幣教育內容，從基礎知識到深度分析。不追熱點、不販賣焦慮，只專注於幫你建立對區塊鏈世界的正確認知。</p> <div class="series-stats" data-astro-cid-c25liwmi> <div class="stat" data-astro-cid-c25liwmi> <span class="number" data-astro-cid-c25liwmi>${cryptoPosts.length}</span> <div class="label" data-astro-cid-c25liwmi>篇文章</div> </div> <div class="stat" data-astro-cid-c25liwmi> <span class="number" data-astro-cid-c25liwmi>${cryptoPosts.reduce((total, post) => total + (post.data.readingTime || 0), 0)}</span> <div class="label" data-astro-cid-c25liwmi>分鐘閱讀</div> </div> </div> </div> </div> <div class="posts-section" data-astro-cid-c25liwmi> <div class="wrap" data-astro-cid-c25liwmi> <div class="posts-grid" data-astro-cid-c25liwmi> ${sortedPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(`location.href='/crypto/${post.slug}'`, "onclick")} data-astro-cid-c25liwmi> <div class="post-meta" data-astro-cid-c25liwmi> <time data-astro-cid-c25liwmi>${post.data.date}</time> <div class="meta-right" data-astro-cid-c25liwmi> ${post.data.ticker && renderTemplate`<span class="ticker" data-astro-cid-c25liwmi>${post.data.ticker}</span>`} <span class="difficulty"${addAttribute(post.data.difficulty, "data-level")} data-astro-cid-c25liwmi> ${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u9032\u968E" : "\u9AD8\u7D1A"} </span> </div> </div> <h2 data-astro-cid-c25liwmi><a${addAttribute(`/crypto/${post.slug}`, "href")} data-astro-cid-c25liwmi>${post.data.title}</a></h2> <p class="post-summary" data-astro-cid-c25liwmi>${post.data.summary}</p> <div class="post-footer" data-astro-cid-c25liwmi> <div class="tags" data-astro-cid-c25liwmi> ${post.data.tags?.slice(0, 3).map((tag) => renderTemplate`<span class="tag" data-astro-cid-c25liwmi>${tag}</span>`)} </div> <div class="reading-time" data-astro-cid-c25liwmi>${post.data.readingTime} 分鐘</div> </div> </article>`)} </div> <div class="disclaimer" data-astro-cid-c25liwmi>
⚠️ <strong data-astro-cid-c25liwmi>風險聲明</strong>：加密貨幣投資存在極高風險，價格波動劇烈。本內容僅為教育目的，不構成投資建議。請只投資您能承受完全損失的資金，並在投資前進行獨立研究和風險評估。
</div> </div> </div>  ` })}`;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/crypto/index.astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/crypto/index.astro";
const $$url = "/crypto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
