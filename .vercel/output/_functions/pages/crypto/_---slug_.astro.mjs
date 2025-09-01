import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Bg6XP5RA.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CWpwL5Fv.mjs';
import { $ as $$Breadcrumb, a as $$RelatedArticles } from '../../chunks/RelatedArticles_C4jEPC9s.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://brianjhang.com");
async function getStaticPaths() {
  const cryptoPosts = await getCollection("crypto");
  return cryptoPosts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  const title = post.data.title;
  const description = post.data.description || post.data.summary;
  function generateOgImagePath(slug, seoOgImage) {
    if (seoOgImage) {
      return seoOgImage;
    }
    const slugMappings = {
      "btc/complete-guide": "bitcoin-complete-guide.png",
      "eth/complete-guide": "ethereum-complete-guide.png",
      "sol/complete-guide": "solana-complete-guide.png",
      "bnb/complete-guide": "bnb-complete-guide.png",
      "usdt/complete-guide": "usdt-complete-guide.png",
      "usdc/complete-guide": "usdc-complete-guide.png",
      "xrp/complete-guide": "xrp-complete-guide.png",
      "doge/complete-guide": "doge-complete-guide.png",
      "ada/complete-guide": "cardano-complete-guide.png"
    };
    if (slugMappings[slug]) {
      return `/images/og/crypto/${slugMappings[slug]}`;
    }
    if (slug.includes("/")) {
      const parts = slug.split("/");
      const filename = `${parts[1]}.png`;
      return `/images/og/crypto/${parts[0]}/${filename}`;
    }
    const fileName = slug.replace("/", "-") + ".png";
    return `/images/og/crypto/${fileName}`;
  }
  const ogImage = generateOgImagePath(post.slug, post.data.seo?.ogImage);
  const breadcrumbItems = [
    { label: "\u9996\u9801", href: "/" },
    { label: "\u5E63\u5708\u7B46\u8A18", href: "/crypto" },
    { label: post.data.title.split("\uFF1A")[0] || post.data.title.split("|")[0] || post.data.title }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "series": "crypto", "description": description, "image": ogImage, "data-astro-cid-q64enw2a": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-q64enw2a> <div class="content-wrap" data-astro-cid-q64enw2a> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbItems, "category": "crypto", "data-astro-cid-q64enw2a": true })} <h1 class="page-title" data-astro-cid-q64enw2a>${post.data.title}</h1> <div class="meta" data-astro-cid-q64enw2a> <span data-astro-cid-q64enw2a>📅 ${post.data.date}</span> ${post.data.difficulty && renderTemplate`<span class="difficulty" data-astro-cid-q64enw2a>${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u4E2D\u968E" : "\u9032\u968E"}</span>`} ${post.data.category && renderTemplate`<span class="category" data-astro-cid-q64enw2a>${post.data.category}</span>`} <span data-astro-cid-q64enw2a>⏱️ ${post.data.readingTime || 5} 分鐘閱讀</span> </div> <article data-astro-cid-q64enw2a> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-q64enw2a": true })} </article> <!-- 相關文章推薦 --> ${renderComponent($$result2, "RelatedArticles", $$RelatedArticles, { "currentSlug": post.slug, "currentCategory": "crypto", "currentTags": post.data.tags, "maxItems": 3, "data-astro-cid-q64enw2a": true })} </div> </main> ` })} `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/crypto/[...slug].astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/crypto/[...slug].astro";
const $$url = "/crypto/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
