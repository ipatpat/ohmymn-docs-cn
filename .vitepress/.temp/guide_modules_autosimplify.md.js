"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"AutoSimplify","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49","link":"#\u81EA\u5B9A\u4E49","children":[]},{"level":2,"title":"\u5F02\u4F53\u5B57","slug":"\u5F02\u4F53\u5B57","link":"#\u5F02\u4F53\u5B57","children":[]}],"relativePath":"guide/modules/autosimplify.md","lastUpdated":1666363551000}');
const _sfc_main = { name: "guide/modules/autosimplify.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="autosimplify" tabindex="-1">AutoSimplify <a class="header-anchor" href="#autosimplify" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u66F4\u65B0</p><p><a href="/update.html">v4.0.6</a> \u65B0\u589E</p></div><p><strong>Powered by <a href="https://github.com/BYVoid/OpenCC" target="_blank" rel="noreferrer">OpenCC</a></strong></p><p>\u81EA\u52A8\u5C06\u6458\u5F55\u8F6C\u6362\u4E3A\u7B80\u4F53\u4E2D\u6587\u3002</p><h2 id="\u81EA\u5B9A\u4E49" tabindex="-1">\u81EA\u5B9A\u4E49 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u8F93\u5165\u683C\u5F0F</p><p><a href="./../custom.html#replace-\u51FD\u6570">replace \u51FD\u6570\u683C\u5F0F\u2014\u2014\u66FF\u6362</a></p></div><h2 id="\u5F02\u4F53\u5B57" tabindex="-1">\u5F02\u4F53\u5B57 <a class="header-anchor" href="#\u5F02\u4F53\u5B57" aria-hidden="true">#</a></h2><p>\u4E2D\u56FD\u53F0\u6E7E\u548C\u4E2D\u56FD\u9999\u6E2F\u5BF9\u4E8E\u5F02\u4F53\u5B57\u7684\u5B9A\u4E49\u6709\u6240\u4E0D\u540C\uFF0C\u56E0\u6B64\u5728\u8FD9\u4E24\u4E2A\u5730\u533A\u7684\u7E41\u4F53\u4E2D\u6587\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0D\u540C\u7684\u5F02\u4F53\u5B57\u3002</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/modules/autosimplify.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const autosimplify = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = autosimplify;
