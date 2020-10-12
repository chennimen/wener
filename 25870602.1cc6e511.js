(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(7),l=(t(0),t(557)),c={id:"kuma",title:"Kuma"},i={unversionedId:"devops/service/kuma",id:"devops/service/kuma",isDocsHomePage:!1,title:"Kuma",description:"Kuma",source:"@site/contents/notes/devops/service/kuma.md",slug:"/devops/service/kuma",permalink:"/notes/devops/service/kuma",version:"current",sidebar:"docs",previous:{title:"Linkerd",permalink:"/notes/devops/service/linkerd"},next:{title:"Consul",permalink:"/notes/devops/service/consul"}},o=[{value:"Tips",id:"tips",children:[]},{value:"kuma k8s",id:"kuma-k8s",children:[{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[]}]},{value:"docker",id:"docker",children:[]},{value:"kumactl",id:"kumactl",children:[]},{value:"\u8bc1\u4e66\u914d\u7f6e",id:"\u8bc1\u4e66\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[]}],m={rightToc:o};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kuma"},"Kuma"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Built by Envoy contributors at Kong"),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"UI \u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u975e K8S \u73af\u5883",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DP CP \u72ec\u7acb"),Object(l.b)("li",{parentName:"ul"},"Docker"),Object(l.b)("li",{parentName:"ul"},"Linux"),Object(l.b)("li",{parentName:"ul"},"CP \u8fd0\u884c\u4e3a Universal \u6a21\u5f0f - \u914d\u7f6e\u5b58\u50a8\u5230 PostgreSQL"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 K8S CRDs \u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a Zone - \u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 http\u3001http2\u3001grpc\u3001tcp"),Object(l.b)("li",{parentName:"ul"},"Mesh",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a Mesh"),Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c1\u5212\u5206 - \u4e1a\u52a1\u4ea7\u7ebf\u3001\u56e2\u961f\u3001\u5e94\u7528\u3001\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u7f51\u7edc\u3001\u7b56\u7565\u9694\u79bb"))),Object(l.b)("li",{parentName:"ul"},"mtls",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u542f\u7528\u540e\u9700\u8981\u914d\u7f6e\u6743\u9650"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 \u5185\u5efa\u3001\u624b\u52a8\u3001vault CA"))),Object(l.b)("li",{parentName:"ul"},"traffic permission",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f9d\u8d56 mtls \u5b9e\u73b0"))),Object(l.b)("li",{parentName:"ul"},"traffic routing",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"L4"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8f6e\u8bad"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u6743\u91cd"))),Object(l.b)("li",{parentName:"ul"},"health check",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e3b\u52a8 - dp \u53d1\u8d77\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u88ab\u52a8 - cp \u5206\u6790\u8bf7\u6c42"))),Object(l.b)("li",{parentName:"ul"},"traffic log",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5199\u5165\u5230 TCP - logstash"),Object(l.b)("li",{parentName:"ul"},"\u5199\u5165\u5230 \u6587\u4ef6"))),Object(l.b)("li",{parentName:"ul"},"traffic trace",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"zipkin \u534f\u8bae"))),Object(l.b)("li",{parentName:"ul"},"traffic metrics",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prometheus /metrics"))),Object(l.b)("li",{parentName:"ul"},"Fault Injection",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"))),Object(l.b)("li",{parentName:"ul"},"Circuit Breaker"),Object(l.b)("li",{parentName:"ul"},"Proxy Template",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e envoy"))))),Object(l.b)("li",{parentName:"ul"},"Data Plane ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Envoy"),Object(l.b)("li",{parentName:"ul"},"L4/L7"),Object(l.b)("li",{parentName:"ul"},"Service Dataplane"),Object(l.b)("li",{parentName:"ul"},"Gateway Dataplane"))),Object(l.b)("li",{parentName:"ul"},"Control Plane - Kuma",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Admin API - 5679"),Object(l.b)("li",{parentName:"ul"},"\u540e\u7aef",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",Object(l.b)("inlineCode",{parentName:"li"},"KUMA_STORE_TYPE=memory")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 kubernetes\u3001postgres"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c ",Object(l.b)("inlineCode",{parentName:"li"},"kuma-cp migrate up")," \u521b\u5efa pg \u6570\u636e\u5e93"))),Object(l.b)("li",{parentName:"ul"},"Kuma DNS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":5653")),Object(l.b)("li",{parentName:"ul"},"IP \u8303\u56f4 240.0.0.0/4"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 tld mesh"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"curl http://echo-server_echo-example_svc_1010.mesh")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kuma.io/docs/latest/documentation/deployments/#standalone-mode"}),"\u90e8\u7f72\u6a21\u5f0f"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"standalone - \u9ed8\u8ba4\u6a21\u5f0f\uff0c\u5e73\u53f0\u7f51\u7edc"),Object(l.b)("li",{parentName:"ul"},"multi-zone - \u652f\u6301 k8s \u591a\u96c6\u7fa4\u548c\u57fa\u4e8e vm \u7684\u6a21\u5f0f"))))),Object(l.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"KUMA_DATAPLANE_ADMIN_PORT"),Object(l.b)("li",{parentName:"ul"},"KUMA_CONTROL_PLANE_API_SERVER_URL=http://kuma-control-plane:5681"),Object(l.b)("li",{parentName:"ul"},"KUMA_DATAPLANE_ADMIN_PORT"),Object(l.b)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_LOCAL_PORT=5679"),Object(l.b)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_PORT"),Object(l.b)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_INTERFACE"),Object(l.b)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kuma.io/docs/latest/documentation/security"}),"security")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=Bu0-y9h8V5w"}),"Webinar: Kuma: Service Mesh and the Future of Application Connectivity"))))),Object(l.b)("h2",{id:"kuma-k8s"},"kuma k8s"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install kumactl\n\nver=0.7.1\n# \u4f7f\u7528\u79c1\u6709\u4ed3\u5e93\n# registry-vpc.cn-hongkong.aliyuncs.com/cmi\ncat <<IMAGES | xargs -n1 -I {} sh -c 'docker pull kong-docker-kuma-docker.bintray.io/{}; docker tag kong-docker-kuma-docker.bintray.io/{} registry-vpc.cn-hongkong.aliyuncs.com/cmi/{}; docker push registry-vpc.cn-hongkong.aliyuncs.com/cmi/{}'\nkuma-cp:0.7.1\nkuma-dp:0.7.1\nkumactl:0.7.1\nkuma-prometheus-sd:0.7.1\nkuma-init:0.7.1\nIMAGES\n\n# docker \u955c\u50cf\n# kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1\n# kong-docker-kuma-docker.bintray.io/kumactl:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-prometheus-sd:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-init:0.7.1\n\n# \u9ed8\u8ba4\u5b89\u88c5\u5230 kuma-system\n# --control-plane-version 0.7.1\n# --control-plane-image kong-docker-kuma-docker.bintray.io/kuma-cp\n# --dataplane-image kong-docker-kuma-docker.bintray.io/kuma-dp\n# --dataplane-init-image kong-docker-kuma-docker.bintray.io/kuma-init\nkumactl install control-plane \\\n  --control-plane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-cp \\\n  --dataplane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-dp \\\n  --dataplane-init-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-init \\\n  --control-plane-version 0.7.1 | kubectl apply -f -\n\nkubectl port-forward svc/kuma-control-plane -n kuma-system 5681:5681\n\necho \"\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-demo\n  labels:\n    app: nginx-demo\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-demo\n  template:\n    metadata:\n      name: nginx-demo\n      labels:\n        app: nginx-demo\n      annotations:\n        kuma.io/direct-access-services: '*'\n        kuma.io/mesh: default\n        kuma.io/sidecar-injected: 'true'\n        kuma.io/transparent-proxying: enabled\n        kuma.io/transparent-proxying-inbound-port: '15006'\n        kuma.io/transparent-proxying-outbound-port: '15001'\n    spec:\n      containers:\n      - name: nginx-demo\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\" | kubectl apply -f -\n\necho \"\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-demo\n  namespace: default\n  annotations:\n    80.service.kuma.io/protocol: http\n    ingress.kubernetes.io/service-upstream: 'true'\nspec:\n  selector:\n    app: nginx\n  ports:\n  - name: http\n    port: 80\n    targetPort: 80\" | kubectl apply -f -\n\n# \u7a7a\u95f4\u6dfb\u52a0\u6ce8\u5165\necho \"apiVersion: v1\nkind: Namespace\nmetadata: \n  name: default\n  namespace: default\n  labels: \n    kuma.io/sidecar-injection: enabled\n    kuma.io/mesh: default\" | kubectl apply -f - && kubectl delete pod --all -n default\n\n# default mesh \u542f\u7528 mtls\necho \"apiVersion: kuma.io/v1alpha1\nkind: Mesh\nmetadata:\n  name: default\nspec:\n  mtls:\n    enabledBackend: ca-1\n    backends:\n    - name: ca-1\n      type: builtin\" | kubectl apply -f -\n\n# metrics\nkumactl install metrics \\\n  --kuma-prometheus-sd-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-prometheus-sd \\\n  --kuma-prometheus-sd-version 0.7.1 | kubectl apply -f -\n\necho \"apiVersion: kuma.io/v1alpha1\nkind: Mesh\nmetadata:\n  name: default\nspec:\n  mtls:\n    enabledBackend: ca-1\n    backends:\n    - name: ca-1\n      type: builtin\n  metrics:\n    enabledBackend: prometheus-1\n    backends:\n    - name: prometheus-1\n      type: prometheus\" | kubectl apply -f -\n\nkubectl port-forward svc/grafana -n kuma-metrics 3000:80\n")),Object(l.b)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kumactl install metrics \\\n  --kuma-prometheus-sd-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-prometheus-sd \\\n  --kuma-prometheus-sd-version 0.7.1 | kubectl delete -f -\n\nkumactl install control-plane \\\n  --control-plane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-cp \\\n  --dataplane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-dp \\\n  --dataplane-init-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-init \\\n  --control-plane-version 0.7.1 | kubectl delete -f -\n")),Object(l.b)("h2",{id:"docker"},"docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5355 docker \u90e8\u7f72"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e vm \u90e8\u7f72"),Object(l.b)("li",{parentName:"ul"},"multi-zone \u6a21\u5f0f")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u6784\u5efa\u73af\u5883\n# ==========\ndocker run -u $(id -u) --rm -it -v $PWD:/host kong-docker-kuma-docker.bintray.io/kumactl:0.7.1 cp /usr/bin/kumactl /host\ndocker run -u $(id -u) --rm -it -v $PWD:/host --entrypoint sh kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1 -c 'cp /usr/bin/kuma-cp /host'\n\ncat <<EOF > Dockerfile\nFROM kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1\n\nCOPY kumactl /usr/bin/\nCOPY kuma-cp /usr/bin/\n\nENTRYPOINT [ \"/bin/sh\" ]\nEOF\n\ndocker build -t kuma .\n\n# http://localhost:5681/gui/\ndocker run --rm -it \\\n  -p 5681:5681 \\\n  -p 8080:8080 \\\n  -w /tmp/kuma \\\n  -u 0 \\\n  --name kuma kuma\n\n# \u542f\u52a8 kuma\nkuma-cp run &\n\nkumactl get meshes\n\n# enable mtls\necho \"type: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin\" | kumactl apply -f -\n\n# \u5141\u8bb8\u6240\u6709\u8bbf\u95ee\ncat <<EOF | kumactl apply -f -\ntype: TrafficPermission\nname: permission-all\nmesh: default\nsources:\n  - match:\n      kuma.io/service: '*'\ndestinations:\n  - match:\n      kuma.io/service: '*'\nEOF\n\n# create dp\necho \"type: Dataplane\nmesh: default\nname: web-dp\nnetworking:\n  address: 127.0.0.1\n  inbound:\n    - port: 80\n      servicePort: 8080\n      tags:\n        kuma.io/service: web\n        kuma.io/protocol: http\" | kumactl apply -f -\n# generate dp token\nkumactl generate dataplane-token --dataplane=web-dp > kuma-token-web-dp\n\n# start dp\nkuma-dp run --name web-dp --mesh=default --dataplane-token-file=kuma-token-web-dp\n")),Object(l.b)("h2",{id:"kumactl"},"kumactl"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#\ncat <<EOF | kumactl apply -f -\ntype: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin\nmetrics:\n  enabledBackend: prometheus-1\n  backends:\n  - name: prometheus-1\n    type: prometheus\nEOF\n")),Object(l.b)("h2",{id:"\u8bc1\u4e66\u914d\u7f6e"},"\u8bc1\u4e66\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'alias kumactl="docker run --rm -i -v $PWD:/host -u 1000 -w /host -v $HOME/.kumactl:/.kumactl --net=host kong-docker-kuma-docker.bintray.io/kumactl:0.7.1 kumactl"\n\n# KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR\nkumactl generate tls-certificate \\\n  --cert-file=server-cert \\\n  --key-file=server-key \\\n  --type=server --cp-hostname=localhost\n\n# https://kuma.io/docs/0.7.1/documentation/security/#universal\n# https://kuma.io/docs/0.7.1/installation/docker/\n# localhost:5681/gui\n# KUMA_GENERAL_ADVERTISED_HOSTNAME\ndocker run --rm -it \\\n  -p 5681:5681 \\\n  -p 15679:15679 \\\n  -v $PWD:/host \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_ENABLED=true \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_TLS_CERT_FILE=/host/server-cert \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_TLS_KEY_FILE=/host/server-key \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_INTERFACE=0.0.0.0 \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_PORT=15679 \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR=/host/certs \\\n  --name kuma-cp kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1 run\n\nkumactl get meshes\n# enable mtls\necho "type: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin" | kumactl apply -f -\n\n# \u521b\u5efa dp\necho "type: Dataplane\nmesh: default\nname: web-dp\nnetworking:\n  address: 192.168.1.1\n  inbound:\n    - port: 80\n      servicePort: 8080\n      tags:\n        kuma.io/service: web\n        kuma.io/protocol: http" | kumactl apply -f -\n\n\nkumactl generate tls-certificate --cert-file=client-cert --key-file=client-key --type=client\nkumactl config control-planes add \\\n  --name test --address http://172.17.0.1:5681 \\\n  --admin-client-cert server-cert \\\n  --admin-client-key server-key --overwrite\n\nkumactl generate dataplane-token --dataplane=web-dp > kuma-token-web-dp\n\nmkdir -p ~/.kumactl\ncat <<YAML > ~/.kumactl/config\ncontexts:\n- controlPlane: local\n  name: local\ncontrolPlanes:\n- coordinates:\n    apiServer:\n      url: http://172.17.0.1:5681\n  name: local\ncurrentContext: local\nYAML\n\n# \u542f\u52a8 dp\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  --name kuma-dp kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1 \\\n  run --cp-address http://172.17.0.1:5681 --name web-dp --dataplane-token-file=\n')),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u9ed8\u8ba4 cp \u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "adminServer": {\n    "apis": { "dataplaneToken": { "enabled": true } },\n    "local": { "port": 5679 },\n    "public": {\n      "clientCertsDir": "",\n      "enabled": false,\n      "interface": "",\n      "port": 0,\n      "tlsCertFile": "",\n      "tlsKeyFile": ""\n    }\n  },\n  "apiServer": {\n    "catalog": {\n      "bootstrap": { "url": "http://localhost:5682" },\n      "monitoringAssignment": { "url": "grpc://localhost:5676" },\n      "sds": { "url": "" }\n    },\n    "corsAllowedDomains": [".*"],\n    "port": 5681,\n    "readOnly": false\n  },\n  "bootstrapServer": {\n    "params": {\n      "adminAccessLogPath": "/dev/null",\n      "adminAddress": "127.0.0.1",\n      "adminPort": 0,\n      "xdsConnectTimeout": "1s",\n      "xdsHost": "localhost",\n      "xdsPort": 5678\n    },\n    "port": 5682\n  },\n  "dataplaneTokenServer": {\n    "enabled": true,\n    "local": { "port": 5679 },\n    "public": {\n      "clientCertsDir": "",\n      "enabled": false,\n      "interface": "",\n      "port": 0,\n      "tlsCertFile": "",\n      "tlsKeyFile": ""\n    }\n  },\n  "defaults": { "skipMeshCreation": false },\n  "dnsServer": { "CIDR": "240.0.0.0/4", "domain": "mesh", "port": 5653 },\n  "environment": "universal",\n  "general": { "advertisedHostname": "localhost" },\n  "guiServer": { "apiServerUrl": "" },\n  "metrics": { "dataplane": { "enabled": true, "subscriptionLimit": 10 } },\n  "mode": "standalone",\n  "monitoringAssignmentServer": {\n    "assignmentRefreshInterval": "1s",\n    "grpcPort": 5676\n  },\n  "multicluster": {\n    "global": {\n      "kds": {\n        "grpcPort": 5685,\n        "refreshInterval": "1s",\n        "tlsCertFile": "/tmp/676369516.crt",\n        "tlsKeyFile": "/tmp/334691547.key"\n      },\n      "pollTimeout": "500ms"\n    },\n    "remote": { "kds": { "refreshInterval": "1s", "rootCaFile": "" } }\n  },\n  "reports": { "enabled": true },\n  "runtime": {\n    "kubernetes": {\n      "admissionServer": { "address": "", "certDir": "", "port": 5443 },\n      "injector": {\n        "cniEnabled": false,\n        "initContainer": { "image": "kuma/kuma-init:latest" },\n        "sidecarContainer": {\n          "adminPort": 9901,\n          "drainTime": "30s",\n          "gid": 5678,\n          "image": "kuma/kuma-dp:latest",\n          "livenessProbe": {\n            "failureThreshold": 12,\n            "initialDelaySeconds": 60,\n            "periodSeconds": 5,\n            "timeoutSeconds": 3\n          },\n          "readinessProbe": {\n            "failureThreshold": 12,\n            "initialDelaySeconds": 1,\n            "periodSeconds": 5,\n            "successThreshold": 1,\n            "timeoutSeconds": 3\n          },\n          "redirectPortInbound": 15006,\n          "redirectPortOutbound": 15001,\n          "resources": {\n            "limits": { "cpu": "1000m", "memory": "512Mi" },\n            "requests": { "cpu": "50m", "memory": "64Mi" }\n          },\n          "uid": 5678\n        }\n      }\n    }\n  },\n  "sdsServer": {\n    "dataplaneConfigurationRefreshInterval": "1s",\n    "grpcPort": 5677,\n    "tlsCertFile": "/tmp/792743550.crt",\n    "tlsKeyFile": "/tmp/964085189.key"\n  },\n  "store": {\n    "cache": { "enabled": true, "expirationTime": "1s" },\n    "kubernetes": { "systemNamespace": "kuma-system" },\n    "postgres": {\n      "connectionTimeout": 5,\n      "dbName": "kuma",\n      "host": "127.0.0.1",\n      "maxOpenConnections": 0,\n      "password": "*****",\n      "port": 15432,\n      "tls": { "caPath": "", "certPath": "", "keyPath": "", "mode": "disable" },\n      "user": "kuma"\n    },\n    "type": "memory"\n  },\n  "xdsServer": {\n    "dataplaneConfigurationRefreshInterval": "1s",\n    "dataplaneStatusFlushInterval": "1s",\n    "diagnosticsPort": 5680,\n    "grpcPort": 5678,\n    "tlsCertFile": "",\n    "tlsKeyFile": ""\n  }\n}\n')),Object(l.b)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kuma.io/docs/latest/documentation/networking"}),"https://kuma.io/docs/latest/documentation/networking"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Standalone Control Plane")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"port"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"protocol"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5676"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Monitoring Assignment server that responds to discovery requests from monitoring tools, such as Prometheus, that are looking for a list of targets to scrape metrics from, e.g. a list of all dataplanes in the mesh."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5677"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SDS server being used for propagating mTLS certificates across the data-planes."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5678"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xDS gRPC server implementation that the data-planes will use to retrieve their configuration."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5679"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Admin Server that serves Dataplane Tokens and manages Provided Certificate Authority"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5680"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTTP server that returns the health status of the control-plane."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5681"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTTP API server that is being used by kumactl, and that you can also use to retrieve Kuma's policies and - when running in universal - that you can use to apply new policies. It also exposes the Kuma GUI at /gui"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5682"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTTP server that provides the Envoy bootstrap configuration when the data-plane starts up."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5685"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kuma Discovery Service port, leveraged in Distributed control plane mode"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5653/udp"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kuma DNS server"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))}u.isMDXComponent=!0},557:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),u=function(e){var n=r.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),b=u(t),s=a,d=b["".concat(c,".").concat(s)]||b[s]||p[s]||l;return t?r.a.createElement(d,i(i({ref:n},m),{},{components:t})):r.a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=s;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<l;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);