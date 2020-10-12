# UPS
## Tips
* 类型
  * Standby
    * 对电源充电，等待断电，断电后进行机械切换
    * 切换 20-100 ms
  * Line-Interactive
    * 类似于 Standby
    * 包含转换器，更好处理 brownouts 和 power sags
    * 适合 电涌和电压不稳定 场景
  * Online
    * 价格最贵
    * 通过电池吸引过滤，不存在切换
    * 将连接设备与实际供点隔离
* [Network UPS Tools](https://en.wikipedia.org/wiki/Network_UPS_Tools) - NUT
* SNMP Telnet 485 PDU
* 参考
  * [APC UPS 选择器](https://www.apc.com/shop/cn/zh/tools/ups_selector/) / [APC UPS Selector](https://www.apc.com/shop/us/en/tools/ups_selector)
  * [How to Select an Uninterruptible Power Supply (UPS) for Your Computer](https://www.howtogeek.com/161479/how-to-select-a-battery-backup-for-your-computer/)
  * APC [VA vs watt](https://download.schneider-electric.com/files?p_Doc_Ref=SPD_SADE-5TNQYF_EN)
  * [The difference between VA and watts](http://powerquality.eaton.com/thoughtleadership/power-protection/va-vs-watts.asp?cx=-400)
    * `Watts = VA * Power Factor`
    * `VA = Watts / Power Factor`
    * 例如一杯啤酒 🍺，VA 是酒花的最高点，实际的液体才是 Watt

```bash
apk add apcupsd

# 测试配置
apctest

service apcupsd start
apcaccess status
```

## 配置

__USB 配置__

```ini
## apcupsd.conf v1.1 ##
UPSCABLE usb

UPSTYPE usb
# USB UPSes 为空
DEVICE
```

```ini
## apcupsd.conf v1.1 ##
UPSCABLE smart
UPSTYPE apcsmart
DEVICE /dev/ttyUSB0
```

```ini
## apcupsd.conf v1.1 ##

#
# ========= General configuration parameters ============
#

# UPSNAME xxx
#   Use this to give your UPS a name in log files and such. This
#   is particulary useful if you have multiple UPSes. This does not
#   set the EEPROM. It should be 8 characters or less.
#UPSNAME

# UPSCABLE <cable>
#   Defines the type of cable connecting the UPS to your computer.
#
#   Possible generic choices for <cable> are:
#     simple, smart, ether, usb
#
#   Or a specific cable model number may be used:
#     940-0119A, 940-0127A, 940-0128A, 940-0020B,
#     940-0020C, 940-0023A, 940-0024B, 940-0024C,
#     940-1524C, 940-0024G, 940-0095A, 940-0095B,
#     940-0095C, 940-0625A, M-04-02-2000
#
UPSCABLE smart

# To get apcupsd to work, in addition to defining the cable
# above, you must also define a UPSTYPE, which corresponds to
# the type of UPS you have (see the Description for more details).
# You must also specify a DEVICE, sometimes referred to as a port.
# For USB UPSes, please leave the DEVICE directive blank. For
# other UPS types, you must specify an appropriate port or address.
#
# UPSTYPE   DEVICE           Description
# apcsmart  /dev/tty**       Newer serial character device, appropriate for
#                            SmartUPS models using a serial cable (not USB).
#
# usb       <BLANK>          Most new UPSes are USB. A blank DEVICE
#                            setting enables autodetection, which is
#                            the best choice for most installations.
#
# net       hostname:port    Network link to a master apcupsd through apcupsd's
#                            Network Information Server. This is used if the
#                            UPS powering your computer is connected to a
#                            different computer for monitoring.
#
# snmp      hostname:port:vendor:community
#                            SNMP network link to an SNMP-enabled UPS device.
#                            Hostname is the ip address or hostname of the UPS
#                            on the network. Vendor can be can be "APC" or
#                            "APC_NOTRAP". "APC_NOTRAP" will disable SNMP trap
#                            catching; you usually want "APC". Port is usually
#                            161. Community is usually "private".
#
# netsnmp   hostname:port:vendor:community
#                            OBSOLETE
#                            Same as SNMP above but requires use of the
#                            net-snmp library. Unless you have a specific need
#                            for this old driver, you should use 'snmp' instead.
#
# dumb      /dev/tty**       Old serial character device for use with
#                            simple-signaling UPSes.
#
# pcnet     ipaddr:username:passphrase:port
#                            PowerChute Network Shutdown protocol which can be
#                            used as an alternative to SNMP with the AP9617
#                            family of smart slot cards. ipaddr is the IP
#                            address of the UPS management card. username and
#                            passphrase are the credentials for which the card
#                            has been configured. port is the port number on
#                            which to listen for messages from the UPS, normally
#                            3052. If this parameter is empty or missing, the
#                            default of 3052 will be used.
#
# modbus    /dev/tty**       Serial device for use with newest SmartUPS models
#                            supporting the MODBUS protocol.
# modbus    <BLANK>          Leave the DEVICE setting blank for MODBUS over USB
#                            or set to the serial number of the UPS to ensure
#                            that apcupsd binds to that particular unit
#                            (helpful if you have more than one USB UPS).
#
UPSTYPE apcsmart
DEVICE /dev/ttyUSB0

# POLLTIME <int>
#   Interval (in seconds) at which apcupsd polls the UPS for status. This
#   setting applies both to directly-attached UPSes (UPSTYPE apcsmart, usb,
#   dumb) and networked UPSes (UPSTYPE net, snmp). Lowering this setting
#   will improve apcupsd's responsiveness to certain events at the cost of
#   higher CPU utilization. The default of 60 is appropriate for most
#   situations.
#POLLTIME 60

# LOCKFILE <path to lockfile>
#   Path for device lock file. This is the directory into which the lock file
#   will be written. The directory must already exist; apcupsd will not create
#   it. The actual name of the lock file is computed from DEVICE.
#   Not used on Win32.
LOCKFILE /var/lock

# SCRIPTDIR <path to script directory>
#   Directory in which apccontrol and event scripts are located.
SCRIPTDIR /etc/apcupsd

# PWRFAILDIR <path to powerfail directory>
#   Directory in which to write the powerfail flag file. This file
#   is created when apcupsd initiates a system shutdown and is
#   checked in the OS halt scripts to determine if a killpower
#   (turning off UPS output power) is required.
PWRFAILDIR /etc/apcupsd

# NOLOGINDIR <path to nologin directory>
#   Directory in which to write the nologin file. The existence
#   of this flag file tells the OS to disallow new logins.
NOLOGINDIR /etc


#
# ======== Configuration parameters used during power failures ==========
#

# The ONBATTERYDELAY is the time in seconds from when a power failure
#   is detected until we react to it with an onbattery event.
#
#   This means that, apccontrol will be called with the powerout argument
#   immediately when a power failure is detected.  However, the
#   onbattery argument is passed to apccontrol only after the
#   ONBATTERYDELAY time.  If you don't want to be annoyed by short
#   powerfailures, make sure that apccontrol powerout does nothing
#   i.e. comment out the wall.
ONBATTERYDELAY 6

#
# Note: BATTERYLEVEL, MINUTES, and TIMEOUT work in conjunction, so
# the first that occurs will cause the initation of a shutdown.
#

# If during a power failure, the remaining battery percentage
# (as reported by the UPS) is below or equal to BATTERYLEVEL,
# apcupsd will initiate a system shutdown.
BATTERYLEVEL 5

# If during a power failure, the remaining runtime in minutes
# (as calculated internally by the UPS) is below or equal to MINUTES,
# apcupsd, will initiate a system shutdown.
MINUTES 3

# If during a power failure, the UPS has run on batteries for TIMEOUT
# many seconds or longer, apcupsd will initiate a system shutdown.
# A value of 0 disables this timer.
#
#  Note, if you have a Smart UPS, you will most likely want to disable
#    this timer by setting it to zero. That way, you UPS will continue
#    on batteries until either the % charge remaing drops to or below BATTERYLEVEL,
#    or the remaining battery runtime drops to or below MINUTES.  Of course,
#    if you are testing, setting this to 60 causes a quick system shutdown
#    if you pull the power plug.
#  If you have an older dumb UPS, you will want to set this to less than
#    the time you know you can run on batteries.
TIMEOUT 0

#  Time in seconds between annoying users to signoff prior to
#  system shutdown. 0 disables.
ANNOY 300

# Initial delay after power failure before warning users to get
# off the system.
ANNOYDELAY 60

# The condition which determines when users are prevented from
# logging in during a power failure.
# NOLOGON <string> [ disable | timeout | percent | minutes | always ]
NOLOGON disable

# If KILLDELAY is non-zero, apcupsd will continue running after a
# shutdown has been requested, and after the specified time in
# seconds attempt to kill the power. This is for use on systems
# where apcupsd cannot regain control after a shutdown.
# KILLDELAY <seconds>  0 disables
KILLDELAY 0

#
# ==== Configuration statements for Network Information Server ====
#

# NETSERVER [ on | off ] on enables, off disables the network
#  information server. If netstatus is on, a network information
#  server process will be started for serving the STATUS and
#  EVENT data over the network (used by CGI programs).
NETSERVER on

# NISIP <dotted notation ip address>
#  IP address on which NIS server will listen for incoming connections.
#  This is useful if your server is multi-homed (has more than one
#  network interface and IP address). Default value is 0.0.0.0 which
#  means any incoming request will be serviced. Alternatively, you can
#  configure this setting to any specific IP address of your server and
#  NIS will listen for connections only on that interface. Use the
#  loopback address (127.0.0.1) to accept connections only from the
#  local machine.
NISIP 0.0.0.0

# NISPORT <port> default is 3551 as registered with the IANA
#  port to use for sending STATUS and EVENTS data over the network.
#  It is not used unless NETSERVER is on. If you change this port,
#  you will need to change the corresponding value in the cgi directory
#  and rebuild the cgi programs.
NISPORT 3551

# If you want the last few EVENTS to be available over the network
# by the network information server, you must define an EVENTSFILE.
EVENTSFILE /var/log/apcupsd.events

# EVENTSFILEMAX <kilobytes>
#  By default, the size of the EVENTSFILE will be not be allowed to exceed
#  10 kilobytes.  When the file grows beyond this limit, older EVENTS will
#  be removed from the beginning of the file (first in first out).  The
#  parameter EVENTSFILEMAX can be set to a different kilobyte value, or set
#  to zero to allow the EVENTSFILE to grow without limit.
EVENTSFILEMAX 10

#
# ========== Configuration statements used if sharing =============
#            a UPS with more than one machine

#
# Remaining items are for ShareUPS (APC expansion card) ONLY
#

# UPSCLASS [ standalone | shareslave | sharemaster ]
#   Normally standalone unless you share an UPS using an APC ShareUPS
#   card.
UPSCLASS standalone

# UPSMODE [ disable | share ]
#   Normally disable unless you share an UPS using an APC ShareUPS card.
UPSMODE disable

#
# ===== Configuration statements to control apcupsd system logging ========
#

# Time interval in seconds between writing the STATUS file; 0 disables
STATTIME 0

# Location of STATUS file (written to only if STATTIME is non-zero)
STATFILE /var/log/apcupsd.status

# LOGSTATS [ on | off ] on enables, off disables
# Note! This generates a lot of output, so if
#       you turn this on, be sure that the
#       file defined in syslog.conf for LOG_NOTICE is a named pipe.
#  You probably do not want this on.
LOGSTATS off

# Time interval in seconds between writing the DATA records to
#   the log file. 0 disables.
DATATIME 0

# FACILITY defines the logging facility (class) for logging to syslog.
#          If not specified, it defaults to "daemon". This is useful
#          if you want to separate the data logged by apcupsd from other
#          programs.
#FACILITY DAEMON

#
# ========== Configuration statements used in updating the UPS EPROM =========
#

#
# These statements are used only by apctest when choosing "Set EEPROM with conf
# file values" from the EEPROM menu. THESE STATEMENTS HAVE NO EFFECT ON APCUPSD.
#

# UPS name, max 8 characters
#UPSNAME UPS_IDEN

# Battery date - 8 characters
#BATTDATE mm/dd/yy

# Sensitivity to line voltage quality (H cause faster transfer to batteries)
# SENSITIVITY H M L        (default = H)
#SENSITIVITY H

# UPS delay after power return (seconds)
# WAKEUP 000 060 180 300   (default = 0)
#WAKEUP 60

# UPS Grace period after request to power off (seconds)
# SLEEP 020 180 300 600    (default = 20)
#SLEEP 180

# Low line voltage causing transfer to batteries
# The permitted values depend on your model as defined by last letter
#  of FIRMWARE or APCMODEL. Some representative values are:
#    D 106 103 100 097
#    M 177 172 168 182
#    A 092 090 088 086
#    I 208 204 200 196     (default = 0 => not valid)
#LOTRANSFER  208

# High line voltage causing transfer to batteries
# The permitted values depend on your model as defined by last letter
#  of FIRMWARE or APCMODEL. Some representative values are:
#    D 127 130 133 136
#    M 229 234 239 224
#    A 108 110 112 114
#    I 253 257 261 265     (default = 0 => not valid)
#HITRANSFER 253

# Battery charge needed to restore power
# RETURNCHARGE 00 15 50 90 (default = 15)
#RETURNCHARGE 15

# Alarm delay
# 0 = zero delay after pwr fail, T = power fail + 30 sec, L = low battery, N = never
# BEEPSTATE 0 T L N        (default = 0)
#BEEPSTATE T

# Low battery warning delay in minutes
# LOWBATT 02 05 07 10      (default = 02)
#LOWBATT 2

# UPS Output voltage when running on batteries
# The permitted values depend on your model as defined by last letter
#  of FIRMWARE or APCMODEL. Some representative values are:
#    D 115
#    M 208
#    A 100
#    I 230 240 220 225     (default = 0 => not valid)
#OUTPUTVOLTS 230

# Self test interval in hours 336=2 weeks, 168=1 week, ON=at power on
# SELFTEST 336 168 ON OFF  (default = 336)
#SELFTEST 336
```

## Ladis/雷迪斯
* https://www.ladis.com.cn/support/node_78.shtml
* 不建议购买 - 不兼容 APC 协议，监控管理麻烦

## ViewPower
* http://www.power-software-download.com/viewpower-cn.html

```bash
curl -LO https://www.ladis.com.cn/down/installViewPowerHTML_Linux_text_x86_64_20200409.tar.gz
tar zxvf installViewPowerHTML_Linux_text_x86_64_20200409.tar.gz

# http://127.0.0.1:15178/ViewPower/monitor?277
# --privileged -v /dev:/dev
docker run --rm -it -p 15178:15178 -v $PWD:/host --device=/dev/ttyUSB0 -w /host wener/base

apk del libc6-compat

curl -LOC- https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.32-r0/glibc-2.32-r0.apk
apk add --allow-untrust glibc-2.32-r0.apk
ln -s /usr/glibc-compat/lib/libc.so.6 /lib/libc.so.6

apk add gzip

./installViewPowerHTML_Linux_text_x86_64.bin
# /root/ViewPower/jre/bin/java com.zerog.lax.LAX /root/ViewPower/ViewPower.lax /tmp/env.properties.911
# /root/ViewPower/jre/bin/java -Djava.util.logging.config.file=/root/ViewPower/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -classpath /root/ViewPower/tomcat/bin/bootstrap.jar:/root/ViewPower/tomcat/bin/tomcat-juli.jar -Dcatalina.base=/root/ViewPower/tomcat -Dcatalina.home=/root/ViewPower/tomcat -Djava.io.tmpdir=/root/ViewPower/tomcat/temp org.apache.catalina.startup.Bootstrap start

# 日志
# tail -f /root/ViewPower/log/testlog/2020-08-27_00000.log
```