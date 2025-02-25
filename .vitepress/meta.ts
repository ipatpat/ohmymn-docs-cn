// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed

/* Texts */
export const ohmymnName = "OhMyMN"
export const ohmymnShortName = "OhMyMN"
export const ohmymnDescription = "MarginNote 插件开发框架"

/* CDN fonts and styles */
export const googleapis = "https://fonts.googleapis.com"
export const gstatic = "https://fonts.gstatic.com"
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* vitepress head */
export const ogUrl = "https://ohmymn.marginnote.cn/"
export const ogImage = `${ogUrl}og.jpg`

/* GitHub and social links */
export const github = "https://github.com/marginnoteapp/ohmymn"
export const releases = "https://github.com/marginnoteapp/ohmymn/releases"

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, "i")
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, "i")
// eslint-disable-next-line prefer-regex-literals
export const githubusercontentRegex = new RegExp(
  "^https://((i.ibb.co)|((raw|user-images).githubusercontent.com))/.*",
  "i"
)
