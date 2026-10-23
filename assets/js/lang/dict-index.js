/* 翻译字典 · index.html 首页 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  "核心概念": "Core Concepts",
  "欢迎 · 本模块学什么": "Welcome · What This Module Covers",
  "推荐学习路径": "Recommended Learning Path",
  "网页版目录": "Site Directory",
  "原始教材对照表": "Original Materials Map",
  "使用技巧": "Tips for Using This Site",
  "{0}核心概念": "{0}Core Concepts",
  "{0}实战：三步搭建路由": "{0}Hands-on: Routing in 3 Steps",
  "{0}V6 课程目录应用": "{0}V6 Course Directory App",
  "{0}动态路由练习": "{0}Dynamic Routes Exercise",
  "{0}Tailwind 综合练习": "{0}Tailwind Combined Exercise",
  "{0}Tailwind v4 配置": "{0}Tailwind v4 Setup",
  "{0}免费部署指南": "{0}Free Deployment Guide",

  "本页是模块 7 全部教材的网页学习版：React Router 核心概念、三步实战、V6 课程目录应用、动态路由、Tailwind 整合与免费部署。所有代码均附中文注释，并配有可交互的在线演示。":
    "This is the web learning edition of the entire Module 7: React Router core concepts, a three-step hands-on build, the V6 course directory app, dynamic routes, Tailwind integration, and free deployment. Every code sample carries annotated comments, and interactive live demos are included throughout.",

  "{0}欢迎 {1}": "{0}Welcome {1}",
  "先读我": "Read me first",
  "Module 7 包含两大主题：": "Module 7 covers two big topics:",
  "{0} —— React 生态中最常用的路由库，用来构建「单页面应用（SPA）」：多个页面视图共享同一个 HTML 文件，切换页面时{1}，地址栏 URL 随之变化。":
    "{0} — the most popular routing library in the React ecosystem, used to build single-page applications (SPAs): multiple views share one HTML file, and switching views does {1} while the URL in the address bar changes accordingly.",
  "不重新加载整个网页": "not reload the whole page",
  "{0} —— 把前端应用发布到 Render、Vercel、Netlify、GitHub Pages 等平台，并解决单页面应用「刷新后 404」的经典问题。":
    "{0} — publishing your front-end app to platforms such as Render, Vercel, Netlify, and GitHub Pages, and solving the classic \"404 after refresh\" problem of single-page applications.",
  "免费部署": "Free Deployment",
  "{0}传统多页应用每次点击链接都向服务器请求一个新 HTML；React Router 把「URL → 组件」的映射交给浏览器端的 JavaScript 处理，点击链接只切换组件，页面不刷新，因此切换更快、状态不丢失（例如输入框内容不会因为跳转而被清空）。":
    "{0}A traditional multi-page app requests a new HTML file from the server on every link click. React Router hands the \"URL → component\" mapping to client-side JavaScript: clicking a link only swaps components without reloading the page, so navigation is faster and state is preserved (for example, text typed into an input is not cleared by navigation).",
  "什么是客户端路由？": "What is client-side routing?",
  "本站包含的在线演示（都可直接点击操作）": "Live demos included on this site (all clickable)",
  "{0}：Home / Blogs / Contact / Dashboard（含 Stats、Settings 子页）+ 404 页面":
    "{0}: Home / Blogs / Contact / Dashboard (with Stats and Settings sub-pages) + a 404 page",
  "三步实战演示": "Three-step hands-on demo",
  "{0}：NavLink 导航高亮、Courses 嵌套子路由、自动重定向、404 页面":
    "{0}: NavLink active highlighting, nested Courses sub-routes, automatic redirect, and a 404 page",
  "课程目录演示": "Course directory demo",
  "{0}：{1} 路径参数与 {2}": "{0}: {1} path parameters and {2}",
  "动态路由演示": "Dynamic routes demo",
  "{0}：不改变地址栏的内存路由": "{0}: in-memory routing that never touches the address bar",
  "MemoryRouter 演示": "MemoryRouter demo",
  "{0}：Header / Home / Team / Projects 三页切换": "{0}: switching between Header / Home / Team / Projects",
  "Tailwind 综合练习演示": "Tailwind combined exercise demo",

  "{0}推荐学习路径 {1}": "{0}Recommended Learning Path {1}",
  "按顺序学最省力": "Following the order saves the most effort",
  "① 核心概念": "① Core Concepts",
  "② 三步实战": "② Three-Step Build",
  "③ V6 课程目录": "③ V6 Course Directory",
  "④ 动态路由": "④ Dynamic Routes",
  "⑤ Tailwind 整合": "⑤ Tailwind Integration",
  "⑥ 免费部署": "⑥ Free Deployment",
  "如果你只有 30 分钟：读完「① 核心概念」，再打开「③ V6 课程目录」里的在线演示点一点，就能建立直观认识。":
    "If you only have 30 minutes: read \"① Core Concepts\", then open the live demo on \"③ V6 Course Directory\" and click around to build intuition.",
  "如果要完成作业：「② 三步实战」和「⑤ Tailwind 综合练习」分别对应两份实验指导，照着做即可。":
    "If you need to finish assignments: \"② Three-Step Build\" and \"⑤ Tailwind Combined Exercise\" map to the two lab handouts — just follow along.",

  "{0}网页版目录 {1}": "{0}Site Directory {1}",
  "点击卡片进入": "Click a card to open",
  "BrowserRouter / Routes / Route / Link / NavLink / Outlet / Navigate / useParams 一次讲清，附 API 速查表。":
    "BrowserRouter / Routes / Route / Link / NavLink / Outlet / Navigate / useParams explained in one pass, plus an API cheat sheet.",
  "进入 →": "Open →",
  "实战：三步搭建路由": "Hands-on: Routing in 3 Steps",
  "跟着 Tutorial Lab 从零创建项目，完成基础路由、嵌套路由与 404，附最终成果在线演示。":
    "Follow the Tutorial Lab to create a project from scratch with basic routes, nested routes, and a 404 page, plus a live demo of the final result.",
  "V6 课程目录应用": "V6 Course Directory App",
  "React Router V6 五步递进：安装声明 → NavLink → 嵌套重定向 → 子链接 → 404，附完整应用演示。":
    "Five progressive steps in React Router v6: install & declare → NavLink → nesting & redirect → sub-links → 404, with a full app demo.",
  "动态路由练习": "Dynamic Routes Exercise",
  "URL 参数 :id、useParams、useNavigate、dashboard/* 嵌套路由，附练习与参考答案要点。":
    "URL parameters (:id), useParams, useNavigate, and dashboard/* nested routes, with exercises and answer key points.",
  "Tailwind 综合练习": "Tailwind Combined Exercise",
  "把 Header / Home / Team / Projects 四个组件改造成单页面路由应用，附在线演示。":
    "Turn the Header / Home / Team / Projects components into a single-page routed app, with a live demo.",
  "Tailwind v4 配置": "Tailwind v4 Setup",
  "Tailwind CSS v4.x + Vite 的安装配置、@theme 主题定制、v3 → v4 迁移要点。":
    "Installing and configuring Tailwind CSS v4.x with Vite, @theme customization, and v3 → v4 migration notes.",
  "免费部署指南": "Free Deployment Guide",
  "Render / Vercel / Netlify / GitHub Pages 全流程，重点解决 SPA 刷新 404 问题。":
    "The full workflow for Render / Vercel / Netlify / GitHub Pages, focusing on the SPA refresh-404 problem.",

  "{0}原始教材对照表 {1}": "{0}Original Materials Map {1}",
  "内容全部来自本模块资料": "All content comes from this module's materials",
  "原始教材": "Original Material",
  "形式": "Format",
  "对应网页页": "Web Page",
  "概念指南": "Concept guide",
  "动手实验": "Hands-on lab",
  "代码示例": "Code sample",
  "React Router-V6（0~4 共 5 个递进项目）": "React Router-V6 (5 progressive projects, 0–4)",
  "练习": "Exercise",
  "教程": "Tutorial",

  "{0}使用技巧": "{0}Tips for Using This Site",
  "{0}整个网站是纯静态页面，直接双击 {1} 就能打开；React、React Router 已打包在本地，在线演示全部可点击。":
    "{0}The whole site is pure static files — just double-click {1} to open it. React and React Router are bundled locally, and every live demo is fully clickable.",
  "无需服务器、无需联网：": "No server, no internet required: ",
  "{0}每个代码块右上角都有「复制」按钮；左侧目录中每小节都有勾选框，学习进度会保存在浏览器里（localStorage），顶栏进度条实时更新。":
    "{0}Every code block has a Copy button in its top-right corner; each section in the left sidebar has a checkbox, and your learning progress is saved in the browser (localStorage) with the top-bar progress bar updating in real time.",
  "一键复制代码：": "One-click code copying: ",
  "{0}演示源码位于 {1}，修改后按 README 说明重新编译即可看到效果。":
    "{0}The demo source lives in {1}; edit it and rebuild following the README to see your changes take effect.",
  "代码可以改着玩：": "Tweak the code freely: "
});
