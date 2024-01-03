"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1903],{1903:function(e,a,t){t.r(a),t(7378);var n=t(2682);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}const s=("Badge",e=>(console.warn("Component `%s` was not imported, exported, or provided by MDXProvider as global scope","Badge"),(0,n.kt)(n.kt.Fragment,null,e.children)));function o(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",p({components:a},t),(0,n.kt)("p",null,"本章节涵盖了使用 webpack 编译的代码中所有的",(0,n.kt)("strong",{parentName:"p"},"变量"),"。模块将通过 ",(0,n.kt)("inlineCode",{parentName:"p"},"module")," 和其他变量，来访问编译过程中的某些数据。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"moduleloaded-nodejs",parentName:"h2"}),"module.loaded (NodeJS)",(0,n.kt)("a",{href:"#moduleloaded-nodejs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"false")," 表示该模块正在执行， ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," 表示同步执行已经完成。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"modulehot-webpack-specific",parentName:"h2"}),"module.hot (webpack-specific)",(0,n.kt)("a",{href:"#modulehot-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"表示 ",(0,n.kt)("a",{href:"/concepts/hot-module-replacement",parentName:"p"},"模块热替换(Hot Module Replacement)")," 是否启用，并给进程提供一个接口。详细说明请查看 ",(0,n.kt)("a",{href:"/api/hot-module-replacement",parentName:"p"},"模块热替换 API 页面"),"。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"moduleid-commonjs",parentName:"h2"}),"module.id (CommonJS)",(0,n.kt)("a",{href:"#moduleid-commonjs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"当前模块的 ID。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"id ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"===")," require",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./file.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"moduleexports-commonjs",parentName:"h2"}),"module.exports (CommonJS)",(0,n.kt)("a",{href:"#moduleexports-commonjs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"调用者通过 ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," 对模块进行调用时返回的值（默认为一个新对象）。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"doSomething"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Do something..."),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("aside",{className:"warning"},(0,n.kt)("h6",{className:"warning__prefix",parentName:"aside"},"警告"),(0,n.kt)("p",{parentName:"aside"},"无法在异步函数中访问该变量。")),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"exports-commonjs",parentName:"h2"}),"exports (CommonJS)",(0,n.kt)("a",{href:"#exports-commonjs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"该变量默认值为 ",(0,n.kt)("inlineCode",{parentName:"p"},"module.exports"),"（即一个对象）。 如果 ",(0,n.kt)("inlineCode",{parentName:"p"},"module.exports")," 被重写的话， ",(0,n.kt)("inlineCode",{parentName:"p"},"exports")," 不再会被导出。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"exports",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"someValue ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token number",parentName:"code"},"42"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nexports",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"anObject ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  x",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token number",parentName:"code"},"123"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nexports",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"aFunction")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"doSomething"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Do something"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"global-nodejs",parentName:"h2"}),"global (NodeJS)",(0,n.kt)("a",{href:"#global-nodejs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"见 ",(0,n.kt)("a",{href:"https://nodejs.org/api/globals.html#globals_global",parentName:"p"},"node.js global"),"."),(0,n.kt)("p",null,"出于兼容性考虑，webpack 默认填充了 ",(0,n.kt)("inlineCode",{parentName:"p"},"global")," 变量。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__dirname-nodejs",parentName:"h2"}),"__dirname (NodeJS)",(0,n.kt)("a",{href:"#__dirname-nodejs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"取决于 ",(0,n.kt)("inlineCode",{parentName:"p"},"node.__dirname")," 配置选项："),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false"),": 未定义"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mock"),": 等同于 ",(0,n.kt)("inlineCode",{parentName:"li"},"'/'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true"),": ",(0,n.kt)("a",{href:"https://nodejs.org/api/globals.html#globals_dirname",parentName:"li"},"node.js __dirname"))),(0,n.kt)("p",null,"如果在一个被 Parser 解析的表达式内部使用，则配置选项会被当作 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," 处理。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"importmetaurl",parentName:"h2"}),"import.meta.url",(0,n.kt)("a",{href:"#importmetaurl","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"返回模块以 ",(0,n.kt)("inlineCode",{parentName:"p"},"file:")," 开头绝对路径的 URL。"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"src/index.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"console",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"log"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"meta",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"url",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// 输出结果类似于 `file:///path/to/your/project/src/index.js`"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"importmetawebpack",parentName:"h2"}),"import.meta.webpack",(0,n.kt)("a",{href:"#importmetawebpack","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"返回 webpack 的版本"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"src/index.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"console",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"log"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"meta",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// output `5` for webpack 5"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"importmetawebpackHot",parentName:"h2"}),"import.meta.webpackHot",(0,n.kt)("a",{href:"#importmetawebpackHot","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"webpack 特定。",(0,n.kt)("a",{href:"#modulehot-webpack-specific",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"module.hot"))," 的一个别名，",(0,n.kt)("a",{href:"/guides/ecma-script-modules/#flagging-modules-as-esm",parentName:"p"},"strict ESM")," 中可以使用 ",(0,n.kt)("inlineCode",{parentName:"p"},"import.meta.webpackHot")," 但是不能使用 ",(0,n.kt)("inlineCode",{parentName:"p"},"module.hot"),"。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"importmetawebpackContext",parentName:"h2"}),"import.meta.webpackContext",(0,n.kt)("a",{href:"#importmetawebpackContext","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"返回与 ",(0,n.kt)("inlineCode",{parentName:"p"},"require.context")," 一样的值，但是仅用于 ",(0,n.kt)("inlineCode",{parentName:"p"},"javascript/auto")," 和 ",(0,n.kt)("inlineCode",{parentName:"p"},"javascript/esm"),"。"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"类型："),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  request",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  options",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    recursive",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    regExp",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," RegExp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    include",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," RegExp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    exclude",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," RegExp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    preload",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    prefetch",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    chunkName",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    exports",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    mode",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'sync'")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'eager'")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'weak'")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'lazy'")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'lazy-once'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"Context",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"可用版本：5.70.0+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"示例："),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," contextRequire ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"meta",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"webpackContext"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'.'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  recursive",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  regExp",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token regex",parentName:"code"},"/two/"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  mode",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'weak'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  exclude",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token regex",parentName:"code"},"/three/"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__filename-NodeJS",parentName:"h2"}),"__filename (NodeJS)",(0,n.kt)("a",{href:"#__filename-NodeJS","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"取决于 ",(0,n.kt)("inlineCode",{parentName:"p"},"node.__filename")," 配置选项："),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false"),": 未定义"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mock"),": 等同于 ",(0,n.kt)("inlineCode",{parentName:"li"},"'/index.js'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true"),": ",(0,n.kt)("a",{href:"https://nodejs.org/api/globals.html#globals_filename",parentName:"li"},"node.js __filename"))),(0,n.kt)("p",null,"如果在一个被 Parser 解析的表达式内部使用，则配置选项会被当作 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," 处理。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__resourcequery-webpack-specific",parentName:"h2"}),"__resourceQuery (webpack-specific)",(0,n.kt)("a",{href:"#__resourcequery-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"当前模块的资源查询(resource query) 。如果进行了如下的 ",(0,n.kt)("inlineCode",{parentName:"p"},"reqiure")," 调用，那么查询字符串(query string)在",(0,n.kt)("inlineCode",{parentName:"p"},"file.js")," 中可访问。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'file.js?test'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"file.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"__resourceQuery ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'?test'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_public_path__-webpack-specific",parentName:"h2"}),"__webpack_public_path__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_public_path__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"等同于 ",(0,n.kt)("inlineCode",{parentName:"p"},"output.publicPath")," 配置选项。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_require__-webpack-specific",parentName:"h2"}),"__webpack_require__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_require__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"原始 require 函数。这个表达式不会被解析器解析为依赖。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_chunk_load__-webpack-specific",parentName:"h2"}),(0,n.kt)("inlineCode",{parentName:"h2"},"__webpack_chunk_load__")," (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_chunk_load__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"内部 chunk 载入函数，有一个输入参数："),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chunkId")," 需要载入的 chunk id。")),(0,n.kt)("p",null,"当一个 chunk 加载失败时，从备用公共路径加载 chunk 的示例："),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," originalLoad ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," __webpack_chunk_load__",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," publicPaths ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'a'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'b'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'c'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"__webpack_chunk_load__")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"async")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"id"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"let")," error",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"for")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"of")," publicPaths",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    __webpack_public_path__ ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," path",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"try")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"await")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"originalLoad"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"id",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"catch")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"e",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      error ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," e",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"throw")," error",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./module-a'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"then"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"moduleA"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// now webpack will use the custom __webpack_chunk_load__ to load chunk"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_module__-webpack-specific",parentName:"h2"}),"__webpack_module__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_module__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)(s,{text:"5.68.0+",mdxType:"Badge"}),(0,n.kt)("p",null,"它提供对当前 ",(0,n.kt)("inlineCode",{parentName:"p"},"module")," 的访问。",(0,n.kt)("inlineCode",{parentName:"p"},"module")," 在 ESM 严格模式下不可用。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_module__id-webpack-specific",parentName:"h2"}),"__webpack_module__.id (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_module__id-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)(s,{text:"5.68.0+",mdxType:"Badge"}),(0,n.kt)("p",null,"它提供对当前 ",(0,n.kt)("inlineCode",{parentName:"p"},"module"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"module.id"),") ID 的访问。",(0,n.kt)("inlineCode",{parentName:"p"},"module")," 在 ESM 严格模式下不可用。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_modules__-webpack-specific",parentName:"h2"}),"__webpack_modules__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_modules__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"访问所有模块的内部对象。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_hash__-webpack-specific",parentName:"h2"}),"__webpack_hash__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_hash__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"这个变量提供对编译过程中(compilation)的 hash 信息的访问。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_get_script_filename__-webpack-specific",parentName:"h2"}),"__webpack_get_script_filename__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_get_script_filename__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"function (chunkId)")),(0,n.kt)("p",null,"它通过 chunk 的 id 提供 chunk 的文件名。"),(0,n.kt)("p",null,"它是可分配的，允许更改运行时使用的文件名。例如，它可以用来确定加载 chunk 时的最终路径。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," oldFn ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," __webpack_get_script_filename__",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"__webpack_get_script_filename__")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"chunkId"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," filename ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"oldFn"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"chunkId",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," filename ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"+")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'.changed'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__non_webpack_require__-webpack-specific",parentName:"h2"}),"__non_webpack_require__ (webpack-specific)",(0,n.kt)("a",{href:"#__non_webpack_require__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"生成一个不会被 webpack 解析的 ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," 函数。配合全局可以获取到的 require 函数，可以完成一些酷炫操作。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_exports_info__-webpack-specific",parentName:"h2"}),"__webpack_exports_info__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_exports_info__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"在模块中, ",(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__")," 可以被获取到，以便导出模块用以自我检查："),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__")," 总是 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"当导出模块未被使用时 ",(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__.<exportName>.used")," 为 ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", 否则是 ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__.<exportName>.useInfo")," 是"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false")," 当导出模块未被使用"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true")," 当导出模块被使用"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"null")," 当导出模块的使用情况取决于运行时的条件"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," 当没有可用信息时"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__.<exportName>.provideInfo")," 是"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false")," 当导出模块没有被提供"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true")," 当导出模块被提供"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"null")," 当导出模块的提供情况取决于运行时的条件"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," 当没有可用信息时"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"可以从嵌套的 exports 中得到相关信息: 例如 ",(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__.<exportName>.<exportName>.<exportName>.used"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check whether exports can be mangled with ",(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_exports_info__.<name>.canMangle")))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_is_included__-webpack-specific",parentName:"h2"}),"__webpack_is_included__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_is_included__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)(s,{text:"5.16.0+",mdxType:"Badge"}),(0,n.kt)("p",null,"测试给定的模块是否被 webpack 打包。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token function",parentName:"code"},"__webpack_is_included__"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./module-a.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// do something"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_base_uri__-webpack-specific",parentName:"h2"}),"__webpack_base_uri__ (webpack-specific)",(0,n.kt)("a",{href:"#__webpack_base_uri__-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"运行时修改 base 的 URI。"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"类型：",(0,n.kt)("inlineCode",{parentName:"p"},"string"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"可用：5.21.0+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"示例:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"__webpack_base_uri__ ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'https://example.com'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"__webpack_runtime_id__",parentName:"h2"}),"__webpack_runtime_id__",(0,n.kt)("a",{href:"#__webpack_runtime_id__","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"访问当前入口的 ",(0,n.kt)("a",{href:"/blog/2020-10-10-webpack-5-release/#entry-point-runtime",parentName:"p"},"runtime")," id。"),(0,n.kt)("p",null,"这是一个 webpack 特性，并且在 webpack 5.25.0 后可用。"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"src/index.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"console",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"log"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__webpack_runtime_id__ ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'main'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"DEBUG-webpack-specific",parentName:"h2"}),"DEBUG (webpack-specific)",(0,n.kt)("a",{href:"#DEBUG-webpack-specific","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"等同于 ",(0,n.kt)("inlineCode",{parentName:"p"},"debug")," 配置选项。"))}o.isMDXComponent=!0,a.default=o}}]);