(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(679)),l={id:"security-oauth2",title:"Spring Security OAuth2"},b={unversionedId:"java/spring/security-oauth2",id:"java/spring/security-oauth2",isDocsHomePage:!1,title:"Spring Security OAuth2",description:"Spring Security OAuth2",source:"@site/notes/java/spring/spring-security-oauth2.md",slug:"/java/spring/security-oauth2",permalink:"/notes/java/spring/security-oauth2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/spring/spring-security-oauth2.md",version:"current",sidebar:"docs",previous:{title:"Spring Security",permalink:"/notes/java/spring/security"},next:{title:"Spring Cloud",permalink:"/notes/java/spring/cloud"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Notes",id:"notes",children:[]}],o={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spring-security-oauth2"},"Spring Security OAuth2"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OAuth2 ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6749"}),"rfc6749")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://jmnarloch.wordpress.com/2015/10/07/spring-cloud-feign-spdyhttp2/"}),"Spring Cloud: Feign SPDY/HTTP2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://jmnarloch.wordpress.com/2015/10/14/spring-cloud-feign-oauth2-authentication/"}),"Spring Cloud: Feign OAuth2 authentication")),Object(i.b)("li",{parentName:"ul"},"Spring ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://projects.spring.io/spring-security-oauth/docs/oauth2.html"}),"OAuth 2 Developers Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.baeldung.com/spring-security-oauth-jwt"}),"spring-security-oauth-jwt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/spring-projects/spring-security-oauth"}),"spring-projects/spring-security-oauth")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.baeldung.com/spring-security-oauth-jwt"}),"Using JWT with Spring Security OAuth"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"AS \u9881\u53d1 JWT"),Object(i.b)("li",{parentName:"ul"},"RS \u63a5\u6536 JWT"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.oauth.com/oauth2-servers/authorization/requiring-user-login"}),"Requiring User Login")),Object(i.b)("li",{parentName:"ul"},"Access Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 12h"),Object(i.b)("li",{parentName:"ul"},"Refresh Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 30d")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl acme:acmesecret@localhost:8080/oauth/token -d grant_type=client_credentials\ncurl acme:acmesecret@localhost:8080/oauth/token -d grant_type=password -d username=user -d password=...\n\nhttp://localhost:8080/oauth/authorize?response_type=code&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\nhttp://localhost:8080/oauth/authorize?response_type=token&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\n")),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OAuth2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableAuthorizationServer")," / AS / \u6388\u6743\u670d\u52a1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerEndpointsConfiguration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerSecurityConfiguration"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientDetailsServiceConfiguration"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientDetailsServiceConfigurer")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerConfigurer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerSecurityConfigurer")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableOAuth2Client")," / Client / \u5ba2\u6237\u7aef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u7b80\u5316\u53d1\u8d77 OAuth2 \u7684\u8bf7\u6c42"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableResourceServer")," / RS / \u8d44\u6e90\u670d\u52a1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResourceServerConfiguration"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResourceServerConfigurer")))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DefaultTokenServices"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u6838\u5fc3\u7684\u51e0\u4e2a\u63a5\u53e3 ",Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerTokenServices"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ResourceServerTokenServices"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ConsumerTokenServices")),Object(i.b)("li",{parentName:"ul"},"Token \u5b58\u50a8\u4ea4\u7531 ",Object(i.b)("inlineCode",{parentName:"li"},"TokenStore")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerEndpointsConfigurer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6838\u5fc3\u914d\u7f6e\u5bf9\u8c61, \u6240\u6709\u7684\u76f8\u5173\u63a5\u53e3\u548c\u914d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationServerConfigurer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OAUth2 Authorization Server \u914d\u7f6e\u63a5\u53e3"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ApprovalStore"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7528\u6237\u6279\u51c6\u7684\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7528\u6237,\u6bcf\u4e2a\u5ba2\u6237\u7aef"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OAuth2RequestFactory"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ba1\u7406 OAuth2 \u8bf7\u6c42"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientDetails"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OAuth2 \u7684\u5ba2\u6237\u7aef\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientDetailsService"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u83b7\u53d6\u5ba2\u6237\u7aef\u4fe1\u606f"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientRegistrationService"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u4fee\u6539\u548c\u5220\u9664\u5ba2\u6237\u7aef\u4fe1\u606f"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OAuth2SecurityExpressionMethods"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f\u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"oauth2")," \u65b9\u6cd5"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OAuth2AccessToken"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TokenEnhancer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9 Token \u5bf9\u8c61\u8fdb\u884c\u589e\u5f3a"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982\u5b9e\u73b0 JWT \u6dfb\u52a0\u81ea\u5b9a\u4e49 Claims"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TokenEnhancerChain")," \u5b9e\u73b0\u4e00\u7ec4\u589e\u5f3a"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TokenStore"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8 OAuth2 Token"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ConsumerTokenServices"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7528\u4e8e\u56de\u6536 Token"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u5e94 OAuth2 \u4e2d\u7684\u4e0d\u540c\u6388\u6743\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationCodeServices"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210\u548c\u5b58\u50a8 authorization_code"))),Object(i.b)("li",{parentName:"ul"},"\u8d26\u53f7\u5bc6\u7801\u7684\u6388\u6743\u4f1a\u4f7f\u7528 Spring Security \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"AuthenticationManager")," \u6765\u5224\u65ad\u662f\u5426\u6388\u6743\u6210\u529f")))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u540c\u7c7b\u578b\u7684 Token"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ImplicitTokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"implicit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RefreshTokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"refresh_token"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AuthorizationCodeTokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"authorization_code"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResourceOwnerPasswordTokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"password"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientCredentialsTokenGranter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"client_credentials")))))),Object(i.b)("p",null,"AuthorizationEndpoint\n/oauth2/authorize"),Object(i.b)("p",null,"AuthorizationEndpoint\n/oauth2/token"),Object(i.b)("p",null,"/oauth/confirm_access\n/oauth/error"))}u.isMDXComponent=!0},679:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,j=p["".concat(l,".").concat(m)]||p[m]||O[m]||i;return n?a.a.createElement(j,b(b({ref:t},o),{},{components:n})):a.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);