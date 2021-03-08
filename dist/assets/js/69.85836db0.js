(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{560:function(e,t,a){"use strict";a.r(t);var r=a(2),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"webpack-中-tree-shaking-的用途和原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中-tree-shaking-的用途和原理是什么"}},[e._v("#")]),e._v(" webpack 中 tree shaking 的用途和原理是什么？")]),e._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[e._v("#")]),e._v(" 解题思路：")]),e._v(" "),a("p",[e._v("tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 "),a("code",[e._v("import")]),e._v(" 和 "),a("code",[e._v("export")]),e._v("。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。")]),e._v(" "),a("p",[e._v('新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 "'),a("code",[e._v("sideEffects")]),e._v('" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "'),a("code",[e._v("pure")]),e._v('(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。')]),e._v(" "),a("p",[e._v("tree shaking 的概念在1990年就提出了，但是直到 ES6 的 ES6-style 模块出现以后才真正被利用起来。")]),e._v(" "),a("p",[e._v("这是因为 tree shaking 只能在静态 modules 下工作。ECMAScript 6 模块加载是静态的，因此整个依赖树可以被静态地推导出解析语法树。所以在ES6中使用 tree shaking 是非常容易的。")]),e._v(" "),a("p",[e._v("而且，tree shaking 不仅支持import/export级别，还支持statement(声明)级别。")])])}),[],!1,null,null,null);t.default=s.exports}}]);