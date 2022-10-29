"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"AutoComment","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49","link":"#\u81EA\u5B9A\u4E49","children":[]},{"level":2,"title":"MagicAction for Card","slug":"magicaction-for-card","link":"#magicaction-for-card","children":[{"level":3,"title":"\u6DFB\u52A0\u8BC4\u8BBA","slug":"\u6DFB\u52A0\u8BC4\u8BBA","link":"#\u6DFB\u52A0\u8BC4\u8BBA","children":[]}]}],"relativePath":"guide/modules/autocomment.md","lastUpdated":1666363551000}');
const _sfc_main = { name: "guide/modules/autocomment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="autocomment" tabindex="-1">AutoComment <a class="header-anchor" href="#autocomment" aria-hidden="true">#</a></h1><p>\u5728\u5339\u914D\u5230\u6B63\u5219\u7684\u60C5\u51B5\u4E0B\u81EA\u52A8\u6DFB\u52A0\u6307\u5B9A\u8BC4\u8BBA\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u6458\u5F55\u4E2D\u63D0\u53D6\u7279\u5B9A\u5185\u5BB9\u4E3A\u8BC4\u8BBA\u3002</p><h2 id="\u81EA\u5B9A\u4E49" tabindex="-1">\u81EA\u5B9A\u4E49 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u8F93\u5165\u683C\u5F0F</p><p><a href="./../custom.html#replace-\u51FD\u6570">replace \u51FD\u6570\u683C\u5F0F\u2014\u2014\u63D0\u53D6</a></p></div><p><strong>\u4F8B</strong></p><ul><li><code>(/^.+$/gs, &quot;\u8FD9\u662F\u4E00\u4E2A\u4F8B\u5B50&quot;)</code> \u5373\u53EF\u6BCF\u6B21\u90FD\u6DFB\u52A0\u4E00\u6761\u8BC4\u8BBA\u4E3A\u201C\u8FD9\u662F\u4E00\u4E2A\u4F8B\u5B50\u201D\u3002</li></ul><div class="tip custom-block"><p class="custom-block-title">\u66F4\u65B0</p><p><a href="/update.html">v4.0.11</a> \u652F\u6301\u56FE\u7247\u6458\u5F55\u81EA\u52A8\u6DFB\u52A0\u8BC4\u8BBA\u3002</p></div><ul><li><code>(/@picture, &quot;\u8FD9\u662F\u4E00\u5F20\u56FE\u7247&quot;)</code> \u6458\u5F55\u56FE\u7247\u65F6\u81EA\u52A8\u6DFB\u52A0\u8BC4\u8BBA\u3002</li></ul><h2 id="magicaction-for-card" tabindex="-1"><a href="./magicaction4card.html#\u6DFB\u52A0\u8BC4\u8BBA">MagicAction for Card</a> <a class="header-anchor" href="#magicaction-for-card" aria-hidden="true">#</a></h2><h3 id="\u6DFB\u52A0\u8BC4\u8BBA" tabindex="-1">\u6DFB\u52A0\u8BC4\u8BBA <a class="header-anchor" href="#\u6DFB\u52A0\u8BC4\u8BBA" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u8F93\u5165\u683C\u5F0F</p><p><a href="./../custom.html#replace-\u51FD\u6570">replace \u51FD\u6570\u683C\u5F0F\u2014\u2014\u63D0\u53D6</a></p></div><p>\u7531\u4E8E\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u53EA\u662F\u4E3A\u4E86\u6DFB\u52A0\u8BC4\u8BBA\uFF0C\u800C\u65E0\u987B\u63D0\u53D6\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9\uFF0C\u6211\u4F1A\u5C06\u5176\u8865\u5168\u4E3A <code>(/^.+$/gs, &quot;\u8BC4\u8BBA&quot;)</code>\u3002</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/modules/autocomment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const autocomment = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = autocomment;
