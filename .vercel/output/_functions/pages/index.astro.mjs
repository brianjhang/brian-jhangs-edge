import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bg6XP5RA.mjs';
import { $ as $$Layout } from '../chunks/Layout_CWpwL5Fv.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const aiPosts = await getCollection("ai");
  const startupPosts = await getCollection("startup");
  const cryptoPosts = await getCollection("crypto");
  const byDateDesc = (a, b) => new Date(b.data.date) - new Date(a.data.date);
  const latestAI = aiPosts.toSorted(byDateDesc)[0];
  const latestStartup = startupPosts.toSorted(byDateDesc)[0];
  const latestCrypto = cryptoPosts.toSorted(byDateDesc)[0];
  const allPosts = [...aiPosts, ...startupPosts, ...cryptoPosts];
  const recentPosts = allPosts.toSorted(byDateDesc).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Brian Jhang's Edge \u2014 Startups \xD7 AI \xD7 Crypto", "description": "\u5275\u696D \xD7 AI \xD7 Crypto \u7684\u53EF\u57F7\u884C\u77E5\u8B58\u5EAB", "ogTitle": "Brian Jhang's Edge", "ogDescription": "Deep Insights for Builders \u30FB \u5275\u696D \xD7 AI \xD7 Crypto \u7684\u53EF\u57F7\u884C\u77E5\u8B58\u5EAB", "ogType": "website", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <div class="wrap" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Startups × AI × Crypto</h1> <p data-astro-cid-j7pv25f6>Deep Insights for Builders ・ 創業 × AI × Crypto 的可執行知識庫</p> </div> </section> <main class="wrap" data-astro-cid-j7pv25f6> <section id="featured" class="section" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>知識精選</h2> <div class="grid grid-3" data-astro-cid-j7pv25f6> ${latestAI && renderTemplate`<a class="card"${addAttribute(`/ai/${latestAI.slug}`, "href")} data-astro-cid-j7pv25f6> <div class="muted" data-astro-cid-j7pv25f6>${latestAI.data.date} · <span class="tag tag-ai" data-astro-cid-j7pv25f6>AI小百科</span></div> <h3 style="margin:6px 0 8px 0;color:#fff" data-astro-cid-j7pv25f6>${latestAI.data.title}</h3> <p class="muted" data-astro-cid-j7pv25f6>${latestAI.data.summary}</p> </a>`} ${latestStartup && renderTemplate`<a class="card"${addAttribute(`/startup/${latestStartup.slug}`, "href")} data-astro-cid-j7pv25f6> <div class="muted" data-astro-cid-j7pv25f6>${latestStartup.data.date} · <span class="tag tag-startup" data-astro-cid-j7pv25f6>創業筆記</span></div> <h3 style="margin:6px 0 8px 0;color:#fff" data-astro-cid-j7pv25f6>${latestStartup.data.title}</h3> <p class="muted" data-astro-cid-j7pv25f6>${latestStartup.data.summary}</p> </a>`} ${latestCrypto && renderTemplate`<a class="card"${addAttribute(`/crypto/${latestCrypto.slug}`, "href")} data-astro-cid-j7pv25f6> <div class="muted" data-astro-cid-j7pv25f6>${latestCrypto.data.date} · <span class="tag tag-crypto" data-astro-cid-j7pv25f6>幣圈筆記</span></div> <h3 style="margin:6px 0 8px 0;color:#fff" data-astro-cid-j7pv25f6>${latestCrypto.data.title}</h3> <p class="muted" data-astro-cid-j7pv25f6>${latestCrypto.data.summary}</p> </a>`} </div> </section> <section class="section" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>最新文章</h2> <div class="grid grid-2" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => {
    const category = post.collection === "ai" ? "AI\u5C0F\u767E\u79D1" : post.collection === "startup" ? "\u5275\u696D\u7B46\u8A18" : "\u5E63\u5708\u7B46\u8A18";
    const categoryPath = post.collection;
    const tagClass = `tag tag-${post.collection}`;
    return renderTemplate`<a class="card"${addAttribute(`/${categoryPath}/${post.slug}`, "href")} data-astro-cid-j7pv25f6> <div class="muted" data-astro-cid-j7pv25f6>${post.data.date} · <span${addAttribute(tagClass, "class")} data-astro-cid-j7pv25f6>${category}</span></div> <h3 style="margin:6px 0 8px 0;color:#fff" data-astro-cid-j7pv25f6>${post.data.title}</h3> <p class="muted" data-astro-cid-j7pv25f6>${post.data.summary}</p> </a>`;
  })} </div> </section> <section class="section" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>探索主題</h2> <div class="grid grid-3" data-astro-cid-j7pv25f6> <a class="card" href="/ai" data-astro-cid-j7pv25f6> <div class="tag tag-ai" data-astro-cid-j7pv25f6>AI 教育內容</div> <h3 style="margin:8px 0 8px;color:#fff" data-astro-cid-j7pv25f6>AI 知識與應用</h3> <p class="muted" data-astro-cid-j7pv25f6>從基礎概念到實際應用，深入淺出的 AI 知識分享，幫助你理解人工智慧的發展與影響。</p> </a> <a class="card" href="/startup" data-astro-cid-j7pv25f6> <div class="tag tag-startup" data-astro-cid-j7pv25f6>創業教育內容</div> <h3 style="margin:8px 0 8px;color:#fff" data-astro-cid-j7pv25f6>創業實戰指南</h3> <p class="muted" data-astro-cid-j7pv25f6>經典商業理論的現代應用，市場驗證、產品開發、團隊建設的實戰框架。</p> </a> <a class="card" href="/crypto" data-astro-cid-j7pv25f6> <div class="tag tag-crypto" data-astro-cid-j7pv25f6>Crypto 教育內容</div> <h3 style="margin:8px 0 8px;color:#fff" data-astro-cid-j7pv25f6>理性看待區塊鏈世界</h3> <p class="muted" data-astro-cid-j7pv25f6>客觀中立的加密貨幣分析，從基礎概念到深度研究，建立正確認知。</p> </a> </div> </section> </main> ` })} `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/index.astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
