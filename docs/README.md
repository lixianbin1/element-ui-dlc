---
home: true
heroImage: /img/logo01.png
heroText: element-ui-dlc
tagline: 一个集成了 Element-Ui 插件的补充UI组件
actionText: 快速上手 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2021-present Evan You
---

### 简单使用

```sh
yarn add element-ui-dlc  # npm install element-ui-dlc
```

```javascript
import Vue from 'vue';
import ElementUiDLC from 'element-ui-dlc';
Vue.use(ElementUiDLC)
```
```html
<template>
  <div id="app">
    <el-button round>取 消</el-button>
  </div>
<template>
```