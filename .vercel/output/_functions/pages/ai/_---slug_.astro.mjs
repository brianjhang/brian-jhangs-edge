import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Dt_hqBGJ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CWpwL5Fv.mjs';
import { $ as $$Breadcrumb, a as $$RelatedArticles } from '../../chunks/RelatedArticles_ClruZE8l.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://brianjhang.com");
async function getStaticPaths() {
  const aiPosts = await getCollection("ai");
  return aiPosts.map((post) => ({
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
  function generateOgImagePath(slug, seoOgImage, series) {
    if (seoOgImage) {
      return seoOgImage;
    }
    if (slug.includes("/")) {
      const parts = slug.split("/");
      const filename = `${parts[1]}.png`;
      return `/images/og/${series}/${parts[0]}/${filename}`;
    }
    const fileName = slug + ".png";
    return `/images/og/${series}/${fileName}`;
  }
  const ogImage = generateOgImagePath(post.slug, post.data.seo?.ogImage, "ai");
  const breadcrumbItems = [
    { label: "\u9996\u9801", href: "/" },
    { label: "AI\u5C0F\u767E\u79D1", href: "/ai" },
    { label: post.data.title.split("\uFF1A")[0] || post.data.title.split("|")[0] || post.data.title }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": ogImage, "series": "ai", "data-astro-cid-rw3iabhw": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="content-wrap" data-astro-cid-rw3iabhw> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbItems, "category": "ai", "data-astro-cid-rw3iabhw": true })} <h1 class="page-title" data-astro-cid-rw3iabhw>${post.data.title}</h1> <div class="meta" data-astro-cid-rw3iabhw> <span data-astro-cid-rw3iabhw>📅 ${post.data.date}</span> ${post.data.difficulty && renderTemplate`<span class="difficulty" data-astro-cid-rw3iabhw>${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u4E2D\u968E" : "\u9032\u968E"}</span>`} ${post.data.category && renderTemplate`<span class="category" data-astro-cid-rw3iabhw>${post.data.category}</span>`} <span data-astro-cid-rw3iabhw>⏱️ ${post.data.readingTime || 5} 分鐘閱讀</span> </div> <article data-astro-cid-rw3iabhw> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-rw3iabhw": true })} </article> <!-- 相關文章推薦 --> ${renderComponent($$result2, "RelatedArticles", $$RelatedArticles, { "currentSlug": post.slug, "currentCategory": "ai", "currentTags": post.data.tags, "maxItems": 3, "data-astro-cid-rw3iabhw": true })} </div>   ` })}`;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/ai/[...slug].astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/ai/[...slug].astro";
const $$url = "/ai/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
