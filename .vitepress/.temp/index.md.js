"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"OhMyMN","titleTemplate":"MarginNote \u63D2\u4EF6\u5F00\u53D1\u6846\u67B6","description":"","frontmatter":{"layout":"home","sidebar":false,"title":"OhMyMN","titleTemplate":"MarginNote \u63D2\u4EF6\u5F00\u53D1\u6846\u67B6","hero":{"name":"OhMyMN","text":"MarginNote \u63D2\u4EF6\u5F00\u53D1\u6846\u67B6","tagline":"\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u52A8\u5904\u7406\u6458\u5F55\u7684\u5F3A\u5927\u63D2\u4EF6","image":{"src":"/logo-shadow.svg","alt":"ohmymn"},"actions":[{"theme":"brand","text":"\u4F7F\u7528\u6307\u5357","link":"/guide/"},{"theme":"alt","text":"\u5F00\u53D1\u6587\u6863","link":"/dev/"},{"theme":"alt","text":"API \u6587\u6863","link":"/api/"},{"theme":"alt","text":"\u7ACB\u5373\u4E0B\u8F7D","link":"https://bbs.marginnote.cn/t/topic/20501"},{"theme":"alt","text":"\u67E5\u770B\u6E90\u7801","link":"https://github.com/marginnoteapp/ohmymn"}]}},"headers":[],"relativePath":"index.md","lastUpdated":1663429425000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = index;
