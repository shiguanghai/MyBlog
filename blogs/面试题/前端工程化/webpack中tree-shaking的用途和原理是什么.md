---
title: 【面试题】webpack 中 tree shaking 的用途和原理是什么？
date: 2020-12-13 17:10:21
sidebar: 'auto'
tags:
 - 前端工程化
 - 面试题
 - Webpack
categories:
 - 面试题
publish: true 
isShowComments: false
---

## webpack 中 tree shaking 的用途和原理是什么？

### 解题思路：

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 `import` 和 `export`。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。

新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 "`sideEffects`" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "`pure`(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

tree shaking 的概念在1990年就提出了，但是直到 ES6 的 ES6-style 模块出现以后才真正被利用起来。

这是因为 tree shaking 只能在静态 modules 下工作。ECMAScript 6 模块加载是静态的，因此整个依赖树可以被静态地推导出解析语法树。所以在ES6中使用 tree shaking 是非常容易的。

而且，tree shaking 不仅支持import/export级别，还支持statement(声明)级别。
