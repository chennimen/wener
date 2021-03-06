---
id: alpine-version
title: 版本历史
---

# AlpineLinux 版本历史

- 发布频率
  - 每年两个版本 - 5 月左右一个，11 月左右一个
  - 每年年底的 Linux 版本一般为 LTS - 因此下半年版本一般也会更新内核版本
  - 每个版本的支持周期约为两年 - 也就是共计 4 个活跃支持版本
  - 每次发布前会先编译所有包，当包都有后才会正式发布
  - [发布版本历史日期](https://wiki.alpinelinux.org/wiki/Alpine_Linux:Releases)
- 注意
  - 如果升级了 openssh 需要重启 sshd，否则不会接受新的链接
  - 3.8 移除 hardened, virthardened 内核，使用 vanilla 和 virt 替代
  - 3.11 内核 vanilla 变为 lts

**Commits of wener/wenerme**

| version | commits |
| ------- | ------- |
| 3.13    | 29      |
| 3.12.1  | 2       |
| 3.12    | 16      |
| 3.11    | 11      |
| 3.10    | 1       |
| 3.9     | 3       |
| 3.8     | 6       |

## 3.13

- 2020-01-14
- Linux Kernel [5.10 LTS](https://wener.me/notes/os/linux/linux-version/#510---lts)
- 包变化
  - musl 1.2
    - time_t 在 32 位系统上为 64 位
      - 在 64 位上跑 32 位的容器可能有问题
      - **影响在其他 Disto 上跑 Alpine 容器的问题**
      - Docker 版本需要大于 19.03.9 - 否则会有兼容问题
      - libseccomp >= 2.4.2
        - 执行 `scmp_sys_resolver -a x86 clock_gettime64` 返回 403 就是支持的
    - 1.2.1 使用了新的 [malloc](https://github.com/richfelker/mallocng-draft), 也能配合 jemalloc 使用
  - iproute2-minial/tc/ss
    - 单独 ip/tc/ss 命令包，从之前的 iproute2 独立出来 - 但安装 iproute2 会直接安装这些附属包
    - alpine-base 会包含， busybox 的 ip 功能比较受限
    - [commit](https://gitlab.alpinelinux.org/alpine/aports/commit/62c858b85bb379fb014cfe188f4cb25ed75f76e3)
  - ifupdown -> [ifupdown-ng](https://github.com/ifupdown-ng/ifupdown-ng/)
    - 默认包含了 vlan，不再需要额外安装
    - 兼容 /etc/network/if-X.d 脚本但倾向于 `/usr/libexec/ifupdown-ng`
    - 配置 /etc/network/ifupdown-ng.conf
      - use_hostname_for_dhcp 默认 开启 - `hostname $(hostname)`
    - 支持依赖关系 - `requires eth0`
    - 手动指定 executor - `use bond`
    - 上游支持 hotplug 但目前 3.13 不会支持 - ifmond
    - 后续可能会支持 ifreload
    - 之后版本可能会移除 busybox 中的 ifupdown
  - gcc 10
    - 默认开启了 `-fno-common` - 某些包编译可能异常
  - busybox 组件变化
    - ❌ 移除 hdparm - 使用 hdparm
    - ❌ 移除 fdformat,readprofile - 使用 util-linux
    - ❌ 移除 lspci - 使用 pciutils
    - ❌ 移除 sendmail - 使用 ssmtp, opensmtpd, dma, exim, nullmailer, postfix
    - ❌ 移除 conspy, smemcap, dumpleases
  - 内核
    - lts 添加了 RBD 模块 - 之前只有 virt 有 - ceph 需要
- 语言
  - 新增 php8 -
- 🆕 新增包
  - k3s
  - cloud-init
  - cni-plugins
  - php8 - php 默认依然为 php7
- 🆙 升级包
  - nodejs 14
  - go 1.15
    - 1.16 支持 embded - 但是 2021-2 发布
  - qemu 5.2
  - zfs 2.0.1 - 之前是 0.8
    - zfs 调整了开发模式 - ZoL -> OpenZFS
    - Linux 和 BSD 使用相同的核心代码 - 自 2018 年开始进行调整 - 增加了很多特性
    - 新特性
      - Sequential resilver - 快速构建镜像 vdev
        - `zpool replace|attach -s`
      - Persistent L2ARC - 重启后 L2ARC 缓存依然有效
      - ZStandard 压缩 - 比 gzip 和 lzm 更好
      - zfs send/receive - 支持部分数据
        - `zfs redact`, `zfs send --redact`, `zfs send --saved`
- 参考
  - [Release Notes for Alpine 3.13.0](https://wiki.alpinelinux.org/wiki/Release_Notes_for_Alpine_3.13.0)

## 3.12

- [3.12](https://alpinelinux.org/posts/Alpine-3.12.0-released.html)
- 新增架构 mips64 be
- D 语言
- 内核 5.4.43
- QEMU 5.0
- 移除了 python 包 - 按需安装 python2 或 python3

## 3.11

- v[3.11](https://alpinelinux.org/posts/Alpine-3.11.0-released.html)
- 5.4.5 内核
- RPi 4 支持
- 新增 GNOME 和 KDE 桌面
- 支持 Vulkan
- MinGW-w64 和 DXVK 支持
- 升级注意
  - 内核名字修改为 linux-lts 以前为 linux-vanilla
  - 废弃并移除了大量 py2 的包

```bash
# 修改为 3.11 包
sed -i -r 's/v[.0-9]+/v3.11/' /etc/apk/repositories
# 升级
apk update
apk upgrade
# 确认升级完成
apk version

# 切换内核 - 只有使用 linux-vanilla 才需要 - linux-virt 不需要
apk add linux-lts
# 修改默认启动项为 lts
# 在安装两个后默认会修改为 menu.c32
sed -i -r 's/DEFAULT .*?/DEFAULT lts/' /boot/extlinux.conf
# 重启使用新的内核
reboot

# 重启后确认为 -tls 内核版本
uname -r
# 移除旧版内核
apk del linux-vanilla
```

## 3.10

- v[3.10](https://alpinelinux.org/posts/Alpine-3.10.0-released.html)
- 4.19 内核
- 新增 ceph
- 新增 lightdm
- arm 支持串口和 ethernet
- 移除 mongodb

## 3.9

- v[3.9](https://alpinelinux.org/posts/Alpine-3.9.0-released.html)
- 4.19 内核
- 支持 armv7
- 使用 OpenSSL 而不是 LibreSSL

```bash
# 升级仓库之前可先升级本地包
apk update
apk upgrade

# 更新为 3.9 仓库
sed -ire 's/v\d\.\d/v3.9/g' /etc/apk/repositories
apk update
apk upgrade
sync
```

## 3.8

- v[3.8](https://alpinelinux.org/posts/Alpine-3.8.0-released.html) 2018-06-27
- 4.14 内核
- 所有架构支持网络启动 - netboot
- 新增 arm64 的 rpi 镜像
- 支持 rpi3b+
- 移除 linux-hardened 内核 - 非官方 Grsecurity
- 拆分了 linux-firmware 子包, 可单独安装
- 注意
  - 3.8 移除了 hardened 相关的 kernel, 之前版本安装的都需要做调整
  - 3.7 没有 linut-virt 只有 linut-virthardened 需要先更新仓库

```bash
# 更新为 3.8 仓库
sed -ire 's/v\d\.\d/v3.8/g' /etc/apk/repositories
# 更新仓库索引
apk update


# 3.8 内核切换
# ============
# 3.8 移除了 hardened 内核, 升级前先切换到非 hardened 内核版本
# 查看当前内核
apk info -vv | grep hardened
# 如果为 linux-virthardened 则安装 linux-virt
# 如果为 linux-hardened 则安装 linux-vanilla
# 如果不是 hardened 内核, 跳过
apk add linux-vanilla
# 如果有其他内核模块是 hardened 也需要安装对应的 vanilla 版本, zfs, drbd, spl, dahdi, 例如
# apk add zfs-vanilla spl-vanilla
# 移除 hardened 的启动菜单, 确保下次启动进入选择正确的内核
nano /boot/extlinux.conf
reboot
# 重启后移除旧的内核
apk del linux-hardened
# 如果有依赖需要一并移除, 例如
# apk del linux-hardened spl-hardened zfs-hardened

# 更新所有的包
apk upgrade
sync
reboot
```

## 3.7

- [3.7.0](https://alpinelinux.org/posts/Alpine-3.7.0-released.html)
- 查看当前内核版本 https://pkgs.alpinelinux.org/packages?name=linux*&branch=v3.7&repo=main&arch=x86_64
- 3.7 添加了 busybox-extras, 部分原先 busybox 中的工具被移到了该包
- Support for EFI;
- Support in the installer for the GRUB bootloader
- Linux 4.9.65
- GCC 6.4
- LLVM 5.0
- Go 1.9
- Node.js 8.9 (LTS)
- Perl 5.26
- PostgreSQL 10
- Rust 1.22

```bash
sed -ire 's/v\d\.\d/v3.7/g' /etc/apk/repositories
apk update
# 在进行升级之前先更新 apk 工具
apk add --upgrade apk-tools
# 更新所有的包, --available 会强制更新包, 即便版本是一样的
apk upgrade --available

# 查看是否还有未升级的
apk version
# 内核可能由于依赖原因不会升级
apk info -r linux-hardened
# 将依赖的包进行统一升级即可
apk add --upgrade linux-hardened spl-hardened zfs-hardened

# 如果更新了内核, 则需要重启
sync
reboot
```
