/* 翻译字典 · concepts.html 核心概念 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "什么是客户端路由": "What Is Client-Side Routing",
  "安装 React Router": "Installing React Router",
  "三种路由器": "The Three Routers",
  "Routes 与 Route": "Routes and Route",
  "Link 与 NavLink": "Link and NavLink",
  "Outlet 与嵌套路由": "Outlet and Nested Routes",
  "Navigate 重定向": "Navigate Redirects",
  "useParams 动态路由": "useParams Dynamic Routes",
  "404 错误页面": "The 404 Page",
  "URL 映射总表": "URL Mapping Summary",
  "最佳实践": "Best Practices",
  "API 速查表": "API Cheat Sheet",

  /* ----  hero / 正文 ---- */
  "React Router 核心概念": "React Router Core Concepts",
  "依据教材《REACT ROUTER Example Guide and Tutorial》整理：路由器、路由容器、路由定义、导航组件、嵌套路由、重定向、动态参数与 404 处理。每个知识点都配有带中文注释的代码。":
    "Compiled from the course material \"REACT ROUTER Example Guide and Tutorial\": routers, route containers, route definitions, navigation components, nested routes, redirects, dynamic parameters, and 404 handling. Every topic comes with annotated code.",
  "{0}什么是客户端路由 {1}": "{0}What Is Client-Side Routing {1}",
  "SPA 的灵魂": "The soul of an SPA",
  "React Router 是 React 的{0}，让你用同一个单页面应用（SPA）呈现多个视图，并在视图之间导航。":
    "React Router is a {0} for React that lets you present multiple views inside one single-page application (SPA) and navigate between them.",
  "声明式路由库": "declarative routing library",
  "传统多页应用（MPA）": "Traditional multi-page app (MPA)",
  "单页面应用（SPA + React Router）": "Single-page app (SPA + React Router)",
  "点击链接": "Clicking a link",
  "浏览器向服务器请求新 HTML，整页刷新": "The browser requests a new HTML file from the server; the whole page reloads",
  "JavaScript 拦截点击，只切换组件，无刷新": "JavaScript intercepts the click and only swaps components — no reload",
  "地址栏": "Address bar",
  "变成新网址": "Changes to a new URL",
  "同样变化（history API 或 hash）": "Changes too (via the history API or the hash)",
  "速度": "Speed",
  "每次都有白屏等待": "A white-screen wait every time",
  "瞬时切换，体验接近原生 App": "Instant switching, close to a native app experience",
  "页面状态": "Page state",
  "全部丢失": "Everything is lost",
  "React 状态保留（如输入框内容）": "React state is preserved (e.g. input contents)",
  "{0}React Router 做的事，就是把「URL 地址」与「要渲染的 React 组件」对应起来 —— 地址变了，组件跟着变。":
    "{0}All React Router does is map the \"URL\" to \"the React component that should render\" — when the address changes, the component follows.",
  "一句话理解：": "In one sentence: ",

  "{0}安装 React Router": "{0}Installing React Router",
  "在 Vite 创建的 React 项目中执行（本模块所有示例统一使用 v6）：":
    "Run this inside a Vite-created React project (every example in this module uses v6):",
  "{0}React Router v6 与 v5 的 API 区别很大（v6 中 {1} 被 {2} 取代、{3} 被 {4} 取代）。本教材全部基于 v6，安装时请使用 6.x 版本。":
    "{0}The v6 and v5 APIs differ a lot (in v6, {1} was replaced by {2}, and {3} by {4}). This course is entirely based on v6, so install the 6.x line.",
  "版本注意：": "Version note: ",

  "{0}三种路由器 {1}": "{0}The Three Routers {1}",
  "路由器（Router）是整个路由系统的基础，它把「当前位置」提供给所有路由组件。React Router 提供三种，按场景选择：":
    "A router is the foundation of the whole routing system: it provides the \"current location\" to every route component. React Router offers three — pick by scenario:",
  "组件": "Component",
  "URL 形态": "URL shape",
  "适用场景": "Best for",
  "注意": "Watch out",
  "{0}（干净 URL）": "{0} (clean URL)",
  "生产环境首选": "The default choice for production",
  "需要服务器配合：直接访问或刷新子路由时，服务器要返回 index.html，否则 404（见部署页）":
    "Needs server cooperation: when a sub-route is opened or refreshed directly, the server must return index.html, or you get a 404 (see the deployment page)",
  "静态托管、GitHub Pages、无服务器配置时": "Static hosting, GitHub Pages, or when you cannot configure the server",
  "URL 里带 {0}，但无需任何服务器配置，刷新不会丢页面":
    "The URL carries a {0}, but no server configuration is needed and refreshing never loses the page",
  "（不在地址栏显示）": "(not shown in the address bar)",
  "单元测试、React Native、嵌入式组件": "Unit tests, React Native, embedded components",
  "路由状态只保存在内存中，刷新页面会回到初始状态":
    "The routing state lives in memory only; refreshing returns to the initial state",
  "教材中的用法：BrowserRouter 包住整个应用": "How the course uses it: BrowserRouter wraps the whole app",
  "{0}教材 S25 示例把 {1} 放在 {2} 里；V6 示例放在 {3} 里。推荐放在入口 {4}，与组件逻辑分离，结构更清晰。本站在线演示统一使用 {5}，这样双击 HTML 文件也能正常演示（原因见「免费部署」页）。":
    "{0}The S25 samples put {1} inside {2}; the V6 samples put it inside {3}. The entry file {4} is recommended, keeping routing separate from component logic. The live demos on this site all use {5} so they still work when you double-click the HTML file (see the \"Free Deployment\" page for why).",
  "放置位置有两种写法，都对：": "Two valid placements: ",
  "BrowserRouter 的关键点": "Key points about BrowserRouter",
  "包住{0}（放在最外层）；": "wrap {0} (put it at the very outside);",
  "整个应用": "the whole app",
  "基于 HTML5 History API 保持 UI 与 URL 同步；": "uses the HTML5 History API to keep the UI in sync with the URL;",
  "使用{0}：{1} 而不是 {2}。": "uses {0}: {1} instead of {2}.",
  "干净的 URL": "clean URLs",

  "{0}Routes 与 Route {1}": "{0}Routes and Route {1}",
  "路由表": "The route table",
  "{0} 是路由容器，所有 {1} 都要写在它里面；同一时刻{2}会渲染。":
    "{0} is the route container; every {1} must live inside it, and at any moment {2} renders.",
  "只有一条匹配的路由": "only the one matching route",
  "Route 的三个核心概念": "Three core ideas about Route",
  "{0}：URL 模式，如 {1}、{2}、{3}；": "{0}: the URL pattern, e.g. {1}, {2}, {3};",
  "{0}：匹配成功后渲染的 React 元素，如 {1}；": "{0}: the React element rendered on a match, e.g. {1};",
  "{0}：把子 {1} 写进父 Route 内部，就形成嵌套路由。": "{0}: nesting child {1} inside a parent Route creates nested routes.",
  "嵌套": "Nesting",
  "路径的三种写法": "Three ways to write paths",
  "写法": "Form",
  "示例": "Example",
  "说明": "Meaning",
  "绝对路径（以 / 开头）": "Absolute path (starts with /)",
  "从根开始匹配，用于顶层路由": "Matches from the root; used for top-level routes",
  "相对路径（不以 / 开头）": "Relative path (no leading /)",
  "相对于父路由拼接；在 Layout（/）内部即 {0}": "Joined onto the parent route; inside Layout (/) it becomes {0}",
  "嵌套拼接": "Nested joining",
  "父 {0} + 子 {1}": "parent {0} + child {1}",
  "拼成 {0}": "joins into {0}",
  "通配符": "Wildcard",
  "匹配任意未命中的地址（404）": "Matches any unmatched address (404)",
  "路径参数": "Path parameter",
  "{0} 是占位符，可用 useParams 读取": "{0} is a placeholder you can read with useParams",
  "{0}{1} 没有 path，表示「父路径被精确匹配时」渲染。例如父路径是 {2}，访问 {3} 时渲染 Home；访问 {4} 时则渲染 Blogs。":
    "{0}An {1} route has no path: it renders when the parent path is matched exactly. For example, if the parent path is {2}, visiting {3} renders Home, while visiting {4} renders Blogs.",
  "index 路由：": "Index route: ",

  "{0}Link 与 NavLink {1}": "{0}Link and NavLink {1}",
  "导航组件": "Navigation components",
  "Link：不刷新页面的链接": "Link: a link that never reloads the page",
  "{0} 指定目标路径，可以是绝对路径（{1}）或相对路径（{2}）；":
    "{0} sets the target path, either absolute ({1}) or relative ({2});",
  "点击后{0}（SPA 行为），只切换组件；": "on click it {0} (SPA behavior), swapping components only;",
  "阻止整页刷新": "prevents a full page reload",
  "内部导航请使用 {0}，不要用 {1}。": "For internal navigation use {0}, never {1}.",
  "NavLink：会「高亮当前页」的链接": "NavLink: a link that highlights the current page",
  "NavLink 的两种进阶用法：": "Two advanced uses of NavLink:",
  "1. {0} 属性：{1} 表示只在{2}匹配 {3} 时才高亮（否则所有页面都会让「Home」高亮）。":
    "1. The {0} prop: {1} means highlight only when {2} matches {3} exactly (otherwise every page would highlight \"Home\").",
  "精确": "exactly",
  "2. 样式函数：{0}，根据激活状态动态设置样式。": "2. Style functions: {0} sets styles dynamically based on the active state.",

  "{0}Outlet 与嵌套路由 {1}": "{0}Outlet and Nested Routes {1}",
  "布局模式": "The layout pattern",
  "{0} 是「占位符」：父组件中，子路由匹配到的组件就渲染在 Outlet 的位置。这是实现「布局套页面」的核心。":
    "{0} is a placeholder: inside a parent component, whatever the child route matches renders right where the Outlet sits. This is the core of the \"layout wrapping pages\" pattern.",
  "两层嵌套的完整效果": "The full effect of two-level nesting",
  "→ Layout + Home（index 路由）": "→ Layout + Home (index route)",
  "{0}访问 {1} 时，从外到内逐层匹配 —— Layout 渲染导航，Dashboard 渲染自己的导航，Stats 渲染在最内层的 Outlet 里。{2}，这就是嵌套布局。":
    "{0}Visiting {1} matches layer by layer from the outside in — Layout renders the main nav, Dashboard renders its own nav, and Stats renders inside the innermost Outlet. {2}, and that is the nested layout.",
  "嵌套路由的行为：": "Nested routing behavior: ",
  "父子组件会同时显示": "parent and child components appear at the same time",

  "{0}Navigate 重定向 {1}": "{0}Navigate Redirects {1}",
  "自动跳转": "Automatic jumping",
  "{0} 是「声明式重定向」：渲染它时，立即跳转到 {1} 指定的地址。最常见的用途是给父路径设置默认子页面。":
    "{0} is a declarative redirect: the moment it renders, it jumps to the address given by {1}. Its most common use is setting a default child page for a parent path.",
  "{0}默认的跳转会往历史记录里「追加」一条。访问 {1} → 重定向到 {2} 时，如果不用 replace，用户按「后退」会回到 {3}，然后又被重定向走，造成「后退键失效」的错觉。加上 {4} 后，{5} 会被替换掉，后退直接回到上一个真实页面。":
    "{0}By default a jump appends an entry to the history stack. Visiting {1} redirects to {2}; without replace, pressing Back returns to {3}, which redirects again — making the Back button feel broken. With {4}, {5} is replaced instead, so Back goes straight to the previous real page.",
  "replace 的作用：": "What replace does: ",
  "如果需要在事件处理函数中跳转（例如表单提交后），则使用 {0}：":
    "If you need to navigate inside an event handler (say, after a form submit), use {0} instead:",
  "编程式导航": "Programmatic navigation",

  "{0}useParams 动态路由 {1}": "{0}useParams Dynamic Routes {1}",
  "URL 参数": "URL parameters",
  "路径中的 {0} 是「路径参数」。同一个 {1} 路由可以匹配 {2}、{3}……组件内部用 {4} 取出具体值。":
    "The {0} in a path is a path parameter. One {1} route can match {2}, {3}, and so on; inside the component, {4} reads out the concrete value.",
  "动态用户页": "Dynamic user page",
  "{0}URL 参数永远是{1}。即使地址是 {2}，{3} 也是 {4}，需要数字比较时先 {5}。":
    "{0}URL parameters are always {1}. Even when the address is {2}, {3} is a {4}; convert with {5} before numeric comparisons.",
  "注意：": "Note: ",
  "字符串": "string",

  "{0}404 错误页面": "{0}The 404 Page",
  "用通配路由 {0} 捕获所有未定义的地址：": "Use the wildcard route {0} to catch every undefined address:",
  "{0} 匹配任何未命中的路由；": "{0} matches any route that was not hit;",
  "{0}（React Router 按匹配度选路由，通配符优先级最低，放最后最保险）；":
    "{0} (React Router picks routes by specificity and the wildcard has the lowest priority, so putting it last is safest);",
  "必须放在路由表的最后": "it must come last in the route table",
  "给用户友好的错误提示，例如返回首页的链接。": "give users a friendly error message, such as a link back home.",

  "{0}URL 映射总表 {1}": "{0}URL Mapping Summary {1}",
  "地址 → 渲染的组件": "Address → rendered components",
  "渲染的组件": "Rendered components",
  "首页（带主导航）": "Home page (with main nav)",
  "博客页": "Blogs page",
  "联系页": "Contact page",
  "Dashboard 主页面": "Dashboard main page",
  "嵌套统计页": "Nested stats page",
  "嵌套设置页": "Nested settings page",
  "404 错误页": "404 error page",

  "{0}最佳实践": "{0}Best Practices",
  "路由结构": "Route structure",
  "把 {0} 放在应用根部（入口文件）；": "put {0} at the root of the app (the entry file);",
  "用 {0} 分组管理路由定义；": "group route definitions with {0};",
  "路由从「最具体」排到「最通用」，{0} 放最后。": "order routes from most specific to least specific, with {0} last.",
  "组件组织": "Component organization",
  "为共享导航创建{0}（Layout）；": "create a {0} (Layout) for shared navigation;",
  "布局组件": "layout component",
  "用 {0} 渲染子路由；": "render child routes with {0};",
  "页面组件放在专门的文件夹（如 {0}）。": "keep page components in a dedicated folder (e.g. {0}).",
  "路径约定": "Path conventions",
  "顶层导航用{0}（{1}）；": "use {0} for top-level navigation ({1});",
  "绝对路径": "absolute paths",
  "嵌套导航用{0}（{1}）；": "use {0} for nested navigation ({1});",
  "相对路径": "relative paths",
  "URL 保持简单直观。": "keep URLs simple and intuitive.",
  "导航模式": "Navigation patterns",
  "站内导航用 {0} 或 {1}；": "use {0} or {1} for in-app navigation;",
  "内部链接不要用 {0} 标签（会整页刷新）；": "never use {0} tags for internal links (they reload the page);",
  "在各个布局中保持一致的导航 UI。": "keep the navigation UI consistent across layouts.",

  "{0}API 速查表 {1}": "{0}API Cheat Sheet {1}",
  "考前看一眼": "A look before the exam",
  "名称": "Name",
  "类型": "Kind",
  "作用": "Purpose",
  "路由器，包住整个应用": "Router; wraps the whole app",
  "用 # 保存路由，适合静态托管": "Keeps routing in the #; great for static hosting",
  "内存路由，用于测试": "In-memory routing, for tests",
  "路由容器，只渲染匹配的那条": "Route container; renders only the match",
  "单条路由 path→element": "One route: path → element",
  "index 路由": "index route",
  "属性": "prop",
  "父路径精确匹配时渲染": "Renders when the parent path matches exactly",
  "路径": "path",
  "通配 404 路由": "Wildcard 404 route",
  "路径参数占位符": "Path parameter placeholder",
  "无刷新导航链接": "Navigation link without reloads",
  "带激活高亮的链接": "Link with active highlighting",
  "子路由渲染占位符": "Placeholder where child routes render",
  "声明式重定向": "Declarative redirect",
  "读取路径参数": "Reads path parameters",
  "读取当前地址信息": "Reads the current location",
  "概念看完了？下一章「{0}」把这些组件真正用起来，做出第一个带嵌套路由和 404 的应用。":
    "Done with the concepts? The next chapter, \"{0}\", puts these components to work and builds your first app with nested routes and a 404 page.",

  /* ---- 代码块内的中文（按文本节点翻译，\u23CE 为换行） ---- */
  "// 1. 引入路由器": "// 1. Import the router",
  "\u23CE {/* 2. 用 BrowserRouter 包住整个应用，路由功能才能生效 */} \u23CE":
    "\u23CE {/* 2. Wrap the whole app with BrowserRouter to enable routing */} \u23CE",
  "\u23CE {/* path=\"/\"：根路径，Layout 作为整体布局组件 */} \u23CE":
    "\u23CE {/* path=\"/\": the root path; Layout is the overall layout component */} \u23CE",
  "}> \u23CE {/* index 路由：父路径精确匹配（即访问 /）时渲染 */} \u23CE":
    "}> \u23CE {/* index route: renders when the parent path (i.e. /) matches exactly */} \u23CE",
  "\u23CE {/* 通配路由：兜住所有未匹配的地址，当作 404 页，必须放最后 */} \u23CE":
    "\u23CE {/* wildcard route: catches every unmatched address as the 404 page; must be last */} \u23CE",
  "\u23CE {/* to 属性指定目标路径，替代原生":
    "\u23CE {/* the to prop sets the target path, replacing the native",
  "\u23CE {/* 子路由组件渲染在这里 */} \u23CE": "\u23CE {/* child route components render here */} \u23CE",
  "\u23CE {/* NavLink 与 Link 用法相同，激活时自动加上 class=\"active\" */} \u23CE":
    "\u23CE {/* NavLink works like Link and auto-adds class=\"active\" when active */} \u23CE",
  "\u23CE {/* 相对路径：解析为 /dashboard/stats */} \u23CE":
    "\u23CE {/* relative path: resolves to /dashboard/stats */} \u23CE",
  "\u23CE {/* Stats 或 Settings 渲染在这里 */} \u23CE":
    "\u23CE {/* Stats or Settings render here */} \u23CE",
  "// 访问 /courses 时，index 路由触发，自动重定向到 /courses/html":
    "// visiting /courses triggers the index route, which redirects to /courses/html",
  "}> \u23CE {/* index：父路径 /courses 被精确匹配时渲染 Navigate */} \u23CE {/* replace：替换当前历史记录，避免用户按「后退」卡在重定向上 */} \u23CE":
    "}> \u23CE {/* index: renders Navigate when /courses matches exactly */} \u23CE {/* replace: replaces the current history entry so Back doesn't get stuck on the redirect */} \u23CE",
  "{ \u23CE // 登录成功后跳到首页 \u23CE navigate('/'); \u23CE // navigate(-1) 表示后退一步，等同于浏览器「后退」按钮 \u23CE }}>登录":
    "{ \u23CE // after a successful login, go to the home page \u23CE navigate('/'); \u23CE // navigate(-1) steps back once, like the browser's Back button \u23CE }}>Log in",
  "// 路径写的是 /user/:id，这里就取出 id": "// the path says /user/:id, so read id out here",
  "// 路由定义": "// route definition",
  "// 链接": "// links"
});
