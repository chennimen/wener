(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{667:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,O=b["".concat(i,".").concat(s)]||b[s]||m[s]||o;return n?a.a.createElement(O,p(p({ref:t},l),{},{components:n})):a.a.createElement(O,p({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(667)),i={id:"htop",title:"htop"},p={unversionedId:"ops/admin/htop",id:"ops/admin/htop",isDocsHomePage:!1,title:"htop",description:"htop",source:"@site/notes/ops/admin/htop.md",slug:"/ops/admin/htop",permalink:"/notes/ops/admin/htop",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/htop.md",version:"current",sidebar:"docs",previous:{title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",permalink:"/notes/howto/network/tinc-transparency-proxy"},next:{title:"MOSH",permalink:"/notes/ops/admin/mosh"}},c=[{value:"Tips",id:"tips",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"htop"},"htop"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://peteris.rocks/blog/htop/"}),"htop explained")),Object(o.b)("li",{parentName:"ul"},"\u5185\u5b58",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"VIRT/VSZ - Virtual Image - \u865a\u62df\u955c\u50cf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"VIRT = SWAP + RES"),Object(o.b)("li",{parentName:"ul"},"\u610f\u4e49\u4e0d\u5927"),Object(o.b)("li",{parentName:"ul"},"\u6240\u7528\u5230\u7684\u865a\u62df\u5185\u5b58\uff0c\u5305\u542b\u6240\u6709\u4ee3\u7801\u3001\u6570\u636e\u3001\u5171\u4eab\u5305\u3001\u4ea4\u6362\u533a\u9875\u3001\u6620\u5c04\u4f46\u672a\u4f7f\u7528\u9875"),Object(o.b)("li",{parentName:"ul"},"\u5e94\u7528\u7533\u8bf7 1GB \u4f46\u53ea\u7528 1MB \u4e5f\u4f1a\u8ba1\u7b97\u4e3a 1G\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c mmap 1G \u7684\u6587\u4ef6\uff0c\u4f46\u672a\u4f7f\u7528\uff0c\u4e5f\u7b97 1G\u3002"))),Object(o.b)("li",{parentName:"ul"},"RES/RSS - Resident size - \u5e38\u9a7b\u5185\u5b58",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"RES = CODE + DATA"),Object(o.b)("li",{parentName:"ul"},"\u672a\u88ab\u4ea4\u6362\u7684\u7269\u7406\u5185\u5b58"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u5305\u542b\u5728\u4ea4\u6362\u533a\u7684\u5185\u5b58"),Object(o.b)("li",{parentName:"ul"},"\u90e8\u5206\u5185\u5b58\u53ef\u80fd\u4e0e\u5176\u4ed6\u8fdb\u7a0b\u5171\u4eab"),Object(o.b)("li",{parentName:"ul"},"\u4f8b\u5982\u4e00\u4e2a 1GB \u7684 \u8fdb\u7a0b fork \u540e\uff0c\u65b0\u7684\u8fdb\u7a0b\u4e5f\u4f1a\u5360\u7528 1G\uff0c\u4f46\u5b9e\u9645\u53ea\u7528\u5230\u4e86 1G\u3002Linux \u4f1a\u5bf9\u5185\u5b58 \u5199\u65f6\u590d\u5236\u3002"))),Object(o.b)("li",{parentName:"ul"},"SHR - Shared Mem size - \u5171\u4eab\u5185\u5b58",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8fdb\u7a0b\u7528\u5230\u7684\u5171\u4eab\u5185\u5b58"),Object(o.b)("li",{parentName:"ul"},"\u5185\u5b58\u53ef\u80fd\u88ab\u5171\u4eab\uff0c\u4f46\u4e0d\u4e00\u5b9a\u5df2\u7ecf\u88ab\u5176\u4ed6\u8fdb\u7a0b\u5171\u4eab\u4f7f\u7528\u3002"))))),Object(o.b)("li",{parentName:"ul"},"\u5355\u4f4d\u4e3a kb")))}u.isMDXComponent=!0}}]);