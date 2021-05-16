---
title: 【面试题】在前端工程化涌现出众多工具, 试说明webpack与grunt、gulp的不同？
date: 2020-10-26 16:13:21
sidebar: 'auto'
tags:
 - 前端工程化
 - 面试题
 - Webpack
 - Grunt & Gulp
categories:
 - 面试题
publish: true 
isShowComments: false
---

## 在前端工程化涌现出众多工具, 试说明webpack与grunt、gulp的不同？

### 解题思路

三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

[grunt](https://www.gruntjs.net/) 和 [gulp](https://www.gulpjs.com.cn/) 是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

所以总结一下:

**从构建思路来说**:

- gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系

- webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工复制代码

**对于知识背景来说**:

- gulp更像后端开发者的思路，需要对于整个流程了如指掌

- webpack更倾向于前端开发者的思路
