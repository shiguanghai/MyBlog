---
title: Vue-Router 原理实现
date: 2020-11-05 16:05:10
sidebar: 'auto'
tags:
 - Vue.js
 - Part3·Vue.js 框架源码与进阶
categories:
 - 大前端
publish: true 
isShowComments: false
---


## 1.1Vue-Router 使用步骤

`yarn add vue-router --dev`
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

- 样式案例：

```js
// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// 1.注册路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [ // 路由匹配规则
  // 每个路由规则，都是一个对象，这个规则对象身上，有两个必须的属性：
  // 属性1是 path，表示监听哪个路由链接地址
  // 属性2是 component，表示路由是前面匹配到的path，则展示component属性对应的那个组件
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "photo" */ '../views/Photo.vue')
  }
]

// 在 new 路由对象的时候，可以为构造函数，传递一个配置对象
// 2. 创建 router 对象
var router = new VueRouter ({
  //这个配置对象中的routes表示 [路由匹配规则] 的意思
  routes,
  linkActiveClass: 'mycitive' // 修改类名 默认 router-link-exact-active
})

export default router
```
```js
// main.js

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 3. 注册 router 对象
  router, // 用来监听 URL 地址的变化 展示对应的组件
  render: h => h(App)
}).$mount('#app')
```
```js
// App.vue

<template>
  <div id="app">
    ...
    <div id="nav">
      <!-- 5. 创建链接 使用 router-link to属性 可以省略# 
      默认渲染为一个a标签 可使用tag修改 -->
      <router-link to="/">Index</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/photo">Photo</router-link>
    </div>
    <!-- 4. 创建路由组建的占位 由 vue-router 提供的元素 专门用来当作占位符
    路由规则匹配到的组件就会展示到这个 router-view 中去 -->
    <router-view/>
  </div>
</template>
```