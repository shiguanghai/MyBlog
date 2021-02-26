(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{543:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是浏览器的热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器的热更新"}},[s._v("#")]),s._v(" 什么是浏览器的热更新")]),s._v(" "),a("p",[s._v("看见浏览器热更新，相信你很容易想到 webpack 和 webpack-dev-server 。确实，现在各类型的脚手架工具在创建项目时通常已配置好了开启各种优化选项的 webpack ，其中自然也包含了开发服务器。大家在上手开发时，可以简单地执行 npm start (cra) 或 npm run serve (vue cli)，就能体验到热更新的效果。")]),s._v(" "),a("p",[s._v("先来看下，究竟什么是浏览器的热更新。浏览器的热更新，指的是我们在本地开发的同时打开浏览器进行预览，当代码文件发生变化时，浏览器自动更新页面内容的技术。这里的自动更新，表现上又分为自动刷新整个页面，以及页面整体无刷新而只更新页面的部分内容。")]),s._v(" "),a("p",[s._v("与之相对的是在早期开发流程中，每次代码变更后需要手动刷新浏览器才能看到变更效果的情况。甚至于，代码变更后还需要手动执行打包脚本，完成编译打包后再刷新浏览器。而使用浏览器的热更新，可以大大减少这些麻烦。")]),s._v(" "),a("h2",{attrs:{id:"webpack-中的热更新配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的热更新配置"}},[s._v("#")]),s._v(" webpack 中的热更新配置")]),s._v(" "),a("p",[s._v("下面我们就以 webpack 工具为例，来看下四种不同配置对结果的影响 "),a("a",{attrs:{href:"https://github.com/fe-efficiency/lessons_fe_efficiency/02_webpack_hmr",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整示例代码"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"一切依赖手动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一切依赖手动"}},[s._v("#")]),s._v(" 一切依赖手动")]),s._v(" "),a("p",[s._v("首先来看第一个最简单的配置，在入口 js 中我们简单地打印一个文本，然后在构建配置里只有最简单的 entry 和 mode 配置。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/index0.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.basic.js ")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index0.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:basic"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --config webpack.config.basic.js"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("当我们执行 npm run build:basic 时，webpack 将 entry 中的源文件 index0.js 打包为 dist/main.js，并退出进程。流程很简单，但是如果我们接下来改动了源文件的输出文本，会发现由于构建配置中没有任何对应处理，所以在保存后，打包后的文件内容并没有更新。为了同步改动效果，我们需要再次手动执行该命令。")]),s._v(" "),a("h3",{attrs:{id:"watch-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-模式"}},[s._v("#")]),s._v(" Watch 模式")]),s._v(" "),a("p",[s._v("第二种配置是 watch 模式。为了摆脱每次修改文件后都需要手动执行脚本才能进行编译的问题，webpack 中增加了 watch 模式，通过监控源码文件的变化来解决上面不能自动编译问题。我们可以在配置脚本中增加 watch:true，如下")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.watch.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build:watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --config webpack.config.watch.js"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("当我们执行 npm run build:watch，webpack 同样执行一次打包过程，但在打包结束后并未退出当前进程，而是继续"),a("strong",[s._v("监控源文件内容是否发生变化")]),s._v("，当源文件发生变更后将再次执行该流程，直到用户主动退出（除了在配置文件中加入参数外，也可以在 webpack 命令中增加 --watch 来实现）。")]),s._v(" "),a("p",[s._v("有了 watch 模式之后，我们在开发时就不用每次手动执行打包脚本了。但问题并未解决，为了看到执行效果，我们需要在浏览器中进行预览，但在预览时我们会发现，即使产物文件发生了变化，在浏览器里依然需要手动点击刷新才能看到变更后的效果。那么这个问题又该如何解决呢？")]),s._v(" "),a("h3",{attrs:{id:"live-reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-reload"}},[s._v("#")]),s._v(" Live Reload")]),s._v(" "),a("p",[s._v("第三种配置是 Live Reload。为了使每次代码变更后浏览器中的预览页面能自动显示最新效果而无须手动点击刷新，我们需要"),a("strong",[s._v("一种通信机制来连接浏览器中的预览页面与本地监控代码变更的进程")]),s._v("。在 webpack 中，我们可以使用官方提供的开发服务器来实现这一目的，配置如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.reload.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    contentBase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//为./dist目录中的静态页面文件提供本地服务渲染 ")]),s._v("\n    open"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//启动服务后自动打开浏览器网页 ")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev:reload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --config webpack.config.reload.js"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("当我们执行 npm run dev:reload，从日志中可以看到本地服务 http://localhost:8080/ 已启动，然后我们在浏览器中输入网址 http://localhost:8080/index.html （也可以在 devServer 的配置中加入 open 和 openPage 来自动打开网页）并打开控制台网络面板，可以看到在加载完页面和页面中引用的 js 文件后，服务还加载了路径前缀名为 /sockjs-node 的 websocket 链接，如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/4C/Ciqc1F807EuAEAxNAADYSkon5ms681.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("通过这个 websocket 链接，就可以使打开的网页和本地服务间建立持久化的通信。当源代码发生变更时，我们就可以通过 Socket 通知到网页端，网页端在接到通知后会自动触发页面刷新。")]),s._v(" "),a("p",[s._v("到了这里，在使用体验上我们似乎已经达到预期的效果了，但是在以下场景中仍然会遇到阻碍：在开发调试过程中，我们可能会在网页中进行一些操作，例如输入了一些表单数据想要调试错误提示的样式、打开了一个弹窗想要调试其中按钮的位置，然后切换回编辑器，修改样式文件进行保存。可是当我们再次返回网页时却发现，网页刷新后，之前输入的内容与打开的弹窗都消失了，网页又回到了初始化的状态。于是，我们不得不再次重复操作才能确认改动后的效果。对于这个问题，又该如何解决呢？")]),s._v(" "),a("h3",{attrs:{id:"hot-module-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hot-module-replacement"}},[s._v("#")]),s._v(" Hot Module Replacement")]),s._v(" "),a("p",[s._v("第四种配置就是我们常说的 HMR（Hot Module Replacement，模块热替换）了。为了解决页面刷新导致的状态丢失问题，webpack 提出了模块热替换的概念。下面我们通过一个复杂一些的示例来了解热替换的配置与使用场景：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/index1.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./style.css'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/style.css ")]),s._v("\ndiv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" red "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.hmr.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index1.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n    hot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev:hmr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --config webpack.config.hmr.js"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("在上面的代码改动中，我们只是在源码部分新增导入了一个简单的 CSS 文件，用于演示热替换的效果。在配置文件中，首先我们在 devServer 配置中新增了 hot:true，其次，新增 module 的配置，使用 style-loader 和 css-loader 来解析导入的 CSS 文件。其中 css-loader 处理的是将导入的 CSS 文件转化为模块供后续 Loader 处理；而 style-loader 则是负责将 CSS 模块的内容在运行时添加到页面的 style 标签中。")]),s._v(" "),a("p",[s._v("当我们执行 npm run dev:hmr 命令，可以看到页面控制台的网络面板与上个示例并无区别，而在审查元素面板中可以看到源码中的 CSS 被添加到了页面头部的新增 style 标签中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/4C/Ciqc1F807FmAZaa4AAEDscUHKXk227.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("而当修改源码中 CSS 的样式后，再回到网页端，我们则会发现这样一些变化：")]),s._v(" "),a("p",[s._v("首先在网络面板中，只是新增了两个请求：hot-update.json 和 hot-update.js，而不像上一个立即刷新的示例中那样，会刷新页面重载所有请求。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/58/CgqCHl807GGAYoLGAABmQj838Ag823.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("其次，在审查元素面板中我们可以看到，在页面的头部新增了 hot-update.js，并替换了原先 style 标签中的样式内容。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/58/CgqCHl807GeAFYunAAEuKSDazpo633.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("正如我们所见，对于代码中引入的样式文件，可以通过上述设置来开启热替换。但是有同学也许会问，我们为什么不像上一个例子中那样改动 JS 的内容（例如改动显示的文本）来观察热替换的效果呢？原因在于，简单改动 JS 中的显示文本并不能达到热替换的效果。尽管网络端同样新增了 hot-update.json 和 hot-update.js，但紧随其后的是如上一个示例一般的刷新了整个页面。")]),s._v(" "),a("p",[s._v("那么，为什么导入的 CSS 能触发模块热替换，而 JS 文件的内容修改就失效了呢？要回答这个问题，我们还得从 webpack 的热更新原理说起。")]),s._v(" "),a("h2",{attrs:{id:"webpack-中的热更新原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的热更新原理"}},[s._v("#")]),s._v(" webpack 中的热更新原理")]),s._v(" "),a("p",[s._v("下图是 webpackDevServer 中 HMR 的基本流程图，完整的 HMR 功能主要包含了三方面的技术：")]),s._v(" "),a("ol",[a("li",[s._v("watch 示例中体现的，对本地源代码文件内容变更的监控。")]),s._v(" "),a("li",[s._v("instant reload 示例中体现的，浏览器网页端与本地服务器端的 Websocket 通信。")]),s._v(" "),a("li",[s._v("hmr 示例中体现的，也即是最核心的，模块解析与替换功能。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/C7/Ciqc1F82OZmAFYuKAAC7WNDPQB4766.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("也就是说在这三种技术中，我们可以基于 Node.js 中提供的文件模块 fs.watch 来实现对文件和文件夹的监控，同样也可以使用 sockjs-node 或 socket.io 来实现 Websocket 的通信。而在这里，我们重点来看下第三种， webpack 中的模块解析与替换功能。")]),s._v(" "),a("h3",{attrs:{id:"webpack-中的打包流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的打包流程"}},[s._v("#")]),s._v(" webpack 中的打包流程")]),s._v(" "),a("p",[s._v("在讲 webpack 的打包流程之前我们先解释几个 webpack 中的术语：")]),s._v(" "),a("ul",[a("li",[s._v("module：指在模块化编程中我们把应用程序分割成的独立功能的代码模块。")]),s._v(" "),a("li",[s._v("chunk：指模块间按照引用关系组合成的代码块，一个 chunk 中可以包含多个 module。")]),s._v(" "),a("li",[s._v("chunk group：指通过配置入口点（entry point）区分的块组，一个 chunk group 中可包含一到多个 chunk。")]),s._v(" "),a("li",[s._v("bundling：webpack 打包的过程。")]),s._v(" "),a("li",[s._v("asset/bundle：打包产物。")])]),s._v(" "),a("p",[s._v("webpack 的打包思想可以简化为 3 点：")]),s._v(" "),a("ol",[a("li",[s._v("一切源代码文件均可通过各种 Loader 转换为 JS 模块 （module），模块之间可以互相引用。")]),s._v(" "),a("li",[s._v("webpack 通过入口点（entry point）递归处理各模块引用关系，最后输出为一个或多个产物包 js(bundle) 文件。")]),s._v(" "),a("li",[s._v("每一个入口点都是一个块组（chunk group），在不考虑分包的情况下，一个 chunk group 中只有一个 chunk，该 chunk 包含递归分析后的所有模块。每一个 chunk 都有对应的一个打包后的输出文件（asset/bundle）。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/D2/CgqCHl82OaWAMXDLAABdNTOV1dY952.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/58/CgqCHl807JGAPDOBAAJufukFuEU205.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("在上面的 hmr 示例中，从 entry 中的 './src/index1.js' 到打包产物的 dist/main.js，以模块的角度而言，其基本流程是：")]),s._v(" "),a("ol",[a("li",[s._v("唯一 entry 创建一个块组（chunk group）， name 为 main，包含了 ./src/index1.js 这一个模块。")]),s._v(" "),a("li",[s._v("在解析器中处理 ./src/index1.js 模块的代码，找到了其依赖的 './style.css'，找到匹配的 loader: css-loader 和 style-loader。")]),s._v(" "),a("li",[s._v("首先通过 css-loader 处理，将 css-loader/dist/cjs.js!./src/style.css 模块（即把 CSS 文件内容转化为 js 可执行代码的模块，这里简称为 Content 模块）和 css-loader/dist/runtime/api.js 模块打入 chunk 中。")]),s._v(" "),a("li",[s._v("然后通过 style-loader 处理，将 style-loader/dist/runtime/injectStylesIntoStyleTag.js 模块 （我们这里简称为 API 模块），以及处理后的 .src/style.css 模块（作用是运行时中通过 API 模块将 Content 模块内容注入 Style 标签）导入 chunk 中。")]),s._v(" "),a("li",[s._v("依次类推，直到将所有依赖的模块均打入到 chunk 中，最后输出名为 main.js 的产物（我们称为 Asset 或 Bundle）。")])]),s._v(" "),a("p",[s._v("上述流程的结果我们可以在预览页面中控制台的 Sources 面板中看到，这里，我们重点看经过 style-loader 处理的 style.css 模块的代码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/41/58/CgqCHl807JuAERI6AAMPF3IKpN0961.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("h3",{attrs:{id:"style-loader-中的热替换代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-loader-中的热替换代码"}},[s._v("#")]),s._v(" style-loader 中的热替换代码")]),s._v(" "),a("p",[s._v("我们简化一下上述控制台中看到的 style-loader 处理后的模块代码，只看其热替换相关的部分。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//为了清晰期间，我们将模块名称注释以及与热更新无关的逻辑省略，并将 css 内容模块路径赋值为变量 cssContentPath 以便多处引用，实际代码可从示例运行时中查看 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cssContentPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./node_modules/css-loader/dist/cjs.js!./src/style.css"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cssContentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n  cssContentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cssContentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("从上面的代码中我们可以看到，在运行时调用 API 实现将样式注入新生成的 style 标签，并将返回函数传递给 update 变量。然后，在 module.hot.accept 方法的回调函数中执行 update(content)，在 module.hot.dispose 中执行 update()。通过查看上述 API 的代码，可以发现 update(content) 是将新的样式内容更新到原 style 标签中，而 update() 则是移除注入的 style 标签，那么这里的 module.hot 究竟是什么呢？")]),s._v(" "),a("h3",{attrs:{id:"模块热替换插件-hotmodulereplacementplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换插件-hotmodulereplacementplugin"}},[s._v("#")]),s._v(" 模块热替换插件（HotModuleReplacementPlugin）")]),s._v(" "),a("p",[s._v("上面的 module.hot 实际上是一个来自 webpack 的基础插件 HotModuleReplacementPlugin，该插件作为热替换功能的基础插件，其 API 方法导出到了 module.hot 的属性中。")]),s._v(" "),a("p",[s._v("在上面代码的两个 API 中，"),a("strong",[s._v("hot.accept")]),s._v(" 方法传入依赖模块名称和回调方法，当依赖模块发生更新时，其回调方法就会被执行，而开发者就可以在回调中实现对应的替换逻辑，即上面的用更新的样式替换原标签中的样式。另一个 "),a("strong",[s._v("hot.dispose")]),s._v(" 方法则是传入一个回调，当代码上下文的模块被移除时，其回调方法就会被执行。例如当我们在源代码中移除导入的 CSS 模块时，运行时原有的模块中的 update() 就会被执行，从而在页面移除对应的 style 标签。")]),s._v(" "),a("p",[s._v("module.hot 中还包含了该插件提供的其他热更新相关的 API 方法，这里就不再赘述了，感兴趣的同学可以从 "),a("a",{attrs:{href:"https://webpack.js.org/api/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("中进一步了解。")]),s._v(" "),a("p",[s._v("通过上面的分析，我们就了解了热替换的基本原理，这也解释了为什么我们替换 index1.js 中的输出文本内容时，并没有观察到热更新，而是看到了整个页面的刷新：因为代码中并未包含对热替换插件 API 的调用，代码的解析也没有配置额外能对特定代码调用热替换 API 的 Loader。所以在最后，我们就来实现下 JS 中更新文本内容的热替换。")]),s._v(" "),a("h2",{attrs:{id:"示例-js-代码中的热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-js-代码中的热替换"}},[s._v("#")]),s._v(" 示例：JS 代码中的热替换")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./text.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./index2.js ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./text.js'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./text.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("在上面的代码中，我们将用于修改的文本单独作为一个 JS 模块，以便传入 hot.accept 方法。当文本发生变更时，可以观察到浏览器端显示最新内容的同时并未触发页面刷新，验证生效。此外， accept 方法也支持监控当前文件的变更，对应的 DOM 更新逻辑稍做调整也能达到无刷新效果，区别在于替换自身模块时示例中不可避免地需要更改 DOM。")]),s._v(" "),a("p",[s._v("从上面的例子中我们可以看到，热替换的实现，既依赖 webpack 核心代码中 HotModuleReplacementPlugin 所提供的相关 API，也依赖在具体模块的加载器中实现相应 API 的更新替换逻辑。因此，在配置中开启 hot:true 并不意味着任何代码的变更都能实现热替换，除了示例中演示的 style-loader 外， vue-loader、 react-hot-loader 等加载器也都实现了该功能。当开发时遇到 hmr 不生效的情况时，可以优先确认对应加载器是否支持该功能，以及是否使用了正确的配置。")])])}),[],!1,null,null,null);t.default=e.exports}}]);