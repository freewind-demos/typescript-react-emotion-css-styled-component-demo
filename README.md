TypeScript React Emotion Css Styled Component Demo
=================================

`emotion.styled`支持类型，可以自定义一些供style使用的attribute，单从样式方面讲还可以。

注意：emotioncss没办法直接指定一个attribute，比如通过限定`type=checkbox`来定义一个`Checkbox`而不是通用的`Input`

如这里讨论：https://github.com/emotion-js/emotion/pull/617

似乎曾经支持过`withProps`，但后来官方觉得这些都增加了复杂度不太好，干脆都去掉了。

有一种变通办法就是先定义一个指定attribute后的组件，再对其使用`styled`，或者只用其主推的`css`来创建class?

```
npm install
npm run demo
```

It will open page on browser automatically.
