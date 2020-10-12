(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{439:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),l=(r(0),r(557)),c={id:"leveldb",title:"LevelDB"},i={unversionedId:"db/kv/leveldb",id:"db/kv/leveldb",isDocsHomePage:!1,title:"LevelDB",description:"LevelDB",source:"@site/contents/notes/db/kv/leveldb.md",slug:"/db/kv/leveldb",permalink:"/notes/db/kv/leveldb",version:"current",sidebar:"docs",previous:{title:"LMDB",permalink:"/notes/db/kv/lmdb"},next:{title:"\u8bcd\u6c47\u5bf9\u6bd4",permalink:"/notes/reference/words"}},o=[{value:"Tips",id:"tips",children:[]}],b={rightToc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"leveldb"},"LevelDB"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/google/leveldb/blob/master/include/leveldb/c.h"}),"c.h")," - C API",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u770b\u5230\u6838\u5fc3\u63a5\u53e3\u548c\u80fd\u529b\uff0c\u5176\u4ed6\u8bed\u8a00\u7684\u5c01\u88c5\u4e3b\u8981\u57fa\u4e8e C"),Object(l.b)("li",{parentName:"ul"},"KV \u8bfb\u5199\u5220\u3001\u8fed\u4ee3\u5668\u3001\u6279\u91cf\u5199\u3001\u5feb\u7167\u3001\u538b\u7f29\u3001\u6bd4\u8f83\u5668"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u66b4\u9732 Slice \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u539f\u5b50\u64cd\u4f5c\u901a\u8fc7\u6279\u91cf\u64cd\u4f5c\u5b9e\u73b0"))),Object(l.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5355\u7ebf\u7a0b\uff0cDB\u5bf9\u8c61\u7ebf\u7a0b\u5b89\u5168"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e LevelDB \u505a KKV \u7684\u4e00\u822c\u662f\u4f7f\u7528 Prefix \u5b9e\u73b0\uff0c\u67e5\u8be2\u65f6\u4f7f\u7528\u8fed\u4ee3\u5668"),Object(l.b)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u5feb\u7167\u4e0b\uff0c\u770b\u5230\u7684\u6570\u636e\u4e0d\u53d8"),Object(l.b)("li",{parentName:"ul"},"KV\u5141\u8bb8\u5305\u542b ",Object(l.b)("inlineCode",{parentName:"li"},"\\0")),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672a\u9488\u5bf9 SSD \u505a\u4f18\u5316"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5931\u6548")))))}u.isMDXComponent=!0},557:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,m=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<l;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);