# toolBox

A integrate common functions or unusual function plug-in Libraries，I will integrate some common functions, my own functions, and expect them to become bigger

<p align="center">
  <a href="https://npmcharts.com/compare/@lixianbin1/toolbox?minimal=true"><img src="https://img.shields.io/npm/dm/@lixianbin1/toolbox.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/v/@lixianbin1/toolbox.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@lixianbin1/toolbox"><img src="https://img.shields.io/npm/l/@lixianbin1/toolbox.svg?sanitize=true" alt="License"></a>
</p>

[中文](./README.md)

### Document

Document ：https://lixianbin1.github.io/toolBox/

### installation

```sh
yarn add @lixianbin1/toolbox  # npm install @lixianbin1/toolbox
```

### Getting started

```js
import { deepClone } from "@lixianbin1/toolbox"
let obj={
  name:"myme",
  children:{
    name:"jack"
  },
}
let newObj=deepClone(obj)
```