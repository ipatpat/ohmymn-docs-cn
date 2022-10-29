"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","lastUpdated":1664009523000}');
const _sfc_main = { name: "guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u6A21\u5757</p><p>\u53EF\u4EE5\u7C7B\u6BD4\u63D2\u4EF6\uFF0C\u662F OhMyMN \u5185\u90E8\u7684\u63D2\u4EF6\u3002</p></div><p>\u9996\u5148\u8981\u660E\u767D OhMyMN \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u63A7\u5236\u9762\u677F\u3002\u91CC\u9762\u6240\u6709\u7684\u529F\u80FD\u90FD\u662F\u5355\u72EC\u7684\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u88AB\u8D4B\u4E88\u4E86\u4E09\u79CD\u80FD\u529B\uFF1A</p><ol><li>\u6458\u5F55\u65F6\uFF0C\u4FEE\u6539\u6458\u5F55\u7684\u5185\u5BB9\u6216\u8005\u83B7\u53D6\u6458\u5F55\u5185\u5BB9\u5E76\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</li><li>\u8111\u56FE\u4E2D\u9009\u4E2D\u5361\u7247\u540E\uFF0C\u5BF9\u5361\u7247\u8FDB\u884C\u4FEE\u6539\u6216\u83B7\u53D6\u4FE1\u606F\u5E76\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</li><li>\u6587\u6863\u4E2D\u9009\u4E2D\u6587\u5B57\u540E\uFF0C\u83B7\u53D6\u6587\u5B57\u6216\u9009\u533A\u4FE1\u606F\u5E76\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</li></ol><p>\u6709\u7684\u6A21\u5757\u53EF\u80FD\u4E09\u79CD\u80FD\u529B\u90FD\u7528\u4E86\uFF0C\u6709\u7684\u53EF\u80FD\u53EA\u7528\u4E86\u5176\u4E2D\u4E00\u4E2A\uFF0C\u4E5F\u6709\u7684\u4E00\u4E2A\u90FD\u6CA1\u6709\uFF0C\u4EC5\u4EC5\u53EA\u662F\u4E00\u4E9B\u9009\u9879\u3002</p><p>\u4F7F\u7528\u7B2C\u4E00\u79CD\u80FD\u529B\u7684\u6A21\u5757\u901A\u5E38\u4EE5 Auto \u5F00\u5934\uFF0C\u6BD4\u5982 AutoTitle\uFF0CAutoDef\uFF0C\u8868\u793A\u53EF\u4EE5\u5728\u6458\u5F55\u65F6\u81EA\u52A8\u6267\u884C\uFF08\u9ED8\u8BA4\u4E0D\u6267\u884C\uFF0C\u9700\u8981\u5F00\u542F <code>\u6458\u5F55\u65F6\u81EA\u52A8\u6267\u884C</code>\uFF09\u3002\u4F7F\u7528\u7B2C\u4E00\u79CD\u80FD\u529B\u7684\u6A21\u5757\u901A\u5E38\u8FD8\u4F1A\u4F7F\u7528\u7B2C\u4E8C\u79CD\u80FD\u529B\uFF0C\u4EE5\u4FBF\u5904\u7406\u5DF2\u7ECF\u5B58\u5728\u7684\u5361\u7247\u3002</p><p>\u7B2C\u4E8C\u79CD\u80FD\u529B\u548C\u7B2C\u4E09\u79CD\u80FD\u529B\u4E5F\u901A\u5E38\u540C\u65F6\u4F7F\u7528\uFF0C\u6BD4\u5982\u7528\u6765\u590D\u5236\uFF0C\u641C\u7D22\uFF0C\u5BFC\u51FA\u3002\u5B83\u4EEC\u6709\u4E00\u4E2A\u5171\u540C\u7684\u540D\u5B57 \u2014\u2014 \u52A8\u4F5C\uFF08Action\uFF09\u3002\u6240\u6709\u6A21\u5757\u7684\u52A8\u4F5C\u90FD\u4F1A\u51FA\u73B0\u5728 <a href="./modules/magicaction4card.html">MagicAction for Card</a> \u548C <a href="./modules/magicaction4text.html">MagicAction for Text</a> \u4E2D\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u5C31\u4F1A\u6267\u884C\u76F8\u5E94\u7684\u52A8\u4F5C\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u6240\u6709\u6A21\u5757\u88AB\u5206\u4E3A\u4E86\u4E24\u5927\u7C7B\uFF1A</p><ol><li><p>\u5FC5\u9009\u6A21\u5757\uFF1A\u65E0\u6CD5\u5173\u95ED\u7684\u6A21\u5757\u3002</p><ul><li><a href="./modules/ohmymn.html">OhMyMN</a></li><li><a href="./modules/magicaction4card.html">MagicAction for Card</a>\uFF1A\u4E00\u4E9B\u4E0E\u5361\u7247\u6709\u5173\u7684\u52A8\u4F5C</li><li><a href="./modules/magicaction4text.html">MagicAction for Text</a>\uFF1A\u4E00\u4E9B\u4E0E\u6587\u672C\u6709\u5173\u7684\u52A8\u4F5C</li></ul></li><li><p>\u53EF\u9009\u6A21\u5757\uFF1A\u53EF\u4EE5\u9009\u62E9\u5F00\u542F\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u5728 <code>OhMyMN-\u6A21\u5757\u5FEB\u6377\u5F00\u5173</code> \u4E2D\u542F\u7528</p><ul><li><a href="./modules/shortcut.html">Shortcut</a>\uFF1A\u4F7F\u7528 URL Scheme \u89E6\u53D1\u52A8\u4F5C\uFF0C\u53EF\u81EA\u884C\u8BBE\u7F6E\u5FEB\u6377\u952E\u6765\u6253\u5F00 URL Scheme\u3002</li><li><a href="./modules/gesture.html">Gesture</a>\uFF1A\u4F7F\u7528\u624B\u52BF\u89E6\u53D1\u52A8\u4F5C\u3002</li><li><a href="./modules/copysearch.html">CopySearch</a>\uFF1A\u590D\u5236\u6216\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57\u6216\u9009\u4E2D\u7684\u5361\u7247\u3002</li><li>AutoX <ul><li><a href="./modules/anotherautotitle.html">Another AutoTitle</a>\uFF1A\u81EA\u52A8\u8F6C\u6807\u9898\u3002</li><li><a href="./modules/anotherautodef.html">Another AutoDef</a>\uFF1A\u81EA\u52A8\u62C6\u5206\u6458\u5F55\u4E3A\u6807\u9898\u548C\u6458\u5F55\u4E24\u90E8\u5206\uFF0C\u63D0\u53D6\u6807\u9898\u3002</li><li><a href="./modules/autoformat.html">AutoFormat</a>\uFF1A\u81EA\u52A8\u683C\u5F0F\u5316\u6458\u5F55\uFF0C\u6BD4\u5982\u81EA\u52A8\u6DFB\u52A0\u7A7A\u683C\u3002</li><li><a href="./modules/autocomplete.html">AutoComplete</a>\uFF1A\u81EA\u52A8\u8865\u5168\u82F1\u6587\u5355\u8BCD\u8BCD\u5F62\uFF0C\u586B\u5145\u5355\u8BCD\u4FE1\u606F\uFF0C\u5236\u6210\u5355\u8BCD\u5361\u7247\u3002</li><li><a href="./modules/autoreplace.html">AutoReplace</a>\uFF1A\u81EA\u52A8\u66FF\u6362\u6458\u5F55\u4E2D\u7684\u5185\u5BB9\u3002</li><li><a href="./modules/autolist.html">AutoList</a>\uFF1A\u81EA\u52A8\u5728\u6307\u5B9A\u4F4D\u7F6E\u6362\u884C\uFF0C\u6DFB\u52A0\u5E8F\u53F7\u3002</li><li><a href="./modules/autotag.html">AutoTag</a>\uFF1A\u81EA\u52A8\u6DFB\u52A0\u6807\u7B7E\u6216\u8005\u63D0\u53D6\u90E8\u5206\u5185\u5BB9\u4E3A\u6807\u7B7E\u3002</li><li><a href="./modules/autocomment.html">AutoComment</a>\uFF1A\u81EA\u52A8\u6DFB\u52A0\u8BC4\u8BBA\u6216\u8005\u63D0\u53D6\u90E8\u5206\u5185\u5BB9\u4E3A\u8BC4\u8BBA\u3002</li><li><a href="./modules/autostyle.html">AutoStyle</a>\uFF1A\u81EA\u52A8\u8BBE\u7F6E\u6458\u5F55\u989C\u8272\u548C\u586B\u5145\u6837\u5F0F\u3002</li><li><a href="./modules/autoocr.html">AutoOCR</a>\uFF1A\u81EA\u52A8\u5BF9\u6458\u5F55\u7684\u9009\u533A\u8FDB\u884C OCR \u8BC6\u522B\u6216\u8005\u77EB\u6B63\u3002</li><li><a href="./modules/autotranslate.html">AutoTranslate</a>\uFF1A\u81EA\u52A8\u7FFB\u8BD1\u6458\u5F55\u7684\u5185\u5BB9\u3002</li><li><a href="./modules/autosimplify.html">AutoSimplify</a>\uFF1A\u81EA\u52A8\u5C06\u7E41\u4F53\u8F6C\u4E3A\u7B80\u4F53\u4E2D\u6587\u3002</li></ul></li><li><s>Export to X</s><ul><li><s>Export to Flomo</s></li><li><s>Export to Anki</s></li><li><s>Export to Devonthink</s></li></ul></li></ul></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = index;
