/* 翻译字典 · v6.html 课程目录应用 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "项目概览": "Project Overview",
  "第 0 步 · 安装与声明路由": "Step 0 · Install and Declare Routes",
  "第 1 步 · NavLink 导航": "Step 1 · NavLink Navigation",
  "第 2 步 · 嵌套路由": "Step 2 · Nested Routes",
  "第 3 步 · 子链接与重定向": "Step 3 · Sub-links and Redirect",
  "第 4 步 · 404 页面": "Step 4 · The 404 Page",
  "数据文件": "Data Files",
  "本页知识点小结": "Key Takeaways",

  /* ---- 正文 ---- */
  "React Router V6 · 课程目录应用": "React Router v6 · Course Directory App",
  "依据课堂代码 React Router-V6（0~4 共 5 个递进项目）整理。这是一个「前端课程目录」网站，五步递进：安装声明路由 → NavLink 导航 → 嵌套路由 → 子链接与重定向 → 404 页面。":
    "Compiled from the class code React Router-V6 (5 progressive projects, 0–4). This is a front-end course directory site built in five steps: install & declare routes → NavLink navigation → nested routes → sub-links and redirect → 404 page.",
  "{0}项目概览": "{0}Project Overview",
  "这是一个课程目录网站（Course Directory），包含四个顶层页面：":
    "This is a course directory site (Course Directory) with four top-level pages:",
  "{0}：课程目录首页介绍；": "{0}: the directory's landing page;",
  "{0}：关于页面（通过 props 接收标题 {1}）；": "{0}: an about page (receives its heading via the {1} prop);",
  "{0}：教师列表（从 {1} 读取）；": "{0}: the teacher list (read from {1});",
  "{0}：课程页，内部再分 HTML / CSS / JavaScript 三个子页面。":
    "{0}: the courses page, split further into HTML / CSS / JavaScript sub-pages.",
  "→ Teachers（教师列表）": "→ Teachers (teacher list)",
  "→ Courses（父组件：子导航 + Outlet）": "→ Courses (parent component: sub-nav + Outlet)",
  "→ 自动重定向到 /courses/html（index + Navigate）": "→ auto-redirects to /courses/html (index + Navigate)",
  "→ HTML 课程列表": "→ HTML course list",
  "→ CSS 课程列表": "→ CSS course list",
  "→ JavaScript 课程列表": "→ JavaScript course list",
  "→ NotFound（404，第 4 步新增）": "→ NotFound (404, added in step 4)",

  "{0}第 0 步 · 安装与声明路由": "{0}Step 0 · Install and Declare Routes",
  "创建项目后安装依赖：": "After creating the project, install the dependency:",
  "在入口文件用 {0} 包住应用 —— 注意本系列与 S25 的写法不同：路由器放在 {1} 里，而不是 App 组件里：":
    "Wrap the app with {0} in the entry file — note this series differs from S25: the router lives in {1}, not inside the App component:",
  "然后在 {0} 中声明最初的两条路由：": "Then declare the first two routes in {0}:",
  "src/App.js（第 0 步）": "src/App.js (step 0)",
  "{0}Header 放在 {1} {2}，所以它不随路由切换而重新渲染，始终显示 —— 这比「布局组件 + Outlet」更简单的替代方案，适合只有顶部导航的场景。":
    "{0}Header sits {2} {1}, so it never re-renders when the route changes and is always visible — a simpler alternative to the \"layout component + Outlet\" pattern, ideal when you only have a top nav.",
  "注意 Header 的位置：": "Note where Header goes: ",
  "外面": "outside",

  "{0}第 1 步 · NavLink 导航": "{0}Step 1 · NavLink Navigation",
  "第 0 步的 Header 里用的是普通 {0}（点击没反应）。第 1 步改用 {1}，并补全四个页面的路由：":
    "The step 0 Header used plain {0} (clicking did nothing). Step 1 switches to {1} and completes the routes for all four pages:",
  "src/components/Header.js（第 1 步）": "src/components/Header.js (step 1)",
  "src/App.js（第 1 步）": "src/App.js (step 1)",
  "{0}NavLink 激活时会输出 {1}，写一条 {2} 就能高亮当前页。也可以用样式函数：{3}。":
    "{0}When a NavLink is active it emits {1}; one rule like {2} highlights the current page. You can also use a style function: {3}.",
  "用 CSS 给激活链接上色：": "Color the active link with CSS: ",

  "{0}第 2 步 · 嵌套路由 {1}": "{0}Step 2 · Nested Routes {1}",
  "Courses 下的三个子页面": "Three sub-pages under Courses",
  "给 {0} 加上 {1}（允许它带子路径），并把 html / css / javascript 三条子路由挂进去：":
    "Give {0} a {1} (letting it carry sub-paths) and hang the html / css / javascript child routes inside it:",
  "src/App.js（第 2 步）": "src/App.js (step 2)",
  "{0}v5 中嵌套路由写作 {1} 且子 Route 自带完整路径；v6 中父路由写 {2}，子路由只写相对路径片段（{3}），拼接后得到 {4}。":
    "{0}In v5 you wrote nested routes as {1} with each child Route carrying its full path; in v6 the parent route is written {2} and child routes only carry relative path segments ({3}), which join into {4}.",
  "v6 的新写法：": "The new v6 syntax: ",

  "{0}第 3 步 · 子链接与重定向": "{0}Step 3 · Sub-links and Redirect",
  "填入子路由，并用 {0} 让 {1} 自动跳到 HTML 页：":
    "Fill in the child routes and use {0} to make {1} jump to the HTML page automatically:",
  "src/App.js（第 3 步）": "src/App.js (step 3)",
  "Courses 组件负责子导航和 Outlet：": "The Courses component owns the sub-nav and the Outlet:",
  "其中一个子页面组件（三个文件结构相同，只是导入的数据不同）：":
    "One of the sub-page components (all three share the same structure; only the imported data differs):",

  "{0}第 4 步 · 404 页面": "{0}Step 4 · The 404 Page",
  "最后加入通配路由和 NotFound 组件：": "Finally add the wildcard route and the NotFound component:",
  "src/App.js（第 4 步 · 最终版）": "src/App.js (step 4 · final)",

  "{0}数据文件 {1}": "{0}Data Files {1}",
  "courses.js 与 teachers.js": "courses.js and teachers.js",
  "课程数据是普通的 JS 数组导出，每个课程包含标题、描述、图片与唯一 id：":
    "The course data is a plain exported JS array; each course has a title, description, image, and unique id:",
  "src/data/courses.js（节选）": "src/data/courses.js (excerpt)",
  "教师数据同理（{0} 默认导出 {1} 数组，Teachers 组件用 {2} 渲染成列表）。":
    "The teacher data works the same way ({0} default-exports a {1} array, and the Teachers component maps it into a list with {2}).",

  "{0}在线演示 {1}": "{0}Live Demo {1}",
  "第 4 步的完整应用": "The complete step 4 app",
  "这就是上面所有代码组合起来的完整应用（同样使用 HashRouter 以便本地运行）。试试看：":
    "This is all the code above combined into the complete app (again using HashRouter so it runs locally). Give it a try:",
  "点击导航，观察{0}（NavLink 的 active 类）；": "click the nav and watch {0} (NavLink's active class);",
  "当前页高亮": "the current page highlight",
  "进入 Courses，注意它会{0}（index + Navigate 重定向）；": "enter Courses and notice it {0} (the index + Navigate redirect);",
  "自动跳到 HTML": "jumps to HTML automatically",
  "在 HTML / CSS / JavaScript 之间切换，注意父级 Courses 区域保持不变；":
    "switch between HTML / CSS / JavaScript and notice the parent Courses area stays put;",
  "把地址栏 {0} 后面改成 {1}，查看 404 页面。": "change what follows {0} in the address bar to {1} to see the 404 page.",
  "⏎ {0}课程目录应用 · 完整版 ⏎ {1} ⏎": "\u23CE {0}Course Directory App · Full Version \u23CE {1} \u23CE",
  "导航高亮 / 自动重定向 / 嵌套子路由 / 404": "Active highlighting / auto-redirect / nested child routes / 404",
  "课程徽章用首字母色块代替原教材图片；数据与教材 data/courses.js 一致。":
    "Course badges use letter tiles instead of the original images; the data matches the course data/courses.js.",

  "{0}本页知识点小结": "{0}Key Takeaways",
  "步骤": "Step",
  "新增内容": "What's new",
  "关键知识点": "Key point",
  "BrowserRouter + 基础 Routes": "BrowserRouter + basic Routes",
  "路由器放在入口；Header 在 Routes 外常驻": "The router lives in the entry file; Header stays outside Routes",
  "NavLink + 四个页面": "NavLink + four pages",
  "NavLink 激活自动加 active 类；Route 的 element 可以传 props":
    "NavLink auto-adds the active class; a Route's element can receive props",
  "/courses/* 父路由": "/courses/* parent route",
  "v6 嵌套父路径带 {0}": "v6 nested parent paths carry a {0}",
  "子路由 + Outlet": "Child routes + Outlet",
  "子路径写相对片段；父组件用 Outlet 占位；NavLink 相对路径":
    "Child paths are relative segments; the parent holds an Outlet; NavLink paths are relative",
  "index 设默认子页；replace 避免后退卡住；{0} 放最后": "index sets the default child; replace keeps Back sane; {0} goes last",
  "下一步：「{0}」学习 URL 参数（{1}）与 {2}。": "Next: \"{0}\" covers URL parameters ({1}) and {2}.",

  /* ---- 代码块内的中文 ---- */
  "\u23CE {/* 路由器包住整个应用，App 内部只管路由表 */} ⏎": "\u23CE {/* the router wraps the whole app; App only holds the route table */} \u23CE",
  "// App 组件": "// App component",
  "\u23CE {/* Header 是常驻的顶部导航，放在 Routes 外面 */} ⏎": "\u23CE {/* Header is the always-on top nav, placed outside Routes */} \u23CE",
  "\u23CE {/* path=\"/\" 匹配根地址 */} ⏎": "\u23CE {/* path=\"/\" matches the root address */} \u23CE",
  "} /> ⏎ {/* path=\"about\" 匹配 /about（不带 / 也是绝对路径的简写） */} ⏎":
    "} /> \u23CE {/* path=\"about\" matches /about (a leading / is optional shorthand for an absolute path) */} \u23CE",
  "\u23CE {/* NavLink：当前地址匹配时自动加上 active 类，导航高亮 */} ⏎":
    "\u23CE {/* NavLink: auto-adds the active class when the address matches, for nav highlighting */} \u23CE",
  "} /> ⏎ {/* 通过 props 把标题传给 About 组件 */} ⏎": "} /> \u23CE {/* pass the heading to the About component via props */} \u23CE",
  "} /> ⏎ {/* path=\"/courses/*\"：* 表示 courses 后面还可以跟子路径 */} ⏎":
    "} /> \u23CE {/* path=\"/courses/*\": the * means courses can be followed by sub-paths */} \u23CE",
  "}> ⏎ {/* Write routes here... */} ⏎ {/* 暂时留空：下一步填入子路由 */} ⏎":
    "}> \u23CE {/* Write routes here... */} \u23CE {/* left empty for now; the next step fills in the child routes */} \u23CE",
  "}> ⏎ {/* 访问 /courses 时自动重定向到 /courses/html */} ⏎ {/* replace：替换历史记录，后退按钮不会卡住 */} ⏎ {/*":
    "}> \u23CE {/* visiting /courses auto-redirects to /courses/html */} \u23CE {/* replace: replaces the history entry so Back doesn't get stuck */} \u23CE {/*",
  "} /> ⏎ {/* 注意 Courses.js 中的": "} /> \u23CE {/* note the",
  "：它决定子路由渲染的位置 */} ⏎": " inside Courses.js: it decides where child routes render */} \u23CE",
  "\u23CE {/* 相对路径：解析为 /courses/html 等 */} ⏎": "\u23CE {/* relative paths: resolve to /courses/html and so on */} \u23CE",
  "\u23CE {/* HTML / CSS / JavaScript 三个子页面渲染在这里 */} ⏎":
    "\u23CE {/* the HTML / CSS / JavaScript sub-pages render here */} \u23CE",
  "// 把数据映射成课程卡片数组": "// map the data into an array of course cards",
  "// key 帮助 React 识别列表项，必须唯一": "// key helps React identify list items and must be unique",
  "}> ⏎ {/* index 路由：/courses 被精确匹配时重定向到 html */} ⏎":
    "}> \u23CE {/* index route: redirect to html when /courses matches exactly */} \u23CE",
  "\u23CE {/* 通配路由：兜住所有未匹配地址，放在最后 */} ⏎":
    "\u23CE {/* wildcard route: catches all unmatched addresses; goes last */} \u23CE",
  "// 用作渲染列表时的 key": "// used as the key when rendering the list",
  "// ...更多课程": "// ...more courses"
});
