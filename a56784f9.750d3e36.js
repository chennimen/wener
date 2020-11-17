(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{430:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(7),c=(n(0),n(667)),i={title:"gitlab-ci.yml"},l={unversionedId:"ops/service/gitlab-ci-yml",id:"ops/service/gitlab-ci-yml",isDocsHomePage:!1,title:"gitlab-ci.yml",description:"gitlab-ci.yml",source:"@site/notes/ops/service/gitlab-ci-yml.md",slug:"/ops/service/gitlab-ci-yml",permalink:"/notes/ops/service/gitlab-ci-yml",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/gitlab-ci-yml.md",version:"current"},b=[{value:"Tips",id:"tips",children:[]},{value:"\u90e8\u7f72 pages",id:"\u90e8\u7f72-pages",children:[]},{value:"\u6709 Tag \u7684\u65f6\u5019\u624d\u6267\u884c",id:"\u6709-tag-\u7684\u65f6\u5019\u624d\u6267\u884c",children:[]}],o={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"gitlab-ciyml"},"gitlab-ci.yml"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Gitlab CI ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ce/ci/yaml/README.html"}),"YAML")),Object(c.b)("li",{parentName:"ul"},"[\u6a21\u677f]"," (",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/tree/master/lib/gitlab/ci/templates"}),"https://gitlab.com/gitlab-org/gitlab/tree/master/lib/gitlab/ci/templates"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/examples/"}),"\u793a\u4f8b")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ce/ci/variables/README.html"}),"\u53d8\u91cf\u8bf4\u660e")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"}),"\u9884\u5b9a\u4e49\u7684\u53d8\u91cf"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# \u81ea\u5b9a\u4e49\u9ed8\u8ba4\u914d\u7f6e\ndefault:\n  # \u57fa\u7840\u955c\u50cf\n  image: wener/node:docker\n  cache:\n    untracked: true\n    # \u7f13\u5b58\u6309\u5206\u652f\u5212\u5206 - \u5982\u679c\u6709 tag \u8fd9\u4e2a\u4f1a\u662f tag \u540d\u5b57\n    key: "$CI_COMMIT_REF_NAME"\n    # \u5e38\u89c1\u7684\u7f13\u5b58\u76ee\u5f55\n    paths:\n      - node_modules/\n      - .yarn/\n      - packages/server/.next/cache/\n')),Object(c.b)("h1",{id:"faq"},"FAQ"),Object(c.b)("h2",{id:"\u90e8\u7f72-pages"},"\u90e8\u7f72 pages"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pages:\n  script:\n    - yarn\n    - yarn build:public\n  artifacts:\n    # \u5fc5\u987b\u662f public \u76ee\u5f55\n    paths:\n      - public\n  only:\n    - master\n")),Object(c.b)("h2",{id:"\u6709-tag-\u7684\u65f6\u5019\u624d\u6267\u884c"},"\u6709 Tag \u7684\u65f6\u5019\u624d\u6267\u884c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u6709 tag \u4e14\u6392\u9664\u5206\u652f - ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/23251"}),"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/23251"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"build-tag:\n  only:\n    # \u6307\u5b9a\u5206\u652f\n    - master\n    # \u5fc5\u987b\u6709 tag\n    - tags\n")),Object(c.b)("p",null,"\u6216\u8005"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'rules :\n    # \u6ca1\u6709 tag \u7684\u65f6\u5019\u624d\u6267\u884c\n    - if: $CI_COMMIT_TAG != ""\n      when: on_success\n    - when: never\n')))}s.isMDXComponent=!0},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(g,l(l({ref:t},o),{},{components:n})):r.a.createElement(g,l({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);