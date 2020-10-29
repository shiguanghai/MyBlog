---
title: 【面试题】JavaScript不支持函数重载，但TypeScript是否支持函数重载？
date: 2020-10-12 14:47:51
sidebar: 'auto'
tags:
 - JavaScript
 - 面试题
 - TypeScript
categories:
 - 面试题
publish: true 
isShowComments: false
---

## JavaScript不支持函数重载，但TypeScript是否支持函数重载？

### 解题思路：

是的，TypeScript支持函数重载。但是它的实现很奇怪，当我们在TypeScript中执行函数重载时，我们只能实现一个带有多个签名的函数。

```js
//带有字符串类型参数的函数  
function add(a:string, b:string): string;    

//带有数字类型参数的函数
function add(a:number, b:number): number;    

//函数定义
function add(a: any, b:any): any {    
    return a + b;    
}  
```

在上面的例子中，前两行是函数重载声明。它有两次重载，第一个签名的参数类型为string，而第二个签名的参数类型为number。第三个函数包含实际实现并具有any类型的参数。任何数据类型都可以接受任何类型的数据。然后，实现检查所提供参数的类型，并根据供应商参数类型执行不同的代码段。

