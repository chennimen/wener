# QEMU

## Tips
* [qemu.org](https://www.qemu.org/)
* [QEMU:wiki](https://en.wikipedia.org/wiki/QEMU)
* VirtualBox , Xen 和 KVM 基于 QEMU
* 安卓虚拟机基于 QEMU ARM 虚拟
* QEMU-SystemC 使用 QEMU 来模拟使用 SystemC 开发的硬件
* Symmetric multiprocessing (SMP
* 网络
  * [Setup NAT Network for QEMU in Mac OSX](https://blog.san-ss.com.ar/2016/04/setup-nat-network-for-qemu-macosx)
* https://en.wikipedia.org/wiki/Network_block_device
* https://www.gitbook.com/book/stamp711/vexpress-a9-on-qemu/details

https://wiki.archlinux.org/index.php/QEMU_(简体中文)


```bash
# Mac 安装
 brew install qemu --with-libssh2 --with-sdl2 --with-vde

# 生成随机 mac 地址到 macaddr
printf -v macaddr "52:54:%02x:%02x:%02x:%02x" $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff )) $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff ))

random-macaddr(){
  printf "52:54:%02x:%02x:%02x:%02x" $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff )) $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff ))
}

# -netdev tap,id=t0,ifname=en5,script=no,downscript=no -device e1000,netdev=t0,id=nic0,mac=52:54:00:12:34:58
qemu-system-x86_64 -hda vdisk.img -cdrom alpine-standard-3.6.2-x86_64.iso -netdev user,id=en5,net=192.168.8.0/22,dhcpstart=192.168.8.1 -device e1000,netdev=en5,id=nic0,mac=$(random-macaddr)

# 在 macOS 下使用桥接
# 1. 需要在网络偏好中添加一个桥接网络,需要选择物理网卡
# 2. 启动时使用自定义的脚本
qemu-system-x86_64 -smp 2 -vnc :5 -m 1024 -drive file=disk.img,if=virtio -device virtio-balloon -boot c \
  -net nic,model=virtio,macaddr=54:54:00:55:55:55 -net tap,script=../scripts/tap-up,downscript=../scripts/tap-down 

# tap-up
TAPDEV="$1"
BRIDGEDEV="bridge0"
ifconfig $BRIDGEDEV addm $TAPDEV

# tap-down
TAPDEV="$1"
BRIDGEDEV="bridge0"
ifconfig $BRIDGEDEV deletem $TAPDEV

# OpenWRT - ARM
# https://wiki.openwrt.org/doc/howto/qemu
# 下载页 https://downloads.openwrt.org/snapshots/trunk/realview/generic/
# 由于没有对应的 PCI 实现, 无法从磁盘等 IDE/SCSI 控制器启动, 但可以从 SD 启动, 只是可能 SD 有大小限制
wget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-vmlinux-initramfs.elf
qemu-system-arm -M realview-eb-mpcore -kernel openwrt-realview-vmlinux-initramfs.elf -net nic -net user -nographic

# 从 SD 启动
wget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-vmlinux.elf
wget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-sdcard.img
qemu-system-arm -M realview-pbx-a9 -m 1024M -nographic \
  -kernel openwrt-realview-vmlinux.elf \
  -sd openwrt-realview-sdcard.img \
  -append "console=ttyAMA0 verbose debug root=/dev/mmcblk0p1"

# Alpine - ARM
tar -zxvf alpine-uboot-3.6.2-armhf.tar.gz -C alpine-uboot-3.6.2-armhf
cd alpine-uboot-3.6.2-armhf
# qemu-system-arm -M vexpress-a9 -kernel zImage -initrd initramfs-grsec -dtb vexpress-v2p-ca9.dtb -hda hda.img -serial stdio
qemu-system-arm -M vexpress-a9 -kernel boot/vmlinuz-hardened \
  -initrd boot/initramfs-hardened -dtb boot/dtbs/vexpress-v2p-ca9.dtb \
  -append "console=ttyAMA0 verbose debug" -nographic

qemu-system-arm -M vexpress-a9 -kernel boot/vmlinuz-hardened \
  -initrd boot/initramfs-hardened -dtb boot/dtbs/vexpress-v2p-ca9.dtb \
  -append "console=ttyAMA0 verbose debug root=/dev/mmcblk0" -nographic

```

## 快捷键
* M -> 修饰键
  * 默认为 Ctrl+Alt
  * `-alt-grab` - `Ctrl-Alt-Shift`
  * `-ctrl-grab` - 右 Ctrl

快捷键   | 作用 
--------|-----
<M-f>   | 全屏切换
<M-+>   | 增大屏幕
<M-->   | 缩小屏幕
<M-u>   | 恢复屏幕大小
<M-n>   | 切换为虚拟控制台 'n', 1: 目标系统显示, 2: 监视器, 3: 串口
<C-A>   | 切换键盘和鼠标捕获
<C-a h> | 在 `-nographic` 显示帮助


## 特性
* 运行模式
  * 全系统模拟
    * 运行任意系统任意架构
  * 用户模式模拟
    * 需要与宿主机架构相同
  * 虚拟化
    * 运行于 KVM 和 XEN
* 特点
  * 在没有主机驱动的前提下提供可接受的性能
  * 支持多台
  * 提供精确的软件模拟 FPU
* PC 支持模拟的外设
  * i440FX host PCI bridge and PIIX3 PCI to ISA bridge
  * Cirrus CLGD 5446 PCI VGA card or dummy VGA card with Bochs VESA extensions (hardware level, including all non standard modes).
  * PS/2 mouse and keyboard
  * 2 PCI IDE interfaces with hard disk and CD-ROM support
  * Floppy disk
  * PCI and ISA network adapters
  * Serial ports
  * IPMI BMC, either and internal or external one
  * Creative SoundBlaster 16 sound card
  * ENSONIQ AudioPCI ES1370 sound card
  * Intel 82801AA AC97 Audio compatible sound card
  * Intel HD Audio Controller and HDA codec
  * Adlib (OPL2) - Yamaha YM3812 compatible chip
  * Gravis Ultrasound GF1 sound card
  * CS4231A compatible sound card
  * PCI UHCI, OHCI, EHCI or XHCI USB controller and a virtual USB-1.1 hub.
* SMP is supported with up to 255 CPUs.

## 虚拟化说明
* x86/x86-64
  * 特性
    * 支持 16/32 为地址段; 支持模拟 LDT/GDT 和 IDT; 支持 VM86 允许 DOSEMU; 部分支持 MMX/3DNow, SSE, SSE2, SSE3, SSE4, x86-64 SVM
    * 用户空间模拟支持主机页文件大于 4k
    * QEMU 支持在 x86 自身模拟
    * 包含部分测试程序 `tests/test-i386`
  * 限制
    * Limited x86-64 support
    * IPC syscalls are missing
    * The x86 segment limits and access rights are not tested at every memory access (yet). Hopefully, very few OSes seem to rely on that for normal use.
* ARM
  * 完全支持 ARM7 用户模拟
  * Linux 支持 NWFPE FPU
  * 能运行大部分 ARM Linux 二进制文件

## Doc
* QEMU [Doc](https://qemu.weilnetz.de/doc/qemu-doc.html)
* 虚拟模式
* PC 系统模拟器
  * 标准选项
  * 块设备选项
  * USB 选项
  * 显示选项
    * `-display [type]`
      * sdl,curses,none,gtk,vnc
    * `-nographic`
    * `-alt-grab` - Ctrl-Alt-Shift
    * `-ctrl-grab` - Right-Ctrl
    * `-spice option[,option[,...]]`
      * spice 远程桌面协议
    * `-full-screen` 全屏的方式打开
    * `-g widthxheight[xdepth]`
      * 设置初始大小
    * `-vnc display[,option[,option[,...]]]`
      * 参数
  * 网络
  * 字符设备
  * 蓝牙
  * TPM 设备
  * Linux/Multiboot 启动
  * 调试和专家选项
    * `-serial [dev]`
      * 转发虚拟串口到主机的字符设备
      * `vc[:WxH]` Virtual console
      * pty, none, null, chardev:id, /dev/XXX, stdio, pipe:filename,, COMn
      * `udp:[remote_host]:remote_port[@[src_ip]:src_port]`
      * `tcp:[host]:port[,server][,nowait][,nodelay][,reconnect=seconds]`
      * `telnet:host:port[,server][,nowait][,nodelay]`
      * `unix:path[,server][,nowait][,reconnect=seconds]`
      * /dev/parportN
      * mon:dev_string
      * braille
      * msmouse
    * `-S` - 启动时不启动 CPU, 手动输入 `c`
    * `-bios file` - 指定 BIOS 文件
    * `-no-reboot` - 退出而不是重启
    * `-enable-kvm`
      * 是否启用 KVM
    * `-enable-hax`
      * 是否启用 HAX (Hardware-based Acceleration eXecution)
      * 只对 Mac 和 Windows 有效
    * `-loadvm [file]`
      * 加载保存的状态
    * `-daemonize` -  后台运行
    * `-readconfig file` - 从文件读取设备配置
    * `-writeconfig file` - 将设备配置写入到文件
  * 监控
  * 磁盘镜像
  * 网络模拟器
  * 其他设备
  * 直接 Linux 启动
  * USB 模拟器
  * VNC 安全相关
  * 平台相关选项

  * 非 PC 系统模拟器
    * PowerPC
    * Sparc32
    * Sparec64
    * MIPS
    * ARM
    * Cris
    * ClodFire
    * Cris
    * Microblaze
    * Sh4
    * Xtensa
  * 客户端调用
  * 用户空间模拟器
    * Linux
    * BSD


```bash
# 查看支持的机器
qemu-system-x86_64 -machine help
# 支持的 CPU
qemu-system-x86_64 -cpu help
# ARM 支持 raspi2
qemu-system-arm -machine help | grep rasp
# 查看日志项
qemu-system-x86_64 -d help

# Alpine virt 版, 30M 左右, alpine-standard 为 100M 左右
wget http://dl-cdn.alpinelinux.org/alpine/v3.6/releases/x86_64/alpine-virt-3.6.2-x86_64.iso

# WARNING: Image format was not specified for 'alpine-virt-3.6.2-x86_64.iso' and probing guessed raw.
#          Automatically detecting the format is dangerous for raw images, write operations on block 0 will be restricted.
#          Specify the 'raw' format explicitly to remove the restrictions.
qemu-system-i3x86_64 alpine-virt-3.6.2-x86_64.iso
# 这样就不会出现警告
qemu-system-i3x86_64 -cdrom alpine-virt-3.6.2-x86_64.iso


# 将一个目录作为虚拟的 fat 磁盘镜像, 默认只读
qemu-system-i386 linux.img -hdb fat:/my_directory
```

### Device URL Syntax

```bash
# 设备 URL 语法
# ===========
# iSCSI
# iscsi://<target-ip>[:<port>]/<target-iqn>/<lun>
# 无授权
qemu-system-i386 \
  -iscsi initiator-name=iqn.2001-04.com.example:my-initiator \
  -cdrom iscsi://192.0.2.1/iqn.2001-04.com.example/2 \
  -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1
# 在 URL 上指定 CHAP 账号密码
qemu-system-i386 \
  -drive file=iscsi://user%password@192.0.2.1/iqn.2001-04.com.example/1
# 在环境变量中指定 CHAP 账号密码
LIBISCSI_CHAP_USERNAME="user" \
LIBISCSI_CHAP_PASSWORD="password" \
qemu-system-i386 -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1

# NBD
# nbd:<server-ip>:<port>[:exportname=<export>]
# TCP
qemu-system-i386 --drive file=nbd:192.0.2.1:30000
# Unix Domain Sockets
qemu-system-i386 --drive file=nbd:unix:/tmp/nbd-socket

# Sheepdog
# a distributed storage system for QEMU.
# supports using either local sheepdog devices or remote networked devices.
# sheepdog[+tcp|+unix]://[host:port]/vdiname[?socket=path][#snapid|#tag]
# https://sheepdog.github.io/sheepdog/
qemu-system-i386 --drive file=sheepdog://192.0.2.1:30000/MyVirtualMachine

# GlusterFS
# a user space distributed file system. 
# supports the use of GlusterFS volumes for hosting VM disk images using TCP, Unix Domain Sockets and RDMA transport protocols.
# URI:
# gluster[+type]://[host[:port]]/volume/path[?socket=...][,debug=N][,logfile=...]
# JSON:
# 'json:{"driver":"qcow2","file":{"driver":"gluster","volume":"testvol","path":"a.img","debug":N,"logfile":"...",
#                                  "server":[{"type":"tcp","host":"...","port":"..."},
#                                            {"type":"unix","socket":"..."}]}}'
# URI
qemu-system-x86_64 --drive file=gluster://192.0.2.1/testvol/a.img,file.debug=9,file.logfile=/var/log/qemu-gluster.log
# JSON
qemu-system-x86_64 'json:{"driver":"qcow2",
                          "file":{"driver":"gluster",
                                   "volume":"testvol","path":"a.img",
                                   "debug":9,"logfile":"/var/log/qemu-gluster.log",
                                   "server":[{"type":"tcp","host":"1.2.3.4","port":24007},
                                             {"type":"unix","socket":"/var/run/glusterd.socket"}]}}'
qemu-system-x86_64 -drive driver=qcow2,file.driver=gluster,file.volume=testvol,file.path=/path/a.img,\
                                      file.debug=9,file.logfile=/var/log/qemu-gluster.log,\
                                      file.server.0.type=tcp,file.server.0.host=1.2.3.4,file.server.0.port=24007,\
                                      file.server.1.type=unix,file.server.1.socket=/var/run/glusterd.socket\

# HTTP/HTTPS/FTP/FTPS
# QEMU supports read-only access to files accessed over http(s) and ftp(s).
# <protocol>://[<username>[:<password>]@]<host>/<path>
```

### 磁盘镜像格式
* raw
  * 原始格式
  * 简单易用
  * 如果文件系统支持 `holes`(ext2,ext3,ntfs), 那会占不了多少空间
  * 选项
    * preallocation - 预分配模式
      *  off, falloc, full
* qcow2
  * QEMU 镜像格式
  * 功能最多
    * COW - 只针对 btrfs 有用
    * 压缩
    * 加密 - aes,luks
* qed
  * 旧的 QEMU 镜像格式
* qcow
  * 旧的 QEMU 镜像格式
* luks
  * LUKS v1 加密格式
  * 与 Linux dm-crypt/cryptsetup 兼容
* vdi
  * vbox 1.1 兼容格式
* vmdk
  * vm 3,4 兼容格式
* vpc
  * Virtual PC 兼容格式 (VHD)
* VHDX
  * Hyper-V 兼容的镜像格式

#### 只读格式
* bochs
  * growing 的 Bochs 镜像
* cloop
  * Linux Compressed Loop 镜像
* dmg
  * Apple 的磁盘格式
* parallels
  * Parallels 磁盘镜像格式

### 磁盘镜像
* qemu-img

```bash
# 创建磁盘镜像
qemu-img create demo.img 100m
# 查看基本信息
qemu-img info demo.img
# 查看映射信息
qemu-img map demo.img
# 推荐使用 qcow2 格式
qemu-img create -f qcow2 sys.qcow2 2g
```

### 网络块设备
* qemu-nbd
* 在 linux 下一般会挂载为 `/dev/ndb*`
* https://github.com/sheepdog/sheepdog/
* iSCSI LUN

```bash
# 使用 远程 NBD 协议
qemu-system-i386 linux.img -hdb nbd://my_nbd_server.mydomain.org:1024/
# 使用 unix socket
qemu-system-i386 linux.img -hdb nbd+unix://?socket=/tmp/my_socket

# 暴露为 unix socket
qemu-nbd --socket=/tmp/my_socket my_disk.qcow2
# 允许多个客户端共享
qemu-nbd --socket=/tmp/my_socket --share=2 my_disk.qcow2
# 同时使用
qemu-system-i386 linux1.img -hdb nbd+unix://?socket=/tmp/my_socket
qemu-system-i386 linux2.img -hdb nbd+unix://?socket=/tmp/my_socket
# 如果服务端指定了名字, 在客户端使用时也需要指定名字
qemu-system-i386 -cdrom nbd://localhost/debian-500-ppc-netinst
qemu-system-i386 -cdrom nbd://localhost/openSUSE-11.1-ppc-netinst
```

### 网络模拟

```bash
# 查看支持的 NIC
qemu-system-x86_64 -net nic,model=help
# 最简单的网络
# 10.0.2.0/24 默认起始地址 x.x.x.15-13, 主机地址 x.x.x.2 dns x.x.x.3
# 主机无法访问虚拟机
qemu-system-x86_64 -hda vdisk.img -cdrom alpine-standard-3.6.2-x86_64.iso -net nic -net user
```

### USB 设备

### 用户空间虚拟
* `qemu-*`
* 只支持 Linix, BSD
* 特性
  * 系统调用转换
  * POSIX 信号处理
  * 线程

```bash
# -L / 告诉动态连接器从 / 开始搜索
qemu-i386 -L / /bin/ls
# 也可以再 qemu 中允许 qemu
qemu-i386 -L / qemu-i386 -L / /bin/ls

# 在非 x86 CPU 上运行
# 至少需要 x86 的 glibc(qemu-runtime-i386-*)
# 确保未设置 LD_LIBRARY_PATH
unset LD_LIBRARY_PATH
# 执行预编译的可执行文件
qemu-i386 tests/i386/ls

# 使用 Wine
# 确保安装 wine(qemu-*-i386-wine)
# 至少先确保有 i386
qemu-i386 /usr/local/qemu-i386/bin/ls-i386
# 配置
# 配置位于 ~/.wine, 之前的配置会被存于 ~/.wine.org
/usr/local/qemu-i386/bin/wine-conf.sh
qemu-i386 /usr/local/qemu-i386/wine/bin/wine \
          /usr/local/qemu-i386/wine/c/Program\ Files/putty.exe
```

### 显示设备
* https://www.spice-space.org
* vnc

```bash
brew install tiger-vnc

# 5900
qemu-system-x86_64 -vga std -nographic -vnc :0
vncviewer :0

# 5901
qemu-system-x86_64 sys.vhd-display vnc=:1
vncviewer :1


```

### Windows
* https://fedoraproject.org/wiki/Windows_Virtio_Drivers
* https://github.com/virtio-win/kvm-guest-drivers-windows
* https://www.linux-kvm.org/page/WindowsGuestDrivers/Download_Drivers
* Windows 默认没有 virtio 驱动, 需要额外下载

```bash
# 其他版本可查看 https://fedorapeople.org/groups/virt/virtio-win/repo/stable/
curl -O https://fedorapeople.org/groups/virt/virtio-win/repo/stable/virtio-win-0.1.141-1.noarch.rpm

# mac 下解压需要安装 rpm
brew install rpm
rpm2cpio virtio-win-0.1.141-1.noarch.rpm | cpio -idmv
# 拷贝到当前目录
cp ./usr/share/virtio-win/virtio-win.iso .

# 启动系统
# 检测不到硬盘, 需要在 virtio-win 光驱中找到 viostor 安装相应版本驱动
qemu-system-x86_64 -m 1024 -vga std \
  -drive file=win.img,index=0,media=disk,if=virtio \
  -drive file=win7.iso,index=2,media=cdrom \
  -drive file=virtio-win.iso,index=3,media=cdrom

```


### qemu-system-x86_64 -h
```
QEMU emulator version 2.10.1
Copyright (c) 2003-2017 Fabrice Bellard and the QEMU Project developers
usage: qemu-system-x86_64 [options] [disk_image]

'disk_image' is a raw hard disk image for IDE hard disk 0

Standard options:
-h or -help     display this help and exit
-version        display version information and exit
-machine [type=]name[,prop[=value][,...]]
                selects emulated machine ('-machine help' for list)
                property accel=accel1[:accel2[:...]] selects accelerator
                supported accelerators are kvm, xen, hax or tcg (default: tcg)
                kernel_irqchip=on|off|split controls accelerated irqchip support (default=off)
                vmport=on|off|auto controls emulation of vmport (default: auto)
                kvm_shadow_mem=size of KVM shadow MMU in bytes
                dump-guest-core=on|off include guest memory in a core dump (default=on)
                mem-merge=on|off controls memory merge support (default: on)
                igd-passthru=on|off controls IGD GFX passthrough support (default=off)
                aes-key-wrap=on|off controls support for AES key wrapping (default=on)
                dea-key-wrap=on|off controls support for DEA key wrapping (default=on)
                suppress-vmdesc=on|off disables self-describing migration (default=off)
                nvdimm=on|off controls NVDIMM support (default=off)
                enforce-config-section=on|off enforce configuration section migration (default=off)
                s390-squash-mcss=on|off controls support for squashing into default css (default=off)
-cpu cpu        select CPU ('-cpu help' for list)
-accel [accel=]accelerator[,thread=single|multi]
                select accelerator (kvm, xen, hax or tcg; use 'help' for a list)
                thread=single|multi (enable multi-threaded TCG)
-smp [cpus=]n[,maxcpus=cpus][,cores=cores][,threads=threads][,sockets=sockets]
                set the number of CPUs to 'n' [default=1]
                maxcpus= maximum number of total cpus, including
                offline CPUs for hotplug, etc
                cores= number of CPU cores on one socket
                threads= number of threads on one CPU core
                sockets= number of discrete sockets in the system
-numa node[,mem=size][,cpus=firstcpu[-lastcpu]][,nodeid=node]
-numa node[,memdev=id][,cpus=firstcpu[-lastcpu]][,nodeid=node]
-numa dist,src=source,dst=destination,val=distance
-add-fd fd=fd,set=set[,opaque=opaque]
                Add 'fd' to fd 'set'
-set group.id.arg=value
                set <arg> parameter for item <id> of type <group>
                i.e. -set drive.$id.file=/path/to/image
-global driver.property=value
-global driver=driver,property=property,value=value
                set a global default for a driver property
-boot [order=drives][,once=drives][,menu=on|off]
      [,splash=sp_name][,splash-time=sp_time][,reboot-timeout=rb_time][,strict=on|off]
                'drives': floppy (a), hard disk (c), CD-ROM (d), network (n)
                'sp_name': the file's name that would be passed to bios as logo picture, if menu=on
                'sp_time': the period that splash picture last if menu=on, unit is ms
                'rb_timeout': the timeout before guest reboot when boot failed, unit is ms
-m [size=]megs[,slots=n,maxmem=size]
                configure guest RAM
                size: initial amount of guest memory
                slots: number of hotplug slots (default: none)
                maxmem: maximum amount of guest memory (default: none)
NOTE: Some architectures might enforce a specific granularity
-mem-path FILE  provide backing storage for guest RAM
-mem-prealloc   preallocate guest memory (use with -mem-path)
-k language     use keyboard layout (for example 'fr' for French)
-audio-help     print list of audio drivers and their options
-soundhw c1,... enable audio support
                and only specified sound cards (comma separated list)
                use '-soundhw help' to get the list of supported cards
                use '-soundhw all' to enable all of them
-balloon none   disable balloon device
-balloon virtio[,addr=str]
                enable virtio balloon device (default)
-device driver[,prop[=value][,...]]
                add device (based on driver)
                prop=value,... sets driver properties
                use '-device help' to print all possible drivers
                use '-device driver,help' to print all possible properties
-name string1[,process=string2][,debug-threads=on|off]
                set the name of the guest
                string1 sets the window title and string2 the process name (on Linux)
                When debug-threads is enabled, individual threads are given a separate name (on Linux)
                NOTE: The thread names are for debugging and not a stable API.
-uuid %08x-%04x-%04x-%04x-%012x
                specify machine UUID
:
Block device options:
-fda/-fdb file  use 'file' as floppy disk 0/1 image
-hda/-hdb file  use 'file' as IDE hard disk 0/1 image
-hdc/-hdd file  use 'file' as IDE hard disk 2/3 image
-cdrom file     use 'file' as IDE cdrom image (cdrom is ide1 master)
-blockdev [driver=]driver[,node-name=N][,discard=ignore|unmap]
          [,cache.direct=on|off][,cache.no-flush=on|off]
          [,read-only=on|off][,detect-zeroes=on|off|unmap]
          [,driver specific parameters...]
                configure a block backend
-drive [file=file][,if=type][,bus=n][,unit=m][,media=d][,index=i]
       [,cyls=c,heads=h,secs=s[,trans=t]][,snapshot=on|off]
       [,cache=writethrough|writeback|none|directsync|unsafe][,format=f]
       [,serial=s][,addr=A][,rerror=ignore|stop|report]
       [,werror=ignore|stop|report|enospc][,id=name][,aio=threads|native]
       [,readonly=on|off][,copy-on-read=on|off]
       [,discard=ignore|unmap][,detect-zeroes=on|off|unmap]
       [[,bps=b]|[[,bps_rd=r][,bps_wr=w]]]
       [[,iops=i]|[[,iops_rd=r][,iops_wr=w]]]
       [[,bps_max=bm]|[[,bps_rd_max=rm][,bps_wr_max=wm]]]
       [[,iops_max=im]|[[,iops_rd_max=irm][,iops_wr_max=iwm]]]
       [[,iops_size=is]]
       [[,group=g]]
                use 'file' as a drive image
-mtdblock file  use 'file' as on-board Flash memory image
-sd file        use 'file' as SecureDigital card image
-pflash file    use 'file' as a parallel flash image
-snapshot       write to temporary files instead of disk image files
-hdachs c,h,s[,t]
                force hard disk 0 physical geometry and the optional BIOS
                translation (t=none or lba) (usually QEMU can guess them)
-fsdev fsdriver,id=id[,path=path,][security_model={mapped-xattr|mapped-file|passthrough|none}]
 [,writeout=immediate][,readonly][,socket=socket|sock_fd=sock_fd][,fmode=fmode][,dmode=dmode]
 [[,throttling.bps-total=b]|[[,throttling.bps-read=r][,throttling.bps-write=w]]]
 [[,throttling.iops-total=i]|[[,throttling.iops-read=r][,throttling.iops-write=w]]]
 [[,throttling.bps-total-max=bm]|[[,throttling.bps-read-max=rm][,throttling.bps-write-max=wm]]]
 [[,throttling.iops-total-max=im]|[[,throttling.iops-read-max=irm][,throttling.iops-write-max=iwm]]]
 [[,throttling.iops-size=is]]
-virtfs local,path=path,mount_tag=tag,security_model=[mapped-xattr|mapped-file|passthrough|none]
        [,id=id][,writeout=immediate][,readonly][,socket=socket|sock_fd=sock_fd][,fmode=fmode][,dmode=dmode]
-virtfs_synth Create synthetic file system image
:
USB options:
-usb            enable the USB driver (if it is not used by default yet)
-usbdevice name add the host or guest USB device 'name'
:
Display options:
-display sdl[,frame=on|off][,alt_grab=on|off][,ctrl_grab=on|off]
            [,window_close=on|off][,gl=on|off]
-display gtk[,grab_on_hover=on|off][,gl=on|off]|
-display vnc=<display>[,<optargs>]
-display curses
-display none                select display type
The default display is equivalent to
	"-display cocoa"
-nographic      disable graphical output and redirect serial I/Os to console
-curses         shorthand for -display curses
-no-frame       open SDL window without a frame and window decorations
-alt-grab       use Ctrl-Alt-Shift to grab mouse (instead of Ctrl-Alt)
-ctrl-grab      use Right-Ctrl to grab mouse (instead of Ctrl-Alt)
-no-quit        disable SDL window close capability
-sdl            shorthand for -display sdl
-spice [port=port][,tls-port=secured-port][,x509-dir=<dir>]
       [,x509-key-file=<file>][,x509-key-password=<file>]
       [,x509-cert-file=<file>][,x509-cacert-file=<file>]
       [,x509-dh-key-file=<file>][,addr=addr][,ipv4|ipv6|unix]
       [,tls-ciphers=<list>]
       [,tls-channel=[main|display|cursor|inputs|record|playback]]
       [,plaintext-channel=[main|display|cursor|inputs|record|playback]]
       [,sasl][,password=<secret>][,disable-ticketing]
       [,image-compression=[auto_glz|auto_lz|quic|glz|lz|off]]
       [,jpeg-wan-compression=[auto|never|always]]
       [,zlib-glz-wan-compression=[auto|never|always]]
       [,streaming-video=[off|all|filter]][,disable-copy-paste]
       [,disable-agent-file-xfer][,agent-mouse=[on|off]]
       [,playback-compression=[on|off]][,seamless-migration=[on|off]]
       [,gl=[on|off]][,rendernode=<file>]
   enable spice
   at least one of {port, tls-port} is mandatory
-portrait       rotate graphical output 90 deg left (only PXA LCD)
-rotate <deg>   rotate graphical output some deg left (only PXA LCD)
-vga [std|cirrus|vmware|qxl|xenfb|tcx|cg3|virtio|none]
                select video card type
-full-screen    start in full screen
-vnc <display>  shorthand for -display vnc=<display>
:
i386 target only:
-win2k-hack     use it when installing Windows 2000 to avoid a disk full bug
-no-fd-bootchk  disable boot signature checking for floppy disks
-no-acpi        disable ACPI
-no-hpet        disable HPET
-acpitable [sig=str][,rev=n][,oem_id=str][,oem_table_id=str][,oem_rev=n][,asl_compiler_id=str][,asl_compiler_rev=n][,{data|file}=file1[:file2]...]
                ACPI table description
-smbios file=binary
                load SMBIOS entry from binary file
-smbios type=0[,vendor=str][,version=str][,date=str][,release=%d.%d]
              [,uefi=on|off]
                specify SMBIOS type 0 fields
-smbios type=1[,manufacturer=str][,product=str][,version=str][,serial=str]
              [,uuid=uuid][,sku=str][,family=str]
                specify SMBIOS type 1 fields
-smbios type=2[,manufacturer=str][,product=str][,version=str][,serial=str]
              [,asset=str][,location=str]
                specify SMBIOS type 2 fields
-smbios type=3[,manufacturer=str][,version=str][,serial=str][,asset=str]
              [,sku=str]
                specify SMBIOS type 3 fields
-smbios type=4[,sock_pfx=str][,manufacturer=str][,version=str][,serial=str]
              [,asset=str][,part=str]
                specify SMBIOS type 4 fields
-smbios type=17[,loc_pfx=str][,bank=str][,manufacturer=str][,serial=str]
               [,asset=str][,part=str][,speed=%d]
                specify SMBIOS type 17 fields
:
Network options:
-netdev user,id=str[,ipv4[=on|off]][,net=addr[/mask]][,host=addr]
         [,ipv6[=on|off]][,ipv6-net=addr[/int]][,ipv6-host=addr]
         [,restrict=on|off][,hostname=host][,dhcpstart=addr]
         [,dns=addr][,ipv6-dns=addr][,dnssearch=domain][,tftp=dir]
         [,bootfile=f][,hostfwd=rule][,guestfwd=rule][,smb=dir[,smbserver=addr]]
                configure a user mode network backend with ID 'str',
                its DHCP server and optional services
-netdev tap,id=str[,fd=h][,fds=x:y:...:z][,ifname=name][,script=file][,downscript=dfile]
         [,br=bridge][,helper=helper][,sndbuf=nbytes][,vnet_hdr=on|off][,vhost=on|off]
         [,vhostfd=h][,vhostfds=x:y:...:z][,vhostforce=on|off][,queues=n]
         [,poll-us=n]
                configure a host TAP network backend with ID 'str'
                connected to a bridge (default=br0)
                use network scripts 'file' (default=/etc/qemu-ifup)
                to configure it and 'dfile' (default=/etc/qemu-ifdown)
                to deconfigure it
                use '[down]script=no' to disable script execution
                use network helper 'helper' (default=/usr/local/Cellar/qemu/2.10.1/libexec/qemu-bridge-helper) to
                configure it
                use 'fd=h' to connect to an already opened TAP interface
                use 'fds=x:y:...:z' to connect to already opened multiqueue capable TAP interfaces
                use 'sndbuf=nbytes' to limit the size of the send buffer (the
                default is disabled 'sndbuf=0' to enable flow control set 'sndbuf=1048576')
                use vnet_hdr=off to avoid enabling the IFF_VNET_HDR tap flag
                use vnet_hdr=on to make the lack of IFF_VNET_HDR support an error condition
                use vhost=on to enable experimental in kernel accelerator
                    (only has effect for virtio guests which use MSIX)
                use vhostforce=on to force vhost on for non-MSIX virtio guests
                use 'vhostfd=h' to connect to an already opened vhost net device
                use 'vhostfds=x:y:...:z to connect to multiple already opened vhost net devices
                use 'queues=n' to specify the number of queues to be created for multiqueue TAP
                use 'poll-us=n' to speciy the maximum number of microseconds that could be
                spent on busy polling for vhost net
-netdev bridge,id=str[,br=bridge][,helper=helper]
                configure a host TAP network backend with ID 'str' that is
                connected to a bridge (default=br0)
                using the program 'helper (default=/usr/local/Cellar/qemu/2.10.1/libexec/qemu-bridge-helper)
-netdev socket,id=str[,fd=h][,listen=[host]:port][,connect=host:port]
                configure a network backend to connect to another network
                using a socket connection
-netdev socket,id=str[,fd=h][,mcast=maddr:port[,localaddr=addr]]
                configure a network backend to connect to a multicast maddr and port
                use 'localaddr=addr' to specify the host address to send packets from
-netdev socket,id=str[,fd=h][,udp=host:port][,localaddr=host:port]
                configure a network backend to connect to another network
                using an UDP tunnel
-netdev vhost-user,id=str,chardev=dev[,vhostforce=on|off]
                configure a vhost-user network, backed by a chardev 'dev'
-netdev hubport,id=str,hubid=n
                configure a hub port on QEMU VLAN 'n'
-net nic[,vlan=n][,macaddr=mac][,model=type][,name=str][,addr=str][,vectors=v]
                old way to create a new NIC and connect it to VLAN 'n'
                (use the '-device devtype,netdev=str' option if possible instead)
-net dump[,vlan=n][,file=f][,len=n]
                dump traffic on vlan 'n' to file 'f' (max n bytes per packet)
-net none       use it alone to have zero network devices. If no -net option
                is provided, the default is '-net nic -net user'
-net [user|tap|bridge|socket][,vlan=n][,option][,option][,...]
                old way to initialize a host network interface
                (use the -netdev option if possible instead)
:
Character device options:
-chardev help
-chardev null,id=id[,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev socket,id=id[,host=host],port=port[,to=to][,ipv4][,ipv6][,nodelay][,reconnect=seconds]
         [,server][,nowait][,telnet][,reconnect=seconds][,mux=on|off]
         [,logfile=PATH][,logappend=on|off][,tls-creds=ID] (tcp)
-chardev socket,id=id,path=path[,server][,nowait][,telnet][,reconnect=seconds]
         [,mux=on|off][,logfile=PATH][,logappend=on|off] (unix)
-chardev udp,id=id[,host=host],port=port[,localaddr=localaddr]
         [,localport=localport][,ipv4][,ipv6][,mux=on|off]
         [,logfile=PATH][,logappend=on|off]
-chardev msmouse,id=id[,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev vc,id=id[[,width=width][,height=height]][[,cols=cols][,rows=rows]]
         [,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev ringbuf,id=id[,size=size][,logfile=PATH][,logappend=on|off]
-chardev file,id=id,path=path[,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev pipe,id=id,path=path[,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev pty,id=id[,mux=on|off][,logfile=PATH][,logappend=on|off]
-chardev stdio,id=id[,mux=on|off][,signal=on|off][,logfile=PATH][,logappend=on|off]
:
Device URL Syntax:
-iscsi [user=user][,password=password]
       [,header-digest=CRC32C|CR32C-NONE|NONE-CRC32C|NONE
       [,initiator-name=initiator-iqn][,id=target-iqn]
       [,timeout=timeout]
                iSCSI session parameters
Bluetooth(R) options:
-bt hci,null    dumb bluetooth HCI - doesn't respond to commands
-bt hci,host[:id]
                use host's HCI with the given name
-bt hci[,vlan=n]
                emulate a standard HCI in virtual scatternet 'n'
-bt vhci[,vlan=n]
                add host computer to virtual scatternet 'n' using VHCI
-bt device:dev[,vlan=n]
                emulate a bluetooth device 'dev' in scatternet 'n'
:
TPM device options:
-tpmdev passthrough,id=id[,path=path][,cancel-path=path]
                use path to provide path to a character device; default is /dev/tpm0
                use cancel-path to provide path to TPM's cancel sysfs entry; if
                not provided it will be searched for in /sys/class/misc/tpm?/device
:
Linux/Multiboot boot specific:
-kernel bzImage use 'bzImage' as kernel image
-append cmdline use 'cmdline' as kernel command line
-initrd file    use 'file' as initial ram disk
-dtb    file    use 'file' as device tree image
:
Debug/Expert options:
-fw_cfg [name=]<name>,file=<file>
                add named fw_cfg entry with contents from file
-fw_cfg [name=]<name>,string=<str>
                add named fw_cfg entry with contents from string
-serial dev     redirect the serial port to char device 'dev'
-parallel dev   redirect the parallel port to char device 'dev'
-monitor dev    redirect the monitor to char device 'dev'
-qmp dev        like -monitor but opens in 'control' mode
-qmp-pretty dev like -qmp but uses pretty JSON formatting
-mon [chardev=]name[,mode=readline|control]
-debugcon dev   redirect the debug console to char device 'dev'
-pidfile file   write PID to 'file'
-singlestep     always run in singlestep mode
-S              freeze CPU at startup (use 'c' to start execution)
-realtime [mlock=on|off]
                run qemu with realtime features
                mlock=on|off controls mlock support (default: on)
-gdb dev        wait for gdb connection on 'dev'
-s              shorthand for -gdb tcp::1234
-d item1,...    enable logging of specified items (use '-d help' for a list of log items)
-D logfile      output log to logfile (default stderr)
-dfilter range,..  filter debug output to range of addresses (useful for -d cpu,exec,etc..)
-L path         set the directory for the BIOS, VGA BIOS and keymaps
-bios file      set the filename for the BIOS
-enable-kvm     enable KVM full virtualization support
-enable-hax     enable HAX virtualization support
-xen-domid id   specify xen guest domain id
-xen-create     create domain using xen hypercalls, bypassing xend
                warning: should not be used when xend is in use
-xen-attach     attach to existing xen domain
                xend will use this when starting QEMU
-xen-domid-restrict     restrict set of available xen operations
                        to specified domain id. (Does not affect
                        xenpv machine type).
-no-reboot      exit instead of rebooting
-no-shutdown    stop before shutdown
-loadvm [tag|id]
                start right away with a saved state (loadvm in monitor)
-daemonize      daemonize QEMU after initializing
-option-rom rom load a file, rom, into the option ROM space
-rtc [base=utc|localtime|date][,clock=host|rt|vm][,driftfix=none|slew]
                set the RTC base and clock, enable drift fix for clock ticks (x86 only)
-icount [shift=N|auto][,align=on|off][,sleep=on|off,rr=record|replay,rrfile=<filename>,rrsnapshot=<snapshot>]
                enable virtual instruction counter with 2^N clock ticks per
                instruction, enable aligning the host and virtual clocks
                or disable real time cpu sleeping
-watchdog model
                enable virtual hardware watchdog [default=none]
-watchdog-action reset|shutdown|poweroff|pause|debug|none
                action when watchdog fires [default=reset]
-echr chr       set terminal escape character instead of ctrl-a
-virtioconsole c
                set virtio console
-show-cursor    show cursor
-tb-size n      set TB size
-incoming tcp:[host]:port[,to=maxport][,ipv4][,ipv6]
-incoming rdma:host:port[,ipv4][,ipv6]
-incoming unix:socketpath
                prepare for incoming migration, listen on
                specified protocol and socket address
-incoming fd:fd
-incoming exec:cmdline
                accept incoming migration on given file descriptor
                or from given external command
-incoming defer
                wait for the URI to be specified via migrate_incoming
-only-migratable     allow only migratable devices
-nodefaults     don't create default devices
-chroot dir     chroot to dir just before starting the VM
-runas user     change to user id user just before starting the VM
-sandbox <arg>  Enable seccomp mode 2 system call filter (default 'off').
-readconfig <file>
-writeconfig <file>
                read/write config file
-nodefconfig
                do not load default config files at startup
-no-user-config
                do not load user-provided config files at startup
-trace [[enable=]<pattern>][,events=<file>][,file=<file>]
                specify tracing options
-msg timestamp[=on|off]
                change the format of messages
                on|off controls leading timestamps (default:on)
-dump-vmstate <file>
                Output vmstate information in JSON format to file.
                Use the scripts/vmstate-static-checker.py file to
                check for possible regressions in migration code
                by comparing two such vmstate dumps.
:
Generic object creation:
-object TYPENAME[,PROP1=VALUE1,...]
                create a new object of type TYPENAME setting properties
                in the order they are specified.  Note that the 'id'
                property must be set.  These objects are placed in the
                '/objects' path.

During emulation, the following keys are useful:
ctrl-alt-f      toggle full screen
ctrl-alt-n      switch to virtual console 'n'
ctrl-alt        toggle mouse and keyboard grab

When using -nographic, press 'ctrl-a h' to get some help.

See <http://qemu.org/contribute/report-a-bug> for how to report bugs.
More information on the QEMU project at <http://qemu.org>.

```


## qemu-img --help
```
qemu-img version 2.10.1
Copyright (c) 2003-2017 Fabrice Bellard and the QEMU Project developers
usage: qemu-img [standard options] command [command options]
QEMU disk image utility

    '-h', '--help'       display this help and exit
    '-V', '--version'    output version information and exit
    '-T', '--trace'      [[enable=]<pattern>][,events=<file>][,file=<file>]
                         specify tracing options

Command syntax:
  amend [--object objectdef] [--image-opts] [-p] [-q] [-f fmt] [-t cache] -o options filename
  bench [-c count] [-d depth] [-f fmt] [--flush-interval=flush_interval] [-n] [--no-drain] [-o offset] [--pattern=pattern] [-q] [-s buffer_size] [-S step_size] [-t cache] [-w] [-U] filename
  check [-q] [--object objectdef] [--image-opts] [-f fmt] [--output=ofmt] [-r [leaks | all]] [-T src_cache] [-U] filename
  commit [-q] [--object objectdef] [--image-opts] [-f fmt] [-t cache] [-b base] [-d] [-p] filename
  compare [--object objectdef] [--image-opts] [-f fmt] [-F fmt] [-T src_cache] [-p] [-q] [-s] [-U] filename1 filename2
  convert [--object objectdef] [--image-opts] [--target-image-opts] [-U] [-c] [-p] [-q] [-n] [-f fmt] [-t cache] [-T src_cache] [-O output_fmt] [-B backing_file] [-o options] [-s snapshot_id_or_name] [-l snapshot_param] [-S sparse_size] [-m num_coroutines] [-W] filename [filename2 [...]] output_filename
  create [-q] [--object objectdef] [-f fmt] [-b backing_file] [-F backing_fmt] [-u] [-o options] filename [size]
  dd [--image-opts] [-U] [-f fmt] [-O output_fmt] [bs=block_size] [count=blocks] [skip=blocks] if=input of=output
  info [--object objectdef] [--image-opts] [-f fmt] [--output=ofmt] [--backing-chain] [-U] filename
  map [--object objectdef] [--image-opts] [-f fmt] [--output=ofmt] [-U] filename
  measure [--output=ofmt] [-O output_fmt] [-o options] [--size N | [--object objectdef] [--image-opts] [-f fmt] [-l snapshot_param] filename]
  snapshot [--object objectdef] [--image-opts] [-U] [-q] [-l | -a snapshot | -c snapshot | -d snapshot] filename
  rebase [--object objectdef] [--image-opts] [-U] [-q] [-f fmt] [-t cache] [-T src_cache] [-p] [-u] -b backing_file [-F backing_fmt] filename
  resize [--object objectdef] [--image-opts] [-q] filename [+ | -]size

Command parameters:
  'filename' is a disk image filename
  'objectdef' is a QEMU user creatable object definition. See the qemu(1)
    manual page for a description of the object properties. The most common
    object type is a 'secret', which is used to supply passwords and/or
    encryption keys.
  'fmt' is the disk image format. It is guessed automatically in most cases
  'cache' is the cache mode used to write the output disk image, the valid
    options are: 'none', 'writeback' (default, except for convert), 'writethrough',
    'directsync' and 'unsafe' (default for convert)
  'src_cache' is the cache mode used to read input disk images, the valid
    options are the same as for the 'cache' option
  'size' is the disk image size in bytes. Optional suffixes
    'k' or 'K' (kilobyte, 1024), 'M' (megabyte, 1024k), 'G' (gigabyte, 1024M),
    'T' (terabyte, 1024G), 'P' (petabyte, 1024T) and 'E' (exabyte, 1024P)  are
    supported. 'b' is ignored.
  'output_filename' is the destination disk image filename
  'output_fmt' is the destination format
  'options' is a comma separated list of format specific options in a
    name=value format. Use -o ? for an overview of the options supported by the
    used format
  'snapshot_param' is param used for internal snapshot, format
    is 'snapshot.id=[ID],snapshot.name=[NAME]', or
    '[ID_OR_NAME]'
  'snapshot_id_or_name' is deprecated, use 'snapshot_param'
    instead
  '-c' indicates that target image must be compressed (qcow format only)
  '-u' allows unsafe backing chains. For rebasing, it is assumed that old and
       new backing file match exactly. The image doesn't need a working
       backing file before rebasing in this case (useful for renaming the
       backing file). For image creation, allow creating without attempting
       to open the backing file.
  '-h' with or without a command shows this help and lists the supported formats
  '-p' show progress of command (only certain commands)
  '-q' use Quiet mode - do not print any output (except errors)
  '-S' indicates the consecutive number of bytes (defaults to 4k) that must
       contain only zeros for qemu-img to create a sparse image during
       conversion. If the number of bytes is 0, the source will not be scanned for
       unallocated or zero sectors, and the destination image will always be
       fully allocated
  '--output' takes the format in which the output must be done (human or json)
  '-n' skips the target volume creation (useful if the volume is created
       prior to running qemu-img)

Parameters to check subcommand:
  '-r' tries to repair any inconsistencies that are found during the check.
       '-r leaks' repairs only cluster leaks, whereas '-r all' fixes all
       kinds of errors, with a higher risk of choosing the wrong fix or
       hiding corruption that has already occurred.

Parameters to convert subcommand:
  '-m' specifies how many coroutines work in parallel during the convert
       process (defaults to 8)
  '-W' allow to write to the target out of order rather than sequential

Parameters to snapshot subcommand:
  'snapshot' is the name of the snapshot to create, apply or delete
  '-a' applies a snapshot (revert disk to saved state)
  '-c' creates a snapshot
  '-d' deletes a snapshot
  '-l' lists all snapshots in the given image

Parameters to compare subcommand:
  '-f' first image format
  '-F' second image format
  '-s' run in Strict mode - fail on different image size or sector allocation

Parameters to dd subcommand:
  'bs=BYTES' read and write up to BYTES bytes at a time (default: 512)
  'count=N' copy only N input blocks
  'if=FILE' read from FILE
  'of=FILE' write to FILE
  'skip=N' skip N bs-sized blocks at the start of input

Supported formats: blkdebug blkreplay blkverify bochs cloop dmg file ftp ftps host_device http https luks nbd null-aio null-co parallels qcow qcow2 qed quorum raw replication sheepdog vdi vhdx vmdk vpc vvfat

See <http://qemu.org/contribute/report-a-bug> for how to report bugs.
More information on the QEMU project at <http://qemu.org>.
```


## qemu-nbd --help

```
Usage: qemu-nbd [OPTIONS] FILE
QEMU Disk Network Block Device Server

  -h, --help                display this help and exit
  -V, --version             output version information and exit

Connection properties:
  -p, --port=PORT           port to listen on (default `10809')
  -b, --bind=IFACE          interface to bind to (default `0.0.0.0')
  -k, --socket=PATH         path to the unix socket
                            (default '/var/lock/qemu-nbd-DEVICE')
  -e, --shared=NUM          device can be shared by NUM clients (default '1')
  -t, --persistent          don't exit on the last connection
  -v, --verbose             display extra debugging information
  -x, --export-name=NAME    expose export by name
  -D, --description=TEXT    with -x, also export a human-readable description

Exposing part of the image:
  -o, --offset=OFFSET       offset into the image
  -P, --partition=NUM       only expose partition NUM

General purpose options:
  --object type,id=ID,...   define an object such as 'secret' for providing
                            passwords and/or encryption keys
  -T, --trace [[enable=]<pattern>][,events=<file>][,file=<file>]
                            specify tracing options
  --fork                    fork off the server process and exit the parent
                            once the server is running

Block device options:
  -f, --format=FORMAT       set image format (raw, qcow2, ...)
  -r, --read-only           export read-only
  -s, --snapshot            use FILE as an external snapshot, create a temporary
                            file with backing_file=FILE, redirect the write to
                            the temporary one
  -l, --load-snapshot=SNAPSHOT_PARAM
                            load an internal snapshot inside FILE and export it
                            as an read-only device, SNAPSHOT_PARAM format is
                            'snapshot.id=[ID],snapshot.name=[NAME]', or
                            '[ID_OR_NAME]'
  -n, --nocache             disable host cache
      --cache=MODE          set cache mode (none, writeback, ...)
      --aio=MODE            set AIO mode (native or threads)
      --discard=MODE        set discard mode (ignore, unmap)
      --detect-zeroes=MODE  set detect-zeroes mode (off, on, unmap)
      --image-opts          treat FILE as a full set of image options

See <http://qemu.org/contribute/report-a-bug> for how to report bugs.
More information on the QEMU project at <http://qemu.org>.
```