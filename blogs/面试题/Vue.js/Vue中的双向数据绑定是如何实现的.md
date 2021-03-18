---
title: 【面试题】Vue中的双向数据绑定是如何实现的？
date: 2020-11-9 15:26:21
sidebar: 'auto'
tags:
 - Vue.js
 - 面试题
 - 响应式原理
categories:
 - 面试题
publish: true 
isShowComments: false
---

## Vue中的双向数据绑定是如何实现的？

### 解题思路

**Vue的双向数据绑定是通过数据劫持结合发布者订阅者模式来实现的 要实现这种双向数据绑定，必要的条件有：**

1. 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
2. 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
3. 实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
4. MVVM入口函数，整合以上三者

**个人理解：**

> 在new Vue的时候，在 Observer 中通过 `Object.defineProperty()` 达到数据劫持，代理所有数据的 getter 和 setter 属性，在每次触发 setter 的时候，都会通过 Dep 来通知 Watcher，Watcher 作为`Observer`数据监听器与`Compile`模板解析器之间的桥梁，当 Observer 监听到数据发生改变的时候，通过 Updater 来通知 Compile 更新视图，而 Compile 通过 Watcher 订阅对应数据，绑定更新函数，通过 Dep 来添加订阅者，达到双向绑定。
