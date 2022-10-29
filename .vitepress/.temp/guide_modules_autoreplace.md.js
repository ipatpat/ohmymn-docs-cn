"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"AutoReplace","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49","link":"#\u81EA\u5B9A\u4E49","children":[]},{"level":2,"title":"OCR Pro \u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09","slug":"ocr-pro-\u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09","link":"#ocr-pro-\u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09","children":[]},{"level":2,"title":"MagicAction for Card","slug":"magicaction-for-card","link":"#magicaction-for-card","children":[{"level":3,"title":"\u66FF\u6362\u6458\u5F55\u6587\u5B57","slug":"\u66FF\u6362\u6458\u5F55\u6587\u5B57","link":"#\u66FF\u6362\u6458\u5F55\u6587\u5B57","children":[]}]}],"relativePath":"guide/modules/autoreplace.md","lastUpdated":1664009523000}');
const _sfc_main = { name: "guide/modules/autoreplace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="autoreplace" tabindex="-1">AutoReplace <a class="header-anchor" href="#autoreplace" aria-hidden="true">#</a></h1><p>\u5728\u6458\u5F55\u7684\u65F6\u5019\u81EA\u52A8\u66FF\u6362\u67D0\u4E9B\u5B57\u6216\u8BCD\u3002\u5C31\u662F\u5E38\u89C4 replace \u51FD\u6570\u7684\u4F7F\u7528\uFF0C\u4E0D\u591A\u8BF4\u3002</p><h2 id="\u81EA\u5B9A\u4E49" tabindex="-1">\u81EA\u5B9A\u4E49 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u8F93\u5165\u683C\u5F0F</p><p><a href="./../custom.html#replace-\u51FD\u6570">replace \u51FD\u6570\u683C\u5F0F\u2014\u2014\u66FF\u6362</a></p></div><h2 id="ocr-pro-\u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09" tabindex="-1">OCR Pro \u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09 <a class="header-anchor" href="#ocr-pro-\u5E38\u89C1\u9519\u8BEF\uFF08\u5F85\u8865\u5145\uFF09" aria-hidden="true">#</a></h2><h2 id="magicaction-for-card" tabindex="-1"><a href="./magicaction4card.html#\u66FF\u6362\u6458\u5F55\u6587\u5B57">MagicAction for Card</a> <a class="header-anchor" href="#magicaction-for-card" aria-hidden="true">#</a></h2><h3 id="\u66FF\u6362\u6458\u5F55\u6587\u5B57" tabindex="-1">\u66FF\u6362\u6458\u5F55\u6587\u5B57 <a class="header-anchor" href="#\u66FF\u6362\u6458\u5F55\u6587\u5B57" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u81EA\u5B9A\u4E49\u683C\u5F0F</p><p><a href="./../custom.html#replace-\u51FD\u6570">replace \u51FD\u6570\u683C\u5F0F\u2014\u2014\u66FF\u6362</a></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/modules/autoreplace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const autoreplace = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = autoreplace;
