---
title: 还原的Bda计算器
slug: bbk-bda-calc
tags:
- 编程
- 步步高
- BBVM
date: 2011-03-11 13:44:00
---


![黑色主题截图](https://github.com/wenerme/wener/raw/master/story/%E6%88%91%E9%82%A3%E4%BA%9B%E6%AD%A5%E6%AD%A5%E9%AB%98%E7%9A%84%E6%95%85%E4%BA%8B/%E8%AE%A1%E7%AE%97%E5%99%A8/Cal.gif)
![蓝色主题截图](https://github.com/wenerme/wener/raw/master/story/%E6%88%91%E9%82%A3%E4%BA%9B%E6%AD%A5%E6%AD%A5%E9%AB%98%E7%9A%84%E6%95%85%E4%BA%8B/%E8%AE%A1%E7%AE%97%E5%99%A8/B_Cal.gif)

原帖[链接](http://club.eebbk.com/bbkbbs/showtopic/255060/1)

<!-- more -->

```
刚开始看到图片的时候会不会觉得是Bda呢？

 '//////////////////////////
'////////还原de计算器//////
'////////作者id:a3160586///
'////////作者:Wener////////
'////////=================/
'////////欢迎访问//////////
'////////club.eebbk.com////
'//////////////////////////

图片都是用的和小机上一样的图片
展示的效果也和小机上基本相同，好像只是没有出来error的情况
还是有一点点缺点，就是处理小数的时候不是很有力，有时会出现误差

你可以直接把全部代码复制到自己的代码中进行调用 Cal_Calculator( the)
the为假的时候是黑色主题，为真的时候是蓝色主题
变量的命名都是用Cal_开头的，只有几个公用的函数才没那样处理

declare function str2float!( str2float_p_fstr$) 把字符串转换为浮点数
declare function float2str$( float2str_p_flo!) 把浮点数转换为字符串  这里有时候会产生误差
declare function ShowFloat( ShowFloat_p_hPage, ShowFloat_p_hImg, ShowFloat_p_x, ShowFloat_p_y, ShowFloat_p_Float$) 用图片来显示浮点数的字符串

这几个函数是相互独立的，可以任意调用，但是这个计算器必须依赖这三个函数

谢谢大家参考学习~
有意学习的可以看看下面

原先我在想着写这个的时候，想的是多么的简单~~~当做起来的时候才发现，原来~不只是想的那么简单~
instr，在电脑上，没查找到的时候是返回0的，而在最新的bda上是返回-1
所以 还是用 < 1 或者 > 0 来判断是否查找到要方便些
我不知道小机上的left能用不，所以全部是用mid代替的

s! = 0.0202
print s! * 100000
你猜结果是多少~？


2019.999878
这就是我之所以不能保证精确的原因，在程序中我略加处理过了，但是还是免不了有出错情况的
特别是处理很多小数的时候。。。。
要是出错了也只能按c取消了从来~

在处理键盘按键的时候，觉得我的那个想法是 很不错的，大家可以借鉴借鉴，就是~~~~~~
看代码吧，嘿嘿  保证超越前人，正在做的ime也是用的这样的思路。申请个专利哦

这里对热衷于汇编的人说几句话，其实机器并没有你们想的那么不堪~
我觉得速度对我来说还是很不错的，特别是我在屏幕上乱按的时候，因为太快，导致很多键还没恢复的时候都又按下了，恢复是40ms延时的，可想，其实速度还是够了啊~
汇编作为辅助，是最佳的选择，我就是这样用的，把一些要重复用到的子过程放开，用call来调用的，这样可看性要高一点点~本来过程也不长，没必要用一个函数。

好了就到这里吧

预知更多，请看代码
本人qq：514403150
欢迎讨论交流
^.^
```
