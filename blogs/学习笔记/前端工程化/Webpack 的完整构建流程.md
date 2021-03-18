---
title: 【笔记】Webpack 的完整构建流程
date: 2020-10-27 11:29:29
sidebar: 'auto'
tags:
 - 前端工程化
 - 学习笔记
 - Webpack
categories:
 - 学习笔记
publish: false 
isShowComments: false
---

## Webpack 的基本工作流程

我们从两方面来了解 Webpack 的基本工作流程：

1. 通过 Webpack 的源码来了解具体函数执行的逻辑。

2. 通过 Webpack 对外暴露的声明周期 Hooks，理解整体流程的阶段划分。

其中会涉及对 Webpack 源代码的分析，源代码取自 Webpack 仓库的 [webpack-4 分支](https://github.com/webpack/webpack/tree/webpack-4)

通常，在项目中有两种运行 Webpack 的方式：基于命令行的方式或基于代码的方式。

两种示例的代码分别如下（具体示例参照 [10_webpack_workflow](https://github.com/fe-efficiency/lessons_fe_efficiency/tree/master/10_webpack_workflow)）：

```js
//第一种：基于命令行的方式
webpack --config webpack.config.js
//第二种：基于代码的方式
var webpack = require('webpack')
var config = require('./webpack.config')
webpack(config, (err, stats) => {})
```

### webpack.js 中的基本流程

无论用哪种方式运行 Webpack，本质上都是[webpack.js](https://github.com/webpack/webpack/blob/webpack-4/lib/webpack.js)中的 Webpack 函数。

这一函数的核心逻辑是：根据配置生成编译器实例 compiler，然后处理参数，执行 WebpackOptionsApply().process，根据参数加载不同内部插件。在有回调函数的情况下，根据是否是 watch 模式来决定要执行 compiler.watch 还是 compiler.run。

为了讲解通用的流程，我们以没有 watch 模式的情况进行分析。简化流程后的代码示例如下：

```js
const webpack = (options, callback) => {
  options = ... //处理options默认值
  let compiler = new Compiler(options.context)
  ... //处理参数中的插件等
  compiler.options = new WebpackOptionsApply().process(options, compiler); //分析参数，加载各内部插件
  ...
  if (callback) {
    ... 
    compiler.run(callback)
  }
  return compiler
}
```

### Compiler.js 中的基本流程

### Compilation.js 中的基本流程

## 读懂 Webpack 的生命周期

### Webpack 中的插件

### Hook 的使用方式

### Compiler Hooks

### Compilation Hooks
