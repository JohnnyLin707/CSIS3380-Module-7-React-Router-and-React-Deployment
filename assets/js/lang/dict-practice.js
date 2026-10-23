/* 翻译字典 · practice.html 动态路由练习 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "练习目标": "Exercise Goals",
  "Part 1 · 创建项目": "Part 1 · Create the Project",
  "Part 2 · 基础路由": "Part 2 · Basic Routing",
  "Part 3 · 动态路由 :id": "Part 3 · Dynamic Routes (:id)",
  "Part 4 · 嵌套路由": "Part 4 · Nested Routes",
  "Part 5 · 样式美化": "Part 5 · Styling",
  "进阶挑战": "Bonus Challenges",

  /* ---- 正文 ---- */
  "依据《React Router Practice Exercise Lab》整理：创建项目 → 基础路由 → URL 参数动态路由（useParams）→ 嵌套路由（dashboard/*）→ 样式美化。页面内含两个在线演示，可直接点击体验。":
    "Compiled from \"React Router Practice Exercise Lab\": create a project → basic routes → dynamic routes with URL parameters (useParams) → nested routes (dashboard/*) → styling. Two live demos on this page let you click through everything.",
  "{0}练习目标": "{0}Exercise Goals",
  "用 Vite 搭建 React 项目并安装 React Router；": "set up a React project with Vite and install React Router;",
  "创建多个页面和导航链接；": "create multiple pages and navigation links;",
  "实现带 URL 参数的动态路由；": "implement dynamic routes with URL parameters;",
  "为复杂布局添加嵌套路由；": "add nested routes for complex layouts;",
  "美化应用界面。": "style the app for a better experience.",

  "{0}Part 1 · 创建项目": "{0}Part 1 · Create the Project",

  "{0}Part 2 · 基础路由 {1}": "{0}Part 2 · Basic Routing {1}",
  "把 {0} 替换为下面的内容 —— 为了专注路由本身，这个练习把所有组件都写在同一个文件里：":
    "Replace {0} with the content below — to keep the focus on routing, this exercise puts every component in one file:",
  "运行后点击导航，确认三个页面可以无刷新切换。":
    "Run it, click the nav, and confirm all three pages switch without a reload.",

  "{0}Part 3 · 动态路由 {1}": "{0}Part 3 · Dynamic Routes {1}",
  "URL 参数 + useParams": "URL parameters + useParams",
  "添加带参数的路由": "Add a parameterized route",
  "在 Routes 中添加": "Add inside Routes",
  "创建 UserPage 组件": "Create the UserPage component",
  "UserPage 组件": "UserPage component",
  "添加链接，模拟访问不同用户": "Add links to simulate visiting different users",
  "导航链接": "Navigation links",
  "{0}一条 {1} 路由可以匹配无数个地址，组件通过 {2} 拿到具体值，再去查询对应的数据（真实项目中通常用这个 id 请求接口）。":
    "{0}A single {1} route can match countless addresses; the component uses {2} to get the concrete value and then looks up the matching data (in real projects you'd usually call an API with this id).",
  "动态路由的本质：": "The essence of dynamic routes: ",
  "⏎ {0}动态路由演示 · /user/:id ⏎ {1} ⏎": "\u23CE {0}Dynamic Routes Demo · /user/:id \u23CE {1} \u23CE",
  "点击用户，或把地址栏 # 后面改成 /user/2": "Click a user, or change what follows # in the address bar to /user/2",
  "除 useParams 外，演示中的「随机拜访一位用户」按钮还展示了 useNavigate 编程式导航；访问不存在的 ID 时给出友好提示。":
    "Besides useParams, the \"Visit a random user\" button in the demo also shows programmatic navigation with useNavigate; visiting a non-existent ID gives a friendly message.",

  "{0}Part 4 · 嵌套路由 {1}": "{0}Part 4 · Nested Routes {1}",
  "创建 Dashboard 父组件（含子导航和 Outlet）与 Stats / Settings 子组件：":
    "Create the Dashboard parent component (with sub-nav and Outlet) plus the Stats / Settings child components:",
  "然后定义嵌套路由 —— 注意父路径带 {0}：": "Then define the nested routes — note the {0} on the parent path:",
  "嵌套路由定义": "Nested route definitions",
  "{0}下面这个演示与上方代码逻辑相同，但改用 {1}（内存路由器）—— 路由状态只存在于内存，不改变浏览器地址栏。它常用于单元测试，或像本页一样「一个页面里嵌入多个路由演示」的场景。演示中用 {2} 把内存中的当前路径显示了出来。":
    "{0}The demo below has the same logic as the code above but switches to {1} (the in-memory router) — the routing state lives only in memory and never touches the address bar. It's common in unit tests, or in scenarios like this page where several route demos are embedded together. The demo uses {2} to display the current in-memory path.",
  "MemoryRouter 演示：": "MemoryRouter demo: ",
  "⏎ {0}嵌套路由演示 · MemoryRouter ⏎ {1} ⏎": "\u23CE {0}Nested Routes Demo · MemoryRouter \u23CE {1} \u23CE",
  "点击 Stats / Settings，观察底部「当前内存路径」": "Click Stats / Settings and watch the \"current in-memory path\" at the bottom",
  "使用 MemoryRouter 时地址栏不变；若改用 HashRouter，地址会变成 #/dashboard/stats。":
    "With MemoryRouter the address bar never changes; with HashRouter it would become #/dashboard/stats.",

  "{0}Part 5 · 样式美化": "{0}Part 5 · Styling",
  "新建 {0} 并在 {1} 引入：": "Create {0} and import it from {1}:",

  "{0}进阶挑战 {1}": "{0}Bonus Challenges {1}",
  "学完可以试试": "Try these once you're done",
  "给 UserPage 加一个「用户不存在」的处理：当 id 不在数据中时显示提示和返回首页按钮（参考本页第一个演示）。":
    "Add \"user not found\" handling to UserPage: when the id isn't in the data, show a message and a back-home button (see the first demo on this page).",
  "用 {0} 实现一个「随机拜访一位用户」按钮。": "Use {0} to build a \"Visit a random user\" button.",
  "把顶部导航的 {0} 换成 {1}，并为激活状态加高亮样式。": "Swap {0} for {1} in the top nav and add highlight styles for the active state.",
  "给应用添加一条 {0} 的 404 路由。": "Add a {0} 404 route to the app.",
  "尝试 {0}：实现一个搜索框，把关键词放在地址栏 {1} 里。": "Try {0}: build a search box that keeps the keyword in the address bar as {1}.",
  "{0}useNavigate 在事件回调中调用 {1}；NavLink 激活时自动带 {2} 类；404 路由必须放在 {3} 最后。":
    "{0}Call {1} inside an event callback with useNavigate; an active NavLink automatically carries the {2} class; a 404 route must come last in {3}.",
  "参考答案要点：": "Answer key points: ",
  "下一步：「{0}」把 Tailwind CSS 与 React Router 结合起来，完成一份更完整的作业。":
    "Next: \"{0}\" combines Tailwind CSS with React Router for a fuller assignment.",

  /* ---- 代码块内的中文 ---- */
  "// 一次性导入所有要用的路由组件": "// import every route component you need in one go",
  "// 三个页面组件": "// three page components",
  "// BrowserRouter：包住整个应用": "// BrowserRouter: wraps the whole app",
  "\u23CE {/* 导航链接 */} ⏎": "\u23CE {/* navigation links */} \u23CE",
  "\u23CE {/* 路由表：地址 → 组件 */} ⏎": "\u23CE {/* route table: address → component */} \u23CE",
  "/* :id 是路径参数，/user/1、/user/2 都会匹配这一条 */": "/* :id is a path parameter; /user/1 and /user/2 both match this route */",
  "// 取出 URL 中的 id 参数（与路径里的 :id 对应）": "// read the id parameter from the URL (it matches :id in the path)",
  "/* 导航链接 */": "/* navigation links */",
  "\u23CE {/* 子路由渲染在这里 */} \u23CE": "\u23CE {/* child routes render here */} \u23CE",
  "// 在入口引入样式": "// import the styles from the entry file"
});
