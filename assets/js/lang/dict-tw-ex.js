/* 翻译字典 · tailwind-exercise.html 综合练习 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "练习目标": "Exercise Goals",
  "课堂提供的组件": "The Provided Components",
  "安装 Tailwind 与 Router": "Install Tailwind and Router",
  "用 Router 改造应用": "Refactor the App with Router",
  "自查清单": "Self-Check List",

  /* ---- 正文 ---- */
  "Tailwind + React Router 综合练习": "Tailwind + React Router Combined Exercise",
  "依据《React Router Exercise Lab》与课堂提供的 components/ 文件夹整理：把 Header、Home、Projects、Team 四个静态组件改造成一个单页面路由应用，并用 Tailwind CSS 美化。":
    "Compiled from \"React Router Exercise Lab\" and the class components/ folder: turn the four static components Header, Home, Projects, and Team into a single-page routed app, styled with Tailwind CSS.",
  "{0}练习目标": "{0}Exercise Goals",
  "给定组件文件（Header.jsx、Home.jsx、Projects.jsx、Team.jsx、index.css），完成一个 Vite + React 应用，要求：":
    "Given the component files (Header.jsx, Home.jsx, Projects.jsx, Team.jsx, index.css), build a Vite + React app that:",
  "把粉色导航区的 HOME / OUR TEAM / PROJECTS 三个链接改造成 React Router 导航；":
    "turns the three links HOME / OUR TEAM / PROJECTS in the pink nav area into React Router navigation;",
  "在中间主内容区渲染 Home、Team、Projects 三个页面；":
    "renders the Home, Team, and Projects pages in the main content area;",
  "组件使用 Tailwind CSS，因此需要先安装并配置 Tailwind。":
    "uses Tailwind CSS for the components, so Tailwind must be installed and configured first.",
  "页面结构 \u23CE ┌─────────────────────────────────────┐ \u23CE │ HEADER（粉色导航：Home / Team / Projects）│ ← Header.jsx，始终显示 \u23CE ├─────────────────────────────────────┤ \u23CE │ │ ⏎ │ 主内容区（根据路由切换） │ ⏎ │ Home.jsx / Team.jsx / Projects.jsx │ ← 由 <Routes> 决定渲染哪个 ⏎ │ │ ⏎ └─────────────────────────────────────┘":
    "Page structure \u23CE ┌─────────────────────────────────────┐ \u23CE │ HEADER (pink nav: Home / Team / Projects) │ ← Header.jsx, always visible \u23CE ├─────────────────────────────────────┤ \u23CE │                                   │ \u23CE │ Main content (switched by routing) │ \u23CE │ Home.jsx / Team.jsx / Projects.jsx │ ← <Routes> decides which one renders \u23CE │                                   │ \u23CE └─────────────────────────────────────┘",

  "{0}课堂提供的组件 {1}": "{0}The Provided Components {1}",
  "components/ 文件夹": "the components/ folder",
  "Header 组件原本使用普通 {0} 链接，需要改造成 {1}：":
    "The Header component originally used plain {0} links; refactor them into {1}:",
  "components/Header.jsx（改造后）": "components/Header.jsx (after refactoring)",
  "components/Home.jsx（节选）": "components/Home.jsx (excerpt)",
  "components/Team.jsx（节选）": "components/Team.jsx (excerpt)",
  "components/Projects.jsx（节选）": "components/Projects.jsx (excerpt)",
  "{0}课堂 {1} 使用的是 Tailwind {2}（{3}）。如果你按「{4}」页安装了 v4，请把这三行替换为一行 {5}，并配置 Vite 插件。":
    "{0}The class {1} uses Tailwind {2} ({3}). If you installed v4 following the \"{4}\" page, replace those three lines with the single line {5} and configure the Vite plugin.",
  "v3 语法": "v3 syntax",

  "{0}安装 Tailwind 与 Router": "{0}Install Tailwind and Router",
  "然后把课堂提供的 {0}（含 {1} 指令与页面样式）放入 {2}，并在 {3} 中引入。":
    "Then put the class-provided {0} (with its {1} directives and page styles) into {2} and import it from {3}.",

  "{0}用 Router 改造应用": "{0}Refactor the App with Router",
  "核心思路：{0}，下方主内容区由路由决定渲染哪个页面组件。把 {1} 改成：":
    "Core idea: {0}, and the main content area below renders whichever page component the route picks. Change {1} to:",
  "Header 始终显示": "Header is always visible",
  "{0}三个链接点击后页面无刷新切换、地址栏变化、粉色导航始终在最上方、Tailwind 样式（粉色 {1} 导航、卡片悬停效果）正常显示。":
    "{0}all three links switch pages without a reload, the address bar changes, the pink nav stays pinned at the top, and the Tailwind styles (the pink {1} nav, card hover effects) display correctly.",
  "提交前自查：": "Before you submit: ",
  "改造后的完整效果": "The finished result",
  "下面演示复刻了练习的最终效果（样式与 {0} 一致，头像/图片用色块代替外链资源）：":
    "The demo below replicates the exercise's final look (styling matches {0}; avatars and images use color tiles instead of external resources):",
  "⏎ {0}Tailwind 综合练习 · 最终效果 ⏎ {1} ⏎": "\u23CE {0}Tailwind Combined Exercise · Final Result \u23CE {1} \u23CE",
  "点击 Home / Our team / Projects 切换页面": "Click Home / Our team / Projects to switch pages",
  "演示使用 HashRouter；原始作业中使用 BrowserRouter，部署到 Netlify/Vercel 时记得按「免费部署」页配置重写规则。":
    "The demo uses HashRouter; the original assignment uses BrowserRouter, so remember to configure rewrite rules per the \"Free Deployment\" page when deploying to Netlify/Vercel.",

  "{0}自查清单": "{0}Self-Check List",
  "项目能 {0} 正常启动，无报错；": "the project starts normally with {0} and no errors;",
  "导航使用 {0}/{1}，不再有 {2} 整页刷新；": "the nav uses {0}/{1}, with no {2} full-page reloads;",
  "三个页面都能通过路由访问，且 Header 始终显示；": "all three pages are reachable through routes, and Header is always visible;",
  "Tailwind 类生效（flex 布局、宽度、间距）；": "Tailwind classes take effect (flex layout, widths, spacing);",
  "（可选）当前页导航有高亮效果；": "(optional) the current page's nav link is highlighted;",
  "（可选）访问未定义地址时显示 404 页面。": "(optional) undefined addresses show a 404 page.",
  "最后一步：「{0}」把这个应用发布到网上，并解决 SPA 刷新 404 的经典问题。":
    "Final step: \"{0}\" publishes this app to the web and solves the classic SPA refresh-404 problem.",

  /* ---- 代码块内的中文 ---- */
  "\u23CE {/* 原来是": "\u23CE {/* it used to be",
  "，现在用 NavLink 无刷新导航 */} ⏎ {/* end 表示只在精确匹配时高亮 */} ⏎":
    ", now NavLink navigates without reloads */} \u23CE {/* end means highlight only on an exact match */} \u23CE",
  "\u23CE {/* ...更多小节 */} ⏎": "\u23CE {/* ...more subsections */} \u23CE",
  "// 使用 Tailwind 工具类排版的三列团队卡片": "// a three-column team card laid out with Tailwind utilities",
  "\u23CE {/* ...Steve Roberts / Michael Cartney 同理 */} ⏎": "\u23CE {/* ...Steve Roberts / Michael Cartney work the same way */} \u23CE",
  "// 三个带悬停动画的项目卡片": "// three project cards with hover animations",
  "\u23CE {/* ...共三个 tile */} ⏎": "\u23CE {/* ...three tiles in total */} \u23CE",
  "# Tailwind（三选一，按版本要求选择）": "# Tailwind (pick one, depending on the version you need)",
  "# v3 经典方式": "# the classic v3 way",
  "# 生成 tailwind.config.js": "# generates tailwind.config.js",
  "# 或使用 v4（推荐，见 Tailwind v4 配置页）": "# or use v4 (recommended; see the Tailwind v4 Setup page)",
  "// 路由器包住整个应用": "// the router wraps the whole app",
  "\u23CE {/* Header 在 Routes 外面：不随路由切换重新渲染 */} ⏎": "\u23CE {/* Header sits outside Routes: it never re-renders on route changes */} \u23CE",
  "\u23CE {/* 每条路由对应一个页面组件 */} ⏎": "\u23CE {/* each route maps to one page component */} \u23CE",
  "// Tailwind 指令 + 页面样式": "// Tailwind directives + page styles"
});
