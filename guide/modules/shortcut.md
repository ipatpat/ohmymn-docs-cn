<script setup>
import Shortcut from '/.vitepress/components/Shortcut.vue';
</script>
# Shortcut

::: tip 更新
[v4.0.6](/update.md) 新增
:::

::: warning 注意
`需要 MN 3.7.19 以上版本` 建议 Mac 下使用。该功能完全由 OhMyMN 提供，与 MN 无关。
:::

通过 URL Scheme 来触发 MagicAction 中的动作，在 Mac 上可以设置快捷键打开 URL。

1. 打开 `marginnote3app://addon/ohmymn?type=card&shortcut=1` 就可以触发第一个卡片动作。
2. 打开 `marginnote3app://addon/ohmymn?type=text&shortcut=2` 就可以触发第二个文字动作。

## 捷径 Pro
可以为每个动作以及任意输入值设置捷径，并将其设置成快捷键。

::: warning URL 生成器

<Shortcut/>

:::

1. `marginnote3app://addon/ohmymn?type=pro&action=searchCardInfo&option=0`
    - 表示执行 `搜索卡片内容` 的动作，`option=0` 表示第一个选项，`中文`。
2. `marginnote3app://addon/ohmymn?type=pro&action=renameTitle&option=0&content=%25%5B%221%22%5D%20%24%26`
    - 表示执行 `重命名标题` 的动作，输入 `%["1"] $&`，给选中卡片编号。（这里进行了 URL 编码）


## 怎么使用快捷键打开 URL
### iPad
1. 点击安装快捷指令 https://www.icloud.com/shortcuts/d9027fc514f04fc4add78ae506baba8d
2. 设置-辅助功能-键盘-全键盘控制-命令-划到最下面就可以给快捷指令设置快捷键了。
### Mac
Mac 上的工具就很多了，我通常是使用 Karabiner-Elements，这个还可以单独给 MN 设置快捷键，免费。