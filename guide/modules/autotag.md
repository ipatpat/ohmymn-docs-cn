# AutoTag

在匹配到正则的情况下自动添加指定标签，也可以从摘录中提取特定内容为标签。

## 自定义

::: warning 自定义格式
[replace 函数格式——提取](../custom.md#replace-函数)
:::

**例**

- `(/./, "这是一个例子")` 即可每次都添加一个标签为“这是一个例子”。

## [MagicAction for Card](magicaction4card.md#添加标签)

### 添加标签

::: warning 输入格式
[replace 函数格式——提取](../custom.md#replace-函数)
:::

由于大部分情况下只是为了添加标签，而无须提取，所以你可以直接输入标签内容，我会将其补全为 `(/./, "标签")`。
