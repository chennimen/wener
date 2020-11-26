(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{679:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(m,c(c({ref:r},i),{},{components:t})):a.a.createElement(m,c({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(7),o=(t(0),t(679)),s={title:"NextJS FAQ"},c={unversionedId:"web/framework/nextjs-faq",id:"web/framework/nextjs-faq",isDocsHomePage:!1,title:"NextJS FAQ",description:"server vs serverless",source:"@site/notes/web/framework/nextjs-faq.md",slug:"/web/framework/nextjs-faq",permalink:"/notes/web/framework/nextjs-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs-faq.md",version:"current"},u=[{value:"server vs serverless",id:"server-vs-serverless",children:[]},{value:"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",children:[]}],i={rightToc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"server-vs-serverless"},"server vs serverless"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"server",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u6574\u4e2a\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 server"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u957f\u94fe\u63a5 - websocket"))),Object(o.b)("li",{parentName:"ul"},"serverless",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u4e00\u4f53\u5316\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},"\u9875\u9762\u72ec\u7acb - \u670d\u52a1\u4e0e\u9875\u9762\u4e0d\u8026\u5408"),Object(o.b)("li",{parentName:"ul"},"\u9875\u9762\u4e0e\u670d\u52a1\u5206\u79bb\u540e\u66f4\u5bb9\u6613\u90e8\u7f72",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f46\u4f9d\u7136\u662f\u9700\u8981 next \u6765\u8fd0\u884c - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zeit/next.js/issues/4496"}),"#4496")))),Object(o.b)("li",{parentName:"ul"},"vercel \u9ed8\u8ba4\u6a21\u5f0f"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nextjs.org/docs/api-reference/next.config.js/build-target"}),"Build Target"))))),Object(o.b)("h2",{id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"},"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add polka cors body-parser\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import polka from 'polka';\nimport cors from 'cors';\nimport { json, text, urlencoded } from 'body-parser';\n\nlet _router;\n\nexport function getRouter() {\n  return _router || (_router = routes(setup(polka())));\n}\n\nfunction setup(route) {\n  // treat path params as query - same as how next api handle this\n  route.use((req, res, next) => {\n    if (req.params) {\n      const q = req.query;\n      for (const [k, v] of Object.entries(req.params)) {\n        if (!q[k]) {\n          q[k] = v;\n        }\n      }\n    }\n    return next();\n  });\n  return route;\n}\n\n\nexport function routes(r: any) {\n  const route = r as Router<NextApiRequest, NextApiResponse>;\n  // handle error\n  route.use(async (req, res, next) => {\n    try {\n      return await next();\n    } catch (e) {\n      const detail = normalizeError(e);\n      res.status(detail.status).json(detail);\n      console.error(`ERROR Handle ${req.url}`, e);\n    }\n  });\n  route.use(json());\n  route.use(urlencoded({ extended: true }));\n  route.use(text());\n\n  const corsOrigin = cors({ origin: true });\n\n  // cors\n  route.get('/api/cors', corsOrigin as any, (req,res)=>res.json({}));\n  // path params\n  route.get('/api/user/:id', corsOrigin as any, (req,res)=>res.json({id:req.query.id}));\n\n  return route;\n}\n\nexport function handleRequest(req, res) {\n  getRouter().handler(req, res);\n}\n\nexport default handleRequest;\nexport const config = {\n  api: {\n    bodyParser: false,\n  },\n};\n")))}l.isMDXComponent=!0}}]);