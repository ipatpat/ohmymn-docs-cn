"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const serverRenderer = require("vue/server-renderer");
const vue = require("vue");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const __pageData = JSON.parse('{"title":"AutoComplete","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009","slug":"\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009","link":"#\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009","children":[]},{"level":2,"title":"\u586B\u5145\u5355\u8BCD\u4FE1\u606F","slug":"\u586B\u5145\u5355\u8BCD\u4FE1\u606F","link":"#\u586B\u5145\u5355\u8BCD\u4FE1\u606F","children":[{"level":3,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49","link":"#\u81EA\u5B9A\u4E49","children":[]}]},{"level":2,"title":"\u52A8\u6001\u9009\u62E9\u91CA\u4E49","slug":"\u52A8\u6001\u9009\u62E9\u91CA\u4E49","link":"#\u52A8\u6001\u9009\u62E9\u91CA\u4E49","children":[{"level":3,"title":"\u591A\u9009\u91CA\u4E49","slug":"\u591A\u9009\u91CA\u4E49","link":"#\u591A\u9009\u91CA\u4E49","children":[]}]},{"level":2,"title":"\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62","slug":"\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62","link":"#\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62","children":[]},{"level":2,"title":"\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587","slug":"\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587","link":"#\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587","children":[{"level":3,"title":"\u7FFB\u8BD1\u4E0A\u4E0B\u6587","slug":"\u7FFB\u8BD1\u4E0A\u4E0B\u6587","link":"#\u7FFB\u8BD1\u4E0A\u4E0B\u6587","children":[]}]},{"level":2,"title":"MagicAction for Card","slug":"magicaction-for-card","link":"#magicaction-for-card","children":[{"level":3,"title":"\u82F1\u6587\u5355\u8BCD\u5236\u5361","slug":"\u82F1\u6587\u5355\u8BCD\u5236\u5361","link":"#\u82F1\u6587\u5355\u8BCD\u5236\u5361","children":[]}]}],"relativePath":"guide/modules/autocomplete.md","lastUpdated":1666368350000}');
const _sfc_main = { name: "guide/modules/autocomplete.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="autocomplete" tabindex="-1">AutoComplete <a class="header-anchor" href="#autocomplete" aria-hidden="true">#</a></h1><p><strong>Powered by <a href="https://github.com/skywind3000/ECDICT" target="_blank" rel="noreferrer">ECDICT</a> &amp; <a href="http://dict.e.opac.vip/dict.php" target="_blank" rel="noreferrer">API</a></strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u672C\u6A21\u5757\u4F1A\u7528\u5230\u4E00\u4E2A\u5728\u7EBF API \u6765\u83B7\u53D6\u6570\u636E\uFF0C\u9700\u8981\u8054\u7F51\uFF0C\u5E76\u4E14\u7531\u4E8E\u670D\u52A1\u5668\u5728\u56FD\u5185\uFF0C\u56FD\u5916\u7528\u6237\u6709\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u3002</p><p>v4 \u7248\u672C\u63D0\u4F9B\u4E86\u672C\u5730\u6570\u636E\u5E93\u7248\u672C\uFF0C\u4F53\u79EF\u8F83\u5927\uFF0C\u4F46\u4E0D\u9700\u8981\u8054\u7F51\uFF0C\u53EF\u4EE5\u81EA\u884C\u9009\u62E9\u4E0B\u8F7D\u548C\u5F00\u542F\u3002\u6570\u636E\u5E93\u8F83\u5927\uFF0C\u9996\u6B21\u5B89\u88C5 OhMyMN \u65F6\u4F1A\u89E3\u538B\u6570\u636E\u5E93\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u3002</p></div><p>\u8BE5\u6A21\u5757\u7528\u4E8E\u89E3\u51B3\u4F7F\u7528 MN \u5B66\u4E60\u82F1\u8BED\uFF0C\u6458\u5F55\u82F1\u6587\u5355\u8BCD\u7684\u4E00\u4E2A\u56F0\u6270\uFF0C\u90A3\u5C31\u662F\u5728\u5B9E\u9645\u6587\u7AE0\u4E2D\uFF0C\u82F1\u6587\u5355\u8BCD\u5F80\u5F80\u90FD\u4E0D\u662F\u539F\u578B\uFF0C\u65E0\u6CD5\u5F88\u597D\u7684\u5229\u7528\u6807\u9898\u94FE\u63A5\u3002\u5F00\u542F\u8BE5\u529F\u80FD\u540E\uFF0C\u4F1A\u81EA\u52A8\u8865\u5168\u7B2C\u4E09\u4EBA\u79F0\uFF0C\u590D\u6570\uFF0C\u8FC7\u53BB\uFF0C\u5B8C\u6210\uFF0C\u6BD4\u8F83\u7EA7\u7B49\u7B49\u5F62\u5F0F\u3002</p><p>\u66F4\u4E3A\u5F3A\u5927\u7684\u662F\uFF0C\u4E0D\u7BA1\u4F60\u6458\u5F55\u7684\u662F\u4E0D\u662F\u539F\u578B\uFF0C\u90FD\u53EF\u4EE5\u81EA\u52A8\u5224\u65AD\uFF0C\u7136\u540E\u8865\u5168\u6240\u6709\u5F62\u5F0F\u3002</p><p><img src="https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/f5ed247b373a2f5f053b6f3523.gif?x-oss-process=base_webp" alt=""></p><h2 id="\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009" tabindex="-1">\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009 <a class="header-anchor" href="#\u67EF\u6797\u65AF\u661F\u7EA7\u7B5B\u9009" aria-hidden="true">#</a></h2><p>\u8D8A\u5E38\u7528\u7684\u5355\u8BCD\u67EF\u6797\u65AF\u661F\u7EA7\u5C31\u8D8A\u9AD8\uFF0C\u4E00\u5171 6 \u4E2A\u7B49\u7EA7\uFF0C0-5 \u661F\u3002\u901A\u5E38 5 \u661F\u7684\u5355\u8BCD\u90FD\u662F\u6BD4\u8F83\u7B80\u5355\u7684\u5355\u8BCD\uFF0C\u53EF\u4EE5\u6392\u9664\u3002</p><h2 id="\u586B\u5145\u5355\u8BCD\u4FE1\u606F" tabindex="-1">\u586B\u5145\u5355\u8BCD\u4FE1\u606F <a class="header-anchor" href="#\u586B\u5145\u5355\u8BCD\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5C06\u5355\u8BCD\u7684\u90E8\u5206\u4FE1\u606F\u6DFB\u52A0\u4E3A\u8BC4\u8BBA\uFF0C\u8FBE\u5230\u81EA\u52A8\u5236\u5361\u7684\u76EE\u7684\u3002</p><h3 id="\u81EA\u5B9A\u4E49" tabindex="-1">\u81EA\u5B9A\u4E49 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u81EA\u5B9A\u4E49\u683C\u5F0F</p><p><a href="./../custom.html#\u6A21\u7248">\u6A21\u7248</a></p></div><p>\u6709\u4EE5\u4E0B\u51E0\u4E2A\u53D8\u91CF</p><div><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>word</code></td><td>\u5355\u8BCD\u539F\u578B</td></tr><tr><td><code>phonetic</code></td><td>\u97F3\u6807\uFF0C\u5927\u90E8\u5206\u4E3A\u82F1\u5F0F\u97F3\u6807</td></tr><tr><td><code>zh</code></td><td>\u4E2D\u6587\u91CA\u4E49</td></tr><tr><td><code>en</code></td><td>\u82F1\u6587\u91CA\u4E49</td></tr><tr><td><code>tags</code></td><td>\u9AD8\u8003\u3001\u56DB\u516D\u7EA7\u7B49\u7B49\u6807\u7B7E</td></tr><tr><td><code>collins</code></td><td>\u67EF\u6797\u65AF\u661F\u7EA7</td></tr></tbody></table><p>\u6709\u4E24\u4E2A\u8F93\u5165\u680F\uFF0C\u53EF\u4EE5\u751F\u6210\u4E24\u4E2A\u8BC4\u8BBA\uFF0C\u901A\u5E38\u7B2C\u4E00\u680F\u586B\u5165\u97F3\u6807\uFF0C\u6807\u7B7E\u7B49\u4FE1\u606F\uFF0C\u7B2C\u4E8C\u680F\u586B\u5165\u4E2D\u6587\u6216\u8005\u82F1\u6587\u91CA\u4E49\u3002\u8FD9\u6837\u65B9\u4FBF\u5728\u590D\u4E60\u6A21\u5F0F\u4E2D\u5C06\u91CA\u4E49\u5355\u72EC\u653E\u5728\u5361\u7247\u80CC\u9762\u3002</p><p>\u9ED8\u8BA4\u586B\u5145 1: <code>{{#phonetic}}\u{1F508}[{{phonetic}}] {{/phonetic}} {{collins}}{{#tags}}\\n\u{1F3F7} {{tags}}{{/tags}}</code></p><p>\u9ED8\u8BA4\u586B\u5145 2: <code>\u270D\u{1F3FB}\\n{{zh}}\\n\u{1F440}</code></p></div><p><img src="https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220730234119.png?x-oss-process=base_webp" alt=""></p><h2 id="\u52A8\u6001\u9009\u62E9\u91CA\u4E49" tabindex="-1">\u52A8\u6001\u9009\u62E9\u91CA\u4E49 <a class="header-anchor" href="#\u52A8\u6001\u9009\u62E9\u91CA\u4E49" aria-hidden="true">#</a></h2><p>\u5F00\u542F\u6B64\u9009\u9879\u540E\uFF0C\u6458\u5F55\u7684\u65F6\u5019\u4F1A\u5F39\u51FA\u5F39\u7A97\u6765\u9009\u62E9\u5F53\u524D\u6587\u4E2D\u7684\u542B\u4E49\uFF08\u6700\u591A 9 \u4E2A\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6765\u81EA\u5B9A\u4E49\u3002</p><p><img src="https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220731000657.png?x-oss-process=base_webp" alt=""></p><h3 id="\u591A\u9009\u91CA\u4E49" tabindex="-1">\u591A\u9009\u91CA\u4E49 <a class="header-anchor" href="#\u591A\u9009\u91CA\u4E49" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u6307\u5B9A\u7684\u53D8\u91CF\uFF0C\u6765\u591A\u9009\u91CA\u4E49\u3002</p><ul><li><code>[all]</code>: \u6240\u6709\u91CA\u4E49\u3002</li><li><code>[1-9]</code>: \u7F16\u53F7 1-9 \u7684\u91CA\u4E49\u3002</li><li><code>[123789]</code>\uFF1A\u7F16\u53F7 1\uFF0C2\uFF0C3\uFF0C7\uFF0C8\uFF0C9 \u7684\u91CA\u4E49\uFF0C\u4F9D\u6B21\u7C7B\u63A8\u3002</li><li><code>[adj]</code>: \u8BCD\u6027\u4E3A adj \u7684\u91CA\u4E49\uFF0C\u4F9D\u6B21\u7C7B\u63A8\u3002</li></ul><p>\u591A\u9009\u91CA\u4E49\u548C\u81EA\u5B9A\u4E49\u91CA\u4E49\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u6BD4\u5982 <code>[all] v.\u65B0\u7684\u91CA\u4E49</code>\u3002</p><h2 id="\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62" tabindex="-1">\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62 <a class="header-anchor" href="#\u52A8\u6001\u9009\u62E9\u5355\u8BCD\u539F\u5F62" aria-hidden="true">#</a></h2><p>\u6709\u4E9B\u5355\u8BCD\u6BD4\u5982 lay\uFF0C\u65E2\u662F lie \u7684\u8FC7\u53BB\u5F0F\uFF0C\u4E5F\u662F laid \u7684\u539F\u5F62\u3002\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u4E3B\u52A8\u9009\u62E9\u4E00\u4E0B\u3002</p><h2 id="\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587" tabindex="-1">\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#\u81EA\u52A8\u6458\u5F55\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u66F4\u65B0</p><p><a href="/update.html">v4.0.10</a> \u4E0A\u4E0B\u6587\u4F5C\u4E3A\u6458\u5F55\u800C\u4E0D\u662F\u8BC4\u8BBA\u3002</p></div><p>\u987E\u540D\u601D\u4E49\uFF0C\u53EF\u4EE5\u81EA\u52A8\u6458\u5F55\u5F53\u524D\u5355\u8BCD\u6240\u5728\u7684\u53E5\u5B50\uFF0C\u4ECE\u800C\u4FDD\u7559\u8BED\u5883\uFF0C\u65B9\u4FBF\u590D\u4E60\u8BB0\u5FC6\u3002</p><p>\u76EE\u524D\u4E0D\u652F\u6301 OCR Pro\uFF0C\u5982\u679C PDF \u672C\u8EAB\u6CA1\u6709\u6587\u5B57\u5C42\uFF0C\u5219\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u5982\u679C\u975E\u5E38\u4F9D\u8D56\u8FD9\u4E2A\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528 Abbyy \u6765 OCR \u6574\u672C\u4E66\u3002</p><h3 id="\u7FFB\u8BD1\u4E0A\u4E0B\u6587" tabindex="-1"><s>\u7FFB\u8BD1\u4E0A\u4E0B\u6587</s> <a class="header-anchor" href="#\u7FFB\u8BD1\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u66F4\u65B0</p><p><a href="/update.html">v4.0.10</a> \u79FB\u9664\uFF0C\u8BF7\u76F4\u63A5\u7528 AutoTranslate\u3002</p></div><h2 id="magicaction-for-card" tabindex="-1"><a href="./magicaction4card.html#\u82F1\u6587\u5355\u8BCD\u5236\u5361">MagicAction for Card</a> <a class="header-anchor" href="#magicaction-for-card" aria-hidden="true">#</a></h2><h3 id="\u82F1\u6587\u5355\u8BCD\u5236\u5361" tabindex="-1">\u82F1\u6587\u5355\u8BCD\u5236\u5361 <a class="header-anchor" href="#\u82F1\u6587\u5355\u8BCD\u5236\u5361" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u76F8\u540C\u7684\u914D\u7F6E\u3002AutoComplete \u751F\u6210\u7684\u4FE1\u606F\u90FD\u5C5E\u4E8E\u8BC4\u8BBA\uFF0C\u8BC4\u8BBA\u65E0\u6CD5\u88AB\u4FEE\u6539\uFF0C\u53EA\u80FD\u5220\u9664\u91CD\u65B0\u6DFB\u52A0\u3002</p><ul><li>\u8FFD\u52A0\uFF1A\u6DFB\u52A0\u65B0\u7684\u8BC4\u8BBA\u3002</li><li>\u66FF\u6362: \u5148\u5220\u9664\u65E7\u8BC4\u8BBA\uFF0C\u518D\u6DFB\u52A0\u65B0\u7684\u8BC4\u8BBA\uFF08\u56FE\u7247\u53EF\u80FD\u4F1A\u8DD1\u9876\u4E0A\u53BB\uFF09\u3002</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/modules/autocomplete.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const autocomplete = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports.default = autocomplete;
