---
title: React Awesome
---

# React Awesome

- [React Patterns](https://reactpatterns.com/)

:::tip

- 专门功能选择专业组件 - 配合 UI 组件达到更为理想的结果
  - react-table
  - react-hook-form
- 避免选择绑定了功能的组件
  - antd
- 选择组件库的考虑维度
  - 前端/后端 - C 端/B 端
  - 信息密度
  - 支持平台 - Web/移动端

:::

## 通用 UI 组件

- [palantir/blueprint](https://github.com/palantir/blueprint)
  - CSS 样式定义 + React 封装组件
  - 很多组件都可以直接 HTML + CSS 类定义达到效果 - 非常清晰明了
  - npm 包含源码 - IDE 能直接看到组件源码
  - `@blueprintjs/select`
    - 多功能 select 组件
    - 不控制样式，以逻辑为主
- [rsuite/rsuite](https://github.com/rsuite/rsuite)
  - 各方面神似 AntD - 但比 AntD 轻的多
- [ant-design/ant-design](https://github.com/ant-design/ant-design) - 不建议产品使用
  - 丰富强大的组件库
  - **过于** 高度封装
    - 做出来的东西都差不多，一眼能看出来是 AntD 组件
    - 难自定义
    - 想把什么都做掉做好 - 但结果并不理想
  - **大量依赖** 外部组件
    - 43 个依赖 - npm [dependencies](https://www.npmjs.com/package/antd?activeTab=dependencies)
    - 大量 `rc-xxx` - 外部组件用于实现单一功能 - 功能非常复杂
    - 但单一功能却都又比不上 react-table、react-hook-form 之类的专门组件 - 食之无味，弃之可惜
    - 且导致版本变化可能组件直接不兼容 - 例如 3->4 Form 和 Table
    - 大多 `rc-xxx` 的类型定义缺失，对 TS 也不友好，难看得到有什么属性 - 需要的时候得翻 `rc-xxx` 源码，但质量堪忧
  - icon 组件现在不允许使用字符串，需要引入具体组件
    - 用开发便捷性换取 bundle size - 觉得不值得 - 因为 antd 一般用于后台系统，bundle size 次要
    - icon 难以直接配置使用
  - 版本变化样式各方面变化较大 - 即便是小版本变化
    - 导致基本不可能自定义 antd 内部组件样式 - 维护成本高
- [mui-org/material-ui](https://github.com/mui-org/material-ui) - Material Design 风格
  - 如果选择 MD 风格则非常匹配
  - 完成程度和成熟度远远高于 antd
  - 组件非常多，支持高度样式自定义
- 公司相关设计风格组件库
  - [microsoft/fluentui](https://github.com/microsoft/fluentui) - 微软风格
  - [pinterest/gestalt](https://github.com/pinterest/gestalt) - pinterest
  - [JetBrains/ring-ui](https://github.com/JetBrains/ring-ui) - Jetbrains 产品系列
    - 例如 Youtrack
    - 查询用的组件功能非常强大 - [Query Assist](https://jetbrains.github.io/ring-ui/master/index.html?path=/story/components-query-assist--basic)
      - Youtrack 的 Issuse 搜索过滤
  - [segmentio/evergreen](https://github.com/segmentio/evergreen) - Segment
  - [elastic/eui](https://github.com/elastic/eui)
    - 组件丰富
    - 集成了 ACE 编辑器、Markdown 编辑器、DND
    - Search、Suggest、Expression 等查询组件功能强大
- 其他风格
  - [grommet/grommet](https://github.com/grommet/grommet)
  - [rebassjs/rebass](https://github.com/rebassjs/rebass)
    - 基于 theme-ui 和 styled-system 的基础组件
    - 很多样式都通过 props 控制
    - 如果喜欢这样的还不如选择 tailwindcss 更加规范实用
  - [primefaces/primereact](https://github.com/primefaces/primereact)
  - [DevExpress/devextreme-reactive](https://github.com/DevExpress/devextreme-reactive)
    - 功能强大的 [Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/demos/featured/overview/)
  - [uiwjs/uiw](https://github.com/uiwjs/uiw)
    - 国产
    - 包含一些特殊组件 - PIN 码、评分、日历
    - markdown 编辑器、高德地图、百度地图
    - [uiwjs/province-city-china](https://github.com/uiwjs/province-city-china) - 省市区数据

## 特殊 UI 组件

- [gabrielbull/react-desktop](https://github.com/gabrielbull/react-desktop)
  - 模仿 macOS High Sierra 和 Windows 10 的组件
- [reakit/reakit](https://github.com/reakit/reakit) - 专注于 accessible 的组件
  - ARIA
  - 在国内一般不关心 accessible
- [react-icons/react-icons](https://github.com/react-icons/react-icons)
  - [react-icons.github.io](https://react-icons.github.io/react-icons) 包含了大量可用 Icon
  - 来自 tailwincss 的 [heroicons](https://heroicons.com/) 崇尚直接 copy svg 使用
    - 简单方便
- [fullcalendar/fullcalendar](https://github.com/fullcalendar/fullcalendar)
  - 功能最为强大的日历组件 - 支持 React 绑定
- [popperjs/react-popper](https://github.com/popperjs/react-popper)
  - 显示弹出气泡
- [signavio/react-mentions](https://github.com/signavio/react-mentions)
  - 支持 `@username`
- [jedwatson/react-select](https://github.com/jedwatson/react-select)
  - 功能完善的 select 组件
  - 通过 emotion 控制样式 - 如果没有使用 emotion 建议避免使用

### 编辑器

- Markdown
  - [andrerpena/react-mde](https://github.com/andrerpena/react-mde)
  - [HarryChen0506/react-markdown-editor-lite](https://github.com/HarryChen0506/react-markdown-editor-lite)
  - [uiwjs/react-md-editor](https://github.com/uiwjs/react-md-editor)
- [margox/braft-editor](https://github.com/margox/braft-editor)
  - [margox/braft-extensions](https://github.com/margox/braft-extensions) - 扩展包

## 路由

- [ReactTraining/react-router](https://github.com/ReactTraining/react-router)
  - React 16.8 hook 之前已经存在
  - v5 添加 hook 支持，Swith 和 Route 组件可选
  - 支持 MemoryRouter，支持 React Native
  - 核心组件
    - Router - 提供 history 管理和上下文 - history 实现在 [history](https://github.com/ReactTraining/history) 包
      - BrowserRouter 基于当前 URL
      - HashRouter 基于 URL 但使用 `#/url` 模式
      - StaticRouter - 静态地址，用于 SSR
      - NativeRouter - 支持 react-native
      - 核心状态 location - 从 history 监听变化
      - 提供 history 上下文 - useHistory
      - 提供 Route 上下文 - useLocation、useParams
    - Route - 匹配后渲染
    - Switch - 只会渲染一个匹配的 Route
    - Link, NavLink, Redirect - 导航，修改 url
    - Prompt - 用于阻塞 history 发生变化
  - [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
    - 提供了统一配置 route 的逻辑 - 很简单，可以作为参考
    - matchRoutes - 匹配嵌套路由 - 返回匹配的 tree 路由数组
    - renderRoutes - 渲染嵌套路由 - 递归 Switch, 遍历 Route
- [reach/router](https://github.com/reach/router)
  - React Router 作者在 hook 出现后进行的尝试
  - 目前 hook 能力已经合并回 react router v5
  - 不使用 Swith 和 Route 组件，而是直接在组件上添加 path 进行匹配
- 参考
  - [The Future of React Router and @reach/router](https://reacttraining.com/blog/reach-react-router-future/) - 2019
    - @reach/router 是在 hook 出现后的新尝试
    - 现在所有 hook 功能也合并到了 react-router v5

## 功能组件

- [tannerlinsley/react-table](https://github.com/tannerlinsley/react-table)
  - 实现各种 table 功能
- [tannerlinsley/react-query](https://github.com/tannerlinsley/react-query)
  - 异步查询缓存更新
- [vercel/swr](https://github.com/vercel/swr)
  - 类似于 react-query 但更适合于前端定时刷新场景
  - 支持 SSR
- [bokuweb/react-rnd](https://github.com/bokuweb/react-rnd) - Resize & Drag
  - 实现类似窗口的效果
- [bvaughn/react-window](https://github.com/bvaughn/react-window) - 虚拟滚动
  - [Lodin/react-vtree](https://github.com/Lodin/react-vtree)
    - 基于 react-window 实现的 tree 渲染
- [bvaughn/react-virtualized](https://github.com/bvaughn/react-virtualized)
  - 功能比 react-window 多但更复杂 - 目前不推荐使用
- [atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - 拖放
  - Drag & Drop
- [gregberge/loadable-components](https://github.com/gregberge/loadable-components)
  - 异步加载组件

## 数据校验
- 一般都不是 react 相关
- 常用 yup, joi, props-type, json-schema
- json-schema
  - 序列化好
  - 工具支持
  - 功能少 / 弱
- yup
  - js 书写方便
  - 但不方便序列化
- props-type
  - React 组件属性校验

## Form

- [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form)
  - 基于 hook 的 form 语意实现
  - 轻量简单 - 没有复杂概念，直接 useForm 即可使用
  - 状态独立 - 性能好
  - 侵入性非常低
    - 不强制要求 Form 上下文
    - 可以通过 ref 注册
  - 注意
    - 默认 mode 为 submit - 在提交的时候才会校验
    - 基于 ref 注册可能会被 deregister
- [formium/formik](https://github.com/formium/formik)
  - 基于组件构建表单
  - 默认 Formik 全量渲染
  - 组件 Field 封装
  - 编码量较多
  - [formium](https://github.com/formium/formium/tree/master/examples)
    - 商业的 headless form builder
- [final-form/react-final-form](https://github.com/final-form/react-final-form)
  - 基于 Final Form 的 React 封装
  - 组件逻辑上类似 formik - 但要简单一点
  - 核心 final form 也支持 vue、web component 等
  - [formnerd](https://formnerd.co/)
    - 商业的 form 提交服务
  - [data-driven-forms/form-builder](https://github.com/data-driven-forms/form-builder)
    - 开源的 form builder
    - 尚不成熟

## 样式

- styled-components
  - 包装现有组件，添加 className
- emotion
  - 生成 className

## 状态管理

- [facebookexperimental/Recoil](https://github.com/facebookexperimental/Recoil)
  - [Recoil: State Management for Today's React](https://youtu.be/_ISAA_Jt9kI)
- [paol-imi/react-reparenting](https://github.com/paol-imi/react-reparenting)
  - 实现切换 parent 不丢失状态
- [jamiebuilds/unstated-next](https://github.com/jamiebuilds/unstated-next)
  - 简单封装 context+state - 共享业务状态逻辑，在状态基础上添加操作
  - 反转 useHook
- [FormidableLabs/react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)
  - 用于在实现状态管理时快速比较是否发生变化
  - 减少变化，避免刷新
- [immerjs/use-immer](https://github.com/immerjs/use-immer)
  - useImmer - 基于 immer 的状态更新
  - 当状态较多时能很大程度简化操作 - 从 `setState(s=>({...s,loading:true}))` 变为 `update(s=>{s.loading=true})`
- 订阅
  - [dai-shi/react-tracked](https://github.com/dai-shi/react-tracked)
  - [dai-shi/use-context-selector](https://github.com/dai-shi/use-context-selector)
  - [reactivex/rxjs](https://github.com/reactivex/rxjs)
    - rxjs 能非常简单的实现基于订阅的状态管理
  - [reduxjs/redux-toolkit](https://github.com/reduxjs/redux-toolkit)
    - redux-toolkit 简化了使用 redux 的难度
    - 定义了使用规范
  - [storeon/storeon](https://github.com/storeon/storeon) - 185 bytes event-based Redux-like state manager
    - 事件驱动 - 内建 `@init`, `@dispatch`, `@changed` - 初始化，分发，变化检测
    - `const { dispatch, users, projects } = useStoreon('users', 'projects')`
      - 本质上是监听 @changed 来触发状态变化进行渲染
    - storeon - [index.js](https://github.com/storeon/storeon/blob/main/index.js)
    - React hook - [react/index.js](https://github.com/storeon/storeon/blob/main/react/index.js)
    - 结构逻辑比 redux 清晰的多

## 图表

- [recharts/recharts](https://github.com/recharts/recharts)
  - 基于 d3 封装
  - 功能比较原始 - 自定义能力较强 - 自定义 svg - 随意画图
  - 类似于通过 react 渲染 svg - 但需要熟悉 svg 语法
  - children 可以直接写 svg
- [airbnb/visx](https://github.com/airbnb/visx)
  - React 渲染 SVG
  - 预设了较多样式和图表元素
- [FormidableLabs/victory](https://github.com/FormidableLabs/victory)
- [plouc/nivo](https://github.com/plouc/nivo)
- [uber/react-vis](https://github.com/uber/react-vis)
  - 不太活跃
- [plotly/react-plotly.js](https://github.com/plotly/react-plotly.js/)
  - React 封装 plotly.js
  - [plotly.js](https://github.com/plotly/plotly.js) - 所有图表都可以通过序列化的 JSON 表示
    - 支持非常多的预设图表
    - 显示支持一定程度自定义
- [alibaba/BizCharts](https://github.com/alibaba/BizCharts)
  - 阿里 BizCharts - 基于 G2 封装 React
  - 封装程度高 - 支持较多类型图表
- G2Plot
  - 基于 G2 封装的默认可用图表
- @ant-design/charts

  - 基于 G2Plot 封装 React

- [sbstjn/timesheet.js](https://github.com/sbstjn/timesheet.js)
- [projectstorm/react-diagrams](https://github.com/projectstorm/react-diagrams)
  - 节点流程图
- [antvis/G2](https://github.com/antvis/G2)
- [chartjs/Chart.js](https://github.com/chartjs/Chart.js)
  - 基于 canvas

## 开发工具

- [storybookjs/storybook](https://github.com/storybookjs/storybook)
  - 不清楚如何选择，那就选择 Storybook
- [styleguidist/react-styleguidist](https://github.com/styleguidist/react-styleguidist)
  - 类似于 storybook，提供独立环境
- [doczjs/docz](https://github.com/doczjs/docz)
  - 组件 Doc 和 开发
  - 基于 MDX
- [react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos)
