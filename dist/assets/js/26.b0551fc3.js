(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{515:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是-source-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-source-map"}},[s._v("#")]),s._v(" 什么是 Source Map")]),s._v(" "),t("p",[s._v("在前端开发过程中，通常我们编写的源代码会经过多重处理（编译、封装、压缩等），最后形成产物代码。于是在浏览器中调试产物代码时，我们往往会发现代码变得面目全非，例如：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/93/Ciqc1F85_FmAA4UeAABWNiHqsWQ595.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("因此，我们需要一种在调试时将产物代码显示回源代码的功能，"),t("strong",[s._v("source map")]),s._v(" 就是实现这一目标的工具。")]),s._v(" "),t("p",[s._v('source-map 的基本原理是，在编译处理的过程中，在生成产物代码的同时生成产物代码中被转换的部分与源代码中相应部分的映射关系表。有了这样一张完整的映射表，我们就可以通过 Chrome 控制台中的"Enable Javascript source map"来实现调试时的显示与定位源代码功能。')]),s._v(" "),t("p",[s._v("对于同一个源文件，根据不同的目标，可以生成不同效果的 source map。它们在"),t("strong",[s._v("构建速度")]),s._v("、"),t("strong",[s._v("质量")]),s._v("（反解代码与源代码的接近程度以及调试时行号列号等辅助信息的对应情况）、"),t("strong",[s._v("访问方式")]),s._v("（在产物文件中或是单独生成 source map 文件）和"),t("strong",[s._v("文件大小")]),s._v("等方面各不相同。在开发环境和生产环境下，我们对于 source map 功能的期望也有所不同：")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("在开发环境中")]),s._v("，通常我们关注的是构建速度快，质量高，以便于提升开发效率，而不关注生成文件的大小和访问方式。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("在生产环境中")]),s._v("，通常我们更关注是否需要提供线上 source map , 生成的文件大小和访问方式是否会对页面性能造成影响等，其次才是质量和构建速度。")])])]),s._v(" "),t("h2",{attrs:{id:"webpack-中的-source-map-预设"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中的-source-map-预设"}},[s._v("#")]),s._v(" Webpack 中的 source map 预设")]),s._v(" "),t("p",[s._v("在 Webpack 中，通过设置 devtool 来选择 source map 的预设类型，文档中共有 "),t("a",{attrs:{href:"https://webpack.js.org/configuration/devtool/#devtool",target:"_blank",rel:"noopener noreferrer"}},[s._v("20 余种"),t("OutboundLink")],1),s._v(' source map 的预设（注意：其中部分预设实际效果与其他预设相同，即页面表格中空白行条目）可供选择，这些预设通常包含了 "eval" "cheap" "module" "inline" "hidden" "nosource" "source-map" 等关键字的组合，这些关键字的具体逻辑如下：')]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack/lib/WebpackOptionsApply.js:232 ")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source-map"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" hidden "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" inline "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"inline"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" evalWrapped "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eval"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cheap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cheap"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" moduleMaps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" noSources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nosources"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Plugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" evalWrapped \n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./EvalSourceMapDevToolPlugin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./SourceMapDevToolPlugin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" inline "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sourceMapFilename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    moduleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtoolModuleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    fallbackModuleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \n      options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtoolFallbackModuleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    append"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" hidden "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" moduleMaps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" cheap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" cheap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    noSources"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" noSources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtoolNamespace \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eval"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" EvalDevToolModulePlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./EvalDevToolModulePlugin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EvalDevToolModulePlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    moduleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtoolModuleFilenameTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devtoolNamespace \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compiler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("如上面的代码所示， devtool 的值匹配并非精确匹配，某个关键字只要包含在赋值中即可获得匹配，例如：'foo-eval-bar' 等同于 'eval'，'cheapfoo-source-map' 等同于 'cheap-source-map'。")]),s._v(" "),t("h3",{attrs:{id:"source-map-名称关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map-名称关键字"}},[s._v("#")]),s._v(" Source Map 名称关键字")]),s._v(" "),t("p",[s._v("各字段的作用各不相同，为了便于记忆，我们在这里简单整理下这些关键字的作用：")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("false")]),s._v("：即不开启 source map 功能，其他不符合上述规则的赋值也等价于 false。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("eval")]),s._v("：是指在编译器中使用 EvalDevToolModulePlugin 作为 source map 的处理插件。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("[xxx-...]source-map")]),s._v("：根据 devtool 对应值中是否有 "),t("strong",[s._v("eval")]),s._v(" 关键字来决定使用 EvalSourceMapDevToolPlugin 或 SourceMapDevToolPlugin 作为 source map 的处理插件，其余关键字则决定传入到插件的相关字段赋值。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("inline")]),s._v("：决定是否传入插件的 filename 参数，作用是决定单独生成 source map 文件还是在行内显示，"),t("strong",[s._v("该参数在 eval- 参数存在时无效")]),s._v("。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("hidden")]),s._v("：决定传入插件 append 的赋值，作用是判断是否添加 SourceMappingURL 的注释，"),t("strong",[s._v("该参数在 eval- 参数存在时无效")]),s._v("。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("module")]),s._v("：为 true 时传入插件的 module 为 true ，作用是为加载器（Loaders）生成 source map。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("cheap")]),s._v("：这个关键字有两处作用。首先，当 module 为 false 时，它决定插件 module 参数的最终取值，最终取值与 cheap 相反。其次，它决定插件 columns 参数的取值，作用是决定生成的 source map 中是否包含列信息，在不包含列信息的情况下，调试时只能定位到指定代码所在的行而定位不到所在的列。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("nosource")]),s._v("：nosource 决定了插件中 noSource 变量的取值，作用是决定生成的 source map 中是否包含源代码信息，不包含源码情况下只能显示调用堆栈信息。")])])]),s._v(" "),t("h3",{attrs:{id:"source-map-处理插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map-处理插件"}},[s._v("#")]),s._v(" Source Map 处理插件")]),s._v(" "),t("p",[s._v("从上面的规则中我们还可以看到，根据不同规则，实际上 Webpack 是从三种插件中选择其一作为 source map 的处理插件。")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/webpack/webpack/blob/master/lib/EvalDevToolModulePlugin.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("EvalDevToolModulePlugin"),t("OutboundLink")],1),s._v("：模块代码后添加 sourceURL=webpack:///+ 模块引用路径，不生成 source map 内容，模块产物代码通过 eval() 封装。")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/webpack/webpack/blob/master/lib/EvalSourceMapDevToolPlugin.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("EvalSourceMapDevToolPlugin"),t("OutboundLink")],1),s._v("：生成 base64 格式的 source map 并附加在模块代码之后， source map 后添加 sourceURL=webpack:///+ 模块引用路径，不单独生成文件，模块产物代码通过 eval() 封装。")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/webpack/webpack/blob/master/lib/SourceMapDevToolPlugin.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("SourceMapDevToolPlugin"),t("OutboundLink")],1),s._v("：生成单独的 .map 文件，模块产物代码不通过 eval 封装。")])])]),s._v(" "),t("p",[s._v("通过上面的代码分析，我们了解了不同参数在 Webpack 运行时起到的作用。那么这些不同参数组合下的各种预设对我们的 source map 生成又各自会产生什么样的效果呢？下面我们通过示例来看一下。")]),s._v(" "),t("h2",{attrs:{id:"不同预设的示例结果对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同预设的示例结果对比"}},[s._v("#")]),s._v(" 不同预设的示例结果对比")]),s._v(" "),t("p",[s._v("下面，以"),t("a",{attrs:{href:"https://github.com/fe-efficiency/lessons_fe_efficiency/tree/master/03_develop_environment",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例代码"),t("OutboundLink")],1),s._v(" 为例，我们来对比下几种常用预设的差异（为了使时间差异更明显，示例中引入了几个大的类库文件）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/43/5E/Ciqc1F87kyiAZvHdAAIGvohk2F4144.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("blockquote",[t("p",[s._v("*注1：“/”前后分别表示产物 js 大小和对应 .map 大小。\n*注2：“/”前后分别表示初次构建时间和开启 watch 模式下 rebuild 时间。对应统计的都是 development 模式下的笔者机器环境下几次构建时间的平均值，只作为相对快慢与量级的比较。")])]),s._v(" "),t("h3",{attrs:{id:"不同预设的效果总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同预设的效果总结"}},[s._v("#")]),s._v(" 不同预设的效果总结")]),s._v(" "),t("p",[s._v("从上图的数据中我们不难发现，选择不同的 devtool 类型在以下几个方面会产生不同的效果。")]),s._v(" "),t("ul",[t("li",[s._v("质量：生成的 source map 的质量分为 5 个级别，对应的调试便捷性依次降低：源代码 > 缺少列信息的源代码 > loader 转换后的代码 > 生成后的产物代码 > 无法显示代码（具体参见下面的"),t("strong",[s._v("不同质量的源码示例")]),s._v("小节）。对应对质量产生影响的预设关键字优先级为 souce-map = eval-source-map > cheap-module- > cheap- > eval = none > nosource-。")]),s._v(" "),t("li",[s._v("构建的速度：再次构建速度都要显著快于初次构建速度。不同环境下关注的速度也不同：\n"),t("ul",[t("li",[s._v("在开发环境下：一直开着 devServer，再次构建的速度对我们的效率影响远大于初次构建的速度。从结果中可以看到，eval- 对应的 EvalSourceMapDevToolPlugin 整体要快于不带 eval- 的 SourceMapDevToolPlugin。尤其在质量最佳的配置下，eval-source-map 的再次构建速度要远快于其他几种。而同样插件配置下，不同质量配置与构建速度成反比，但差异程度有限，更多是看具体项目的大小而定。")]),s._v(" "),t("li",[s._v("在生产环境下：通常不会开启再次构建，因此相比再次构建，初次构建的速度更值得关注，甚至对构建速度以外因素的考虑要优先于对构建速度的考虑，这一部分我们在之后的构建优化的课程里会再次讨论到。")])])]),s._v(" "),t("li",[s._v("包的大小和生成方式：在开发环境下我们并不需要关注这些因素，正如在开发环境下也通常不考虑使用分包等优化方式。我们需要关注速度和质量来保证我们的高效开发体验，而其他的部分则是在生产环境下需要考虑的问题。")])]),s._v(" "),t("h3",{attrs:{id:"不同质量的源码示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同质量的源码示例"}},[s._v("#")]),s._v(" 不同质量的源码示例")]),s._v(" "),t("ul",[t("li",[s._v("源码且包含列信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_KuANSVfAADSE8VO7Qg572.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("ul",[t("li",[s._v("源码不包含列信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/93/Ciqc1F85_LCAMTlgAADhqpZ4v9o628.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("ul",[t("li",[s._v("Loader转换后代码")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_LqAPrYzAADfmUwS_JE006.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("ul",[t("li",[s._v("生成后的产物代码")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_MGAHhmMAAKGwvDeXIM418.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"开发环境下-source-map-推荐预设"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境下-source-map-推荐预设"}},[s._v("#")]),s._v(" 开发环境下 Source Map 推荐预设")]),s._v(" "),t("p",[s._v("在这里我们对开发环境下使用的推荐预设做一个总结（生产环境的预设我们将在之后的构建效率篇中再具体分析）：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通常来说，开发环境首选哪一种预设取决于 source map 对于我们的帮助程度。")])]),s._v(" "),t("li",[t("p",[s._v("如果对项目代码了如指掌，查看产物代码也可以无障碍地了解对应源代码的部分，那就可以关闭 devtool 或使用 eval 来获得最快构建速度。")])]),s._v(" "),t("li",[t("p",[s._v("反之如果在调试时，需要通过 source map 来快速定位到源代码，则优先考虑使用 "),t("strong",[s._v("eval-cheap-module-source-map")]),s._v("，它的质量与初次/再次构建速度都属于次优级，以牺牲定位到列的功能为代价换取更快的构建速度通常也是值得的。")])]),s._v(" "),t("li",[t("p",[s._v("在其他情况下，根据对质量要求更高或是对速度要求更高的不同情况，可以分别考虑使用 "),t("strong",[s._v("eval-source-map")]),s._v(" 或 "),t("strong",[s._v("eval-cheap-source-map")]),s._v("。")])])]),s._v(" "),t("p",[s._v("了解了开发环境下如何选择 source map 预设后，我们再来补充几种工具和脚手架中的默认预设：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Webpack 配置中，如果不设定 devtool，则使用默认值 eval，即速度与 devtool:false 几乎相同、但模块代码后多了 sourceURL 以帮助定位模块的文件名称。")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/facebook/create-react-app/blob/fa648daca1dedd97aec4fa3bae8752c4dcf37e6f/packages/react-scripts/config/webpack.config.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("create-react-app"),t("OutboundLink")],1),s._v(" 中，在生产环境下，根据 shouldUseSourceMap 参数决定使用‘source-map’或 false；在开发环境下使用‘cheap-module-source-map’（不包含列信息的源代码，但更快）。")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/36f961e43dc76705878659247b563e2af83138ce/packages/%40vue/cli-service/lib/commands/serve.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli-service"),t("OutboundLink")],1),s._v(" 中，与 creat-react-app 中相同。")])])]),s._v(" "),t("p",[s._v("除了上面讨论的这些简单的预设外，Webpack 还允许开发者直接使用对应插件来进行更精细化的 source map 控制，在开发环境下我们首选的还是 EvalSourceMapDevToolPlugin。下面我们再来看看如何直接使用这个插件进行优化。")]),s._v(" "),t("h3",{attrs:{id:"evalsourcemapdevtoolplugin-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evalsourcemapdevtoolplugin-的使用"}},[s._v("#")]),s._v(" EvalSourceMapDevToolPlugin 的使用")]),s._v(" "),t("p",[s._v("在 EvalSourceMapDevToolPlugin 的 "),t("a",{attrs:{href:"https://webpack.js.org/plugins/eval-source-map-dev-tool-plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("传入参数"),t("OutboundLink")],1),s._v("中，除了上面和预设相关的 filename、append、module、columns 外，还有影响注释内容的 moduleFilenameTemplate 和 protocol，以及影响处理范围的 test、include、exclude。这里重点看处理范围的参数，因为通常我们需要调试的是开发的业务代码部分，而非依赖的第三方模块部分。因此在生成 source map 的时候如果可以排除第三方模块的部分而只生成业务代码的 source map，无疑能进一步提升构建的速度，例如示例：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js ")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//devtool: 'eval-source-map', ")]),s._v("\n  devtool"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EvalSourceMapDevToolPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/node_modules/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("在上面的示例中，我们将 devtool 设为 false，而直接使用 EvalSourceMapDevToolPlugin，通过传入 module: true 和 column:false，达到和预设 eval-cheap-module-source-map 一样的质量，同时传入 exclude 参数，排除第三方依赖包的 source map 生成。保存设定后通过运行可以看到，在文件体积减小（尽管开发环境并不关注文件大小）的同时，再次构建的速度相比上面表格中的速度提升了将近一倍，达到了最快一级。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/42/9E/CgqCHl85_N2AUkcpAAEqvMKhgVQ549.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("类似这样的优化可以帮助我们在一些大型项目中，通过自定义设置来获取比预设更好的开发体验。")])])}),[],!1,null,null,null);a.default=n.exports}}]);