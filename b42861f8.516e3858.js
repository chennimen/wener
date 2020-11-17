(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{482:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),c=(a(0),a(667)),l={id:"apache-superset",title:"Apache Superset"},i={unversionedId:"service/bi/apache-superset",id:"service/bi/apache-superset",isDocsHomePage:!1,title:"Apache Superset",description:"Apache Superset",source:"@site/notes/service/bi/superset.md",slug:"/service/bi/apache-superset",permalink:"/notes/service/bi/apache-superset",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/bi/superset.md",version:"current"},b=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"SQL Macro",id:"sql-macro",children:[]},{value:"\u524d\u7aef\u663e\u793a\u7684 UTC \u65e5\u671f",id:"\u524d\u7aef\u663e\u793a\u7684-utc-\u65e5\u671f",children:[]},{value:"Hide menus",id:"hide-menus",children:[]}],s={rightToc:b};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"apache-superset"},"Apache Superset"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u524d\u7aef\u4f1a\u663e\u793a\u4e3a UTC\uff0c\u5bfc\u81f4\u65f6\u95f4 -8",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/incubator-superset/issues/3928"}),"#3928")))),Object(c.b)("li",{parentName:"ul"},"\u5206\u4eab\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"li"},"?standalone=true")," \u53ef\u4ee5\u9690\u85cf\u4e0d\u5fc5\u8981\u7684\u5185\u5bb9"))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@sairamkrish/8217956273c1"}),"\u81ea\u5b9a\u4e49\u6388\u6743\u5b9e\u73b0\u5206\u4eab")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/54219101/apache-superset-dashboard-in-webpage"}),"Apache superset dashboard in webpage")),Object(c.b)("li",{parentName:"ul"},"Helm ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/incubator-superset/tree/master/helm/superset"}),"chart")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/amancevice/docker-superset"}),"amancevice/docker-superset")," - \u5355 docker \u542f\u52a8 superset",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/amancevice/docker-superset/tree/main/examples"}),"\u542f\u52a8\u793a\u4f8b")),Object(c.b)("li",{parentName:"ul"},"\u7ba1\u7406\u5de5\u5177 ",Object(c.b)("inlineCode",{parentName:"li"},"/usr/local/bin/superset")),Object(c.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f4d\u7f6e ",Object(c.b)("inlineCode",{parentName:"li"},"/usr/local/lib/python3.6/site-packages/superset/")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://preset.io/blog/2020-07-02-hello-world/"}),"\u5982\u4f55\u65b0\u589e\u63d2\u4ef6")))),Object(c.b)("li",{parentName:"ul"},"Dashboard \u53ea\u8bfb\u57fa\u7840\u6743\u9650",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"can explore json on Superset"),Object(c.b)("li",{parentName:"ul"},"can dashboard on Superset"),Object(c.b)("li",{parentName:"ul"},"can list on CssTemplateModelView - \u5426\u5219\u4f1a\u51fa\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"datasource access on xxx.xxx"),Object(c.b)("li",{parentName:"ul"},"can csrf token on Superset"),Object(c.b)("li",{parentName:"ul"},"can show on DashboardModelView"))),Object(c.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache-superset/superset-ui/issues/409"}),"apache-superset/superset-ui#409")," - Calendar heatmap dates shifted by one (converting to local time zone)")))),Object(c.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://superset.incubator.apache.org/installation.html#caching"}),"\u7f13\u5b58\u914d\u7f6e"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"PUBLIC_ROLE_LIKE_GAMMA = True\nSESSION_COOKIE_SAMESITE = None\nSESSION_COOKIE_HTTPONLY = False\n#HTTP_HEADERS = {'X-Frame-Options': 'ALLOW-FROM http://localhost:8080'}\n#HTTP_HEADERS = {'Content-Security-Policy': 'frame-ancestors \\'self\\' localhost:8081','Access-Control-Allow-Origin':'*'}\n\n#\nROW_LIMIT = 5000\nSUPERSET_WORKERS = 2\n\nSUPERSET_WEBSERVER_PORT = 8088\n\n# Flask App Builder configuration\n# Your App secret key\nSECRET_KEY = '\\2\\1thisismyscretkey\\1\\2\\e\\y\\y\\h'\n\n# The SQLAlchemy connection string to your database backend\n# This connection defines the path to the database that stores your\n# superset metadata (slices, connections, tables, dashboards, ...).\n# Note that the connection information to connect to the datasources\n# you want to explore are managed directly in the web UI\nSQLALCHEMY_DATABASE_URI = 'sqlite:////var/lib/superset/superset.db'\n\n# Flask-WTF flag for CSRF\nWTF_CSRF_ENABLED = True\n# Add endpoints that need to be exempt from CSRF protection\nWTF_CSRF_EXEMPT_LIST = []\nMAPBOX_API_KEY = ''\n\n#\nMAPBOX_API_KEY = os.getenv('MAPBOX_API_KEY', '')\nCACHE_CONFIG = {\n    'CACHE_TYPE': 'redis',\n    'CACHE_DEFAULT_TIMEOUT': 300,\n    'CACHE_KEY_PREFIX': 'superset_',\n    'CACHE_REDIS_HOST': 'redis',\n    'CACHE_REDIS_PORT': 6379,\n    'CACHE_REDIS_DB': 1,\n    'CACHE_REDIS_URL': 'redis://redis:6379/1'}\nSQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://superset:superset@postgresql:5432/superset'\nSQLALCHEMY_TRACK_MODIFICATIONS = True\nSECRET_KEY = ''\n\n# \u8df3\u8f6c\u5230 https\nENABLE_PROXY_FIX = True\nPREFERRED_URL_SCHEME = 'https'\n")),Object(c.b)("h2",{id:"sql-macro"},"SQL Macro"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://superset.incubator.apache.org/sqllab.html#templating-with-jinja"}),"https://superset.incubator.apache.org/sqllab.html#templating-with-jinja")),Object(c.b)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4 ",Object(c.b)("inlineCode",{parentName:"li"},"superset.jinja_context"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jinja"}),"{% set date_ref =   filter_values('my_date')[0] %}\nAND date >= DATE_ADD({{date_ref}}, INTERVAL -7 DAYS)\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Macro"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Describe"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"current_user_id()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int?"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5f53\u524d\u7528\u6237 ID")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"current_username()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str?"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5f53\u524d\u7528\u6237\u540d")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url_param(param, default=None)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL \u53c2\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"filter_values(column, default=None)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"form_data \u91cc\u7684\u6570\u636e")))),Object(c.b)("h1",{id:"faq"},"FAQ"),Object(c.b)("h2",{id:"\u524d\u7aef\u663e\u793a\u7684-utc-\u65e5\u671f"},"\u524d\u7aef\u663e\u793a\u7684 UTC \u65e5\u671f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/incubator-superset/issues/3928"}),"#3928")," - Timestamps are not displayed in the client's local timezone"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/apache/incubator-superset/issues/9304#issuecomment-609524741"}),"#9304"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Superset decided to always UTC time to keep things simple. It'd be quite some work if we want to add custom timezone support.")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'SUPERSET_D3_LOCALE = """\n{\n  "decimal": ".",\n  "thousands": ",",\n  "grouping": [3],\n  "currency": ["\xa3", ""],\n  "dateTime": "%a %e %b %X %Y",\n  "date": "%d/%m/%Y",\n  "time": "%H:%M:%S",\n  "periods": ["AM", "PM"],\n  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],\n  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],\n  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n} """\n\nSUPERSET_D3_LOCALE = """\n{\n  "decimal": ".",\n  "thousands": ",",\n  "grouping": [3],\n  "currency": ["\xa5", ""],\n  "dateTime": "%a %b %e %X %Y",\n  "date": "%Y-%d-%m",\n  "time": "%H:%M:%S",\n  "periods": ["\u4e0a\u5348", "\u4e0b\u5348"],\n  "days": ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],\n  "shortDays": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],\n  "months": ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],\n  "shortMonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]\n} """\n')),Object(c.b)("h2",{id:"hide-menus"},"Hide menus"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"html:not([mode='edit']) .dashboard-header > .button-container {\n    display: none !important;\n}\nhtml:not([mode='edit']) header.top {\n    display: none;\n}\nhtml:not([mode='edit']) .chart-header>.header>.dropdown {\n    display: none !important;\n}\nhtml:not([mode='edit']) .dragdroppable-tab .anchor-link-container {\n    display: none !important;\n}\n")))}o.isMDXComponent=!0},667:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);