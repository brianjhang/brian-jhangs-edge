import { c as createComponent, d as createAstro, a as renderTemplate, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from './astro/server_U-kaEscN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://brianjhang.com");
const $$EmbedTradingView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EmbedTradingView;
  const {
    symbol = "BINANCE:BTCUSDT",
    interval = "D",
    theme = "dark",
    height = "480px",
    locale = "zh_TW"
  } = Astro2.props;
  let formattedSymbol = symbol;
  if (symbol === "BINANCE:USDTUSD") {
    formattedSymbol = "BINANCEUS:USDTUSD";
  }
  if (symbol === "BINANCE:USDCUSD") {
    formattedSymbol = "BINANCEUS:USDCUSD";
  }
  if (symbol === "BINANCE:MATICUSDT") {
    formattedSymbol = "BINANCE:POLUSDT";
  }
  if (symbol === "BINANCE:POLUSDT") {
    formattedSymbol = "BINANCE:POLUSDT";
  }
  return renderTemplate(_a || (_a = __template(["<!-- TradingView Widget BEGIN -->", '<div class="tradingview-widget-container"', ' data-astro-cid-wwkz7al3> <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%" data-astro-cid-wwkz7al3></div> <div class="tradingview-widget-copyright" data-astro-cid-wwkz7al3> <a', ' rel="noopener nofollow" target="_blank" data-astro-cid-wwkz7al3> <span class="blue-text" data-astro-cid-wwkz7al3>Track all markets on TradingView</span> </a> </div> <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>', "<\/script> </div> <!-- TradingView Widget END --> "])), maybeRenderHead(), addAttribute(`height:${height};width:100%;margin:24px 0;`, "style"), addAttribute(`https://tw.tradingview.com/symbols/${formattedSymbol.replace(":", "-")}/?exchange=${formattedSymbol.split(":")[0]}`, "href"), unescapeHTML(`
  {
    "allow_symbol_change": true,
    "calendar": false,
    "details": false,
    "hide_side_toolbar": true,
    "hide_top_toolbar": false,
    "hide_legend": false,
    "hide_volume": false,
    "hotlist": false,
    "interval": "${interval}",
    "locale": "${locale}",
    "save_image": true,
    "style": "1",
    "symbol": "${formattedSymbol}",
    "theme": "${theme}",
    "timezone": "Etc/UTC",
    "backgroundColor": "#0F0F0F",
    "gridColor": "rgba(242, 242, 242, 0.06)",
    "watchlist": [],
    "withdateranges": false,
    "compareSymbols": [],
    "studies": [],
    "autosize": false,
    "width": "100%",
    "height": 440
  }
  `));
}, "/Users/brian/Documents/AI/brian-jhangs-edge/src/components/EmbedTradingView.astro", void 0);

export { $$EmbedTradingView as $ };
