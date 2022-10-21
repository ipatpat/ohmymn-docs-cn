import { defineConfig } from "vitepress"
import { version, unsignedVersion } from "../package.json"
import media from "./markdown-it/media"
import {
  font,
  github,
  ogImage,
  ogUrl,
  ohmymnDescription,
  ohmymnName
} from "./meta"
import sidebar from "./sidebar"

export default defineConfig({
  lang: "zh-CN",
  title: ohmymnName,
  description: ohmymnDescription,
  head: [
    ["meta", { name: "theme-color", content: "#e9dd1b" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "ohmymn, marginnote, addon"
      }
    ],
    ["meta", { property: "og:title", content: ohmymnName }],
    ["meta", { property: "og:description", content: ohmymnDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: ohmymnName }],
    ["meta", { name: "twitter:description", content: ohmymnDescription }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { href: font, rel: "stylesheet" }],
    // ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180"
      }
    ]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    config(md) {
      return md.use(media)
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    outline: "deep",
    outlineTitle: "目录",
    editLink: {
      pattern:
        "https://github.com/marginnoteapp/ohmymn-docs-cn/tree/main/:path",
      text: "为此页提供修改建议"
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    algolia: {
      appId: "58GKGEP8Q0",
      apiKey: "27d364ba4e1ef8bd5f374377f0941845",
      indexName: "doc-cn"
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    },

    localeLinks: {
      text: "简体中文",
      items: [{ text: "English", link: "https://ohmymn.marginnote.com" }]
    },

    socialLinks: [{ icon: "github", link: github }],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2021-PRESENT MarginNote, ourongxing, and contributors."
    },

    nav: [
      { text: "使用指南", link: "/guide/" },
      { text: "开发", link: "/dev/" },
      { text: "API", link: "/api/" },
      {
        text: `v${version}`,
        items: [
          {
            text: `签名版本（v${version}）`,
            link: "https://bbs.marginnote.cn/t/topic/20501"
          },
          {
            text: `未签名版本（v${unsignedVersion}）`,
            link: "/update"
          }
        ]
      }
    ],
    sidebar
  }
})
