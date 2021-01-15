(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var l=n(2),a=n(7),i=(n(0),n(717)),r={id:"cloud",title:"Spring Cloud"},b={unversionedId:"java/spring/cloud",id:"java/spring/cloud",isDocsHomePage:!1,title:"Spring Cloud",description:"Spring Cloud",source:"@site/notes/java/spring/spring-cloud.md",slug:"/java/spring/cloud",permalink:"/notes/java/spring/cloud",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/spring/spring-cloud.md",version:"current",sidebar:"docs",previous:{title:"Spring Security OAuth2",permalink:"/notes/java/spring/security-oauth2"},next:{title:"\u53d1\u5e03\u5386\u53f2",permalink:"/notes/java/spring/releases"}},c=[{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",children:[]},{value:"\u5e94\u7528\u4e0a\u4e0b\u6587",id:"\u5e94\u7528\u4e0a\u4e0b\u6587",children:[]},{value:"Reference",id:"reference",children:[]},{value:"Spring Cloud Netflix Eureka",id:"spring-cloud-netflix-eureka",children:[]},{value:"zuul",id:"zuul",children:[{value:"Spring Cloud Netflix Zuul",id:"spring-cloud-netflix-zuul",children:[]}]},{value:"spring-cloud-config",id:"spring-cloud-config",children:[{value:"spring-cloud-config-client",id:"spring-cloud-config-client",children:[]},{value:"spring-cloud-config-server",id:"spring-cloud-config-server",children:[]}]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spring-cloud"},"Spring Cloud"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"http://projects.spring.io/spring-cloud/"}),"Spring Cloud")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"http://cloud.spring.io/spring-cloud-static/Dalston.RELEASE"}),"Dalston.RELEASE Docs"))),Object(i.b)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f/\u7248\u672c\u5316 \u914d\u7f6e\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u8def\u7531"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u76f4\u63a5\u8c03\u7528"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(i.b)("li",{parentName:"ul"},"Circuit Breakers"),Object(i.b)("li",{parentName:"ul"},"\u5168\u5c40\u9501"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8282\u70b9\u9009\u4e3e\u548c\u96c6\u7fa4\u72b6\u6001\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u6d88\u606f\u4f20\u9012")),Object(i.b)("h2",{id:"\u5e94\u7528\u4e0a\u4e0b\u6587"},"\u5e94\u7528\u4e0a\u4e0b\u6587"),Object(i.b)("p",null,"\u8be5\u6a21\u5757\u4f1a\u5728 SpringApplication \u6216 SpringApplicationBuilder \u4e0a\u6dfb\u52a0\u4e00\u4e2a\u542f\u52a8\u5c42,"),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"String Cloud \u4f1a\u5728\u7a0b\u5e8f\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u542f\u52a8\u5c42,\u4f7f\u7528 boostrap.yml \u6765\u63a7\u5236\u542f\u52a8\u5c42\u7684\u884c\u4e3a"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u7a0b\u5e8f\u76f8\u5173\u7684\u914d\u7f6e,\u5efa\u8bae\u8bbe\u7f6e ",Object(i.b)("inlineCode",{parentName:"li"},"spring.application.name"),"."),Object(i.b)("li",{parentName:"ul"},"\u5728\u542f\u52a8\u65f6\u8bbe\u7f6e ",Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.bootstrap.enabled=false")," \u53ef\u7981\u7528\u8be5\u542f\u52a8\u5c42."),Object(i.b)("li",{parentName:"ul"},"\u542f\u52a8\u5c42\u8d1f\u8d23\u62ff\u5230\u5177\u4f53\u7684\u7a0b\u5e8f\u914d\u7f6e,\u5177\u4f53\u914d\u7f6e\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6e90."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"http://cloud.spring.io/spring-cloud-static/Dalston.RELEASE/#_appendix_compendium_of_configuration_properties"}),"Appendix: Compendium of Configuration Properties"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"bootstrap.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"spring:\n  application:\n    name: foo\n  cloud:\n    config:\n      uri: ${SPRING_CONFIG_URI:http://localhost:8888}\n")),Object(i.b)("h2",{id:"spring-cloud-netflix-eureka"},"Spring Cloud Netflix Eureka"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance"}),"Eureka at a glance")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"http://blog.abhijitsarkar.org/technical/netflix-eureka/"}),"Spring Cloud Netflix Eureka - The Hidden Manual")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.itmuch.com/spring-cloud-sum-eureka/"}),"Spring Cloud\u4e2d\uff0cEureka\u5e38\u89c1\u95ee\u9898\u603b\u7ed3")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/spring-cloud/spring-cloud-netflix/issues/203"}),"Eureka Clustering documentation and best practices#203"))),Object(i.b)("h2",{id:"zuul"},"zuul"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/Netflix/zuul"}),"Netflix/zuul"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZuulServlet"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5165\u53e3"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8d23\u521d\u59cb\u5316 RequestContext",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61"))),Object(i.b)("li",{parentName:"ul"},"\u5c06\u8bf7\u6c42\u4ee3\u7406\u7ed9\u8fc7\u6ee4\u5668\u5904\u7406"),Object(i.b)("li",{parentName:"ul"},"\u5206\u6587\u524d\u4e2d\u540e\u548c\u5f02\u5e38\u6b65\u9aa4"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5f00\u542f buffer-requests, \u5c06\u8bf7\u6c42\u4f53\u7f13\u5b58\u8d77\u6765"),Object(i.b)("li",{parentName:"ul"},"\u54cd\u5e94\u4e5f\u662f\u4f1a\u7f13\u51b2\u8d77\u6765"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RequestContext.getCurrentContext()"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u7ebf\u7a0b\u76f8\u5173"),Object(i.b)("li",{parentName:"ul"},"\u96c6\u6210\u81ea ConcurrentHashMap ,\u7528\u4e8e\u5b58\u50a8\u989d\u5916\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u5305\u542b\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FilterProcessor.getInstance()"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6838\u5fc3\u7684\u8fc7\u6ee4\u5904\u7406"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FilterLoader.getInstance()"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u548c\u7f16\u8bd1\u8fc7\u6ee4\u5668 ",Object(i.b)("inlineCode",{parentName:"li"},"ZuulFilter")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZuulFilter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u5904\u7406\u7684\u8fc7\u6ee4\u5668"),Object(i.b)("li",{parentName:"ul"},"\u57fa\u672c\u5c5e\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"error, post, pre, route"))),Object(i.b)("li",{parentName:"ul"},"\u987a\u5e8f"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZuulFilterResult")," \u6267\u884c\u7ed3\u679c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ExecutionStatus")," \u7ed3\u679c\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SUCCESS(1), SKIPPED(-1), DISABLED(-2), FAILED(-3);"))),Object(i.b)("li",{parentName:"ul"},"\u5f02\u5e38"),Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TracerFactory"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8ddf\u8e2a\u8c03\u7528\u94fe"))),Object(i.b)("li",{parentName:"ul"},"\u6269\u5c55")),Object(i.b)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),Object(i.b)("h5",{id:"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406-websockets"},"\u65e0\u6cd5\u53cd\u5411\u4ee3\u7406 WebSockets"),Object(i.b)("h5",{id:"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406"},"\u65e0\u6cd5\u57fa\u4e8e\u57df\u540d\u53cd\u5411\u4ee3\u7406"),Object(i.b)("h3",{id:"spring-cloud-netflix-zuul"},"Spring Cloud Netflix Zuul"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u96c6\u6210 Zuul"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u53cd\u5411\u4ee3\u7406"),Object(i.b)("li",{parentName:"ul"},"\u7b80\u5316\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5f88\u591a ",Object(i.b)("inlineCode",{parentName:"li"},"ZuulFilter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableZuulProxy"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u53cd\u5411\u4ee3\u7406"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZuulProxyConfiguration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Zuul (Discovery)")," \u7279\u6027"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@EnableZuulServer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u7528\u7684 Zuul \u670d\u52a1"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Zuul (Simple)")," \u7279\u6027"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ServiceRouteMapper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c06 ServiceId \u8f6c\u4e3a\u8def\u7531\u540d"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RouteLocator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6838\u5fc3\u7684\u8def\u7531\u5b9a\u4f4d\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DiscoveryClientRouteLocator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"DiscoveryClient")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ProxyRequestHelper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406\u7684\u8f85\u52a9\u5de5\u5177\u7c7b"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u6784\u5efa\u53cd\u5411\u4ee3\u7406\u7684\u8bf7\u6c42"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FilterConstants"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e3b\u8981\u7528\u5230\u7684\u5e38\u91cf"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZuulFilter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PreDecorationFilter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u524d\u8fc7\u6ee4\u5668"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4ee3\u7406\u76f8\u5173\u7684\u5934"))),Object(i.b)("li",{parentName:"ul"},"\u786e\u5b9a\u4ee3\u7406\u7684\u76ee\u6807"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RibbonRoutingFilter"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 ServiceId \u53cd\u5411\u4ee3\u7406\u7684\u8def\u8fc7\u6700\u7ec8\u4f1a\u7531\u8be5\u8fc7\u6ee4\u5668\u5904\u7406, \u4f1a\u6784\u5efa\u4e00\u4e2a RibbonCommand \u8fdb\u884c\u6267\u884c\u8bf7\u6c42")))))),Object(i.b)("h4",{id:"faq"},"FAQ"),Object(i.b)("h5",{id:"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e"},"\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/spring-cloud/spring-cloud-netflix/issues/706"}),"#706"))),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-java"}),'// \u901a\u8fc7\u5237\u65b0\u6765\u83b7\u53d6\u65b0\u7684\u914d\u7f6e\u4f7f\u5f97\u914d\u7f6e\u751f\u6548\n// \u53ea\u80fd\u4f7f\u5f97\u4fee\u6539\u751f\u6548,\u4e0d\u80fd\u4f7f\u5f97\u65b0\u589e\u548c\u5220\u9664\u751f\u6548\n// \u4fee\u6539\u5982\u679c\u4ece url \u4fee\u6539\u4e3a serviceid \u4e5f\u662f\u4e0d\u4f1a\u751f\u6548\u7684\n@Bean(name="zuul.CONFIGURATION_PROPERTIES")\n@RefreshScope\n@ConfigurationProperties("zuul")\npublic ZuulProperties zuulProperties() {\n   return new ZuulProperties();\n}\n')),Object(i.b)("h2",{id:"spring-cloud-config"},"spring-cloud-config"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5206\u4e3a client \u7aef\u548c server \u7aef"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u4e3a: env, resource"),Object(i.b)("li",{parentName:"ul"},"\u6307\u5b9a\u914d\u7f6e\u9700\u8981: application, profile, label"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"profile: default"),Object(i.b)("li",{parentName:"ul"},"application: ${spring.application.name}"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RefreshEndpoint"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7528\u4e8e\u5237\u65b0\u62c9\u53d6\u914d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RefreshAutoConfiguration"))),Object(i.b)("h3",{id:"spring-cloud-config-client"},"spring-cloud-config-client"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ConfigClientAutoConfiguration")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ConfigClientWatch"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u76d1\u63a7\u5237\u65b0, \u9ed8\u8ba4\u672a\u5f00\u542f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.enabled")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u521d\u59cb\u5ef6\u65f6 ",Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.initialDelay")," \u4e3a 180s"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u95f4\u9694 ",Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.config.watch.delay")," \u4e3a 500ms"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.client.state"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u72b6\u6001\u662f\u5426\u53d1\u751f\u53d8\u5316\u7684\u4f9d\u636e"),Object(i.b)("li",{parentName:"ul"},"\u7531 ",Object(i.b)("inlineCode",{parentName:"li"},"ConfigServicePropertySourceLocator")," \u653e\u5165"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u914d\u7f6e\u5bf9\u8c61: ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigServiceBootstrapConfiguration"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DiscoveryClientConfigServiceBootstrapConfiguration")))),Object(i.b)("h3",{id:"spring-cloud-config-server"},"spring-cloud-config-server"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4f1a\u66b4\u9732\u51fa\u6765\u76f8\u5e94\u7684\u6570\u636e\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u52a0\u5bc6\u7684\u529f\u80fd"),Object(i.b)("li",{parentName:"ul"},"\u540e\u7aef\u914d\u7f6e\u652f\u6301: \u6587\u4ef6\u7cfb\u7edf \u548c Git, SVN \u7b49 VCS ",Object(i.b)("inlineCode",{parentName:"li"},"AbstractScmAccessor")),Object(i.b)("li",{parentName:"ul"},"\u73af\u5883",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EnvironmentRepository#findOne(String application, String profile, String label)")))),Object(i.b)("li",{parentName:"ul"},"\u8d44\u6e90",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResourceRepository#findOne(String name, String profile, String label, String path)")))),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u63a5\u53e3\u524d\u7f00\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.config.server.prefix")," \u914d\u7f6e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6700\u597d\u914d\u7f6e\u4e00\u4e2a\u524d\u7f00, \u5426\u5219\u9759\u6001\u8d44\u6e90\u90fd\u65e0\u6cd5\u8bbf\u95ee"))),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b config-server \u662f\u4e0d\u4f1a\u542f\u52a8 config-client \u7684, \u9700\u8981\u624b\u52a8\u6307\u5b9a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spring.cloud.config.enabled: true"))))))}p.isMDXComponent=!0},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),o=p(n),m=l,j=o["".concat(r,".").concat(m)]||o[m]||O[m]||i;return n?a.a.createElement(j,b(b({ref:t},u),{},{components:n})):a.a.createElement(j,b({ref:t},u))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,r[1]=b;for(var u=2;u<i;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);