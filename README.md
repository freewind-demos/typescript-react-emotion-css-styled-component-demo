TypeScript React Emotion Css Styled Component Demo
=================================

注意：emotioncss没办法直接指定一个attribute，比如通过限定`type=checkbox`来定义一个`Checkbox`而不是通用的`Input`

如这里讨论：https://github.com/emotion-js/emotion/pull/617

似乎曾经支持过`withProps`，但后来官方觉得这些都增加了复杂度不太好，干脆都去掉了。

另外，它的动态值也要基于组件已知属性，感觉用起来限制挺大的，因为已有属性好像很难被利用上。

但使用起来感觉不太好，思路不统一。不如直接用styled-components? 或者完全不用emotion的styled库，只用其主推的`css`来创建class?

```
npm install
npm run demo
```

It will open page on browser automatically.
