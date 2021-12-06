(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{992:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何调试一个subquery项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何调试一个subquery项目"}},[t._v("#")]),t._v(" 如何调试一个SubQuery项目？")]),t._v(" "),s("h2",{attrs:{id:"视频教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频教程"}},[t._v("#")]),t._v(" 视频教程")]),t._v(" "),s("figure",{staticClass:"video_container"},[s("iframe",{attrs:{src:"https://www.youtube.com/embed/6NlaO-YN2q4",frameborder:"0",allowfullscreen:"true"}})]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("为了调试SubQuery项目，例如通过代码、设置breakpoints和检查变量，您必须使用一个Node.js 监视器与 Chrome 开发者工具结合使用")]),t._v(" "),s("h2",{attrs:{id:"节点监视器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点监视器"}},[t._v("#")]),t._v(" 节点监视器")]),t._v(" "),s("p",[t._v("在终端屏幕上运行以下命令。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("node --inspect-brk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path to subql-node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path to subQuery project"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("node --inspect-brk /usr/local/bin/subql-node -f ~/Code/subQuery/projects/subql-helloworld/\nDebugger listening on ws://127.0.0.1:9229/56156753-c07d-4bbe-af2d-2c7ff4bcc5ad\nFor help, see: https://nodejs.org/en/docs/inspector\nDebugger attached.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"chrome-开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-开发工具"}},[t._v("#")]),t._v(" Chrome 开发工具")]),t._v(" "),s("p",[t._v("打开Chrome DevTools 并导航到源标签页。 注意，点击绿色图标将打开一个新窗口。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/node_inspect.png",alt:"节点查看"}})]),t._v(" "),s("p",[t._v("导航到文件系统并将您的项目文件夹添加到工作区。 然后打开dist > 映射文件夹并选择你想要调试的代码。 然后跟任何标准调试工具一样来完成代码。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/debugging_projects.png",alt:"调试项目"}})])])}),[],!1,null,null,null);e.default=a.exports},993:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何调试一个subquery项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何调试一个subquery项目"}},[t._v("#")]),t._v(" 如何调试一个SubQuery项目？")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("在SubQuery项目中保持您的项目的相关性和最新性很重要。 对于上传到SubQuery项目进行测试的任何项目，我们建议您随后予以删除，以节省资源和节省费用。")]),t._v(" "),s("p",[t._v("除了使用Docker或者在 "),s("a",{attrs:{href:"https://project.subquery.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SubQuery Project"),s("OutboundLink")],1),t._v(" 上托管项目， 您还可以选择运行indexer节点。 这需要花费更多的时间和精力，但是它可以帮助您加深对SubQuery工作原理的理解。")]),t._v(" "),s("h2",{attrs:{id:"从暂存项中删除项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从暂存项中删除项目"}},[t._v("#")]),t._v(" 从暂存项中删除项目")]),t._v(" "),s("p",[t._v("您可以打开项目细节面板页面，在部署详细信息中点击暂存项部分的3个点并选择删除，就可以从暂存项删除一个项目。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/delete_staging.png",alt:"从暂存项中删除项目"}})]),t._v(" "),s("h2",{attrs:{id:"从成品项中删除项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从成品项中删除项目"}},[t._v("#")]),t._v(" 从成品项中删除项目")]),t._v(" "),s("p",[t._v("如果您需要要从成品项删除一个项目，您必须删除整个项目。 导航到页面右上角，点击3个点，就可以打开整个项目的设置， 然后选择 “删除项目”。 然后选择 “删除项目”。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/delete_production.png",alt:"从成品项中删除项目"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);