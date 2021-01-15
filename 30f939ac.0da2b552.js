(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(7),o=(r(0),r(717)),c={id:"ceph-k8s",title:"Ceph Kubernetes"},i={unversionedId:"service/storage/ceph-k8s",id:"service/storage/ceph-k8s",isDocsHomePage:!1,title:"Ceph Kubernetes",description:"Ceph Kubernetes",source:"@site/notes/service/storage/ceph-k8s.md",slug:"/service/storage/ceph-k8s",permalink:"/notes/service/storage/ceph-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/ceph-k8s.md",version:"current",sidebar:"docs",previous:{title:"Ceph \u672f\u8bed",permalink:"/notes/service/storage/ceph-glossary"},next:{title:"Ubuntu 16.04 \u5b89\u88c5 Ceph",permalink:"/notes/service/storage/ceph-ubuntu-16-install"}},p=[{value:"Tips",id:"tips",children:[]}],u={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ceph-kubernetes"},"Ceph Kubernetes"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5efa\u8bae\u6bcf\u4e2a\u8282\u70b9\u76f8\u540c\u6027\u80fd\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u6848",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ceph \u90e8\u7f72\u5728\u96c6\u7fa4\u5916"),Object(o.b)("li",{parentName:"ul"},"Ceph \u4f7f\u7528 ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rook.io/"}),"rook.io")," \u90e8\u7f72"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.ceph.com/docs/mimic/start/kube-helm/"}),"Helm")," \u90e8\u7f72"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.cloudops.com/blog/the-ultimate-rook-and-ceph-survival-guide/"}),"The Ultimate Rook and Ceph Survival Guide"))))))}s.isMDXComponent=!0},717:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);