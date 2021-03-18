---
title: 【面试题】从源码来理解 fn1.call.call(fn2)
date: 2020-11-27 19:56:24
sidebar: 'auto'
tags:
 - JavaScript
 - 面试题
categories:
 - 面试题
publish: true 
isShowComments: false
---

## 从源码来理解 fn1.call.call(fn2)

- 问题如下：

```js
function fn1() {
  console.log("1")
}
function fn2() {
  console.log('2')
}

fn1.call(fn2)
fn1.call.call(fn2)
```

问：输出结果是多少?

答案：

```js
1
2
```

### 解题思路

对于第一个`fn1.call(fn2)`，相信大家不难理解，这里调用了`fn1`函数，虽然改变了 this 指向，但是并不影响结果

我们这里着重看第二个 `fn1.call.call(fn2)` 的解题思路：

为了方便理解，我们将会从 call源码 的角度来理解，这里我们来写一个 mycall 方法来模拟 call

```js
Function.prototype.mycall = function (context, ...args) {
  // 如果为传入 context 或传入 null 将其指向指为 window
  context = context || window
  // 记录 mycall 的 this 指向
  context.fn = this
  // 调用 context.fn(...args) 并记录函数结果
  const result = context.fn(...args)
  // 删除 fn
  delete context.fn
  // 返回结果
  return result
}

fn1.mycall.mycall(fn2)
```

可以通过代码逐行分析来理解 `fn1.call.call(fn2)`，当然，也可以通过浏览器调试来对照理解

```js
/* 这里代码的运行经历了两轮 可以逐轮理解 */
Function.prototype.mycall = function (context, ...args) {
  // 第一轮 
  // 调用 fn1.mycall.mycall(fn2) 进入mycall
  // context -> fn2
  // 第二轮
  // 未传入参数
  // context -> window
  context = context || window
  // 第一轮
  // 此处的 this 指向mycall(fn2)之前的内容 即 mycall
  // context.fn -> this -> mycall
  // fn2.mycall
  // 第二轮
  // context.fn -> this -> fn2
  // window.fn2
  context.fn = this
  // 第一轮
  // 执行 fn2.mycall(没有参数) 进入第二轮
  // 第二轮
  // 执行 window.fn2(没有参数) 输出 2
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

### 扩展

```js
fn1.call.call.call(fn2)
```

做法相同，在此基础上增加 call 的调用并不影响结果，答案也为 `2`，有兴趣也可以调试代码来看看
