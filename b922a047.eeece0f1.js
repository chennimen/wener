(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{500:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(7),l=(a(0),a(667)),b={id:"iproute2",title:"IPRoute2"},i={unversionedId:"os/linux/network/iproute2",id:"os/linux/network/iproute2",isDocsHomePage:!1,title:"IPRoute2",description:"IPRoute2",source:"@site/notes/os/linux/network/iproute2.md",slug:"/os/linux/network/iproute2",permalink:"/notes/os/linux/network/iproute2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iproute2.md",version:"current"},c=[{value:"Tips",id:"tips",children:[]},{value:"bridge",id:"bridge",children:[]},{value:"veth - Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",id:"veth---virtual-ethernet-device---\u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",children:[{value:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa",id:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa",children:[]}]},{value:"table",id:"table",children:[]},{value:"rule",id:"rule",children:[]},{value:"mark",id:"mark",children:[]},{value:"macvlan",id:"macvlan",children:[]},{value:"FAQ",id:"faq",children:[{value:"Stateless NAT with iproute2",id:"stateless-nat-with-iproute2",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"iproute2"},"IPRoute2"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Iproute2"}),"iproute2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://lartc.org/howto/"}),"Linux Advanced Routing & Traffic Control HOWTO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.policyrouting.org/iproute2.doc.html"}),"IPROUTE2 Utility Suite Howto")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www-online.kek.jp/~yasu/ATLAS/QoS/iproute2-notes.html"}),"iproute2+tc notes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://baturin.org/docs/iproute2/"}),"iproute2 cheatsheet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dmbaturin/iproute2-cheatsheet"}),"https://github.com/dmbaturin/iproute2-cheatsheet")))),Object(l.b)("li",{parentName:"ul"},"IPIP (IPv4 in IPv4), SIT (IPv6 in IPv4), IP6IP6 (IPv6 in IPv6), IPIP6 (IPv4 in IPv6), GRE (virtually anything in anything), and, in very recent versions, VTI (IPv4 in IPsec)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.tldp.org/HOWTO/BRIDGE-STP-HOWTO/index.html"}),"Linux BRIDGE-STP-HOWTO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.tldp.org/HOWTO/BRIDGE-STP-HOWTO/set-up-the-bridge.html"}),"6. Set Up The Bridge")),Object(l.b)("li",{parentName:"ul"},"STP(Spanning Tree Protocol)\u5373\u751f\u6210\u6811\u534f\u8bae\uff0c\u6807\u51c6\u4e3a IEEE802.1D-1998\u3002",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"STP \u662f\u4e00\u79cd\u4e8c\u5c42\u5197\u4f59\u6280\u672f\uff0c\u5229\u7528 STA \u7b97\u6cd5\u6784\u5efa\u4e00\u4e2a\u903b\u8f91\u4e0a\u6ca1\u6709\u73af\u8def\u7684\u6811\u5f62\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u4e00\u5b9a\u7684\u65b9\u6cd5\u5b9e\u73b0\u8def\u5f84\u5197\u4f59\u3002"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.cnblogs.com/hzl6255/p/3259909.html"}),"Linux STP \u4ecb\u7ecd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://unix.stackexchange.com/q/255484/47774"}),"How can I bridge two interfaces with ip/iproute2?")),Object(l.b)("li",{parentName:"ul"},"ip, ss, bridge, rtacct, rtmon, tc, ctstat, lnstat, nstat, routef, routel, rtstat, tipc, arpd, devlink, tc"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://serverfault.com/q/135053/190601"}),"iproute2 rules and iptables NAT\u2026 what is the difference?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://baturin.org/docs/iproute2"}),"Task-centered iproute2 user guide"))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Command"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ss"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Legacy utility"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Obsoleted by"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Note"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ifconfig"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip addr, ip link, ip -s"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address and link configuration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"route"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip route"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Routing tables")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip neigh"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Neighbors")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iptunnel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip tunnel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tunnels")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nameif"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ifrename, ip link set name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rename network interfaces")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ipmaddr"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip maddr"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multicast")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"netstat"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip -s, ss, ip route"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show various networking statistics")))),Object(l.b)("h2",{id:"bridge"},"bridge"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/docker/libnetwork/issues/2310"}),"docker/libnetwork#2310")," - docker \u4e0d\u80fd\u5728\u4e0d\u5f71\u54cd docker0 \u7684\u524d\u63d0\u4e0b\u4f7f\u7528\u73b0\u6709\u7684 bridge \u7f51\u53e3"),Object(l.b)("li",{parentName:"ul"},"docker network ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/network/macvlan"}),"macvlan"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0\u6865\u63a5\nip li add name br0 type bridge\n# \u6dfb\u52a0 if\nip li set dev eth0 master br0\n# \u79fb\u9664 if\nip li set dev eth0 nomaster\n# \u540c\u65f6\u7ed9 br0 \u6dfb\u52a0\u591a\u4e2a\u5730\u5740\u53ef\u5728\u4fdd\u8bc1\u7f51\u7edc\u8bbf\u95ee\u7684\u540c\u4e8b\u8fdb\u884c\u6865\u63a5\n# \u56e0\u4e3a\u6865\u63a5, \u6240\u4ee5 gw \u7684\u4fe1\u606f\u8981\u624b\u52a8\u914d\u7f6e\n# \u9ed8\u8ba4\u7f51\u5173\nip route add 0.0.0.0/0 via 10.0.2.2\n\n# \u5220\u9664\u6700\u4e0a\u5c42\u7684\u9ed8\u8ba4\u7f51\u5173\nip ro del default\n\nip li set dev eth0  mtu 9000\n\nip route flush table main\n\nip route flush 172.17.0.0/16\n\nip route flush cache\n\nip -s route show cache\n\n# greptap\n# ==============================\n# GRE bridging, IPsec and NFQUEUE http://backreference.org/2013/07/23/gre-bridging-ipsec-and-nfqueue/\n# Layer 2 over Layer 3\n#\n# A\nip link add gretap0 type gretap local 172.31.0.1 remote 172.31.0.2\nip link set dev gretap0 up\nip link set dev eth0 up\nbrctl addbr br0\nbrctl addif br0 gretap0\nbrctl addif br0 eth0\nip addr add 10.10.10.1/24 dev br0\nip link set br0 up\n# B\nip link add gretap0 type gretap local 172.31.0.2 remote 172.31.0.1\nip link set dev gretap0 up\nip link set dev eth0 up\nbrctl addbr br0\nbrctl addif br0 gretap0\nbrctl addif br0 eth0\nip addr add 10.10.10.2/24 dev br0\nip link set br0 up\n")),Object(l.b)("h2",{id:"veth---virtual-ethernet-device---\u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907"},"veth - Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://man7.org/linux/man-pages/man4/veth.4.html"}),"veth.4")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://superuser.com/a/765078/242730"}),"https://superuser.com/a/765078/242730"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ip li add veth0 type veth\n")),Object(l.b)("h3",{id:"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa"},"\u76f8\u540c\u7f51\u53e3\u8fdb\u51fa"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"auto eth2\niface eth2 inet static\n  address 192.168.2.101\n  netmask 255.255.252.0\n  mtu 9000\n  pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n  post-up ip ru add from 192.168.2.101 table tgbe\n  post-up ip ro add default via 192.168.2.1 dev eth2 table tgbe\n")),Object(l.b)("h2",{id:"table"},"table"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Table \u6620\u5c04\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/iproute2/rt_tables"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"local",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7279\u6b8a\u8868"),Object(l.b)("li",{parentName:"ul"},"\u5305\u542b\u9ad8\u4f18\u5148\u7684\u672c\u5730\u8def\u7531\u548c\u5e7f\u64ad\u5730\u5740"))),Object(l.b)("li",{parentName:"ul"},"main",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5305\u542b\u6240\u6709\u975e\u7b56\u7565\u8def\u7531"))),Object(l.b)("li",{parentName:"ul"},"default",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7a7a\u7684")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709\u8def\u7531\u8868\u89c4\u5219\nip route show table all\n# \u6709\u6548 table \u5217\u8868\nip route show table all | grep -Po 'table \\K[^\\s]+' | sort -u\n\n# \u6e05\u9664 table\nip route flush table 11\n")),Object(l.b)("h2",{id:"rule"},"rule"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"routing policy database - RPDB - \u8def\u7531\u7b56\u7565\u6570\u636e\u5e93"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/ip-rule.8.html"}),"ip-rule.8")),Object(l.b)("li",{parentName:"ul"},"\u4f20\u7edf\u8def\u7531\u57fa\u4e8e\u76ee\u6807\u5730\u5740\uff0c\u7b56\u7565\u8def\u7531\u53ef\u57fa\u4e8e\u5305\u7684\u5176\u4ed6\u5b57\u6bb5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6765\u6e90\u5730\u5740\u3001IP \u534f\u8bae\u3001\u7aef\u53e3\u3001\u5305\u5185\u5bb9"))),Object(l.b)("li",{parentName:"ul"},"rule=selector+action predicate"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u964d\u5e8f - \u6570\u5b57\u8d8a\u4f4e\u8d8a\u4f18\u5148"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"unicast"),Object(l.b)("li",{parentName:"ul"},"blackhole"),Object(l.b)("li",{parentName:"ul"},"unreachable"),Object(l.b)("li",{parentName:"ul"},"prohibit"),Object(l.b)("li",{parentName:"ul"},"nat")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"# \u9ed8\u8ba4\n# local = 255\n0:      from all lookup local\n# main = 254\n32766:  from all lookup main\n# default = 253\n32767:  from all lookup default\n")),Object(l.b)("h2",{id:"mark"},"mark"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://serverfault.com/questions/733705"}),"iproute rt_table and mark not working on linux")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://superuser.com/questions/950031/routing-subnet-to-specific-routing-table-with-fwmark-direct-to-isp-and-vpn"}),"https://superuser.com/questions/950031/routing-subnet-to-specific-routing-table-with-fwmark-direct-to-isp-and-vpn"))),Object(l.b)("h2",{id:"macvlan"},"macvlan"),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"stateless-nat-with-iproute2"},"Stateless NAT with iproute2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://linux-ip.net/html/nat-stateless.html"}),"Stateless NAT with iproute2"))))}u.isMDXComponent=!0},667:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(a),m=n,d=o["".concat(b,".").concat(m)]||o[m]||O[m]||l;return a?r.a.createElement(d,i(i({ref:t},p),{},{components:a})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);