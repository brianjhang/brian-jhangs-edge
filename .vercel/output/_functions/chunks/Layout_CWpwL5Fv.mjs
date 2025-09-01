import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as createAstro, r as renderComponent, i as renderSlot, j as renderHead, k as renderScript, b as addAttribute } from './astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="header-content" data-astro-cid-3ef6ksr2> <a href="/" class="brand" data-astro-cid-3ef6ksr2>Brian Jhang's Edge</a> <nav data-astro-cid-3ef6ksr2> <a href="/ai" data-astro-cid-3ef6ksr2>AI小百科</a> <a href="/startup" data-astro-cid-3ef6ksr2>創業筆記</a> <a href="/crypto" data-astro-cid-3ef6ksr2>幣圈筆記</a> <a href="/about" data-astro-cid-3ef6ksr2>關於</a> </nav> </div> </header> `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="wrap" data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>© ${(/* @__PURE__ */ new Date()).getFullYear()} Brian Jhang's Edge ・ 教育內容，非投資建議</p> <div class="social-links" data-astro-cid-sz7xmlte> <a href="https://x.com/brianjhang" rel="noopener" target="_blank" class="social-link" data-astro-cid-sz7xmlte>X</a> <a href="https://threads.net/@brianjhang" rel="noopener" target="_blank" class="social-link" data-astro-cid-sz7xmlte>Threads</a> <a href="https://www.facebook.com/iambrianjhang" rel="noopener" target="_blank" class="social-link" data-astro-cid-sz7xmlte>Facebook</a> <a href="https://github.com/brianjhang" rel="noopener" target="_blank" class="social-link" data-astro-cid-sz7xmlte>GitHub</a> </div> </div> </footer> `;
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://brianjhang.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, type, series } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const defaultDescription = "\u5275\u696D \xD7 AI \xD7 Crypto \u7684\u53EF\u57F7\u884C\u77E5\u8B58\u57FA\u5730";
  let finalImage = `${Astro2.site}favicon.svg`;
  if (image) {
    if (image.startsWith("http")) {
      finalImage = image;
    } else {
      finalImage = `${Astro2.site}${image.startsWith("/") ? image.slice(1) : image}`;
    }
  }
  return renderTemplate(_a || (_a = __template(['<html lang="zh-tw" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:image"', `><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/png"><meta property="og:site_name" content="Brian Jhang's Edge"><meta property="og:locale" content="zh_TW"><!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@brianjhang"><meta name="twitter:creator" content="@brianjhang"><meta name="twitter:title"`, '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', '><meta name="twitter:image:width" content="1200"><meta name="twitter:image:height" content="630"><meta name="twitter:image:alt"', '><!-- Facebook specific --><meta property="article:author" content="Brian Jhang"><meta property="article:publisher" content="https://www.facebook.com/brianjhang"><!-- Additional OG tags for better compatibility --><meta property="og:image:secure_url"', '><meta property="og:image:alt"', '><!-- Additional SEO --><meta name="robots" content="index, follow"><meta name="author" content="Brian Jhang"><meta name="theme-color" content="#0b0b0c"><!-- Language alternatives --><link rel="alternate" hreflang="zh-tw"', '><link rel="alternate" hreflang="x-default"', '><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-7F14DYS5K2"><\/script>', "", "</head> <body data-astro-cid-sckkx6r4> ", " <main data-astro-cid-sckkx6r4> ", " </main> ", " </body></html>"])), title, addAttribute(description || defaultDescription, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description || defaultDescription, "content"), addAttribute(type || "article", "content"), addAttribute(canonicalURL, "content"), addAttribute(finalImage, "content"), addAttribute(title, "content"), addAttribute(description || defaultDescription, "content"), addAttribute(finalImage, "content"), addAttribute(finalImage, "content"), addAttribute(`${title} - Brian Jhang's Edge`, "content"), addAttribute(finalImage, "content"), addAttribute(`${title} - Brian Jhang's Edge`, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), renderScript($$result, "/Users/brian/Documents/AI/brian-jhangs-edge/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
