(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{567:function(e,t,a){"use strict";a.r(t);var r=a(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"写-react-vue-项目时为什么要在组件中写-key-其作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写-react-vue-项目时为什么要在组件中写-key-其作用是什么"}},[e._v("#")]),e._v(" 写 React/Vue 项目时为什么要在组件中写 key，其作用是什么？")]),e._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[e._v("#")]),e._v(" 解题思路")]),e._v(" "),a("p",[e._v("key 的作用是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度。")]),e._v(" "),a("p",[e._v("vue 和 react 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。在 vue 的 diff 函数中。可以先了解一下 diff 算法。")]),e._v(" "),a("blockquote",[a("p",[e._v("在交叉对比的时候，当新节点跟旧节点头尾交叉对比没有结果的时候，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应旧节点（这里对应的是一个 key => index 的 map 映射）。如果没找到就认为是一个新增节点。而如果没有 key，那么就会采用一种遍历查找的方式去找到对应的旧节点。一种一个 map 映射，另一种是遍历查找。相比而言。map 映射的速度更快。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);