TypeScript React Emotion Css Styled Component Demo
=================================

注意：emotioncss没办法直接指定一个attribute，比如通过限定`type=checkbox`来定义一个`Checkbox`而不是通用的`Input`

如这里讨论：https://github.com/emotion-js/emotion/pull/617

似乎曾经支持过`withProps`，但后来官方觉得这些都增加了复杂度不太好，干脆都去掉了。

但使用起来感觉不太好，思路不统一。不如直接用styled-components?

```
npm install
npm run demo
```

It will open page on browser automatically.
