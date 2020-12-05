---
title: React Awesome
---

# React Awesome

:::tip

* 专门功能选择专业组件 - 配合 UI 组件达到更为理想的结果
  * react-table
  * react-hook-form
* 避免选择绑定了功能的组件
  * antd
* 选择组件库的考虑维度
  * 前端/后端 - C端/B端
  * 信息密度
  * 支持平台 - Web/移动端

:::

## 通用 UI 组件
* [palantir/blueprint](https://github.com/palantir/blueprint)
  * CSS 样式定义 + React 封装组件
  * 很多组件都可以直接 HTML + CSS 类定义达到效果 - 非常清晰明了
  * npm 包含源码 - IDE 能直接看到组件源码
* [rsuite/rsuite](https://github.com/rsuite/rsuite)
  * 各方面神似 AntD - 但比 AntD 轻的多
* [ant-design/ant-design](https://github.com/ant-design/ant-design) - 不建议产品使用
  * 丰富强大的组件库
  * __过于__ 高度封装
    * 做出来的东西都差不多，一眼能看出来是 AntD 组件
    * 难自定义
    * 想把什么都做掉做好 - 但结果并不理想
  * __大量依赖__ 外部组件
    * 43 个依赖 - npm [dependencies](https://www.npmjs.com/package/antd?activeTab=dependencies)
    * 大量 `rc-xxx` - 外部组件用于实现单一功能 - 功能非常复杂
    * 但单一功能却都又比不上 react-table、react-hook-form 之类的专门组件 - 食之无味，弃之可惜
    * 且导致版本变化可能组件直接不兼容 - 例如 3->4 Form 和 Table
    * 大多 `rc-xxx` 的类型定义缺失，对 TS 也不友好，难看得到有什么属性 - 需要的时候得翻 `rc-xxx` 源码，但质量堪忧
  * icon 组件现在不允许使用字符串，需要引入具体组件
    * 用开发便捷性换取 bundle size - 觉得不值得 - 因为 antd 一般用于后台系统，bundle size 次要
    * icon 难以直接配置使用
  * 版本变化样式各方面变化较大 - 即便是小版本变化
    * 导致基本不可能自定义 antd 内部组件样式 - 维护成本高
* [mui-org/material-ui](https://github.com/mui-org/material-ui) - Material Design 风格
  * 如果选择 MD 风格则非常匹配
  * 完成程度和成熟度远远高于 antd
  * 组件非常多，支持高度样式自定义
* 公司相关设计风格组件库
  * [microsoft/fluentui](https://github.com/microsoft/fluentui) - 微软风格
  * [pinterest/gestalt](https://github.com/pinterest/gestalt) - pinterest
  * [JetBrains/ring-ui](https://github.com/JetBrains/ring-ui) - Jetbrains 产品系列
    * 例如 Youtrack
    * 查询用的组件功能非常强大 - [Query Assist](https://jetbrains.github.io/ring-ui/master/index.html?path=/story/components-query-assist--basic)
      * Youtrack 的 Issuse 搜索过滤
  * [segmentio/evergreen](https://github.com/segmentio/evergreen) - Segment
  * [elastic/eui](https://github.com/elastic/eui)
    * 组件丰富
    * 集成了 ACE 编辑器、Markdown 编辑器、DND
    * Search、Suggest、Expression 等查询组件功能强大
* 其他风格
  * [grommet/grommet](https://github.com/grommet/grommet)
  * [rebassjs/rebass](https://github.com/rebassjs/rebass)
    * 基于 theme-ui 和 styled-system 的基础组件
    * 很多样式都通过 props 控制
    * 如果喜欢这样的还不如选择 tailwindcss 更加规范实用
  * [primefaces/primereact](https://github.com/primefaces/primereact)
  * [DevExpress/devextreme-reactive](https://github.com/DevExpress/devextreme-reactive)
    * 功能强大的 [Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/demos/featured/overview/)
## 特殊 UI 组件
* [gabrielbull/react-desktop](https://github.com/gabrielbull/react-desktop)
  * 模仿 macOS High Sierra 和 Windows 10 的组件
* [reakit/reakit](https://github.com/reakit/reakit) - 专注于 accessible 的组件
  * ARIA
  * 在国内一般不关心 accessible
* [react-icons/react-icons](https://github.com/react-icons/react-icons)
  * [react-icons.github.io](https://react-icons.github.io/react-icons) 包含了大量可用 Icon
  * 来自 tailwincss 的 [heroicons](https://heroicons.com/) 崇尚直接 copy svg 使用
    * 简单方便
* [fullcalendar/fullcalendar](https://github.com/fullcalendar/fullcalendar)
  * 功能最为强大的日历组件 - 支持 React 绑定
## 功能组件
* [tannerlinsley/react-table](https://github.com/tannerlinsley/react-table)
  * 实现各种 table 功能
* [tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)
  * 异步查询缓存更新
* [vercel/swr](https://github.com/vercel/swr)
  * 类似于 react-query 但更适合于前端定时刷新场景
  * 支持 SSR
* [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form)
  * 基于 hook 的 form 语意实现
  * 轻量简单
* [bokuweb/react-rnd](https://github.com/bokuweb/react-rnd) - Resize & Drag
  * 实现类似窗口的效果
* [bvaughn/react-window](https://github.com/bvaughn/react-window) - 虚拟滚动
  * [Lodin/react-vtree](https://github.com/Lodin/react-vtree)
    * 基于 react-window 实现的 tree 渲染
* [bvaughn/react-virtualized](https://github.com/bvaughn/react-virtualized)
  * 功能比 react-window 多但更复杂 - 目前不推荐使用
* [atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - 拖拽

## 样式
* styled-components
  * 包装现有组件，添加 className
* emotion
  * 生成 className

## 开发工具
* [storybookjs/storybook](https://github.com/storybookjs/storybook)
  * 不清楚如何选择，那就选择 Storybook
* [styleguidist/react-styleguidist](https://github.com/styleguidist/react-styleguidist)
  * 类似于 storybook，提供独立环境
* [doczjs/docz](https://github.com/doczjs/docz)
  * 组件 Doc 和 开发
  * 基于 MDX
* [react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos)