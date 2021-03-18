---
title: 【面试题】这个关于 var 的坑你踩过吗？
date: 2020-11-27 21:00:14
sidebar: 'auto'
tags:
 - JavaScript
 - 面试题
categories:
 - 面试题
publish: true 
isShowComments: false
---

## 这个关于 var 的坑你踩过吗？

随着 ES6 的流行，var 已经被逐渐摒弃，但是不少面试题还会问到有关 var 的问题，这里来分享一道看似简单，但极容易踩雷的 var 的面试题

```js
console.log(a)
console.log(fn)
var a = 1
console.log(a)
function fn() {
  console.log(a)
  var a = 2
  console.log(a)
}
fn()
console.log(a)
```

可以自己先试着做一下，再来看跟标准答案有无出路：

```js
undefined
[Function: fn]
1
undefined
2
1
```

### 解题思路

如果你做正确了，恭喜你，但也可以来简单回顾下相关内容

这道题的点在于两个点，第一个点是 第二行代码的`console.log(fn)` 极易误认为是 `undefined`；第二个点是第六行函数体内的 `console.log(a)` 容易误认为去寻找外层作用域而错答成 `1`

第一个问题是 **函数提升**的问题，可能你听说过**变量提升**，但是函数提升你知道吗？ 博主第一次就是错在了这个位置导致全盘皆输

作为对比理解，我们来看这个例子

```js
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(fn)

var a = 1
var b = []
var c = {}
var d = fn()
var e = new Object
var f = new Array
function fn(){}
```

```js
undefined
undefined
undefined
undefined
undefined
undefined
[Function: fn]
```

相信你通过上述代码，就能有个大致理解了，在这里通过 function 关键字定义的函数比较独特，会存在函数提升。但是要注意的是：**函数声明会被提升，但是函数表达式却不会被提升**

接下来是第二个问题，为什么`console.log(a)`会打印`undefined`而不是`1`，其实这也是一道有关变量提升的经典问题，这里我来给你改变一下代码

```js
function fn() {
  console.log(a)
  // var a = 2
  // console.log(a)
}
```

此时的代码在运行到这里就会输出`1`了，这其实就是由于变量提升，因为函数体内有 `a` 的定义被提升，执行到`console.log(a)`时就不会再去上级作用域找`a`的定义，因此结果也就不足为奇了。

变量提升的问题一直是面试的热门点，如果你感兴趣，还可以去看我针对`var`、`let`、`const`三者有关变量提升问题的[文章](https://shiguanghai.top/blogs/%E6%8B%89%E5%8B%BE%E4%BD%9C%E4%B8%9A/01/01-02.html#%E3%80%90%E7%AE%80%E7%AD%94%E9%A2%98%E3%80%91%E5%9B%9B%E3%80%81%E8%AF%B7%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8Evar-let-const%E4%B8%89%E7%A7%8D%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F%E7%9A%84%E6%96%B9%E5%BC%8F%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B7%E4%BD%93%E5%B7%AE%E5%88%AB%E3%80%82)
