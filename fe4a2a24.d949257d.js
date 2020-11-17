(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{658:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),l=(r(0),r(667)),c={id:"fleet"},i={unversionedId:"devops/kubernetes/app/fleet",id:"devops/kubernetes/app/fleet",isDocsHomePage:!1,title:"fleet",description:"Rancher Fleet",source:"@site/notes/devops/kubernetes/app/fleet.md",slug:"/devops/kubernetes/app/fleet",permalink:"/notes/devops/kubernetes/app/fleet",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/fleet.md",version:"current"},b=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",children:[]},{value:"fleet.yaml",id:"fleetyaml",children:[]}],o={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"rancher-fleet"},"Rancher Fleet"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/fleet"}),"rancher/fleet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4 GitOps"))),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5 rancher 2.5+ \u4f1a\u9ed8\u8ba4\u5b89\u88c5 fleet"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u8981\u6c42\u538b\u7f29\u540e\u7684 Repo < 1MB",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u975e Helm \u5e94\u7528\uff0c 1 MB \u9650\u5236\u5c31\u6bd4\u8f83\u5c0f\uff0c\u56e0\u4e3a CDR \u5305\u542b\u4e86\u5f88\u591a\u5185\u5bb9\uff0c\u4f8b\u5982 cert-manager 1.6 MB"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://fleet.rancher.io/gitrepo-structure/"}),"https://fleet.rancher.io/gitrepo-structure/"))))))),Object(l.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fleet Manager",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e2d\u63a7 - \u591a\u96c6\u7fa4\u53ea\u9700\u8981\u542f\u4e00\u4e2a"))),Object(l.b)("li",{parentName:"ul"},"Fleet controller",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u662f\u6982\u5ff5\u5c42\uff0c\u5b9e\u9645\u4f7f\u7528 manager \u4e0e controller \u65e0\u533a\u522b"))),Object(l.b)("li",{parentName:"ul"},"\u5355\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Manager \u4e0e\u53d7\u63a7\u96c6\u7fa4\u5728\u4e00\u8d77"))),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Manager \u4f4d\u4e8e\u5176\u4ed6\u96c6\u7fa4\uff0cController \u5728\u53d7\u63a7\u96c6\u7fa4"))),Object(l.b)("li",{parentName:"ul"},"Fleet agent",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53d7\u63a7\u96c6\u7fa4\u7684\u4ee3\u7406\uff0c\u4e0e manager \u4ea4\u4e92"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u7ec4\u7ec4\u4ef6")))),Object(l.b)("h2",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Chart.yaml"),Object(l.b)("li",{parentName:"ul"},"kustomization.yaml"))),Object(l.b)("li",{parentName:"ul"},"\u4efb\u610f\u76ee\u5f55/fleet.yaml"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"*.yaml")," - \u6ca1\u6709 Chart \u548c kustomization \u5219\u4f1a\u90e8\u7f72\u6240\u6709 yaml"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overlays/{name}"))),Object(l.b)("h2",{id:"fleetyaml"},"fleet.yaml"))}p.isMDXComponent=!0},667:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(r),O=n,f=u["".concat(c,".").concat(O)]||u[O]||m[O]||l;return r?a.a.createElement(f,i(i({ref:t},o),{},{components:r})):a.a.createElement(f,i({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);