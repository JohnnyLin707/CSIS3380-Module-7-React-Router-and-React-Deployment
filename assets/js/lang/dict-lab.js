/* 翻译字典 · lab.html 三步实战 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "实验目标": "Lab Goals",
  "Step 1 · 创建项目并安装": "Step 1 · Create the Project",
  "Step 2 · 添加样式": "Step 2 · Add Styles",
  "Step 3 · 基础路由": "Step 3 · Basic Routing",
  "Step 4 · 运行与验证": "Step 4 · Run and Verify",
  "Step 5 · 嵌套路由 Dashboard": "Step 5 · Nested Dashboard Routes",
  "S25 三步骤对照": "S25 Three-Step Comparison",
  "在线演示": "Live Demo",
  "常见问题": "FAQ",

  /* ---- 正文 ---- */
  "依据《React Router Tutorial Lab》与课堂代码 React Router 2 - S25（router-step1/2/3）整理。从零创建一个 Vite + React 项目，做出「布局 + 多页面 + 嵌套路由 + 404」的完整单页面应用。":
    "Compiled from \"React Router Tutorial Lab\" and the class code React Router 2 - S25 (router-step1/2/3). Create a Vite + React project from scratch and build a complete single-page app with a layout, multiple pages, nested routes, and a 404 page.",
  "{0}实验目标": "{0}Lab Goals",
  "理解客户端路由的概念；": "understand the idea of client-side routing;",
  "在 React 项目中安装并设置 React Router；": "install and set up React Router in a React project;",
  "创建多个页面/视图并实现导航；": "create multiple pages/views and wire up navigation;",
  "学习路由参数与嵌套路由。": "learn about route parameters and nested routes.",
  "最终成品：一个带顶部导航的应用，可以在 Home / Blogs / Contact / Dashboard 之间切换，Dashboard 下还有 Stats 和 Settings 两个子页面，访问不存在的地址时显示 404。":
    "The final product: an app with a top navigation bar that switches between Home / Blogs / Contact / Dashboard, with Stats and Settings sub-pages under Dashboard, and a 404 page for addresses that don't exist.",

  "{0}Step 1 · 创建项目并安装 {1}": "{0}Step 1 · Create the Project {1}",
  "对应 router-step1": "matches router-step1",
  "用 Vite 创建 React 项目": "Create a React project with Vite",
  "安装 React Router DOM": "Install React Router DOM",
  "此时的项目（router-step1）就是一个普通的 Vite + React 模板：{0} 里还是计数器示例，没有任何路由功能。下一步开始改造。":
    "At this point the project (router-step1) is just a plain Vite + React template: {0} still holds the counter example with no routing at all. The next step starts the makeover.",

  "{0}Step 2 · 添加样式 {1}": "{0}Step 2 · Add Styles {1}",
  "在 {0} 下新建 {1}，并在 {2} 中引入。这份样式让导航栏变绿色、标题带边框，页面居中：":
    "Create {1} under {0} and import it from {2}. These styles turn the nav bar green, put borders around headings, and center the page:",

  "{0}Step 3 · 基础路由 {1}": "{0}Step 3 · Basic Routing {1}",
  "对应 router-step2": "matches router-step2",
  "新建 {0} 文件夹存放页面组件，然后重写 {1}：用 {2} 包住路由表。":
    "Create a {0} folder for the page components, then rewrite {1}: wrap the route table with {2}.",
  "各页面组件": "The page components",

  "{0}Step 4 · 运行与验证": "{0}Step 4 · Run and Verify",
  "在导航链接之间点击切换，观察：": "Click between the nav links and observe:",
  "页面内容在变化，但浏览器{0}（看不到白屏闪烁）；": "the content changes, but the browser {0} (no white-screen flash);",
  "没有整页刷新": "never reloads the whole page",
  "地址栏 URL 从 {0} 变成 {1}、{2}；": "the address bar URL goes from {0} to {1}, {2};",
  "手动输入一个不存在的地址（如 {0}），显示 404 页面。": "type an address that doesn't exist (e.g. {0}) and the 404 page appears.",
  "{0}打开浏览器开发者工具的 Network 面板，点击导航时可以看到{1}，只有 JS 在执行 —— 这就是客户端路由与多页应用的本质区别。":
    "{0}Open the Network panel of your browser's dev tools: while clicking the nav you'll see {1} — only JavaScript runs. That is the essential difference between client-side routing and a multi-page app.",
  "小实验：": "Mini experiment: ",
  "没有任何新的 HTML 文档请求": "no new HTML document requests at all",

  "{0}Step 5 · 嵌套路由 {1}": "{0}Step 5 · Nested Routes {1}",
  "对应 router-step3": "matches router-step3",
  "新建 Dashboard 组件，用 {0} 作为子页面的占位符；再创建 Stats 和 Settings 两个子页面组件：":
    "Create a Dashboard component that uses {0} as the placeholder for sub-pages, plus Stats and Settings components:",
  "然后在 {0} 中加入嵌套路由，并在 Layout 导航里加上 Dashboard 链接：":
    "Then add the nested routes to {0} and a Dashboard link to the Layout nav:",
  "src/App.jsx（最终版）": "src/App.jsx (final version)",
  "{0}Layout 渲染主导航 → Dashboard 渲染自己的导航 → Stats 渲染在最内层的 Outlet。三个组件同时出现在页面上，这就是嵌套布局的效果。":
    "{0}Layout renders the main nav → Dashboard renders its own nav → Stats renders inside the innermost Outlet. All three components show up at once — that is the nested layout in action.",
  "此时访问 {0}：": "Now visiting {0}:",

  "{0}S25 三步骤对照 {1}": "{0}S25 Three-Step Comparison {1}",
  "课堂代码 step1 → step2 → step3": "Class code: step1 → step2 → step3",
  "课堂提供的 {0} 文件夹把上面的过程拆成了三步，用选项卡对比每一步 {1} 的变化：":
    "The class {0} folder splits the process above into three steps; use the tabs to compare how {1} changes at each step:",
  "step1 · 无路由": "step1 · No Router",
  "step2 · 基础路由": "step2 · Basic Routing",
  "step3 · 嵌套路由": "step3 · Nested Routes",
  "最终项目结构": "Final project structure",
  "# 页面组件": "# page components",
  "# 布局：导航 + <Outlet />": "# layout: nav + <Outlet />",
  "# 首页": "# home page",
  "# 博客页": "# blogs page",
  "# 联系页": "# contact page",
  "# 嵌套父组件：子导航 + <Outlet />": "# nested parent: sub-nav + <Outlet />",
  "# 404 页": "# 404 page",
  "# 入口": "# entry point",
  "# 路由表": "# route table",

  "{0}在线演示 {1}": "{0}Live Demo {1}",
  "就是上面代码的运行结果": "This is the code above, running",
  "下面这个演示与 step3 的代码完全一致（仅为了在本地文件运行，把 {0} 换成了 {1}）。点击导航试试，注意地址栏 {2} 后面的变化：":
    "This demo is exactly the step3 code (with {0} swapped for {1} so it runs from a local file). Click the nav and watch what changes after {2} in the address bar:",
  "⏎ {0}三步实战 · 最终成果 ⏎ {1} ⏎": "\u23CE {0}Three-Step Build · Final Result \u23CE {1} \u23CE",
  "点击导航切换页面；访问不存在的地址试试 404": "Click the nav to switch pages; visit a non-existent address to see the 404",
  "演示使用 HashRouter（地址形如 {0}），其余逻辑与教材 step3 完全相同。":
    "The demo uses HashRouter (addresses look like {0}); everything else matches course step3 exactly.",
  "{0}依次点击 Home → Blogs → Contact → Dashboard → Stats/Settings，然后在地址栏把 {1} 后面改成 {2} 回车，观察 404 页面。":
    "{0}Click Home → Blogs → Contact → Dashboard → Stats/Settings in order, then change what follows {1} in the address bar to {2} and press Enter to see the 404 page.",
  "建议操作：": "Suggested walkthrough: ",

  "{0}常见问题": "{0}FAQ",
  "1. 点击链接后整个页面刷新了？": "1. Did the whole page reload after clicking a link?",
  "检查是否误用了 {0}。站内导航一律使用 {1}。": "Check whether you accidentally used {0}. In-app navigation should always use {1}.",
  "2. 404 页面不显示？": "2. Is the 404 page not showing up?",
  "确认 {0} 放在{1}，并且在同一个 {2} 内。": "Make sure {0} comes {1} and lives inside the same {2}.",
  "最后": "last",
  "3. 子页面没有出现在 Dashboard 里？": "3. Don't the sub-pages appear inside Dashboard?",
  "父组件 Dashboard 中必须放 {0}，否则子路由无处渲染。": "The parent Dashboard component must contain {0}, or the child routes have nowhere to render.",
  "4. 相对路径的链接点出来地址不对？": "4. Do relative-path links go to the wrong address?",
  "{0} 是相对当前路由的。它只有在 Dashboard（/dashboard）内部使用时才解析为 {1}；在顶层组件中请用绝对路径 {2}。":
    "{0} is relative to the current route. It only resolves to {1} when used inside Dashboard (/dashboard); in top-level components use the absolute path {2}.",
  "5. npm run dev 报错找不到模块？": "5. Does npm run dev report a missing module?",
  "确认执行过 {0}，且导入名称拼写正确（{1}，不是 {2}）。": "Make sure you ran {0} and that the import name is spelled correctly ({1}, not {2}).",
  "下一步：「{0}」用同样的知识做一个更完整的多页面应用（NavLink 高亮、Courses 嵌套、自动重定向、404）。":
    "Next: \"{0}\" uses the same knowledge to build a fuller multi-page app (NavLink highlighting, nested Courses, automatic redirect, 404).",

  /* ---- 代码块内的中文 ---- */
  "/* 页面整体：居中、限宽 */": "/* page overall: centered with a max width */",
  "/* 导航栏：绿色背景 + 阴影 */": "/* nav bar: green background + shadow */",
  "/* 导航列表：横向排列、居中 */": "/* nav list: horizontal and centered */",
  "/* 导航链接：白色加粗 */": "/* nav links: white and bold */",
  "/* 悬停时加下划线 */": "/* underline on hover */",
  "/* 主内容区 */": "/* main content area */",
  "/* 各级标题：绿色/红色描边，居中 */": "/* headings: green/red outline, centered */",
  "/* 引入上面这份样式 */": "/* import the styles above */",
  "// BrowserRouter：启用路由（本教材放在 App.jsx 中）": "// BrowserRouter: enables routing (this course puts it in App.jsx)",
  "\u23CE {/* \"/\" 是父路由，Layout 是布局组件 */} \u23CE":
    "\u23CE {/* \"/\" is the parent route; Layout is the layout component */} \u23CE",
  "}> \u23CE {/* index：访问 / 时渲染 Home */} \u23CE": "}> \u23CE {/* index: renders Home when / is visited */} \u23CE",
  "} /> \u23CE {/* \"*\" 通配路由：未匹配地址显示 404，放最后 */} \u23CE":
    "} /> \u23CE {/* \"*\" wildcard route: unmatched addresses show the 404; keep it last */} \u23CE",
  "\u23CE {/* 导航区：所有页面共享 */} ⏎": "\u23CE {/* nav area: shared by every page */} \u23CE",
  "\u23CE {/* Outlet：当前路由对应的页面渲染在这里 */} ⏎": "\u23CE {/* Outlet: the current route's page renders here */} \u23CE",
  "// 404 页面组件": "// 404 page component",
  "\u23CE {/* 相对路径：最终解析为 /dashboard/stats */} ⏎": "\u23CE {/* relative path: resolves to /dashboard/stats */} \u23CE",
  "\u23CE {/* Stats / Settings 子页面渲染在这里 */} ⏎": "\u23CE {/* the Stats / Settings sub-pages render here */} \u23CE",
  "} /> \u23CE {/* dashboard 是父路由，stats/settings 嵌在里面 */} \u23CE":
    "} /> \u23CE {/* dashboard is the parent route; stats/settings nest inside it */} \u23CE",
  "// step1：Vite 默认模板，还没有任何路由": "// step1: the default Vite template, no routing yet",
  "// step2：引入 BrowserRouter 与 Routes，实现基础路由": "// step2: import BrowserRouter and Routes for basic routing",
  "// step3：新增 Dashboard 嵌套路由（stats / settings）": "// step3: add the nested Dashboard routes (stats / settings)"
});
