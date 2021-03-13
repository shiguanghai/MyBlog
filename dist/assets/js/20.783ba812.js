(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{509:function(e,t,v){"use strict";v.r(t);var s=v(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"_14-1-源码组织方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-源码组织方式"}},[e._v("#")]),e._v(" 14.1 源码组织方式")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("采用 "),v("strong",[e._v("TypeScript")]),e._v(" 的方式重写")]),e._v(" "),v("ul",[v("li",[e._v("为了提升代码的可维护性，Vue 3.x 的源码全部采用 TypeScript 编写")]),e._v(" "),v("li",[e._v("大型项目的开发都推荐使用类型化的语言，在编码的过程当中帮我们检查类型的问题")])])]),e._v(" "),v("li",[v("p",[e._v("使用 "),v("strong",[e._v("Monorepo")]),e._v(" 管理项目结构")]),e._v(" "),v("ul",[v("li",[e._v("把独立的功能模块都提取到不同的包中，每个功能模块之间的划分明确，模块之间的依赖关系也明确")]),e._v(" "),v("li",[e._v("每个功能模块都可以单独测试、单独发布以及单独使用")])])])]),e._v(" "),v("h3",{attrs:{id:"packages-目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#packages-目录结构"}},[e._v("#")]),e._v(" packages 目录结构")]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/PqloOzkj5Zd6Jvm.png",alt:"image.png"}}),e._v(" "),v("ul",[v("li",[e._v("packages 目录下都是独立发行的包，可以独立使用\n"),v("ul",[v("li",[e._v("compiler - xxx 跟编译相关的代码\n"),v("ul",[v("li",[e._v("compiler-core 与平台无关的编译器")]),e._v(" "),v("li",[e._v("compiler-dom 浏览器平台下的编译器，依赖于 compiler-core")]),e._v(" "),v("li",[e._v("compiler-sfc 用来编译单文件组件，依赖于 compiler-core 与 compiler-dom")]),e._v(" "),v("li",[e._v("compiler-ssr 服务端渲染的编译器，依赖于 compiler-dom")])])]),e._v(" "),v("li",[e._v("reactivity 数据响应式系统，可以独立使用")]),e._v(" "),v("li",[e._v("runtime - xxx 跟运行时相关的代码\n"),v("ul",[v("li",[e._v("runtime-core 与平台无关的运行时")]),e._v(" "),v("li",[e._v("runtime-dom 针对浏览器的运行时，处理 原生DOM 的 API、事件等")]),e._v(" "),v("li",[e._v("runtime-test 专门为测试编写的轻量级的运行时，这个运行时渲染出来的DOM树其实是一个JS对象，可以运行在所有的运行环境")])])]),e._v(" "),v("li",[e._v("server-renderer 用于服务端渲染")]),e._v(" "),v("li",[e._v("shared Vue内部使用的一些公共 API")]),e._v(" "),v("li",[e._v("size-check 私有的包，不会发不到 Npm，作用是在 Tree-shaking 之后检查包的大小")]),e._v(" "),v("li",[e._v("template-explorer 在浏览器运行的实时编译组件，会输出render函数，README.md 提供在线访问地址")]),e._v(" "),v("li",[e._v("vue 用来构建完整版的 Vue，依赖于 compiler 和 runtime")])])])]),e._v(" "),v("h2",{attrs:{id:"_14-2-不同的构建版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-不同的构建版本"}},[e._v("#")]),e._v(" 14.2 不同的构建版本")]),e._v(" "),v("p",[e._v("Vue 3.x 在构建时与 Vue 2.x 类似都构建了不同的版本")]),e._v(" "),v("p",[e._v("和 Vue 2.x 不同的是，Vue 3.x 中不再构建 UMD 模块化的方式，因为其会让代码有更多的冗余，它要支持多种模块化的方式")]),e._v(" "),v("p",[e._v("Vue 3.x 的构建版本中把 cjs、ESModule 和 自执行函数 的方式分别打包到了不同的文件中")]),e._v(" "),v("ul",[v("li",[e._v("packages/vue 存放了 Vue 3.x 中的所有构建版本")])]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/iaUxD9v8mstchQO.png",alt:"image.png"}}),e._v(" "),v("ul",[v("li",[e._v("cjs 也就是 Common JS 的模块化方式，此处两个文件都是完整版的 Vue 包含运行时和编译器\n"),v("ul",[v("li",[e._v("vue.cjs.js 开发版本，代码未被压缩")]),e._v(" "),v("li",[e._v("vue.cjs.prod.js 生产版本，代码被压缩过")])])]),e._v(" "),v("li",[e._v("global 全局的意思，这四个文件都可以在浏览器直接通过 script 标签导入，会增加一个全局的 Vue 对象\n"),v("ul",[v("li",[e._v("vue.global.js 完整版的 Vue，开发版本")]),e._v(" "),v("li",[e._v("vue.global.prod.js 完整版的 Vue，生产版本")]),e._v(" "),v("li",[e._v("vue.runtime.global.js 只包含运行时，开发版本")]),e._v(" "),v("li",[e._v("Vue.runtime.global.prod.js 只包含运行时，生产版本")])])]),e._v(" "),v("li",[e._v("browser 都包含 ES Module，浏览器的原生模块化的方式，在浏览器中可以直接通过  "),v("code",[e._v('<script type="module" src=""><\/script>')]),e._v(" 导入\n"),v("ul",[v("li",[e._v("vue.esm-browser.js 完整版的 ESM，开发版本")]),e._v(" "),v("li",[e._v("vue.esm-browser.prod.js 完整版的 ESM，开发版本")]),e._v(" "),v("li",[e._v("vue.runtime.esm-browser.js 只包含运行时，开发版本")]),e._v(" "),v("li",[e._v("vue.runtime.esm-browser.prod.js 只包含运行时，开发版本")])])]),e._v(" "),v("li",[e._v("bundler 这两个文件没有打包所有的代码，它们需要配合打包工具使用，使用 ES Module 的模块化方式，内部通过 import 导入 runtime-core\n"),v("ul",[v("li",[e._v("Vue.esm-bundler.js 完整版，内部导入 runtime、compiler，也就是编译器")]),e._v(" "),v("li",[e._v("vue.runtime.esm-bundler.js 使用脚手架创建的项目中的默认导入，这个文件只导入了运行时，它是 Vue 的最小版本，在项目开发完毕后重新打包时打包我们使用到的代码")])])])]),e._v(" "),v("h2",{attrs:{id:"_14-3-composition-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-3-composition-api"}},[e._v("#")]),e._v(" 14.3 Composition API")]),e._v(" "),v("p",[e._v("Vue 3.x 虽然代码全部重写，但是 90% 以上的 API 依然兼容 2.x，并且根据社区的反馈增加了 "),v("strong",[e._v("Composition API")]),e._v(" 即 "),v("strong",[e._v("组合API")])]),e._v(" "),v("ul",[v("li",[e._v("RFC（Request For Comments）\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/vuejs/rfcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/rfcs"),v("OutboundLink")],1)])])]),e._v(" "),v("li",[e._v("Composition API RFC\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://composition-api.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://composition-api.vuejs.org"),v("OutboundLink")],1)])])])]),e._v(" "),v("h3",{attrs:{id:"设计动机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计动机"}},[e._v("#")]),e._v(" 设计动机")]),e._v(" "),v("p",[e._v("它是用来解决 2.x 在开发大型项目时遇到超大组件使用 Options API 不好拆分重用的问题")]),e._v(" "),v("ul",[v("li",[e._v("Options API\n"),v("ul",[v("li",[e._v("包含一个描述组件选项（data、methods、props等）的对象")]),e._v(" "),v("li",[e._v("Options API 开发复杂组件，同一个功能逻辑的代码被拆分到不同选项")])])]),e._v(" "),v("li",[e._v("Options API Demo")])]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/DU4Ppnhwkd9WtZz.png",alt:"image.png"}}),e._v(" "),v("ul",[v("li",[e._v("Composition API\n"),v("ul",[v("li",[e._v("Vue.js 3.x 新增的一组 API")]),e._v(" "),v("li",[e._v("一组基于函数的 API")]),e._v(" "),v("li",[e._v("可以更灵活的组织组件的逻辑")])])]),e._v(" "),v("li",[e._v("Composition API Demo")])]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/buTZAjUSeoBIwKV.png",alt:"image.png"}}),e._v(" "),v("p",[e._v("相对于 Options API 这样做的好处：查看某个逻辑时只需关注具体的函数即可，当前的逻辑代码都封装在函数内部，不像 Options API 时获取鼠标位置的逻辑代码分散在不同的位置，查看这部分代码还需要上下拖动滚动条")]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/jn5lXUr4xLFzOg1.png",alt:"image.png"}}),e._v(" "),v("p",[e._v("再来看一下官方提供的这张图来感受 Options API 和 Composition API 的区别：")]),e._v(" "),v("p",[e._v("Options API 中同一色块代表同一功能，我们可以看到相同功能的代码被拆分在不同位置，当组件的功能比较复杂，统一逻辑的代码被拆分在不同位置，我们就需要不停拖动滚动条来找到我们需要的代码，且不方便提取重用代码")]),e._v(" "),v("p",[e._v("Composition API 也是使用相同色块代表同一功能，我们可以看到相同功能的代码不需要拆分，有利于对代码的提取和重用")]),e._v(" "),v("p",[e._v("在 Vue.js 3.x 中你即可以使用 Options API，也可以使用 Composition API")]),e._v(" "),v("h2",{attrs:{id:"_14-5-性能提升"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-5-性能提升"}},[e._v("#")]),e._v(" 14.5 性能提升")]),e._v(" "),v("ul",[v("li",[e._v("响应式系统升级")]),e._v(" "),v("li",[e._v("编译升级")]),e._v(" "),v("li",[e._v("源码体积的优化")])]),e._v(" "),v("p",[e._v("在性能方面 Vue.js 3.x 又大幅度提升，使用代理对象 Proxy 重写了响应式的代码并且对编译器做了优化，重写了虚拟DOM，从而让渲染和Update的性能都有了大幅度的提升")]),e._v(" "),v("p",[e._v("另外，官方介绍服务端渲染的性能也提升两到三倍")]),e._v(" "),v("h3",{attrs:{id:"响应式系统的升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统的升级"}},[e._v("#")]),e._v(" 响应式系统的升级")]),e._v(" "),v("ul",[v("li",[e._v("Vue.js 2.x 中响应式系统的核心 defineProperty\n"),v("ul",[v("li",[e._v("初始化时遍历 data 中的所有成员，通过 defineProperty 把对象的属性转换成 getter 和 setter，如果 data 中的属性又是对象的话，需要递归处理每一个子对象的属性。这些都是初始化时进行的，如果你未使用这些属性也会进行响应式的处理")])])]),e._v(" "),v("li",[e._v("Vue.js 3.x 中使用 Proxy 对象重写响应式系统\n"),v("ul",[v("li",[e._v("Proxy 的性能本身就比 defineProperty 好，且代理对象可以拦截属性的访问、赋值、删除等操作，不需要初始化时遍历所有的属性，如果有多层属性嵌套只有访问某个属性时才会递归处理下一级属性")]),e._v(" "),v("li",[e._v("使用 Proxy 对象默认可以监听动态新增的属性，而 Vue.js 2.x 想要动态添加响应式属性需要调用 Vue.set 方法来处理")]),e._v(" "),v("li",[e._v("Vue.js 2.x 监听不到属性的删除")]),e._v(" "),v("li",[e._v("Vue.js 2.x 对数组的索引和 length 属性也监听不到")])])])]),e._v(" "),v("p",[e._v("除了响应式系统的升级，Vue.js 3.x 通过优化编译的过程和重写虚拟 DOM 让首次渲染和更新的性能有了大幅度提升")]),e._v(" "),v("h3",{attrs:{id:"编译优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译优化"}},[e._v("#")]),e._v(" 编译优化")]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.loli.net/2021/03/13/fkHPSlqmGUR3boN.png",alt:"image.png"}}),e._v(" "),v("p",[e._v("Vue.js 2.x 模板首先需要编译成 render 函数，这个过程一般在构建时完成的，在编译时会编译静态根节点和静态节点，静态根节点要求节点中必须有一个静态子节点")]),e._v(" "),v("p",[e._v("当组件的状态发生变化后会通知 watcher 触发 update 去执行 虚拟DOM 的 patch 操作，遍历所有的虚拟节点找到差异更新到 真实DOM 上，diff 的过程中会去比较整个 虚拟DOM，先对比新旧 div 以及它的属性再对比内部子节点")]),e._v(" "),v("p",[e._v("Vue.js 2.x 中渲染最小的单位是组件，diff 的过程会跳过静态根节点，因为静态根节点的内容不会发生变化，即")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("Vue.js 2.x 中通过标记静态根节点，优化 diff 的过程")]),e._v("，但是静态节点还需要进行 diff，没有被优化")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("Vue.js 3.x 中标记和提升所有静态根节点，diff 的时候只需要对比动态节点内容")])]),e._v(" "),v("ul",[v("li",[e._v("Fragments（VS Code需要升级 vetur 插件）：模板中不需要再创建唯一的根节点，可以直接放文本内容或者多个同级标签")]),e._v(" "),v("li",[e._v("静态提升")]),e._v(" "),v("li",[e._v("Patch flag")]),e._v(" "),v("li",[e._v("缓存事件处理函数")])])])]),e._v(" "),v("h3",{attrs:{id:"优化打包体积"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化打包体积"}},[e._v("#")]),e._v(" 优化打包体积")]),e._v(" "),v("ul",[v("li",[e._v("Vue.js 3.x 中移除了一些不常用的 API\n"),v("ul",[v("li",[e._v("例如：inline-template、filter 等")])])]),e._v(" "),v("li",[e._v("Tree-shaking")])]),e._v(" "),v("h2",{attrs:{id:"_14-6-vite"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-6-vite"}},[e._v("#")]),e._v(" 14.6 Vite")]),e._v(" "),v("p",[e._v("随着 Vue 3.x 的发布，官方还提供了一个开发工具 Vite，使用 Vite 在开发阶段测试项目的时候不需要打包直接运行项目，提升了开发的效率")]),e._v(" "),v("h3",{attrs:{id:"es-module"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[e._v("#")]),e._v(" ES Module")]),e._v(" "),v("ul",[v("li",[e._v("现代浏览器都支持 ES Module（IE 不支持）")]),e._v(" "),v("li",[e._v("通过下面的方式加载模块\n"),v("ul",[v("li",[v("code",[e._v('<script type="module" src=""><\/script>')])])])]),e._v(" "),v("li",[e._v("支持模块的 script 默认延迟加载\n"),v("ul",[v("li",[e._v("类似于 script 标签设置 defer")]),e._v(" "),v("li",[e._v("在文档解析完成后，触发 DOMContentLoaded 事件前执行")])])])]),e._v(" "),v("h3",{attrs:{id:"vite-as-vue-cli-开发环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-as-vue-cli-开发环境"}},[e._v("#")]),e._v(" Vite as Vue-CLI 开发环境")]),e._v(" "),v("ul",[v("li",[e._v("Vite 在开发模式下不需要打包可以直接运行")])]),e._v(" "),v("p",[e._v("在开发模式下，Vite 使用浏览器原生支持的 ES Module 加载模块，也就是通过 import 导入模块，支持 ES Module 的现代浏览器通过"),v("code",[e._v('<script type="module" src=""><\/script>')]),e._v("加载模块代码")]),e._v(" "),v("p",[e._v("因为 Vite 不需要打包项目，因此其在开发模式下打开页面是秒开的")]),e._v(" "),v("ul",[v("li",[e._v("Vue-CLI 在开发模式下必须对项目打包才可以运行")])]),e._v(" "),v("p",[e._v("Vue-CLI 在开发环境下会打包整个项目，如果项目比较大速度会特别慢")]),e._v(" "),v("p",[e._v("Vue 会开启一个测试的服务器，它会拦截浏览器发送的请求，浏览器会向服务器发送请求获取相应的模块，Vite 会对浏览器未识别的模块进行处理，使用这种方式让 Vite 有以下特点：")]),e._v(" "),v("p",[v("strong",[e._v("Vite 特点")])]),e._v(" "),v("ul",[v("li",[e._v("快速冷启动")]),e._v(" "),v("li",[e._v("按需编译")]),e._v(" "),v("li",[e._v("模块热更新")])]),e._v(" "),v("h3",{attrs:{id:"vite-as-vue-cli-生产环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-as-vue-cli-生产环境"}},[e._v("#")]),e._v(" Vite as Vue-CLI 生产环境")]),e._v(" "),v("ul",[v("li",[e._v("Vite 在生产环境下使用 Rollup 打包\n"),v("ul",[v("li",[e._v("基于 ES Module 的方式打包")])])]),e._v(" "),v("li",[e._v("Vue-CLI 使用 Webpack 打包")])]),e._v(" "),v("h3",{attrs:{id:"vite-创建项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vite-创建项目"}},[e._v("#")]),e._v(" Vite 创建项目")]),e._v(" "),v("ul",[v("li",[e._v("Vite 创建项目")])]),e._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init vite-app "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project-name"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project-name"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("ul",[v("li",[e._v("基于模板创建项目")])]),e._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init vite-app --template react\n"),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init vite-app --template preact\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);