"use strict";
const naiveUi = require("naive-ui");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
function useDark() {
  const isDark = vue.ref(null);
  let observer = null;
  const setDark = () => {
    isDark.value = document.documentElement.classList.contains("dark");
  };
  vue.onMounted(() => {
    setDark();
    observer = new MutationObserver(setDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
  });
  vue.onBeforeUnmount(() => {
    observer == null ? void 0 : observer.disconnect();
  });
  return isDark;
}
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Shortcut",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const darkPrimary = "rgba(255, 197, 23, 0.25)";
    const darkThemeOverrides = {
      common: {
        primaryColor: darkPrimary,
        primaryColorHover: darkPrimary
      },
      Cascader: {
        menuColor: "#2f2f2f",
        menuBorderRadius: "8px"
      },
      Button: {
        colorHover: darkPrimary,
        borderPressed: darkPrimary
      },
      Tooltip: {
        color: "#2f2f2f"
      }
    };
    const lightThemeOverrides = {
      common: {
        primaryColor: darkPrimary,
        primaryColorHover: darkPrimary
      },
      Cascader: {
        menuBorderRadius: "8px"
      },
      Button: {
        colorHover: darkPrimary,
        borderPressed: darkPrimary
      },
      Tooltip: {
        color: darkPrimary,
        textColor: "2f2f2f"
      }
    };
    const cardActions = [
      {
        key: "manageProfile",
        type: 2,
        label: "\u914D\u7F6E\u7BA1\u7406",
        option: ["\u8BFB\u53D6\u914D\u7F6E", "\u5199\u5165\u914D\u7F6E", "\u91CD\u7F6E\u914D\u7F6E", "\u540C\u6B65\u5176\u4ED6\u7A97\u53E3\u7684\u914D\u7F6E"],
        help: "\u5199\u5165\u914D\u7F6E\u65F6\u8BF7\u786E\u4FDD\u8BE5\u5361\u7247\u81F3\u5C11\u6709\u4E00\u5F20\u5B50\u5361\u7247\u3002\u591A\u5F20\u5B50\u5361\u7247\u53EF\u4EE5\u4E00\u8D77\u5206\u62C5\u914D\u7F6E\uFF0C\u9632\u6B62\u5355\u5F20\u5361\u7247\u5B57\u6570\u8FC7\u591A\u3002",
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        type: 3,
        label: "\u7B5B\u9009\u5361\u7247",
        option: ["\u6240\u6709", "\u6807\u9898", "\u6458\u5F55", "\u8BC4\u8BBA", "\u6807\u7B7E"],
        key: "filterCard",
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        type: 2,
        label: "\u5408\u5E76\u5361\u7247",
        key: "mergeCard",
        option: ["\u540C\u65F6\u5408\u5E76\u6807\u9898", "\u4E0D\u5408\u5E76\u6807\u9898"],
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        type: 3,
        label: "\u91CD\u547D\u540D\u6807\u9898",
        key: "renameTitle",
        help: `$& \u6307\u4EE3\u539F\u6807\u9898\u3002\u8F93\u5165 "%['1'] $&" \u53EF\u5FEB\u901F\u4E3A\u9009\u4E2D\u5361\u7247\u6807\u9898\u7F16\u53F7\u3002`,
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        type: 2,
        label: "\u5408\u5E76\u5361\u7247\u5185\u6587\u5B57",
        key: "mergeText",
        option: ["\u5408\u5E76\u4E3A\u6458\u5F55", "\u5408\u5E76\u4E3A\u8BC4\u8BBA"],
        help: "\u4EC5\u652F\u6301\u5408\u5E76\u6587\u5B57\u6458\u5F55\u548C\u6587\u5B57\u8BC4\u8BBA\uFF0C\u4E0D\u5408\u5E76\u6807\u7B7E\u548C\u94FE\u63A5\uFF0C\u5176\u4F59\u5185\u5BB9\u4F1A\u5728\u5408\u5E76\u540E\u7F6E\u9876",
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        key: "switchTitle",
        type: 2,
        label: "\u5207\u6362\u6458\u5F55\u6807\u9898",
        option: ["\u5207\u6362\u4E3A\u4E0D\u5B58\u5728\u7684", "\u4EA4\u6362\u6807\u9898\u548C\u6458\u5F55"],
        help: "\u5F53\u4E24\u8005\u90FD\u5B58\u5728\u65F6\u8BF7\u4F7F\u7528\u300C\u4EA4\u6362\u6807\u9898\u548C\u6458\u5F55\u300D",
        module: "magicaction4card",
        moduleName: "MagicAction For Card"
      },
      {
        type: 3,
        label: "\u63D0\u53D6\u6807\u9898",
        option: ["\u4F7F\u7528 AutoDef \u4E2D\u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        key: "extractTitle",
        moduleName: "Another AutoDef",
        module: "anotherautodef",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E Another AutoDef\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u62C6\u5206\u6458\u5F55",
        key: "splitExcerpt",
        option: ["\u4F7F\u7528 AutoDef \u4E2D\u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E Another AutoDef\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002\u5C06\u6458\u5F55\u62C6\u5206\u4E3A\u6807\u9898\uFF08\u88AB\u5B9A\u4E49\u9879\uFF09\u548C\u6458\u5F55\uFF08\u5B9A\u4E49\u9879\uFF09\u4E24\u90E8\u5206\u3002",
        moduleName: "Another AutoDef",
        module: "anotherautodef"
      },
      {
        key: "formatCard",
        type: 2,
        label: "\u4F18\u5316\u6392\u7248\u683C\u5F0F",
        option: ["\u6807\u9898\u548C\u6458\u5F55", "\u4EC5\u6807\u9898", "\u4EC5\u6458\u5F55"],
        moduleName: "AutoFormat",
        module: "autoformat",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoFormat\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        key: "completeWord",
        type: 2,
        label: "\u82F1\u6587\u5355\u8BCD\u5236\u5361",
        option: ["\u8FFD\u52A0", "\u66FF\u6362"],
        moduleName: "AutoComplete",
        module: "autocomplete",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoComplete\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u66FF\u6362\u6458\u5F55\u6587\u5B57",
        key: "replaceCard",
        option: ["\u4F7F\u7528 AutoReplace \u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        moduleName: "AutoReplace",
        module: "autoreplace",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoReplace\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u6DFB\u52A0\u6362\u884C",
        key: "listCard",
        option: ["\u4F7F\u7528 AutoList \u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        moduleName: "AutoList",
        module: "autolist",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoList\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u6DFB\u52A0\u6807\u7B7E",
        key: "addTag",
        option: ["\u4F7F\u7528 AutoTag \u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        moduleName: "AutoTag",
        module: "autotag",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoTag\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u4FEE\u6539\u6458\u5F55\u989C\u8272",
        key: "changeColor",
        option: ["\u4F7F\u7528 AutoStyle \u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoStyle\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002\u8F93\u5165\u989C\u8272\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u987A\u5E8F\uFF0C1 \u5230 16",
        moduleName: "AutoStyle",
        module: "autostyle"
      },
      {
        type: 2,
        label: "\u4FEE\u6539\u6458\u5F55\u6837\u5F0F",
        key: "changeStyle",
        option: ["\u4F7F\u7528 AutoStyle \u7684\u8BBE\u7F6E", "\u7EBF\u6846+\u586B\u5145", "\u586B\u5145", "\u7EBF\u6846"],
        moduleName: "AutoStyle",
        module: "autostyle",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoStyle\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "searchCardInfo",
        label: "\u641C\u7D22\u5361\u7247\u5185\u5BB9",
        option: [
          "\u4E2D\u6587",
          "\u82F1\u6587",
          "\u8BCD\u5178",
          "\u7FFB\u8BD1",
          "\u5B66\u672F",
          "\u95EE\u9898",
          "\u5176\u4ED6"
        ],
        moduleName: "CopySearch",
        module: "copysearch",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E CopySearch\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "copyCardInfo",
        label: "\u590D\u5236\u5361\u7247\u5185\u5BB9",
        option: ["\u52A8\u6001\u9009\u62E9", "\u4F18\u5148\u6807\u9898", "\u4F18\u5148\u6458\u5F55", "\u81EA\u5B9A\u4E49"],
        moduleName: "CopySearch",
        module: "copysearch",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E CopySearch\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u6DFB\u52A0\u8BC4\u8BBA",
        key: "addComment",
        option: ["\u4F7F\u7528 AutoComment \u7684\u8BBE\u7F6E", "\u786E\u5B9A"],
        moduleName: "AutoComment",
        module: "autocomment",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoComment\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        label: "\u8F6C\u6362\u4E3A\u7B80\u4F53\u4E2D\u6587",
        key: "simplifyCard",
        option: ["\u6458\u5F55\u548C\u6807\u9898", "\u4EC5\u6458\u5F55", "\u4EC5\u6807\u9898"],
        moduleName: "AutoSimplify",
        module: "autosimplify",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoSimplify\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      }
    ];
    const textActions = [
      {
        type: 2,
        key: "searchText",
        label: "\u641C\u7D22\u9009\u4E2D\u6587\u5B57",
        option: [
          "\u4E2D\u6587",
          "\u82F1\u6587",
          "\u8BCD\u5178",
          "\u7FFB\u8BD1",
          "\u5B66\u672F",
          "\u95EE\u9898",
          "\u5176\u4ED6"
        ],
        moduleName: "CopySearch",
        module: "copysearch",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E CopySearch\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "copyText",
        label: "\u590D\u5236\u9009\u4E2D\u6587\u5B57",
        moduleName: "CopySearch",
        module: "copysearch",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E CopySearch\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "formulaOCR",
        label: "\u516C\u5F0F\u8BC6\u522B",
        option: ["Pure Latex", "$ Latex $", "$$ Latex $$"],
        help: '\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoOCR\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"Markdown" \u63D2\u4EF6\u8BF7\u9009\u62E9 Pure Latex',
        moduleName: "AutoOCR",
        module: "autoocr"
      },
      {
        type: 2,
        key: "textOCR",
        label: "\u6587\u5B57\u8BC6\u522B",
        moduleName: "AutoOCR",
        module: "autoocr",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoOCR\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "handWrittingOCR",
        label: "\u624B\u5199\u8BC6\u522B",
        moduleName: "AutoOCR",
        module: "autoocr",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoOCR\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 2,
        key: "QRCodeOCR",
        label: "\u4E8C\u7EF4\u7801\u8BC6\u522B",
        moduleName: "AutoOCR",
        module: "autoocr",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoOCR\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        key: "translateText",
        type: 2,
        label: "\u7FFB\u8BD1\u9009\u4E2D\u6587\u5B57",
        moduleName: "AutoTranslate",
        module: "autotranslate",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoTranslate\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      },
      {
        type: 3,
        label: "\u8F6C\u6362\u4E3A\u7B80\u4F53\u4E2D\u6587",
        key: "simplifyText",
        option: ["\u6458\u5F55\u548C\u6807\u9898", "\u4EC5\u6458\u5F55", "\u4EC5\u6807\u9898"],
        moduleName: "AutoSimplify",
        module: "autosimplify",
        help: "\u8BE5\u52A8\u4F5C\u6765\u81EA\u4E8E AutoSimplify\uFF0C\u4E0E\u5176\u4F7F\u7528\u76F8\u540C\u7684\u8BBE\u7F6E\u3002"
      }
    ];
    const options = [
      {
        value: "card",
        label: "\u5361\u7247\u52A8\u4F5C",
        children: cardActions
      },
      {
        value: "text",
        label: "\u6587\u5B57\u52A8\u4F5C",
        children: textActions
      }
    ].map((h) => {
      return {
        ...h,
        children: h.children.map((k) => {
          var _a;
          if (!((_a = k == null ? void 0 : k.option) == null ? void 0 : _a.length))
            k.option = ["\u786E\u5B9A"];
          return {
            value: k.key,
            label: k.label,
            children: k.option.map(
              (o, i) => {
                return {
                  value: `${h.value}-${k.type === 3 && !/使用.*的设置/.test(o)}-${k.key}-${i}`,
                  label: o
                };
              }
            )
          };
        })
      };
    });
    const selections = vue.reactive([]);
    const content = vue.ref("");
    const result = vue.reactive({
      show: false,
      content: ""
    });
    const error = vue.ref(false);
    const handleSelect = (valList, _, pathList) => {
      selections.length = 0;
      if (valList.length) {
        valList.forEach((k, i) => {
          const [type, input, action, option] = k.split("-");
          console.log(input);
          selections.push({
            type,
            input: input === "true",
            label: pathList[i].map((k2) => k2.label).join(" / "),
            action,
            option
          });
        });
      }
      error.value = new Set(selections.map((k) => k.type)).size === 2;
      result.show = false;
      result.content = "";
      content.value = "";
    };
    const generate = () => {
      result.show = true;
      const params = new URLSearchParams();
      params.append("info", JSON.stringify(
        selections.map((k) => {
          if (k.input && k.content)
            return {
              action: k.action,
              type: k.type,
              option: k.option,
              content: k.content.replace(/\n/g, "\\n")
            };
          else
            return {
              action: k.action,
              type: k.type,
              option: k.option
            };
        })
      ));
      result.content = `marginnote3app://addon/ohmymn?custom=true&${params.toString()}`;
    };
    const copy = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(result.content);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_space = naiveUi.NSpace;
      const _component_n_cascader = naiveUi.NCascader;
      const _component_n_input = naiveUi.NInput;
      const _component_n_button = naiveUi.NButton;
      const _component_n_tooltip = naiveUi.NTooltip;
      _push(serverRenderer.ssrRenderComponent(vue.unref(naiveUi.NConfigProvider), vue.mergeProps({
        theme: vue.unref(isDark) ? vue.unref(naiveUi.darkTheme) : void 0,
        "theme-overrides": vue.unref(isDark) ? darkThemeOverrides : lightThemeOverrides
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="my-2"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_n_space, {
              vertical: "",
              class: "flex-grow"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_n_cascader, {
                    placeholder: "\u8BF7\u9009\u62E9\u52A8\u4F5C",
                    "expand-trigger": "hover",
                    options: vue.unref(options),
                    "onUpdate:value": handleSelect,
                    "check-strategy": "child",
                    size: "small",
                    clearable: "",
                    multiple: "",
                    cascade: false,
                    status: error.value ? "error" : "success"
                  }, null, _parent3, _scopeId2));
                  if (!error.value) {
                    _push3(`<!--[-->`);
                    serverRenderer.ssrRenderList(selections.filter((k) => k.input), (param) => {
                      _push3(serverRenderer.ssrRenderComponent(_component_n_input, {
                        value: param.content,
                        "onUpdate:value": ($event) => param.content = $event,
                        type: "textarea",
                        placeholder: `\u300C${param.label}\u300D\u6709\u8F93\u5165`,
                        autosize: "",
                        clearable: "",
                        size: "small"
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    vue.createVNode(_component_n_cascader, {
                      placeholder: "\u8BF7\u9009\u62E9\u52A8\u4F5C",
                      "expand-trigger": "hover",
                      options: vue.unref(options),
                      "onUpdate:value": handleSelect,
                      "check-strategy": "child",
                      size: "small",
                      clearable: "",
                      multiple: "",
                      cascade: false,
                      status: error.value ? "error" : "success"
                    }, null, 8, ["options", "status"]),
                    !error.value ? (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 0 }, vue.renderList(selections.filter((k) => k.input), (param) => {
                      return vue.openBlock(), vue.createBlock(_component_n_input, {
                        value: param.content,
                        "onUpdate:value": ($event) => param.content = $event,
                        type: "textarea",
                        placeholder: `\u300C${param.label}\u300D\u6709\u8F93\u5165`,
                        autosize: "",
                        clearable: "",
                        size: "small"
                      }, null, 8, ["value", "onUpdate:value", "placeholder"]);
                    }), 256)) : vue.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_n_button, {
              "text-color": vue.unref(isDark) ? "#fff" : "#000",
              onClick: generate,
              size: "small",
              disabled: selections.length === 0 || error.value || !!selections.find((k) => k.input && !k.content),
              class: "!ml-4"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u751F\u6210 `);
                } else {
                  return [
                    vue.createTextVNode(" \u751F\u6210 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p${_scopeId}></p>`);
            if (result.show && result.content) {
              _push2(`<div class="flex"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_n_input, {
                value: result.content,
                "onUpdate:value": ($event) => result.content = $event,
                type: "textarea",
                placeholder: "",
                readonly: "",
                autosize: "",
                size: "small",
                status: "warning"
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_n_tooltip, {
                placement: "bottom",
                trigger: "click"
              }, {
                trigger: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.ssrRenderComponent(_component_n_button, {
                      onClick: copy,
                      size: "small",
                      class: "!ml-4",
                      "text-color": vue.unref(isDark) ? "#fff" : "#000"
                    }, {
                      default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u590D\u5236 `);
                        } else {
                          return [
                            vue.createTextVNode(" \u590D\u5236 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue.createVNode(_component_n_button, {
                        onClick: copy,
                        size: "small",
                        class: "!ml-4",
                        "text-color": vue.unref(isDark) ? "#fff" : "#000"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" \u590D\u5236 ")
                        ]),
                        _: 1
                      }, 8, ["text-color"])
                    ];
                  }
                }),
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}> \u590D\u5236\u6210\u529F </span>`);
                  } else {
                    return [
                      vue.createVNode("span", null, " \u590D\u5236\u6210\u529F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "my-2" }, [
                vue.createVNode("div", { class: "flex" }, [
                  vue.createVNode(_component_n_space, {
                    vertical: "",
                    class: "flex-grow"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_n_cascader, {
                        placeholder: "\u8BF7\u9009\u62E9\u52A8\u4F5C",
                        "expand-trigger": "hover",
                        options: vue.unref(options),
                        "onUpdate:value": handleSelect,
                        "check-strategy": "child",
                        size: "small",
                        clearable: "",
                        multiple: "",
                        cascade: false,
                        status: error.value ? "error" : "success"
                      }, null, 8, ["options", "status"]),
                      !error.value ? (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 0 }, vue.renderList(selections.filter((k) => k.input), (param) => {
                        return vue.openBlock(), vue.createBlock(_component_n_input, {
                          value: param.content,
                          "onUpdate:value": ($event) => param.content = $event,
                          type: "textarea",
                          placeholder: `\u300C${param.label}\u300D\u6709\u8F93\u5165`,
                          autosize: "",
                          clearable: "",
                          size: "small"
                        }, null, 8, ["value", "onUpdate:value", "placeholder"]);
                      }), 256)) : vue.createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_n_button, {
                    "text-color": vue.unref(isDark) ? "#fff" : "#000",
                    onClick: generate,
                    size: "small",
                    disabled: selections.length === 0 || error.value || !!selections.find((k) => k.input && !k.content),
                    class: "!ml-4"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" \u751F\u6210 ")
                    ]),
                    _: 1
                  }, 8, ["text-color", "disabled"])
                ]),
                vue.createVNode("p"),
                result.show && result.content ? (vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: "flex"
                }, [
                  vue.createVNode(_component_n_input, {
                    value: result.content,
                    "onUpdate:value": ($event) => result.content = $event,
                    type: "textarea",
                    placeholder: "",
                    readonly: "",
                    autosize: "",
                    size: "small",
                    status: "warning"
                  }, null, 8, ["value", "onUpdate:value"]),
                  vue.createVNode(_component_n_tooltip, {
                    placement: "bottom",
                    trigger: "click"
                  }, {
                    trigger: vue.withCtx(() => [
                      vue.createVNode(_component_n_button, {
                        onClick: copy,
                        size: "small",
                        class: "!ml-4",
                        "text-color": vue.unref(isDark) ? "#fff" : "#000"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" \u590D\u5236 ")
                        ]),
                        _: 1
                      }, 8, ["text-color"])
                    ]),
                    default: vue.withCtx(() => [
                      vue.createVNode("span", null, " \u590D\u5236\u6210\u529F ")
                    ]),
                    _: 1
                  })
                ])) : vue.createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/Shortcut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
