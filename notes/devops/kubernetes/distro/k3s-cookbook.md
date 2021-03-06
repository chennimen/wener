---
title: K3S Cookbook
hide_title: true
---

# K3S 操作手册

- 内部透传配置项
  - kube-apiserver-arg - [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/)
  - kube-cloud-controller-manager-arg - [kube-cloud-controller-manager](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-cloud-controller-manager/)
  - kube-controller-manager-arg - [kube-controller-manager](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/)
  - kube-proxy-arg - [kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/)
  - kube-scheduler-arg - [kube-scheduler](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/)
  - kubelet-arg - [kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)

:::info

- 推荐使用 Yaml 配置
- 推荐尽量使用默认配置

:::

## 简单启动

```bash
mkdir -p /etc/rancher/k3s
cat <<YAML > /etc/rancher/k3s/config.yaml
# 推荐 docker 启动
docker: true
# 主机名作为节点名字
node-name: $(hostname)

# server 加入的 token
token: $(uuidgen)
# agent 加入的 token
agent-token: $(uuidgen)
YAML

service k3s start
```

## Tinc Host GW

```bash
mkdir -p /etc/rancher/k3s
cat <<YAML > /etc/rancher/k3s/config.yaml
docker: true
# 嵌入 etcd
datastore-endpoint: etcd
# 外部数据库
# datastore-endpoint: postgresql://user:password@postgres:5432/k3s
write-kubeconfig-mode: '0644'

token: $(uuidgen)
agent-token: $(uuidgen)

disable:
- traefik
- servicelb
flannel-backend: host-gw
flannel-iface: kubenet
node-ip: 10.10.1.1
node-name: $(hostname)
# 证书添加额外域名
# tls-san: kube.my.org
YAML

# 可用于前端 DEBUG 启动看日志
# PATH="/usr/libexec/cni/:$PATH" k3s server --cluster-init

service k3s start
```

## registry

```bash
mkdir -p /etc/rancher/k3s
cat <<YAML > /etc/rancher/k3s/registries.yaml
mirrors:
  docker.io:
    endpoint:
      - https://fogjl973.mirror.aliyuncs.com
      - https://8x40wsit.mirror.aliyuncs.com
      - https://docker.mirrors.ustc.edu.cn
      - https://registry-1.docker.io
YAML
```

## 清空 K3S 服务

- 前提是用的 docker
- containerd 得 kill 进程

```bash
# 停止 k3s 避免创建 pod
service k3s stop
# 重启 docker 使得现有 pod 停止
server docker restart
# 清理不必要的内容 - --all 也会清理镜像
docker system prune
```
