import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Dt_hqBGJ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CWpwL5Fv.mjs';
import { $ as $$Breadcrumb, a as $$RelatedArticles } from '../../chunks/RelatedArticles_ClruZE8l.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://brianjhang.com");
async function getStaticPaths() {
  const startupPosts = await getCollection("startup");
  return startupPosts.map((post) => ({
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
    const pathParts = slug.split("/");
    const fileName = pathParts[pathParts.length - 1] + ".png";
    const dirPath = pathParts.slice(0, -1).join("/");
    if (dirPath) {
      return `/images/og/${series}/${dirPath}/${fileName}`;
    } else {
      return `/images/og/${series}/${fileName}`;
    }
  }
  const ogImage = generateOgImagePath(post.slug, post.data.seo?.ogImage, "startup");
  const breadcrumbItems = [
    { label: "\u9996\u9801", href: "/" },
    { label: "\u5275\u696D\u7B46\u8A18", href: "/startup" },
    { label: post.data.title.split("\uFF1A")[0] || post.data.title.split("|")[0] || post.data.title }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "series": "startup", "description": description, "image": ogImage, "data-astro-cid-5wdylmpu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5wdylmpu> <div class="content-wrap" data-astro-cid-5wdylmpu> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbItems, "category": "startup", "data-astro-cid-5wdylmpu": true })} <h1 class="page-title" data-astro-cid-5wdylmpu>${post.data.title}</h1> <div class="meta" data-astro-cid-5wdylmpu> <span data-astro-cid-5wdylmpu>📅 ${post.data.date}</span> ${post.data.difficulty && renderTemplate`<span class="difficulty" data-astro-cid-5wdylmpu>${post.data.difficulty === "beginner" ? "\u5165\u9580" : post.data.difficulty === "intermediate" ? "\u4E2D\u968E" : "\u9032\u968E"}</span>`} ${post.data.category && renderTemplate`<span class="category" data-astro-cid-5wdylmpu>${post.data.category}</span>`} <span data-astro-cid-5wdylmpu>⏱️ ${post.data.readingTime || 5} 分鐘閱讀</span> </div> <article data-astro-cid-5wdylmpu> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-5wdylmpu": true })} </article> <!-- 相關文章推薦 --> ${renderComponent($$result2, "RelatedArticles", $$RelatedArticles, { "currentSlug": post.slug, "currentCategory": "startup", "currentTags": post.data.tags, "maxItems": 3, "data-astro-cid-5wdylmpu": true })} </div> </main> ` })} `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/startup/[...slug].astro", void 0);

const $$file = "/Users/brian/Documents/AI/brian-jhangs-edge/src/pages/startup/[...slug].astro";
const $$url = "/startup/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
