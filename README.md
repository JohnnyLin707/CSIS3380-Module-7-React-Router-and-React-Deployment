# Module 7 · React Router 网页学习版

本文件夹是《Module 7 - React Router, React Deployment》全部教材的网页版，方便学习：
**React Router 核心概念、三步实战、V6 课程目录应用、动态路由、Tailwind 整合、免费部署**。
所有代码均添加了中文注释，并配有 5 个可交互在线演示。

## 如何打开

**直接双击 `index.html` 即可**（纯静态网站，无需服务器、无需联网，React 与 React Router 已打包在本地）。

如果想用本地服务器方式打开（效果相同）：

```bash
cd "Module 7 - 网页学习版"
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 页面导航

| 页面 | 内容 |
| --- | --- |
| `index.html` | 首页：课程总览、学习路径、教材对照表 |
| `concepts.html` | React Router 核心概念 + API 速查表 |
| `lab.html` | 实战：三步搭建路由（Tutorial Lab + S25 step1/2/3）+ 在线演示 |
| `v6.html` | V6 课程目录应用（0~4 步递进）+ 在线演示 |
| `practice.html` | 动态路由练习（:id / useParams / 嵌套路由）+ 2 个在线演示 |
| `tailwind-exercise.html` | Tailwind + Router 综合练习 + 在线演示 |
| `tailwind.html` | Tailwind CSS v4 + Vite 配置教程 |
| `deploy.html` | 免费部署（Render / Vercel / Netlify / GitHub Pages） |

## 目录结构

```
Module 7 - 网页学习版/
├── index.html 等 8 个页面        # 网页版教材（中文注释）
├── assets/
│   ├── css/style.css            # 全站样式（含演示内部样式）
│   ├── js/main.js               # 目录生成 / 代码复制 / 高亮 / 学习进度
│   ├── js/demos/*.js            # 5 个在线演示的编译产物（普通脚本，离线可用）
│   └── src-demos/               # 演示源码（JSX，与页面展示的代码一致）
│       ├── s25-demo.jsx         # 三步实战应用
│       ├── directory-demo.jsx   # V6 课程目录应用
│       ├── user-params-demo.jsx # 动态路由 /user/:id
│       ├── dashboard-memory-demo.jsx  # MemoryRouter 嵌套路由
│       ├── tailwind-exercise-demo.jsx # Tailwind 综合练习
│       ├── build.mjs            # 一键重新编译
│       └── package.json
└── vendor/                      # highlight.js（本地语法高亮，离线可用）
```

## 修改在线演示

1. 编辑 `assets/src-demos/*.jsx`（源码与网页上展示的代码一致）；
2. 重新编译：

```bash
cd assets/src-demos
npm install     # 首次需要（下载 esbuild 与 react 等依赖）
npm run build   # 输出到 ../js/demos/
```

## 学习小贴士

- 每个小节左侧目录都有勾选框，学习进度会保存在浏览器 localStorage，顶栏进度条实时更新；
- 每个代码块右上角有「复制」按钮；
- **中英文一键切换**：点击页面右下角的浮动按钮（🌐 EN / 🌐 中文），整页文字（含代码注释）与在线演示即时互换；选择会记住在浏览器里，刷新后保持。英文模式适合对照英文原版教材；
- 在线演示都可以直接点击，注意观察浏览器地址栏 `#` 后面的变化。

## 目录结构（语言功能）

```
assets/js/
├── main.js            # 目录生成 / 代码复制 / 高亮 / 学习进度
├── lang.js            # 中英文切换引擎（悬浮按钮 + 原地替换）
└── lang/              # 翻译字典（按页面拆分，770 条）
    ├── dict-ui.js     #   全站共享 UI
    ├── dict-index.js  #   首页
    ├── dict-concepts.js / dict-lab.js / dict-v6.js
    ├── dict-practice.js / dict-tw-ex.js / dict-tw.js
    └── dict-deploy.js
```

翻译机制：普通区域按「元素模板」整体替换（行内代码/链接保留为占位符），代码块按「文本节点」逐行替换（保留缩进与语法高亮），因此 `<Link>`、`npm install` 等代码内容不会被误翻译。如需增补词条，编辑对应 `dict-*.js` 即可（key 为中文原文，`{0}` 为占位符，`\u23CE` 表示换行）。
