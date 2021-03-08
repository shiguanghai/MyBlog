(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{569:function(t,s,a){"use strict";a.r(s);var r=a(1),o=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue中hash模式和history模式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中hash模式和history模式的区别"}},[t._v("#")]),t._v(" Vue中hash模式和history模式的区别")]),t._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),a("ul",[a("li",[t._v("最明显的是在显示上，"),a("strong",[t._v("hash")]),t._v("模式的 URL 中会夹杂着#号，而"),a("strong",[t._v("history")]),t._v("没有。")]),t._v(" "),a("li",[t._v("Vue底层对它们的实现方式不同。"),a("strong",[t._v("hash")]),t._v("模式是依靠"),a("code",[t._v("onhashchange")]),t._v("事件(监听"),a("code",[t._v("location.hash")]),t._v("的改变)，而"),a("strong",[t._v("history")]),t._v("模式是主要是依靠的 HTML5 history 中新增的两个方法，"),a("code",[t._v("pushState()")]),t._v("可以改变 url 地址且不会发送请求，"),a("code",[t._v("replaceState()")]),t._v("可以读取历史记录栈,还可以对浏览器记录进行修改。")]),t._v(" "),a("li",[t._v("当真正需要通过 URL 向后端发送 HTTP 请求的时候，比如常见的用户手动输入 URL 后回车，或者是刷新(重启)浏览器，这时候"),a("strong",[t._v("history")]),t._v("模式需要后端的支持。因为"),a("strong",[t._v("history")]),t._v("模式下，前端的 URL 必须和实际向后端发送请求的 URL 一致，例如有一个 URL 是带有- 路径 path 的(例如www.lindaidai.wang/blogs/id)，如果后端没有对这个路径做处理的话，就会返回404错误。所以需要后端增加一个覆盖所有情况的候选资源，一般会配合前端给出的一个404页面")])])])}),[],!1,null,null,null);s.default=o.exports}}]);