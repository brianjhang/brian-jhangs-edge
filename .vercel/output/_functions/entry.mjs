import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CqFm6UqB.mjs';
import { manifest } from './manifest_WfSFyC3m.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/ai.astro.mjs');
const _page3 = () => import('./pages/ai/_---slug_.astro.mjs');
const _page4 = () => import('./pages/api/og/_---slug_.astro.mjs');
const _page5 = () => import('./pages/crypto.astro.mjs');
const _page6 = () => import('./pages/crypto/_---slug_.astro.mjs');
const _page7 = () => import('./pages/startup.astro.mjs');
const _page8 = () => import('./pages/startup/_---slug_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/ai/index.astro", _page2],
    ["src/pages/ai/[...slug].astro", _page3],
    ["src/pages/api/og/[...slug].ts", _page4],
    ["src/pages/crypto/index.astro", _page5],
    ["src/pages/crypto/[...slug].astro", _page6],
    ["src/pages/startup/index.astro", _page7],
    ["src/pages/startup/[...slug].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "22720bad-df1b-4076-88e4-08781f522f15",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
