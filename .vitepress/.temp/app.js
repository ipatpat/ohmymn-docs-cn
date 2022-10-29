"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const _pluginVue_exportHelper = require("./plugin-vue_export-helper.21b42923.js");
const core = require("@vueuse/core");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const fonts = "";
const vars$1 = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpDoc = "";
const vpSponsor = "";
const siteData = JSON.parse('{"lang":"zh-CN","title":"OhMyMN","description":"MarginNote \u63D2\u4EF6\u5F00\u53D1\u6846\u67B6","base":"/","head":[],"appearance":true,"themeConfig":{"logo":"/logo.svg","outline":"deep","outlineTitle":"\u76EE\u5F55","editLink":{"pattern":"https://github.com/marginnoteapp/ohmymn-docs-cn/tree/main/:path","text":"\u4E3A\u6B64\u9875\u63D0\u4F9B\u4FEE\u6539\u5EFA\u8BAE"},"docFooter":{"prev":"\u4E0A\u4E00\u7BC7","next":"\u4E0B\u4E00\u7BC7"},"algolia":{"appId":"58GKGEP8Q0","apiKey":"27d364ba4e1ef8bd5f374377f0941845","indexName":"doc-cn"},"localeLinks":{"text":"\u7B80\u4F53\u4E2D\u6587","items":[{"text":"English","link":"https://ohmymn.marginnote.com"}]},"socialLinks":[{"icon":"github","link":"https://github.com/marginnoteapp/ohmymn"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright \xA9 2021-PRESENT MarginNote, ourongxing, and contributors."},"nav":[{"text":"\u4F7F\u7528\u6307\u5357","link":"/guide/"},{"text":"\u5F00\u53D1","link":"/dev/"},{"text":"API","link":"/api/"},{"text":"v4.0.0","items":[{"text":"\u7B7E\u540D\u7248\u672C\uFF08v4.0.0\uFF09","link":"https://bbs.marginnote.cn/t/topic/20501"},{"text":"\u672A\u7B7E\u540D\u7248\u672C\uFF08v4.0.14\uFF09","link":"/update"}]}],"sidebar":{"/dev/":[],"/api/":[],"/":[{"text":"\u57FA\u7840","collapsible":true,"items":[{"text":"\u7B80\u4ECB","link":"/guide/"},{"text":"\u57FA\u672C\u6982\u5FF5","link":"/guide/concept"},{"text":"\u6CE8\u610F\u4E8B\u9879","link":"/guide/attention"},{"text":"\u914D\u7F6E\u7BA1\u7406","link":"/guide/profile"},{"text":"MN \u4F7F\u7528\u6280\u5DE7","link":"/guide/tips"}]},{"text":"\u8FDB\u9636","collapsible":true,"collapsed":true,"items":[{"text":"\u6B63\u5219\u8868\u8FBE\u5F0F","link":"/guide/regex"},{"text":"replace() \u51FD\u6570","link":"/guide/replace"},{"text":"split() \u51FD\u6570","link":"/guide/split"},{"text":"\u6A21\u7248\u8BED\u6CD5","link":"/guide/mustache"},{"text":"\u6A21\u7248\u53D8\u91CF","link":"/guide/vars"},{"text":"\u81EA\u5B9A\u4E49\u8F93\u5165\u683C\u5F0F","link":"/guide/custom"},{"text":"\u81EA\u52A8\u7F16\u53F7","link":"/guide/serial"}]},{"text":"\u5FC5\u9009\u6A21\u5757","collapsible":true,"collapsed":false,"items":[{"text":"OhMyMN","link":"/guide/modules/ohmymn"},{"text":"MagicAction for Card","link":"/guide/modules/magicaction4card"},{"text":"MagicAction for Text","link":"/guide/modules/magicaction4text"}]},{"text":"\u53EF\u9009\u6A21\u5757","collapsible":true,"collapsed":true,"items":[{"text":"Shortcut","link":"/guide/modules/shortcut"},{"text":"Gesture","link":"/guide/modules/gesture"},{"text":"Another AutoTitle","link":"/guide/modules/anotherautotitle"},{"text":"Another AutoDef","link":"/guide/modules/anotherautodef"},{"text":"AutoFormat","link":"/guide/modules/autoformat"},{"text":"AutoComplete","link":"/guide/modules/autocomplete"},{"text":"AutoReplace","link":"/guide/modules/autoreplace"},{"text":"AutoList","link":"/guide/modules/autolist"},{"text":"AutoTag","link":"/guide/modules/autotag"},{"text":"AutoStyle","link":"/guide/modules/autostyle"},{"text":"CopySearch","link":"/guide/modules/copysearch"},{"text":"AutoOCR","link":"/guide/modules/autoocr"},{"text":"AutoTranslate","link":"/guide/modules/autotranslate"},{"text":"AutoComment","link":"/guide/modules/autocomment"},{"text":"AutoSimplify","link":"/guide/modules/autosimplify"}]}]}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}');
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const inBrowser$1 = typeof window !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0
};
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData2) {
  const { locales } = siteData2.themeConfig || {};
  const siteLocales = siteData2.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData2, route) {
  route = cleanRoute(siteData2, route);
  const localeData = resolveLocales(siteData2.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData2.themeConfig.locales || {}, route);
  return Object.assign({}, siteData2, localeData, {
    themeConfig: Object.assign({}, siteData2.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData2).lang,
    locales: {},
    langs: createLangDictionary(siteData2)
  });
}
function createTitle(siteData2, pageData) {
  var _a;
  const title = pageData.title || siteData2.title;
  const template = (_a = pageData.titleTemplate) != null ? _a : siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function cleanRoute(siteData2, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base2 = siteData2.base;
  const baseWithoutSuffix = base2.endsWith("/") ? base2.slice(0, -1) : base2;
  return route.slice(baseWithoutSuffix.length);
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base2 = "/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
const dataSymbol = Symbol();
const siteDataRef = vue.shallowRef(siteData);
function initData(route) {
  const site = vue.computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: vue.computed(() => site.value.themeConfig),
    page: vue.computed(() => route.data),
    frontmatter: vue.computed(() => route.data.frontmatter),
    lang: vue.computed(() => site.value.lang),
    localePath: vue.computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: vue.computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: vue.computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = vue.inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = vue.reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser$1 ? location.href : "/") {
    var _a, _b;
    await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href));
    const url = new URL(href, fakeHost);
    if (siteDataRef.value.cleanUrls === "disabled") {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = vue.markRaw(comp);
        route.data = true ? vue.markRaw(__pageData) : vue.readonly(__pageData);
        if (inBrowser$1) {
          vue.nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? vue.markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && !link2.download) {
        const { href, origin, pathname, hash, search, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = vue.inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
const Content = vue.defineComponent({
  name: "VitePressContent",
  props: {
    onContentUpdated: Function
  },
  setup(props) {
    const route = useRoute();
    vue.onUpdated(() => {
      var _a;
      (_a = props.onContentUpdated) == null ? void 0 : _a.call(props);
    });
    return () => vue.h("div", { style: { position: "relative" } }, [
      route.component ? vue.h(route.component) : null
    ]);
  }
});
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof window !== "undefined";
const hashRef = vue.ref(inBrowser ? location.hash : "");
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeoutId = setTimeout(fn, delay);
    }
  };
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return hashRef.value === hashMatch[0];
  }
  return true;
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, site.value.cleanUrls === "disabled" ? ".html" : "")}${search}${hash}`;
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.link) {
        links.push({ ...item, link: item.link });
      }
      if ("items" in item) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  for (const group of sidebar) {
    recursivelyExtractLinks(group.items);
  }
  return links;
}
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const isOpen = vue.ref(false);
  const sidebar = vue.computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = vue.computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const hasAside = vue.computed(() => {
    return frontmatter.value.layout !== "home" && frontmatter.value.aside !== false;
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    hasAside,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  vue.watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  vue.onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  vue.onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
const _sfc_main$1h = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = vue.ref();
    vue.watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-aabd3bc6></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-aabd3bc6> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_aabd3bc6_lang = "";
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1h, [["__scopeId", "data-v-aabd3bc6"]]);
const _sfc_main$1g = /* @__PURE__ */ vue.defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-70918306></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_70918306_lang = "";
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1g, [["__scopeId", "data-v-70918306"]]);
function useNav() {
  const isScreenOpen = vue.ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  vue.watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1f = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: null,
    alt: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_VPImage = vue.resolveComponent("VPImage", true);
      if (__props.image) {
        _push(`<!--[-->`);
        if (typeof __props.image === "string" || "src" in __props.image) {
          _push(`<img${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPImage" }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
            src: vue.unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
            alt: (_a = __props.alt) != null ? _a : typeof __props.image === "string" ? "" : __props.image.alt || ""
          }))} data-v-5e058bb5>`);
        } else {
          _push(`<!--[-->`);
          _push(serverRenderer.ssrRenderComponent(_component_VPImage, vue.mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: typeof __props.image.dark === "string" ? __props.image.alt : __props.image.dark.alt || __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(serverRenderer.ssrRenderComponent(_component_VPImage, vue.mergeProps({
            class: "light",
            image: __props.image.light,
            alt: typeof __props.image.light === "string" ? __props.image.alt : __props.image.light.alt || __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_5e058bb5_lang = "";
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1f, [["__scopeId", "data-v-5e058bb5"]]);
const _sfc_main$1e = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": vue.unref(hasSidebar) }]
      }, _attrs))} data-v-b1d03f7c><a class="title"${serverRenderer.ssrRenderAttr("href", vue.unref(site).base)} data-v-b1d03f7c>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(VPImage, {
        class: "logo",
        image: vue.unref(theme2).logo
      }, null, _parent));
      if (vue.unref(theme2).siteTitle) {
        _push(`<!--[-->${serverRenderer.ssrInterpolate(vue.unref(theme2).siteTitle)}<!--]-->`);
      } else if (vue.unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${serverRenderer.ssrInterpolate(vue.unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_b1d03f7c_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1e, [["__scopeId", "data-v-b1d03f7c"]]);
const style = "";
const _sfc_main$1d = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPAlgoliaSearchBox = vue.defineAsyncComponent(() => Promise.resolve().then(() => require("./VPAlgoliaSearchBox.2664783c.js")));
    const { theme: theme2 } = useData();
    const loaded = vue.ref(false);
    const metaKey = vue.ref(`'Meta'`);
    vue.onMounted(() => {
      if (!theme2.value.algolia) {
        return;
      }
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'\u2318'` : `'Ctrl'`;
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      vue.onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _cssVars = { style: {
        "--11b034f9": metaKey.value
      } };
      if (vue.unref(theme2).algolia) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavBarSearch" }, _attrs, _cssVars))}>`);
        if (loaded.value) {
          _push(serverRenderer.ssrRenderComponent(vue.unref(VPAlgoliaSearchBox), null, null, _parent));
        } else {
          _push(`<div id="docsearch"><button type="button" class="DocSearch DocSearch-Button" aria-label="Search"><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${serverRenderer.ssrInterpolate(((_a = vue.unref(theme2).algolia) == null ? void 0 : _a.buttonText) || "Search")}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const _sfc_main$1c = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconExternalLink.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPIconExternalLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$1b = /* @__PURE__ */ vue.defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = vue.computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(__props.href ? "a" : "span"), vue.mergeProps({
        class: ["VPLink", { link: __props.href }],
        href: __props.href ? vue.unref(normalizeLink)(__props.href) : void 0,
        target: vue.unref(isExternal2) ? "_blank" : void 0,
        rel: vue.unref(isExternal2) ? "noreferrer" : void 0
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (vue.unref(isExternal2) && !__props.noIcon) {
              _push2(serverRenderer.ssrRenderComponent(VPIconExternalLink, { class: "icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              vue.unref(isExternal2) && !__props.noIcon ? (vue.openBlock(), vue.createBlock(VPIconExternalLink, {
                key: 0,
                class: "icon"
              })) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VPLink_vue_vue_type_style_index_0_scoped_3179892b_lang = "";
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1b, [["__scopeId", "data-v-3179892b"]]);
const _sfc_main$1a = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPLink, vue.mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: vue.unref(isActive)(
            vue.unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        noIcon: true
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_691d42b3_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1a, [["__scopeId", "data-v-691d42b3"]]);
const focusedElement = vue.ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = vue.ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = vue.watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    vue.onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return vue.readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$19 = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$18 = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$17 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-ddcadb1c>`);
      _push(serverRenderer.ssrRenderComponent(VPLink, {
        class: { active: vue.unref(isActive)(vue.unref(page).relativePath, __props.item.activeMatch || __props.item.link) },
        href: __props.item.link
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_ddcadb1c_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$17, [["__scopeId", "data-v-ddcadb1c"]]);
const _sfc_main$16 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-53b31170>`);
      if (__props.text) {
        _push(`<p class="title" data-v-53b31170>${serverRenderer.ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(serverRenderer.ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_53b31170_lang = "";
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$16, [["__scopeId", "data-v-53b31170"]]);
const _sfc_main$15 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPMenu" }, _attrs))} data-v-064245ad>`);
      if (__props.items) {
        _push(`<div class="items" data-v-064245ad><!--[-->`);
        serverRenderer.ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_064245ad_lang = "";
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$15, [["__scopeId", "data-v-064245ad"]]);
const _sfc_main$14 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
  },
  setup(__props) {
    const open = vue.ref(false);
    const el = vue.ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-4f166515><button type="button" class="button" aria-haspopup="true"${serverRenderer.ssrRenderAttr("aria-expanded", open.value)}${serverRenderer.ssrRenderAttr("aria-label", __props.label)} data-v-4f166515>`);
      if (__props.button || __props.icon) {
        _push(`<span class="text" data-v-4f166515>`);
        if (__props.icon) {
          serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(__props.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${serverRenderer.ssrInterpolate(__props.button)} `);
        _push(serverRenderer.ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-4f166515>`);
      _push(serverRenderer.ssrRenderComponent(VPMenu, { items: __props.items }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_4f166515_lang = "";
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$14, [["__scopeId", "data-v-4f166515"]]);
const _sfc_main$13 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPFlyout, vue.mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: vue.unref(isActive)(
            vue.unref(page).relativePath,
            __props.item.activeMatch,
            !!__props.item.activeMatch
          )
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _sfc_main$12 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).nav) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-c43c02aa><span id="main-nav-aria-label" class="visually-hidden" data-v-c43c02aa>Main Navigation</span><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$13, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_c43c02aa_lang = "";
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$12, [["__scopeId", "data-v-c43c02aa"]]);
const _sfc_main$11 = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$10 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).localeLinks) {
        _push(serverRenderer.ssrRenderComponent(VPFlyout, vue.mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages
        }, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-8b543938${_scopeId}><p class="title" data-v-8b543938${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(theme2).localeLinks.text)}</p><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(theme2).localeLinks.items, (locale) => {
                _push2(serverRenderer.ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "items" }, [
                  vue.createVNode("p", { class: "title" }, vue.toDisplayString(vue.unref(theme2).localeLinks.text), 1),
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(theme2).localeLinks.items, (locale) => {
                    return vue.openBlock(), vue.createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_8b543938_lang = "";
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$10, [["__scopeId", "data-v-8b543938"]]);
const VPSwitch_vue_vue_type_style_index_0_scoped_049def76_lang = "";
const _sfc_main$$ = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-049def76><span class="check" data-v-049def76>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-049def76>`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-049def76"]]);
const _sfc_main$_ = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$Z = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$Y = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const checked = vue.ref(false);
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    vue.onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY) || "auto";
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark = !isDark);
        userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        );
        document.head.appendChild(css);
        checked.value = dark;
        classList[dark ? "add" : "remove"]("dark");
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }
      return toggle2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPSwitch, vue.mergeProps({
        class: "VPSwitchAppearance",
        "aria-label": "toggle dark mode",
        "aria-checked": checked.value,
        onClick: vue.unref(toggle)
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(VPIconSun, { class: "sun" }),
              vue.createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_06729d10_lang = "";
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$Y, [["__scopeId", "data-v-06729d10"]]);
const _sfc_main$X = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(site).appearance) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-b64cbe4a>`);
        _push(serverRenderer.ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_b64cbe4a_lang = "";
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$X, [["__scopeId", "data-v-b64cbe4a"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$W = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const svg = vue.computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "VPSocialLink",
        href: __props.link,
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-b74539ac>${vue.unref(svg)}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_b74539ac_lang = "";
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$W, [["__scopeId", "data-v-b74539ac"]]);
const _sfc_main$V = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-5db9570d><!--[-->`);
      serverRenderer.ssrRenderList(__props.links, ({ link: link2, icon }) => {
        _push(serverRenderer.ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_5db9570d_lang = "";
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$V, [["__scopeId", "data-v-5db9570d"]]);
const _sfc_main$U = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).socialLinks) {
        _push(serverRenderer.ssrRenderComponent(VPSocialLinks, vue.mergeProps({
          class: "VPNavBarSocialLinks",
          links: vue.unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_6f123e69_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$U, [["__scopeId", "data-v-6f123e69"]]);
const _sfc_main$T = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const hasExtraContent = vue.computed(() => theme2.value.localeLinks || site.value.appearance || theme2.value.socialLinks);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasExtraContent)) {
        _push(serverRenderer.ssrRenderComponent(VPFlyout, vue.mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (vue.unref(theme2).localeLinks) {
                _push2(`<div class="group" data-v-a3106225${_scopeId}><p class="trans-title" data-v-a3106225${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(theme2).localeLinks.text)}</p><!--[-->`);
                serverRenderer.ssrRenderList(vue.unref(theme2).localeLinks.items, (locale) => {
                  _push2(serverRenderer.ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vue.unref(site).appearance) {
                _push2(`<div class="group" data-v-a3106225${_scopeId}><div class="item appearance" data-v-a3106225${_scopeId}><p class="label" data-v-a3106225${_scopeId}>Appearance</p><div class="appearance-action" data-v-a3106225${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (vue.unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-a3106225${_scopeId}><div class="item social-links" data-v-a3106225${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: vue.unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vue.unref(theme2).localeLinks ? (vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: "group"
                }, [
                  vue.createVNode("p", { class: "trans-title" }, vue.toDisplayString(vue.unref(theme2).localeLinks.text), 1),
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(theme2).localeLinks.items, (locale) => {
                    return vue.openBlock(), vue.createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : vue.createCommentVNode("", true),
                vue.unref(site).appearance ? (vue.openBlock(), vue.createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  vue.createVNode("div", { class: "item appearance" }, [
                    vue.createVNode("p", { class: "label" }, "Appearance"),
                    vue.createVNode("div", { class: "appearance-action" }, [
                      vue.createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : vue.createCommentVNode("", true),
                vue.unref(theme2).socialLinks ? (vue.openBlock(), vue.createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  vue.createVNode("div", { class: "item social-links" }, [
                    vue.createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: vue.unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_a3106225_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$T, [["__scopeId", "data-v-a3106225"]]);
const _sfc_main$S = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-d523c1e9><span class="container" data-v-d523c1e9><span class="top" data-v-d523c1e9></span><span class="middle" data-v-d523c1e9></span><span class="bottom" data-v-d523c1e9></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_d523c1e9_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$S, [["__scopeId", "data-v-d523c1e9"]]);
const _sfc_main$R = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNavBar", { "has-sidebar": vue.unref(hasSidebar) }]
      }, _attrs))} data-v-bc9ba070><div class="container" data-v-bc9ba070>`);
      _push(serverRenderer.ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="content" data-v-bc9ba070>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$1d, { class: "search" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_bc9ba070_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$R, [["__scopeId", "data-v-bc9ba070"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var setPositionFixed = function setPositionFixed2() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed";
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;
      setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting2() {
  if (previousBodyPosition !== void 0) {
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    window.scrollTo(x, y);
    previousBodyPosition = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
const _sfc_main$Q = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = vue.inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPLink, vue.mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: vue.unref(closeScreen)
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_52e098fb_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$Q, [["__scopeId", "data-v-52e098fb"]]);
const _sfc_main$P = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$O = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = vue.inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPLink, vue.mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: vue.unref(closeScreen)
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_7da24469_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$O, [["__scopeId", "data-v-7da24469"]]);
const _sfc_main$N = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-5506cdf3>`);
      if (__props.text) {
        _push(`<p class="title" data-v-5506cdf3>${serverRenderer.ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          text: item.text,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_5506cdf3_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$N, [["__scopeId", "data-v-5506cdf3"]]);
const _sfc_main$M = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = vue.ref(false);
    const groupId = vue.computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-c161d8a9><button class="button"${serverRenderer.ssrRenderAttr("aria-controls", vue.unref(groupId))}${serverRenderer.ssrRenderAttr("aria-expanded", isOpen.value)} data-v-c161d8a9><span class="button-text" data-v-c161d8a9>${serverRenderer.ssrInterpolate(__props.text)}</span>`);
      _push(serverRenderer.ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${serverRenderer.ssrRenderAttr("id", vue.unref(groupId))} class="items" data-v-c161d8a9><!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-c161d8a9>`);
          _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupLink, {
            text: item.text,
            link: item.link
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-c161d8a9>`);
          _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_c161d8a9_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$M, [["__scopeId", "data-v-c161d8a9"]]);
const _sfc_main$L = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).nav) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuLink, {
              text: item.text,
              link: item.link
            }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(site).appearance) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-75bfa8f9><p class="text" data-v-75bfa8f9>Appearance</p>`);
        _push(serverRenderer.ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_75bfa8f9_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$K, [["__scopeId", "data-v-75bfa8f9"]]);
const _sfc_main$J = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const isOpen = vue.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).localeLinks) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-fdcf4051><button class="title" data-v-fdcf4051>`);
        _push(serverRenderer.ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(theme2).localeLinks.text)} `);
        _push(serverRenderer.ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-fdcf4051><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(theme2).localeLinks.items, (locale) => {
          _push(`<li class="item" data-v-fdcf4051><a class="link"${serverRenderer.ssrRenderAttr("href", locale.link)} data-v-fdcf4051>${serverRenderer.ssrInterpolate(locale.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_fdcf4051_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$J, [["__scopeId", "data-v-fdcf4051"]]);
const _sfc_main$I = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).socialLinks) {
        _push(serverRenderer.ssrRenderComponent(VPSocialLinks, vue.mergeProps({
          class: "VPNavScreenSocialLinks",
          links: vue.unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = vue.ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-74fbe1ea><div class="container" data-v-74fbe1ea>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$L, { class: "menu" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_sfc_main$I, { class: "social-links" }, null, _parent));
        serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_74fbe1ea_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$H, [["__scopeId", "data-v-74fbe1ea"]]);
const _sfc_main$G = /* @__PURE__ */ vue.defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    vue.provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPNav", { "no-sidebar": !vue.unref(hasSidebar) }]
      }, _attrs))} data-v-30a6489c>`);
      _push(serverRenderer.ssrRenderComponent(VPNavBar, {
        "is-screen-open": vue.unref(isScreenOpen),
        onToggleScreen: vue.unref(toggleScreen)
      }, {
        "nav-bar-title-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(VPNavScreen, { open: vue.unref(isScreenOpen) }, {
        "nav-screen-content-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_30a6489c_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$G, [["__scopeId", "data-v-30a6489c"]]);
const _sfc_main$F = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasSidebar)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPLocalNav" }, _attrs))} data-v-661a3102><button class="menu"${serverRenderer.ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-661a3102>`);
        _push(serverRenderer.ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
        _push(`<span class="menu-text" data-v-661a3102>Menu</span></button><a class="top-link" href="#" data-v-661a3102> Return to top </a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_661a3102_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$E, [["__scopeId", "data-v-661a3102"]]);
const _sfc_main$D = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlusSquare.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPIconPlusSquare = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$C = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMinusSquare.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPIconMinusSquare = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSidebarLink",
  __ssrInlineRender: true,
  props: {
    item: null,
    depth: { default: 1 }
  },
  setup(__props) {
    const { page, frontmatter } = useData();
    const maxDepth = vue.computed(
      () => frontmatter.value.sidebarDepth || Infinity
    );
    const closeSideBar = vue.inject("close-sidebar");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarLink = vue.resolveComponent("VPSidebarLink", true);
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(VPLink, {
        class: ["link", { active: vue.unref(isActive)(vue.unref(page).relativePath, __props.item.link) }],
        style: { paddingLeft: 16 * (__props.depth - 1) + "px" },
        href: __props.item.link,
        onClick: vue.unref(closeSideBar)
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${serverRenderer.ssrRenderClass([{ light: __props.depth > 1 }, "link-text"])}" data-v-06dd0244${_scopeId}>${serverRenderer.ssrInterpolate(__props.item.text)}</span>`);
          } else {
            return [
              vue.createVNode("span", {
                class: ["link-text", { light: __props.depth > 1 }]
              }, vue.toDisplayString(__props.item.text), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      if ("items" in __props.item && __props.depth < vue.unref(maxDepth)) {
        _push(`<!--[-->`);
        serverRenderer.ssrRenderList(__props.item.items, (child) => {
          _push(serverRenderer.ssrRenderComponent(_component_VPSidebarLink, {
            item: child,
            depth: __props.depth + 1
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const VPSidebarLink_vue_vue_type_style_index_0_scoped_06dd0244_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSidebarLink.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPSidebarLink = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$B, [["__scopeId", "data-v-06dd0244"]]);
const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null,
    collapsible: { type: Boolean },
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const collapsed = vue.ref(false);
    vue.watchEffect(() => {
      collapsed.value = !!(props.collapsible && props.collapsed);
    });
    const { page } = useData();
    vue.watchEffect(() => {
      if (props.items.some((item) => {
        return isActive(page.value.relativePath, item.link);
      })) {
        collapsed.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPSidebarGroup", { collapsible: __props.collapsible, collapsed: collapsed.value }]
      }, _attrs))} data-v-7ef6941e>`);
      if (__props.text) {
        _push(`<div class="title"${serverRenderer.ssrRenderAttr("role", __props.collapsible ? "button" : void 0)} data-v-7ef6941e><h2 class="title-text" data-v-7ef6941e>${serverRenderer.ssrInterpolate(__props.text)}</h2><div class="action" data-v-7ef6941e>`);
        _push(serverRenderer.ssrRenderComponent(VPIconMinusSquare, { class: "icon minus" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPIconPlusSquare, { class: "icon plus" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="items" data-v-7ef6941e><!--[-->`);
      serverRenderer.ssrRenderList(__props.items, (item) => {
        _push(serverRenderer.ssrRenderComponent(VPSidebarLink, { item }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const VPSidebarGroup_vue_vue_type_style_index_0_scoped_7ef6941e_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$A, [["__scopeId", "data-v-7ef6941e"]]);
const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = vue.ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    vue.watchPostEffect(async () => {
      var _a;
      if (props.open) {
        lockBodyScroll();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      } else {
        unlockBodyScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasSidebar)) {
        _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: ["VPSidebar", { open: __props.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-9f3809e9><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-9f3809e9><span class="visually-hidden" id="sidebar-aria-label" data-v-9f3809e9> Sidebar Navigation </span><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebar), (group) => {
          _push(`<div class="group" data-v-9f3809e9>`);
          _push(serverRenderer.ssrRenderComponent(VPSidebarGroup, {
            text: group.text,
            items: group.items,
            collapsible: group.collapsible,
            collapsed: group.collapsed
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_9f3809e9_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$z, [["__scopeId", "data-v-9f3809e9"]]);
const _sfc_main$y = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPPage" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: null,
    size: null,
    theme: null,
    text: null,
    href: null
  },
  setup(__props) {
    const props = __props;
    const classes = vue.computed(() => {
      var _a, _b;
      return [
        (_a = props.size) != null ? _a : "medium",
        (_b = props.theme) != null ? _b : "brand"
      ];
    });
    const isExternal2 = vue.computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = vue.computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(vue.unref(component)), vue.mergeProps({
        class: ["VPButton", vue.unref(classes)],
        href: __props.href ? vue.unref(normalizeLink)(__props.href) : void 0,
        target: vue.unref(isExternal2) ? "_blank" : void 0,
        rel: vue.unref(isExternal2) ? "noreferrer" : void 0
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.text)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_2aa5e54c_lang = "";
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$x, [["__scopeId", "data-v-2aa5e54c"]]);
const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: null,
    text: null,
    tagline: null,
    image: null,
    actions: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPHero", { "has-image": __props.image }]
      }, _attrs))} data-v-c29e9c2c><div class="container" data-v-c29e9c2c><div class="main" data-v-c29e9c2c>`);
      if (__props.name) {
        _push(`<h1 class="name" data-v-c29e9c2c><span class="clip" data-v-c29e9c2c>${serverRenderer.ssrInterpolate(__props.name)}</span></h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.text) {
        _push(`<p class="text" data-v-c29e9c2c>${serverRenderer.ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tagline) {
        _push(`<p class="tagline" data-v-c29e9c2c>${serverRenderer.ssrInterpolate(__props.tagline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.actions) {
        _push(`<div class="actions" data-v-c29e9c2c><!--[-->`);
        serverRenderer.ssrRenderList(__props.actions, (action) => {
          _push(`<div class="action" data-v-c29e9c2c>`);
          _push(serverRenderer.ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.image) {
        _push(`<div class="image" data-v-c29e9c2c><div class="image-container" data-v-c29e9c2c><div class="image-bg" data-v-c29e9c2c></div>`);
        _push(serverRenderer.ssrRenderComponent(VPImage, {
          class: "image-src",
          image: __props.image
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_c29e9c2c_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$w, [["__scopeId", "data-v-c29e9c2c"]]);
const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(fm).hero) {
        _push(serverRenderer.ssrRenderComponent(VPHero, vue.mergeProps({
          class: "VPHomeHero",
          name: vue.unref(fm).hero.name,
          text: vue.unref(fm).hero.text,
          tagline: vue.unref(fm).hero.tagline,
          image: vue.unref(fm).hero.image,
          actions: vue.unref(fm).hero.actions
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: null,
    title: null,
    details: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPFeature" }, _attrs))} data-v-bee0b218>`);
      if (__props.icon) {
        _push(`<div class="icon" data-v-bee0b218>${serverRenderer.ssrInterpolate(__props.icon)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title" data-v-bee0b218>${serverRenderer.ssrInterpolate(__props.title)}</h2><p class="details" data-v-bee0b218>${serverRenderer.ssrInterpolate(__props.details)}</p></article>`);
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_bee0b218_lang = "";
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPFeature$1 = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$u, [["__scopeId", "data-v-bee0b218"]]);
const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: null
  },
  setup(__props) {
    const props = __props;
    const grid = vue.computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length % 2 === 0) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPFeatures" }, _attrs))} data-v-de4d00bf><div class="container" data-v-de4d00bf><div class="items" data-v-de4d00bf><!--[-->`);
        serverRenderer.ssrRenderList(__props.features, (feature) => {
          _push(`<div class="${serverRenderer.ssrRenderClass([[vue.unref(grid)], "item"])}" data-v-de4d00bf>`);
          _push(serverRenderer.ssrRenderComponent(VPFeature$1, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_de4d00bf_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPFeatures$1 = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$t, [["__scopeId", "data-v-de4d00bf"]]);
const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(fm).features) {
        _push(serverRenderer.ssrRenderComponent(VPFeatures$1, vue.mergeProps({
          class: "VPHomeFeatures",
          features: vue.unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPHome" }, _attrs))} data-v-ef0d8233>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$v, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$s, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_ef0d8233_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$r, [["__scopeId", "data-v-ef0d8233"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = core.useMediaQuery("(min-width: 960px)");
  const is1280 = core.useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = vue.computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function getHeaders(pageOutline) {
  if (pageOutline === false)
    return [];
  let updatedHeaders = [];
  document.querySelectorAll("h2, h3, h4, h5, h6").forEach((el) => {
    if (el.textContent && el.id) {
      updatedHeaders.push({
        level: Number(el.tagName[1]),
        title: el.innerText.replace(/\s+#\s*$/, ""),
        link: `#${el.id}`
      });
    }
  });
  return resolveHeaders(updatedHeaders, pageOutline);
}
function resolveHeaders(headers, levelsRange = 2) {
  const levels = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return groupHeaders(headers, levels);
}
function groupHeaders(headers, levelsRange) {
  const result = [];
  headers = headers.map((h) => ({ ...h }));
  headers.forEach((h, index) => {
    if (h.level >= levelsRange[0] && h.level <= levelsRange[1]) {
      if (addToParent(index, headers, levelsRange)) {
        result.push(h);
      }
    }
  });
  return result;
}
function addToParent(currIndex, headers, levelsRange) {
  if (currIndex === 0) {
    return true;
  }
  const currentHeader = headers[currIndex];
  for (let index = currIndex - 1; index >= 0; index--) {
    const header = headers[index];
    if (header.level < currentHeader.level && header.level >= levelsRange[0] && header.level <= levelsRange[1]) {
      if (header.children == null)
        header.children = [];
      header.children.push(currentHeader);
      return false;
    }
  }
  return true;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  vue.onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  vue.onUpdated(() => {
    activateLink(location.hash);
  });
  vue.onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocAsideOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: null,
    onClick: null,
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocAsideOutlineItem = vue.resolveComponent("VPDocAsideOutlineItem", true);
      _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: __props.root ? "root" : "nested"
      }, _attrs))} data-v-72b5436c><!--[-->`);
      serverRenderer.ssrRenderList(__props.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-72b5436c><a class="outline-link"${serverRenderer.ssrRenderAttr("href", link2)} data-v-72b5436c>${serverRenderer.ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(serverRenderer.ssrRenderComponent(_component_VPDocAsideOutlineItem, {
            headers: children,
            onClick: __props.onClick
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocAsideOutlineItem_vue_vue_type_style_index_0_scoped_72b5436c_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutlineItem.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPDocAsideOutlineItem = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$q, [["__scopeId", "data-v-72b5436c"]]);
const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const pageOutline = vue.computed(
      () => {
        var _a;
        return (_a = frontmatter.value.outline) != null ? _a : theme2.value.outline;
      }
    );
    const onContentUpdated = vue.inject("onContentUpdated");
    onContentUpdated.value = () => {
      headers.value = getHeaders(pageOutline.value);
    };
    const headers = vue.ref([]);
    const hasOutline = vue.computed(() => headers.value.length > 0);
    const container = vue.ref();
    const marker = vue.ref();
    useActiveAnchor(container, marker);
    function handleClick({ target: el }) {
      const id = "#" + el.href.split("#")[1];
      const heading = document.querySelector(
        decodeURIComponent(id)
      );
      heading == null ? void 0 : heading.focus();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": vue.unref(hasOutline) }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-972a23d3><div class="content" data-v-972a23d3><div class="outline-marker" data-v-972a23d3></div><div class="outline-title" data-v-972a23d3>${serverRenderer.ssrInterpolate(vue.unref(theme2).outlineTitle || "On this page")}</div><nav aria-labelledby="doc-outline-aria-label" data-v-972a23d3><span class="visually-hidden" id="doc-outline-aria-label" data-v-972a23d3> Table of Contents for current page </span>`);
      _push(serverRenderer.ssrRenderComponent(VPDocAsideOutlineItem, {
        headers: headers.value,
        root: true,
        onClick: handleClick
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_972a23d3_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$p, [["__scopeId", "data-v-972a23d3"]]);
const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(VPCarbonAds), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPDocAside" }, _attrs))} data-v-d548e89b>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-d548e89b></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (vue.unref(theme2).carbonAds) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$o, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_d548e89b_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$n, [["__scopeId", "data-v-d548e89b"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return vue.computed(() => {
    const { text = "Edit this page", pattern } = theme2.value.editLink || {};
    const { relativePath } = page.value;
    const url = pattern.replace(/:path/g, relativePath);
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return vue.computed(() => {
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    return {
      prev: frontmatter.value.prev ? { ...candidates[index - 1], text: frontmatter.value.prev } : candidates[index - 1],
      next: frontmatter.value.next ? { ...candidates[index + 1], text: frontmatter.value.next } : candidates[index + 1]
    };
  });
}
const _sfc_main$m = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page } = useData();
    const date = vue.computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = vue.computed(() => date.value.toISOString());
    const datetime = vue.ref("");
    vue.onMounted(() => {
      vue.watchEffect(() => {
        datetime.value = date.value.toLocaleString(window.navigator.language);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-30e86bc0>${serverRenderer.ssrInterpolate((_a = vue.unref(theme2).lastUpdatedText) != null ? _a : "Last updated")}: <time${serverRenderer.ssrRenderAttr("datatime", vue.unref(isoDatetime))} data-v-30e86bc0>${serverRenderer.ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_30e86bc0_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$l, [["__scopeId", "data-v-30e86bc0"]]);
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = vue.computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = vue.computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = vue.computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (vue.unref(showFooter)) {
        _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-1aaf7307>`);
        if (vue.unref(hasEditLink) || vue.unref(hasLastUpdated)) {
          _push(`<div class="edit-info" data-v-1aaf7307>`);
          if (vue.unref(hasEditLink)) {
            _push(`<div class="edit-link" data-v-1aaf7307>`);
            _push(serverRenderer.ssrRenderComponent(VPLink, {
              class: "edit-link-button",
              href: vue.unref(editLink).url,
              "no-icon": true
            }, {
              default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(serverRenderer.ssrRenderComponent(VPIconEdit, { class: "edit-link-icon" }, null, _parent2, _scopeId));
                  _push2(` ${serverRenderer.ssrInterpolate(vue.unref(editLink).text)}`);
                } else {
                  return [
                    vue.createVNode(VPIconEdit, { class: "edit-link-icon" }),
                    vue.createTextVNode(" " + vue.toDisplayString(vue.unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (vue.unref(hasLastUpdated)) {
            _push(`<div class="last-updated" data-v-1aaf7307>`);
            _push(serverRenderer.ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(control).prev || vue.unref(control).next) {
          _push(`<div class="prev-next" data-v-1aaf7307><div class="pager" data-v-1aaf7307>`);
          if (vue.unref(control).prev) {
            _push(`<a class="pager-link prev"${serverRenderer.ssrRenderAttr("href", vue.unref(normalizeLink)(vue.unref(control).prev.link))} data-v-1aaf7307><span class="desc" data-v-1aaf7307>${serverRenderer.ssrInterpolate((_b = (_a = vue.unref(theme2).docFooter) == null ? void 0 : _a.prev) != null ? _b : "Previous page")}</span><span class="title" data-v-1aaf7307>${serverRenderer.ssrInterpolate(vue.unref(control).prev.text)}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${serverRenderer.ssrRenderClass([{ "has-prev": vue.unref(control).prev }, "pager"])}" data-v-1aaf7307>`);
          if (vue.unref(control).next) {
            _push(`<a class="pager-link next"${serverRenderer.ssrRenderAttr("href", vue.unref(normalizeLink)(vue.unref(control).next.link))} data-v-1aaf7307><span class="desc" data-v-1aaf7307>${serverRenderer.ssrInterpolate((_d = (_c = vue.unref(theme2).docFooter) == null ? void 0 : _c.next) != null ? _d : "Next page")}</span><span class="title" data-v-1aaf7307>${serverRenderer.ssrInterpolate(vue.unref(control).next.text)}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_1aaf7307_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$k, [["__scopeId", "data-v-1aaf7307"]]);
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { hasSidebar, hasAside } = useSidebar();
    const pageName = vue.computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    const onContentUpdated = vue.ref();
    vue.provide("onContentUpdated", onContentUpdated);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPDoc", { "has-sidebar": vue.unref(hasSidebar), "has-aside": vue.unref(hasAside) }]
      }, _attrs))} data-v-f22a1ecb><div class="container" data-v-f22a1ecb>`);
      if (vue.unref(hasAside)) {
        _push(`<div class="aside" data-v-f22a1ecb><div class="aside-curtain" data-v-f22a1ecb></div><div class="aside-container" data-v-f22a1ecb><div class="aside-content" data-v-f22a1ecb>`);
        _push(serverRenderer.ssrRenderComponent(VPDocAside, null, {
          "aside-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-f22a1ecb><div class="content-container" data-v-f22a1ecb>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-f22a1ecb>`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, {
        class: ["vp-doc", vue.unref(pageName)],
        onContentUpdated: onContentUpdated.value
      }, null, _parent));
      _push(`</main>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(VPDocFooter, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_f22a1ecb_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$j, [["__scopeId", "data-v-f22a1ecb"]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const NotFound2 = vue.inject("NotFound");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPContent", {
          "has-sidebar": vue.unref(hasSidebar),
          "is-home": vue.unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-f1ee94ec>`);
      if (vue.unref(route).component === vue.unref(NotFound2)) {
        _push(serverRenderer.ssrRenderComponent(vue.unref(NotFound2), null, null, _parent));
      } else if (vue.unref(frontmatter).layout === "page") {
        _push(serverRenderer.ssrRenderComponent(VPPage, null, null, _parent));
      } else if (vue.unref(frontmatter).layout === "home") {
        _push(serverRenderer.ssrRenderComponent(VPHome, null, {
          "home-hero-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(serverRenderer.ssrRenderComponent(VPDoc, null, {
          "doc-footer-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_f1ee94ec_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$i, [["__scopeId", "data-v-f1ee94ec"]]);
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(theme2).footer) {
        _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: ["VPFooter", { "has-sidebar": vue.unref(hasSidebar) }]
        }, _attrs))} data-v-0220d7b3><div class="container" data-v-0220d7b3>`);
        if (vue.unref(theme2).footer.message) {
          _push(`<p class="message" data-v-0220d7b3>${vue.unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-0220d7b3>${vue.unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_0220d7b3_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$h, [["__scopeId", "data-v-0220d7b3"]]);
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    vue.watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    vue.provide("close-sidebar", closeSidebar);
    const { frontmatter } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      if (vue.unref(frontmatter).layout !== false) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "Layout" }, _attrs))} data-v-73a7e41f>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(serverRenderer.ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: vue.unref(isSidebarOpen),
          onClick: vue.unref(closeSidebar)
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(serverRenderer.ssrRenderComponent(VPLocalNav, {
          open: vue.unref(isSidebarOpen),
          onOpenMenu: vue.unref(openSidebar)
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPSidebar, { open: vue.unref(isSidebarOpen) }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(VPContent, null, {
          "home-hero-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(serverRenderer.ssrRenderComponent(VPFooter, null, null, _parent));
        serverRenderer.ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_73a7e41f_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$g, [["__scopeId", "data-v-73a7e41f"]]);
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "NotFound" }, _attrs))} data-v-5b524e82><p class="code" data-v-5b524e82>404</p><h1 class="title" data-v-5b524e82>PAGE NOT FOUND</h1><div class="divider" data-v-5b524e82></div><blockquote class="quote" data-v-5b524e82> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-5b524e82><a class="link"${serverRenderer.ssrRenderAttr("href", vue.unref(site).base)} aria-label="go to home" data-v-5b524e82> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_5b524e82_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const NotFound$1 = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$f, [["__scopeId", "data-v-5b524e82"]]);
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  vue.onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  vue.onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const el = vue.ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [(_a = props.size) != null ? _a : "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(__props.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${serverRenderer.ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${serverRenderer.ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${serverRenderer.ssrRenderAttr("src", sponsor.img)}${serverRenderer.ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: null,
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const sponsors = vue.computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPSponsors vp-sponsor", [(_a = __props.mode) != null ? _a : "normal"]]
      }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(sponsors), (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${serverRenderer.ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(serverRenderer.ssrRenderComponent(_sfc_main$d, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: null,
    actionText: null,
    actionLink: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-aef1c3e3><div class="container" data-v-aef1c3e3><div class="header" data-v-aef1c3e3><div class="love" data-v-aef1c3e3>`);
      _push(serverRenderer.ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (__props.message) {
        _push(`<h2 class="message" data-v-aef1c3e3>${serverRenderer.ssrInterpolate(__props.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-aef1c3e3>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, { data: __props.data }, null, _parent));
      _push(`</div>`);
      if (__props.actionLink) {
        _push(`<div class="action" data-v-aef1c3e3>`);
        _push(serverRenderer.ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: (_a = __props.actionText) != null ? _a : "Become a sponsor",
          href: __props.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_aef1c3e3_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, {
        mode: "aside",
        tier: __props.tier,
        size: __props.size,
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_442f1b60_lang = "";
const _sfc_main$9 = {};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_2ca925b9_lang = "";
const _sfc_main$8 = {};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_2b621371_lang = "";
const _sfc_main$7 = {};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: null,
    member: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<article${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPTeamMembersItem", [(_a = __props.size) != null ? _a : "medium"]]
      }, _attrs))} data-v-b9b3c352><div class="profile" data-v-b9b3c352><figure class="avatar" data-v-b9b3c352><img class="avatar-img"${serverRenderer.ssrRenderAttr("src", __props.member.avatar)}${serverRenderer.ssrRenderAttr("alt", __props.member.name)} data-v-b9b3c352></figure><div class="data" data-v-b9b3c352><h1 class="name" data-v-b9b3c352>${serverRenderer.ssrInterpolate(__props.member.name)}</h1>`);
      if (__props.member.title || __props.member.org) {
        _push(`<p class="affiliation" data-v-b9b3c352>`);
        if (__props.member.title) {
          _push(`<span class="title" data-v-b9b3c352>${serverRenderer.ssrInterpolate(__props.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.title && __props.member.org) {
          _push(`<span class="at" data-v-b9b3c352> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.org) {
          _push(serverRenderer.ssrRenderComponent(VPLink, {
            class: ["org", { link: __props.member.orgLink }],
            href: __props.member.orgLink,
            "no-icon": ""
          }, {
            default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.ssrInterpolate(__props.member.org)}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(__props.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.desc) {
        _push(`<p class="desc" data-v-b9b3c352>${serverRenderer.ssrInterpolate(__props.member.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.links) {
        _push(`<div class="links" data-v-b9b3c352>`);
        _push(serverRenderer.ssrRenderComponent(VPSocialLinks, {
          links: __props.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.member.sponsor) {
        _push(`<div class="sp" data-v-b9b3c352>`);
        _push(serverRenderer.ssrRenderComponent(VPLink, {
          class: "sp-link",
          href: __props.member.sponsor,
          "no-icon": ""
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                vue.createVNode(VPIconHeart, { class: "sp-icon" }),
                vue.createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_b9b3c352_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$6, [["__scopeId", "data-v-b9b3c352"]]);
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: null,
    members: null
  },
  setup(__props) {
    const props = __props;
    const classes = vue.computed(() => {
      var _a;
      return [
        (_a = props.size) != null ? _a : "medium",
        `count-${props.members.length}`
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["VPTeamMembers", vue.unref(classes)]
      }, _attrs))} data-v-569007d4><div class="container" data-v-569007d4><!--[-->`);
      serverRenderer.ssrRenderList(__props.members, (member) => {
        _push(`<div class="item" data-v-569007d4>`);
        _push(serverRenderer.ssrRenderComponent(VPTeamMembersItem, {
          size: __props.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_569007d4_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.0.0-alpha.21_tbpndr44ulefs3hehwpi2mkf2y/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme = {
  Layout,
  NotFound: NotFound$1
};
const main = "";
const vars = "";
const __uno = "";
const contributorNames = [
  "ourongxing",
  "BryanHuang66"
];
const contributorsAvatars = {};
const getAvatarUrl = (name) => `/user-avatars/${name}.png`;
const contributors = contributorNames.reduce(
  (acc, name) => {
    contributorsAvatars[name] = getAvatarUrl(name);
    acc.push({ name, avatar: contributorsAvatars[name] });
    return acc;
  },
  []
);
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "Contributors",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        flex: "~ wrap gap2",
        "justify-center": ""
      }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(contributors), ({ name, avatar }) => {
        _push(`<a${serverRenderer.ssrRenderAttr("href", `https://github.com/${name}`)} m-0 rel="noopener noreferrer"${serverRenderer.ssrRenderAttr("aria-label", `${name} on GitHub`)}><img loading="lazy"${serverRenderer.ssrRenderAttr("src", avatar)} width="50" height="50" rounded-full h-12 w-12${serverRenderer.ssrRenderAttr("alt", `${name}'s avatar`)}></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/Contributors.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "content" }, _attrs))}><div class="content-container"><main class="main"><div class="vp-doc" flex flex-col items-center mt-10><h2 id="the-team" op50 font-normal pt-5 pb-2>\u8D21\u732E\u8005</h2><p text-lg max-w-200 text-center leading-7>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<br> \u6B22\u8FCE\u53C2\u4E0E\uFF0C\u4E00\u8D77\u5F00\u53D1\u66F4\u52A0\u5F3A\u5927\u7684\u63D2\u4EF6\uFF01 </p></div></main></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: null,
    title: null,
    details: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPFeature" }, _attrs))} data-v-802df15e>`);
      if (__props.icon) {
        _push(`<div class="icon" data-v-802df15e>${serverRenderer.ssrInterpolate(__props.icon)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title" data-v-802df15e>${serverRenderer.ssrInterpolate(__props.title)}</h2><p class="details" data-v-802df15e>${serverRenderer.ssrInterpolate(__props.details)}</p></article>`);
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_802df15e_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/VPFeature.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$2, [["__scopeId", "data-v-802df15e"]]);
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: null
  },
  setup(__props) {
    const props = __props;
    const grid = vue.computed(() => {
      const ret = {};
      Object.entries(props.features).forEach(([key, value]) => {
        const length = value.length;
        ret[key] = (() => {
          if (!length) {
            return "";
          } else if (length === 2) {
            return "grid-2";
          } else if (length === 3) {
            return "grid-3";
          } else if (length % 3 === 0) {
            return "grid-6";
          } else if (length % 2 === 0) {
            return "grid-4";
          } else
            return "";
        })();
      });
      return ret;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "VPFeatures" }, _attrs))} data-v-95068472><div class="VPContainer" data-v-95068472><!--[-->`);
        serverRenderer.ssrRenderList(__props.features, (value, key, index) => {
          _push(`<div data-v-95068472><div class="${serverRenderer.ssrRenderClass([index ? " mt-1.5em" : "", "mb-0.5em details"])}" data-v-95068472><span class="arrow" data-v-95068472>&gt;&gt;&gt;</span> \u7ED9${serverRenderer.ssrInterpolate(key)}\u5E26\u6765</div><div class="items" data-v-95068472><!--[-->`);
          serverRenderer.ssrRenderList(value, (feature) => {
            _push(`<div class="${serverRenderer.ssrRenderClass([[vue.unref(grid)[key]], "item"])}" data-v-95068472>`);
            _push(serverRenderer.ssrRenderComponent(VPFeature, {
              icon: feature.icon,
              title: feature.title,
              details: feature.details
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_95068472_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/VPFeatures.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main$1, [["__scopeId", "data-v-95068472"]]);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Feature",
  __ssrInlineRender: true,
  setup(__props) {
    const features = {
      "\u63D2\u4EF6\u5F00\u53D1\u8005": [
        {
          title: "\u73B0\u4EE3\u5316\u7684\u5F00\u53D1\u6846\u67B6",
          details: "\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0CESbuild \u6253\u5305\u3002\u5C01\u88C5\u5927\u91CF API\uFF0C\u52A9\u529B\u4F60\u5F00\u53D1\u66F4\u52A0\u5F3A\u5927\u7684\u63D2\u4EF6\u3002"
        },
        {
          title: "\u63A7\u5236\u9762\u677F\u53CA\u914D\u7F6E\u7BA1\u7406",
          details: "\u8F7B\u677E\u521B\u5EFA\u5177\u6709\u63A7\u5236\u9762\u677F\u7684\u63D2\u4EF6\uFF0C\u62E5\u6709\u5F3A\u5927\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\u3002"
        },
        {
          title: "\u6A21\u5757\u5316\u5F00\u53D1",
          details: "\u50CF\u642D\u79EF\u6728\u4E00\u6837\u4E0D\u65AD\u7D2F\u52A0\u6A21\u5757\uFF0C\u6700\u7EC8\u5F00\u53D1\u51FA\u5F3A\u5927\u7684\u63D2\u4EF6\u3002"
        }
      ],
      "\u666E\u901A\u7528\u6237": [
        {
          title: "\u81EA\u5B9A\u4E49",
          details: "\u6709\u4E86\u63A7\u5236\u9762\u677F\u4E4B\u540E\uFF0CMarginNote \u63D2\u4EF6\u7EC8\u4E8E\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E86\u3002"
        },
        {
          title: "\u81EA\u52A8\u5316",
          details: "\u65E0\u9700\u624B\u52A8\u5F00\u5173\u63D2\u4EF6\uFF0C\u4E00\u5207\u90FD\u5C06\u6309\u7167\u4F60\u7684\u8981\u6C42\u81EA\u52A8\u6267\u884C\u3002"
        },
        {
          title: "\u76F8\u4E92\u534F\u4F5C",
          details: "\u4E0D\u540C\u6A21\u5757\u4E4B\u95F4\u4E0D\u4EC5\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\uFF0C\u8FD8\u53EF\u4EE5\u76F8\u4E92\u534F\u4F5C\u3002"
        },
        {
          title: "\u624B\u52BF\u64CD\u4F5C",
          details: "\u901A\u8FC7\u624B\u52BF\u5FEB\u901F\u5BF9\u8111\u56FE\u5361\u7247\u8FDB\u884C\u5904\u7406\uFF0C\u6548\u7387\u6EE1\u5206\u3002"
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(VPFeatures, vue.mergeProps({ features }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/Feature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (inBrowser$1)
  Promise.resolve().then(() => require("./pwa.646a91a7.js"));
const Theme = {
  ...theme,
  Layout() {
    return vue.h(theme.Layout, null, {
      "home-features-before": () => vue.h(_sfc_main),
      "home-features-after": () => vue.h(_sfc_main$3)
    });
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  vue.watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h) => !isMetaDescription(h));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  vue.onMounted(observeLinks);
  const route = useRoute();
  vue.watch(() => route.path, observeLinks);
  vue.onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = vue.defineComponent({
  setup(_, { slots }) {
    const show = vue.ref(false);
    vue.onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser$1) {
    const timeoutIdMap = /* @__PURE__ */ new Map();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.classList.toString());
        let { innerText: text = "" } = sibling;
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "");
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = vue.defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    vue.onMounted(() => {
      vue.watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    if (Theme.setup)
      Theme.setup();
    return () => vue.h(Theme.Layout);
  }
});
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.provide("NotFound", NotFound);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return vue.createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
    }
    return Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require(pageFilePath)));
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router, data } = createApp();
  router.go().then(() => {
    useUpdateHead(router.route, data.site);
    app.mount("#app");
  });
}
async function render(path) {
  const { app, router } = createApp();
  await router.go(path);
  return serverRenderer.renderToString(app);
}
exports.render = render;
exports.useData = useData;
exports.useRoute = useRoute;
exports.useRouter = useRouter;
