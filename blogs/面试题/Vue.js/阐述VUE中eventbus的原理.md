---
title: 【面试题】阐述一下VUE中 eventbus 的原理
date: 2020-12-13 17:17:15
sidebar: 'auto'
tags:
 - Vue.js
 - 面试题
categories:
 - 面试题
publish: true 
isShowComments: false
---

## 阐述一下 VUE中 eventbus 的原理

### 解题思路：

**EventBus** 是消息传递的一种方式，基于一个消息中心，订阅和发布消息的模式，称为[发布订阅者模式。](https://shiguanghai.top/blogs/%E5%A4%A7%E5%89%8D%E7%AB%AF/Vue.js%20%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E4%B8%8E%E8%BF%9B%E9%98%B6/%E6%A8%A1%E6%8B%9FVue.js%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.html#%E5%8F%91%E5%B8%83-%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F)

1. `on('name', fn)`订阅消息，name: 订阅的消息名称， fn: 订阅的消息
2. `emit('name', args)`发布消息, name: 发布的消息名称， args: 发布的消息

### 代码实现：

```js
class Bus {
  constructor () {
    this.callbacks = {}
  }
  $on(name,fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit(name,args) {
    if(this.callbacks[name]){
       //存在遍历所有callback
       this.callbacks[name].forEach(cb => cb(args))
    }
  }
}
```

使用

```js
const EventBus = new EventBusClass()
EventBus.on('fn1', function(msg) {
    alert(`订阅的消息是：${msg}`);
});
EventBus.emit('fn1', '你好，世界！');
```
