(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{377:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(7),o=(t(0),t(557)),c={id:"gradle",title:"Gradle"},i={unversionedId:"java/gradle",id:"java/gradle",isDocsHomePage:!1,title:"Gradle",description:"Gradle",source:"@site/contents/notes/java/gradle.md",slug:"/java/gradle",permalink:"/notes/java/gradle",version:"current"},p=[{value:"Tips",id:"tips",children:[]}],l={rightToc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"gradle"},"Gradle"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/userguide.html"}),"Userguide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://guides.gradle.org/building-java-9-modules/"}),"Building Java 9 Modules"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# https://docs.gradle.org/current/userguide/build_init_plugin.html\n# \u751f\u6210\u57fa\u672c\u914d\u7f6e\n# --type pom,java-application,java-library,scala-library,groovy-library,basic\ngradle init\n\n# \u5237\u65b0\u4f9d\u8d56\ngradlew build --refresh-dependencies\n# \u4ee3\u7406\ngradlew -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=1234 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=1234 build\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"gradle.properties")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"# \u4ee3\u7406\u914d\u7f6e\nsystemProp.http.proxyHost=127.0.0.1\nsystemProp.http.proxyPort=1234\nsystemProp.https.proxyHost=127.0.0.1\nsystemProp.https.proxyPort=1234\n\n# \u5982\u679c\u9700\u8981\u6388\u6743\n# http.proxyUser=usernameProxy\n# http.proxyPassword=yourPassoword\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),'// https://docs.gradle.org/current/userguide/declaring_repositories.html\nmavenCentral()\nmaven {\n    url "http://maven.aliyun.com/nexus/content/groups/public"\n}\n')))}u.isMDXComponent=!0},557:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,g=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return t?a.a.createElement(g,i(i({ref:r},l),{},{components:t})):a.a.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);