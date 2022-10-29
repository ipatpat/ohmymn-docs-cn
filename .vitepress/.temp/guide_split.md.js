"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"split() \u51FD\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"guide/split.md","lastUpdated":1663750321000}');
const _sfc_main = { name: "guide/split.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="split-\u51FD\u6570" tabindex="-1">split() \u51FD\u6570 <a class="header-anchor" href="#split-\u51FD\u6570" aria-hidden="true">#</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank" rel="noreferrer">split()</a> \u51FD\u6570\u76EE\u524D\u53EA\u5728 <a href="./modules/anotherautodef.html">Another AutoDef</a> \u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u5C06\u6458\u5F55\u7684\u5185\u5BB9\u5206\u5272\u6210\u6807\u9898\u548C\u6458\u5F55\u4E24\u90E8\u5206\u3002</p><p>\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A <a href="./regex.html">\u6B63\u5219\u8868\u8FBE\u5F0F</a>\uFF0C\u4F5C\u4E3A\u5206\u5272\u70B9\uFF0C\u5C06\u5B57\u7B26\u4E32\u5206\u5272\u6210\u4E24\u90E8\u5206\u3002</p><p>\u8FD9\u91CC\u8981\u5355\u72EC\u63D0\u4E00\u4E0B\u662F\u56E0\u4E3A split \u6709\u4E2A\u7279\u6027\uFF0C\u5982\u679C\u4F60\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u4E86 <a href="./regex.html#\u5206\u7EC4">\u6355\u83B7\u7EC4</a>\uFF0C\u5C31\u4F1A\u628A\u6355\u83B7\u7684\u5185\u5BB9\u653E\u5728\u5206\u5272\u540E\u7684\u7ED3\u679C\u4E2D\uFF0C\u5BFC\u81F4\u5206\u6210\u4E86\u4E09\u4E2A\u90E8\u5206\u3002 \u5982\u679C\u4F60\u5FC5\u987B\u8981\u5206\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="./regex.html#\u5206\u7EC4">\u975E\u6355\u83B7\u7EC4</a>\u3002</p><p>\u5176\u5B9E\u6355\u83B7\u7EC4\u4E5F\u6709\u4E2A\u597D\u5904\uFF0C\u5C31\u662F\u5F53\u4F60\u627E\u4E0D\u5230\u4E00\u4E2A\u660E\u786E\u7684\u5206\u5272\u70B9\uFF0C\u6BD4\u5982\u9009\u62E9\u9898\uFF0C\u4F60\u60F3\u628A\u9898\u76EE\u4F5C\u4E3A\u6807\u9898\uFF0C\u9009\u9879\u4F5C\u4E3A\u6458\u5F55\u3002\u8FD9\u65F6\u5019\u5C31\u5FC5\u987B\u7528\u5230\u6355\u83B7\u7EC4\uFF0C\u5E76\u4E14\u6355\u83B7\u7684\u5185\u5BB9\u5C31\u662F\u6240\u6709\u9009\u9879\u3002</p><p><code>[\u88AB\u5B9A\u4E49\u9879, \u5B9A\u4E49\u9879]</code> \u21D2 <code>[\u88AB\u5B9A\u4E49\u9879, \u6355\u83B7\u7EC4]</code></p><p>\u53E6\u5916\uFF0C\u901A\u8FC7\u6355\u83B7\u7EC4\u8FD8\u53EF\u4EE5\u5BF9\u88AB\u5B9A\u4E49\u9879\u6216\u8005\u5B9A\u4E49\u9879\u8FDB\u884C\u9650\u5236\u3002</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/split.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const split = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = split;
