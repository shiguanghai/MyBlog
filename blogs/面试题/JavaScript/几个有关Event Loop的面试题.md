---
title: 【面试题】几个有关 JS 异步执行顺序 的面试题
date: 2020-10-12 14:46:54
sidebar: 'auto'
tags:
 - JavaScript
 - 面试题
 - 异步编程
categories:
 - 面试题
publish: true 
isShowComments: false
---
 
## 几个有关 JS 异步执行顺序 的面试题

- 阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因

```js
1 console.log("AAAA");
2 setTimeout(() => console.log("BBBB"), 1000);
3 const start = new Date();
4 while (new Date() - start < 3000) {}
5 console.log("CCCC");
6 setTimeout(() => console.log("DDDD"), 0);
7 new Promise((resolve, reject) => {
8   console.log("EEEE");
9   foo.bar(100);
10 })
11 .then(() => console.log("FFFF"))
12 .then(() => console.log("GGGG"))
13 .catch(() => console.log("HHHH"));
14 console.log("IIII");
```

**答案:**

浏览器下 输出结果的先后顺序是

```js
AAAA
CCCC
EEEE
IIII
HHHH
BBBB
DDDD
```

答案解析：这道题考察重点是  js异步执行 宏任务 微任务。

一开始代码执行，输出`AAAA`.  1

第二行代码开启一个计时器t1(一个称呼)，这是一个异步任务且是宏任务，需要等到1秒后提交。

第四行是个while语句，需要等待3秒后才能执行下面的代码,这里有个问题，就是3秒后上一个计时器t1的提交时间已经过了，但是线程上的任务还没有执行结束，所以暂时不能打印结果，所以它排在宏任务的最前面了。

第五行又输出`CCCC`

第六行又开启一个计时器t2（称呼），它提交的时间是0秒（其实每个浏览器器有默认最小时间的，暂时忽略），但是之前的t1任务还没有执行，还在等待，所以t2就排在t1的后面。（t2排在t1后面的原因是while造成的）都还需要等待，因为线程上的任务还没执行完毕。

第七行`new Promise`将执行promise函数，它参数是一个回调函数，这个回调函数内的代码是同步的，它的异步核心在于resolve和reject，同时这个异步任务在任务队列中属于微任务，是优先于宏任务执行的，(不管宏任务有多急，反正我是VIP)。所以先直接打印输出同步代码`EEEE`。第九行中的代码是个不存在的对象，这个错误要抛给reject这个状态，也就是catch去处理，但是它是异步的且是微任务，只有等到线程上的任务执行完毕，立马执行它，不管宏任务（计时器，ajax等）等待多久了。

第十四行，这是线程上的最后一个任务，打印输出	`IIII`

我们先找出线程上的同步代码，将结果依次排列出来：AAAA  CCCC  EEEE IIII

然后我们再找出所有异步任务中的微任务 把结果打印出来  HHHH

最后我们再找出异步中的所有宏任务，这里t1排在前面t2排在后面（这个原因是while造成的），输出结果顺序是 BBBB DDDD

所以综上 结果是  AAAA  CCCC  EEEE  IIII  HHHH BBBB DDDD 

---

```
1 async function async1() {
2 console.log("AAAA");
3 async2();
4 console.log("BBBB");
5 }
6 async function async2() {
7  console.log("CCCC");
8 }
9  console.log("DDDD");
10 setTimeout(function () {
11 	console.log("FFFF");
12 }, 0);
13 async1();
14 new Promise(function (resolve) {
15 	console.log("GGGG");
16  resolve();
17 }).then(function () {
18  console.log("HHHH");
19 });
20 console.log("IIII");
```

**答案:**

浏览器下 输出结果的先后顺序是

```ts
DDDD
AAAA
CCCC
BBBB
GGGG
IIII
HHHH
FFFF
```

答案解析：这道题考察重点是  js异步执行 宏任务 微任务.

这道题的坑就在于 async中如果没有await，那么它就是一个纯同步函数。

这道题的起始代码在第9行，输出`DDDD`

第10行计时器开启一个异步任务t1（一个称呼），这个任务且为宏任务。

第13行函数`async1`执行，这个函数内没有await 所以它其实就是一个纯同步函数，打印输出`AAAA`,

在`async1`中执行`async2`函数，因为`async2`的内部也没有await，所以它也是个纯同步函数，打印输出`CCCC`

紧接着打印输出`BBBB`。

第14行new Promise执行里面的代码也是同步的,所以打印输出`GGGG`,resolve()调用的时候开启一个异步任务t2（一个称呼），且这个任务t2是微任务，它的执行交给then()中的第一个回调函数执行，且优先级高于宏任务（t1）执行。

第20行打印输出`IIII`,此时线程上的同步任务全部执行结束。

在执行任务队列中的异步任务时，微任务优先于宏任务执行，所以先执行微任务 t2 打印输出 `	HHHH`,然后执行宏任务 t1 打印输出 `FFFF`

所以综上 结果输出是 DDDD AAAA CCCC BBBB  GGGG IIII HHHH FFFF

---

```js
new Promise((resolve, reject) => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
  }, 0);
  console.log("C");
  resolve();
  console.log("D");
})
  .then(() => {
    console.log("E");
    new Promise((resolve, reject) => {
      console.log("F");
      resolve();
      console.log("G");
    })
      .then(() => {
        setTimeout(() => {
          console.log("H");
        }, 0);
        console.log("I");
      })
      .then(() => {
        console.log("J");
      });
  })
  .then(() => {
    console.log("K");
  });

setTimeout(() => {
  console.log("L");
}, 0);

new Promise((resolve, reject) => {
  console.log("M");
  resolve();
}).then(() => {
  setTimeout(() => {
    new Promise((resolve, reject) => {
      console.log("N");
      resolve();
    })
      .then(() => {
        setTimeout(() => {
          console.log("O");
        }, 0);
      })
      .then(() => {
        console.log("P");
      });
  }, 0);
});

console.log("Q");

```
**答案:**

浏览器下 输出结果的先后顺序是

```ts
A
C
D
M
Q
E
F
G
I
K
J
B
L
N
P
H
O
```

答案解析：首先，我们要知道微任务会先于宏任务执行。知道了这一点，我们来看下面的代码。

还是先看最外层的结构，Promise类-定时器-Promise类-console.log。先执行同步代码，打印出第一个Promise类里面的A、C、D，第一个Promise里面的定时器进去宏任务列表，排在第一位。这个Promise产生的微任务进入第一轮微任务列表，排在第一位。最外层定时器进入宏任务列表，排在第二位。打印第二个Promise类里面的M，第二个Promise产生的微任务进入第一轮微任务列表，排在第二位。最后执行console.log("Q")，打印出Q。

微任务会先于宏任务执行，所以先执行第一个Promise的第一个then，打印E、F、G。这个then里面又生成了一个新的Promise类，同理，新的Promise产生的微任务进入第二轮微任务列表，排在第一位。then会返回一个Promise类，也就是说这个then也会产生一个微任务，进入到第二轮微任务列表，排在第二位。接下来执行第二个Promise的第一个then，这个then里面是一个定时器，进入到宏任务列表，排在第三位。本轮微任务结束。

第二轮微任务，先执行第一个Promise的第一个then里面的Promise类的第一个then，then里面的定时器进入宏任务列表，排在第四位，执行console.log("I")，打印I。这个then返回的Promise类生成的微任务进入到第三轮的微任务列表中，排在第一位。继续执行第一个Promise的第二个then，打印K。本轮微任务结束。

第三轮微任务，执行第一个Promise的第一个then里面的Promise类的第二个then，打印J。执行到这里，微任务已经全部执行完毕，开始执行宏任务。

执行第一个Promise里面的定时器，打印B。执行最外层的定时器，打印L。执行第二个Promise的第一个then里面的定时器，生成一个新的Promise类，打印这个Promise类里面的N，生成一个微任务，加入到微任务列表中。执行到这里，宏任务列表里面还有一个任务未执行，由于微任务会先于宏任务执行，所以宏任务会暂停执行，先执行微任务。

执行的是第二个Promise的then里面的Promise的第一个then，这个then里面是定时器，加入到宏任务列表里面，排在第二位。这个then返回的Promise生成一个微任务，进入下一轮的微任务列表。

执行第二个Promise的then里面的Promise的第二个then，打印P。执行到这里，微任务已经全部执行完毕，开始执行宏任务。

执行第一个Promise的第一个then里面的Promise类的第一个then里面的定时器，打印H。

最后执行第二个Promise的then里面的Promise类的第一个then里面的定时器，打印O。

所以综上 结果输出是 A C D M Q E F G I K J B L N P H O