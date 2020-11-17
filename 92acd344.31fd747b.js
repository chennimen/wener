(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),i=(n(0),n(667)),l={id:"k8s-faq",title:"K8S \u5e38\u89c1\u95ee\u9898"},o={unversionedId:"devops/kubernetes/k8s-faq",id:"devops/kubernetes/k8s-faq",isDocsHomePage:!1,title:"K8S \u5e38\u89c1\u95ee\u9898",description:"K8S \u5e38\u89c1\u95ee\u9898",source:"@site/notes/devops/kubernetes/k8s-faq.md",slug:"/devops/kubernetes/k8s-faq",permalink:"/notes/devops/kubernetes/k8s-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-faq.md",version:"current"},c=[{value:"K3S \u5e38\u89c1\u95ee\u9898",id:"k3s-\u5e38\u89c1\u95ee\u9898",children:[]},{value:"\u96c6\u7fa4\u9650\u5236",id:"\u96c6\u7fa4\u9650\u5236",children:[]},{value:"Unable to connect to the server: x509: certificate is valid for 10.10.1.2, 10.43.0.1, 127.0.0.1, 192.168.1.10, not 123.123.123.123",id:"unable-to-connect-to-the-server-x509-certificate-is-valid-for-101012-104301-127001-192168110-not-123123123123",children:[]},{value:"Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create a sandbox for pod &quot;cron-1594372200-lmkcb&quot;: operation timeout: context deadline exceeded",id:"failed-to-create-pod-sandbox-rpc-error-code--unknown-desc--failed-to-create-a-sandbox-for-pod-cron-1594372200-lmkcb-operation-timeout-context-deadline-exceeded",children:[]},{value:"error: specifying a root certificates file with the insecure flag is not allowed",id:"error-specifying-a-root-certificates-file-with-the-insecure-flag-is-not-allowed",children:[]},{value:"node_lifecycle_controller.go:1433 Initializing eviction metric for zone",id:"node_lifecycle_controllergo1433-initializing-eviction-metric-for-zone",children:[]},{value:"running &quot;VolumeBinding&quot; filter plugin for pod &quot;web-0&quot;: pod has unbound immediate PersistentVolumeClaims",id:"running-volumebinding-filter-plugin-for-pod-web-0-pod-has-unbound-immediate-persistentvolumeclaims",children:[]},{value:"error: unable to retrieve the complete list of server APIs: write: broken pipe",id:"error-unable-to-retrieve-the-complete-list-of-server-apis-write-broken-pipe",children:[]},{value:"dns \u4e0d\u901a",id:"dns-\u4e0d\u901a",children:[]},{value:"MountVolume.SetUp failed for volume &quot;config-volume&quot; : failed to sync secret cache: timed out waiting for the condition",id:"mountvolumesetup-failed-for-volume-config-volume--failed-to-sync-secret-cache-timed-out-waiting-for-the-condition",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"k8s-\u5e38\u89c1\u95ee\u9898"},"K8S \u5e38\u89c1\u95ee\u9898"),Object(i.b)("h2",{id:"k3s-\u5e38\u89c1\u95ee\u9898"},"K3S \u5e38\u89c1\u95ee\u9898"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/issues/396"}),"#396")," - Initializing eviction metric for zone")),Object(i.b)("h2",{id:"\u96c6\u7fa4\u9650\u5236"},"\u96c6\u7fa4\u9650\u5236"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"5000 \u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"150000 \u603b Pod"),Object(i.b)("li",{parentName:"ul"},"300000 \u603b\u5bb9\u5668"),Object(i.b)("li",{parentName:"ul"},"100 \u8282\u70b9 Pod"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"}),"Building large clusters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://cloud.google.com/compute/docs/machine-types"}),"GCE Type")," ")),Object(i.b)("p",null,"\u96c6\u7fa4 Master \u6027\u80fd\u63a8\u8350"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Nodes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"GCE Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Spec"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1 \u6838 4G")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6-10"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2 \u6838 8G")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"11-100"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4 \u6838 16G")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"101-250"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-8"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 \u6838 32G")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"251-500"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-16"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16 \u6838 64G")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"500+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n1-standard-32"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"32 \u6838 128G")))),Object(i.b)("h2",{id:"unable-to-connect-to-the-server-x509-certificate-is-valid-for-101012-104301-127001-192168110-not-123123123123"},"Unable to connect to the server: x509: certificate is valid for 10.10.1.2, 10.43.0.1, 127.0.0.1, 192.168.1.10, not 123.123.123.123"),Object(i.b)("p",null,"\u7b7e\u53d1\u7684\u8bc1\u4e66\u4e0d\u5305\u542b IP\uff0c\u521d\u59cb\u5316\u7684\u65f6\u5019\u53ef\u4ee5\u6dfb\u52a0\uff0c\u5efa\u8bae\u65b0\u5efa\u5b50\u8d26\u53f7\u7ba1\u7406\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u539f\u5148\u7684\u4f4d\u4e8e\n# /etc/kubernetes/pki/apiserver.*\nkubeadm init --apiserver-cert-extra-sans=123.123.123.123\n")),Object(i.b)("h2",{id:"failed-to-create-pod-sandbox-rpc-error-code--unknown-desc--failed-to-create-a-sandbox-for-pod-cron-1594372200-lmkcb-operation-timeout-context-deadline-exceeded"},'Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create a sandbox for pod "cron-1594372200-lmkcb": operation timeout: context deadline exceeded'),Object(i.b)("p",null,"\u6d4b\u8bd5\u662f\u5426\u6b63\u5e38"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alpine-pwd\nspec:\n  template:\n    spec:\n      containers:\n        - name: alpine\n          image: wener/base\n          command: ['pwd']\n      restartPolicy: Never\n  backoffLimit: 4\n")),Object(i.b)("p",null,"\u4e00\u4e2a\u4e3b\u8282\u70b9\u5f02\u5e38\uff0c\u91cd\u542f\u89e3\u51b3\u3002"),Object(i.b)("h2",{id:"error-specifying-a-root-certificates-file-with-the-insecure-flag-is-not-allowed"},"error: specifying a root certificates file with the insecure flag is not allowed"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"insecure-skip-tls-verify")," \u4e0d\u80fd\u7528\u4e8e\u6839\u8bc1\u4e66\uff0c\u65b0\u5efa\u5b50\u8d26\u53f7\u3002"),Object(i.b)("h2",{id:"node_lifecycle_controllergo1433-initializing-eviction-metric-for-zone"},"node_lifecycle_controller.go:1433 Initializing eviction metric for zone"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f53\u6709\u65b0\u7684 zone \u65f6\u4f1a\u521d\u59cb\u5316 metric"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes/kubernetes/blob/d01cc01ab4455d1c0db84d2cc79d963a1b15d292/pkg/controller/nodelifecycle/node_lifecycle_controller.go#L1429"}),"node_lifecycle_controller.go:1433")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"}),"\u591a\u53ef\u7528\u533a\u5b9e\u8df5"))))),Object(i.b)("h2",{id:"running-volumebinding-filter-plugin-for-pod-web-0-pod-has-unbound-immediate-persistentvolumeclaims"},'running "VolumeBinding" filter plugin for pod "web-0": pod has unbound immediate PersistentVolumeClaims'),Object(i.b)("h2",{id:"error-unable-to-retrieve-the-complete-list-of-server-apis-write-broken-pipe"},"error: unable to retrieve the complete list of server APIs: write: broken pipe"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7f51\u7edc\u4e0d\u7a33\u5b9a\u4e5f\u53ef\u80fd\u5bfc\u81f4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u4f7f\u7528 sshuttle \u7684\u65f6\u5019\u5076\u5c14\u5c31\u4f1a\u51fa\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ssh \u8f6c\u53d1 - ",Object(i.b)("inlineCode",{parentName:"li"},"ssh -vNL 6443:10.10.1.1:6443 admin@192.168.1.2 -o ExitOnForwardFailure=yes")))),Object(i.b)("li",{parentName:"ul"},'an error on the server ("") has prevented the request from succeeding')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u6982\u7387\u5931\u8d25\nkubectl api-resources\n\n# \u786e\u4fdd metric \u6b63\u5e38\nkubectl get apiservices\n# \u786e\u4fdd \u7cfb\u7edf\u670d\u52a1 \u6b63\u5e38\nkubectl get pods -n kube-system\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-operator/kube-prometheus/issues/275"}),"https://github.com/prometheus-operator/kube-prometheus/issues/275"))),Object(i.b)("h2",{id:"dns-\u4e0d\u901a"},"dns \u4e0d\u901a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u73b0\u8c61 - \u6240\u6709 \u670d\u52a1 504\uff0c\u7f51\u5173\u8d85\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u6392\u67e5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9a8c\u8bc1 kube-dns 53 \u80fd\u5426\u89e3\u6790"),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u90fd\u6709\u95ee\u9898\u8fd8\u662f\u5355\u4e2a\u8282\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u90fd\u6709\u95ee\u9898\u5219\u53ef\u80fd\u662f\u670d\u52a1\u7684\u95ee\u9898"),Object(i.b)("li",{parentName:"ul"},"\u5355\u4e2a\u8282\u70b9\u5219\u53ef\u80fd\u662f\u73af\u5883\u95ee\u9898"))),Object(i.b)("li",{parentName:"ul"},"ping \u540e\u7aef endpoint"),Object(i.b)("li",{parentName:"ul"},"ping \u4e0d\u901a\u5219\u8bf4\u660e\u53ef\u80fd\u662f flannel \u63d2\u4ef6\u4e4b\u7c7b\u5f02\u5e38\u6216\u8005\u4f7f\u7528\u7684\u5e95\u5c42 interface \u5f02\u5e38"))),Object(i.b)("li",{parentName:"ul"},"\u89e3\u51b3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f k3s"),Object(i.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f \u7f51\u7edc"),Object(i.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f \u7cfb\u7edf")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u9a8c\u8bc1 DNS \u80fd\u5426\u89e3\u6790\n# k3s \u9ed8\u8ba4\u4f7f\u7528 10.43.0.10\n# kube-dns.kube-system.svc\nnslookup wener.me 10.43.0.10 \n# \u6216\ndig @10.43.0.10 wener.me\n")),Object(i.b)("h2",{id:"mountvolumesetup-failed-for-volume-config-volume--failed-to-sync-secret-cache-timed-out-waiting-for-the-condition"},'MountVolume.SetUp failed for volume "config-volume" : failed to sync secret cache: timed out waiting for the condition'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6761\u4ef6\u672a\u6ee1\u8db3\uff0c\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c\uff0c\u4e14\u7b49\u5f85\u8d85\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u89e3\u51b3\u529e\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7b49\u5f85 \u6216 \u5220\u9664 Pod")))),Object(i.b)("p",null,"\u67e5\u770b\u6761\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"status:\n  phase: Pending\n  conditions:\n    - type: Initialized\n      status: 'True'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n    - type: Ready\n      status: 'False'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n      reason: ContainersNotReady\n      message: 'containers with unready status: [alertmanager config-reloader]'\n    # \u8fd9\u4e00\u6b65\u672a\u80fd\u6210\u529f\n    - type: ContainersReady\n      status: 'False'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n      reason: ContainersNotReady\n      message: 'containers with unready status: [alertmanager config-reloader]'\n    - type: PodScheduled\n      status: 'True'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n")))}u.isMDXComponent=!0},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,m=s["".concat(l,".").concat(p)]||s[p]||d[p]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);