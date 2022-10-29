"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6B63\u5728\u65BD\u5DE5\u4E2D","slug":"\u6B63\u5728\u65BD\u5DE5\u4E2D","link":"#\u6B63\u5728\u65BD\u5DE5\u4E2D","children":[]}],"relativePath":"api/index.md","lastUpdated":1659159330000}');
const _sfc_main = { name: "api/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="\u6B63\u5728\u65BD\u5DE5\u4E2D" tabindex="-1">\u6B63\u5728\u65BD\u5DE5\u4E2D <a class="header-anchor" href="#\u6B63\u5728\u65BD\u5DE5\u4E2D" aria-hidden="true">#</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = index;
