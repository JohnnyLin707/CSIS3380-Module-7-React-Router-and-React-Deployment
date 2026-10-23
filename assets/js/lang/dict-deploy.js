/* 翻译字典 · deploy.html 免费部署 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "部署前 · 生产构建": "Before Deploying · Production Build",
  "核心问题 · SPA 刷新 404": "The Core Problem · SPA Refresh 404",
  "平台对比": "Platform Comparison",
  "部署检查清单": "Deployment Checklist",

  /* ---- 正文 ---- */
  "依据《Deploying your Apps for Free》整理：Render、Vercel、Netlify、GitHub Pages 四大平台的部署流程，以及使用 React Router 的应用必须解决的「刷新 404」问题。":
    "Compiled from \"Deploying your Apps for Free\": the deployment workflow for Render, Vercel, Netlify, and GitHub Pages, plus the refresh-404 problem every React Router app must solve.",
  "{0}部署前 · 生产构建": "{0}Before Deploying · Production Build",
  "把 React 应用部署到生产服务器前，需要先生成{0}：": "Before deploying a React app to a production server, generate a {0} first:",
  "生产就绪的构建": "production-ready build",
  "该命令会在项目里生成 {0}（Create React App）或 {1}（Vite）文件夹，里面是全部静态文件：":
    "This command generates a {0} (Create React App) or {1} (Vite) folder in the project containing all the static files:",
  "把所有 JS 打包压缩成一个（或少数几个）文件，并压缩 HTML 模板与 CSS，减少下载时间；":
    "bundles and minifies all your JS into one (or a few) files, and minifies the HTML template and CSS to cut download times;",
  "提供 service worker 文件，支持离线运行；": "provides a service worker file so the app can run offline;",
  "{0}就是要部署到服务器的内容。": "{0} is what you deploy to the server.",
  "这个文件夹": "that folder",
  "想在本地验证生产构建，可以用 {0}：": "To verify the production build locally, use {0}:",

  "{0}核心问题 {1}": "{0}The Core Problem {1}",
  "为什么刷新子路由会 404": "Why refreshing a sub-route gives a 404",
  "使用 React Router 的 SPA 只有{0}（{1}）。当你访问 {2} 时：":
    "An SPA built with React Router has only {0} ({1}). When you visit {2}:",
  "一个真实的 HTML 文件": "one real HTML file",
  "开发服务器（{0}）会把所有路径都返回 index.html，所以没问题；":
    "the dev server ({0}) returns index.html for every path, so there's no problem;",
  "但静态服务器默认去磁盘上找 {0} 这个文件 —— 找不到，于是返回 404！":
    "but a static server looks for a file named {0} on disk — it isn't there, so it returns a 404!",
  "解决方案（二选一）：": "Two solutions (pick one):",
  "1. {0}（重写规则）—— 适用于 Vercel、Netlify、Render 等；":
    "1. {0} (rewrite rules) — works with Vercel, Netlify, Render, and more;",
  "告诉服务器「所有路径都返回 index.html」": "tell the server \"return index.html for every path\"",
  "2. {0}（URL 形如 {1}）—— 服务器只看到 {2}，天然不会 404，适合 GitHub Pages 这类无法配置的服务器。":
    "2. {0} (URLs like {1}) — the server only ever sees {2}, so a 404 is impossible; ideal for servers you can't configure, like GitHub Pages.",
  "使用 HashRouter": "Use HashRouter",
  "对比 ⏎ BrowserRouter：https://app.com/{0} ← 干净，但服务器需配置重写 ⏎ HashRouter： https://app.com/{1} ← 带 #，但任何静态服务器都能用":
    "Comparison \u23CE BrowserRouter: https://app.com/{0} ← clean, but the server needs rewrite rules \u23CE HashRouter:   https://app.com/{1} ← has a #, but works on any static server",

  /* ---- Render ---- */
  "把代码仓库推送到 GitHub；": "push your code repository to GitHub;",
  "打开 render.com，创建新项目，选择 {0}，并选中 GitHub 仓库；":
    "open render.com, create a new project, choose {0}, and select the GitHub repository;",
  "填写表单，{0}：": "fill in the form, {0}:",
  "特别注意 Build Command 与 Start Command 要用对": "pay special attention to getting the Build Command and Start Command right",
  "字段": "Field",
  "静态站点（Vite）": "Static site (Vite)",
  "Node/Express 服务": "Node/Express service",
  "Render 的 Static Site 默认会处理 SPA 重定向；如果你部署的是自己写的 Express 服务，需要在服务端把所有未知路径都返回 {0}。":
    "Render's Static Site handles SPA redirects by default; if you're deploying your own Express service, make the server return {0} for every unknown path.",

  /* ---- Vercel ---- */
  "流程与 Render 类似：从 GitHub 导入仓库即可。Vercel 提供免费套餐，整体体验通常比 Render 更好。":
    "The process is similar to Render: just import the repo from GitHub. Vercel has a free tier and is generally considered a smoother experience than Render.",
  "但使用 React Router 的应用，{0}，确保刷新页面时路由依然有效。":
    "For apps using React Router, however, you {0} to make sure routing still works when the page is refreshed.",
  "经常需要添加 {0}": "often need to add {0}",
  "Vercel 自动检测的框架（默认内容）": "Frameworks Vercel detects automatically (default contents)",
  "含义：所有请求（{0} 匹配任意路径）都交给 {1}（即 index.html）处理，React Router 再在浏览器端决定渲染哪个页面。":
    "Meaning: every request ({0} matches any path) is handed to {1} (i.e. index.html), and React Router then decides in the browser which page to render.",
  "Vercel 无法自动检测的平台（如 Express 应用）": "Platforms Vercel can't detect automatically (e.g. Express apps)",
  "vercel.json（Express 应用）": "vercel.json (Express app)",
  "如果启动文件是 {0}，则把 {1} 写成 {2} 或 {3}。": "If the start file is {0}, write {1} as {2} or {3}.",

  /* ---- Netlify ---- */
  "Netlify 同样简单，甚至可以直接把文件夹拖拽上传（不一定需要 GitHub 仓库）。但对于使用 React Router 的应用，需要在 {0} 文件夹中添加 {1} 文件：":
    "Netlify is just as simple — you can even drag and drop a folder (no GitHub repo required). But for apps using React Router, add a {1} file to the {0} folder:",
  "含义：任何路径（{0}）都返回 {1}，状态码 200（不是 301/302 重定向，避免浏览器地址被改写）。这样刷新 {2} 时服务器也会返回应用入口，路由正常恢复。":
    "Meaning: any path ({0}) returns {1} with status 200 (not a 301/302 redirect, which would rewrite the browser's address). This way, refreshing {2} still returns the app entry and routing recovers normally.",

  /* ---- GitHub Pages ---- */
  "{0}GitHub Pages / 生产服务器": "{0}GitHub Pages / Production Servers",
  "先执行 {0} 生成构建产物（见本章开头），然后：": "First run {0} to generate the build output (see the start of this chapter), then:",
  "1. 在 package.json 中添加 homepage": "1. Add homepage to package.json",
  "2. 安装 gh-pages 并添加脚本": "2. Install gh-pages and add the scripts",
  "3. 推送代码并部署": "3. Push the code and deploy",
  "新构建会发布到 {0} 分支，稍后即可通过 {1} 访问。":
    "The new build is published to the {0} branch, and shortly after you can visit it at {1}.",
  "{0}如果应用使用 React Router，推送部署前把 {1} 改成 {2}，否则部署后会丢失路由页面（GitHub Pages 无法配置重写规则，刷新子路由必然 404）。":
    "{0}If the app uses React Router, change {1} to {2} before pushing and deploying, or the routed pages will be lost after deployment (GitHub Pages can't configure rewrite rules, so refreshing a sub-route is a guaranteed 404).",
  "重点：": "Key point: ",
  "本站的在线演示正是因此使用了 HashRouter：这样你双击本地 HTML 文件（没有服务器）也能完整体验所有路由功能。":
    "That's exactly why the live demos on this site use HashRouter: you can double-click the local HTML files (no server at all) and still experience every routing feature.",

  /* ---- 对比与清单 ---- */
  "{0}平台对比": "{0}Platform Comparison",
  "平台": "Platform",
  "部署方式": "How to deploy",
  "SPA 刷新 404 解决": "Fixing the SPA refresh 404",
  "备注": "Notes",
  "GitHub 导入，填 Build/Start 命令": "Import from GitHub; fill in Build/Start commands",
  "Static Site 默认支持": "Static Sites support it by default",
  "免费额度够学习用": "The free tier is plenty for learning",
  "GitHub 导入": "Import from GitHub",
  "添加 {0}（routes 全部指向 /）": "add {0} (all routes point to /)",
  "体验较好，推荐": "A nicer experience; recommended",
  "GitHub 导入或直接拖文件夹": "Import from GitHub or drag and drop a folder",
  "{0} 写 {1}": "{0} containing {1}",
  "拖拽部署最省事": "Drag-and-drop is the least effort",
  "改用 {0}": "switch to {0}",
  "无法配置服务器重写": "no way to configure server rewrites",

  "{0}部署检查清单": "{0}Deployment Checklist",
  "本地 {0} 无错误，产物为 dist/（Vite）或 build/（CRA）；":
    "{0} runs locally without errors, producing dist/ (Vite) or build/ (CRA);",
  "用 {0} 本地验证生产构建，各路由正常；": "verify the production build locally with {0} and check every route;",
  "构建命令与发布目录在平台表单中填写正确；": "the build command and publish directory are filled in correctly on the platform;",
  "按平台要求配置重写规则（vercel.json / _redirects），或改用 HashRouter；":
    "rewrite rules are configured as the platform requires (vercel.json / _redirects), or you switched to HashRouter;",
  "部署后在线上直接访问并{0}一个子路由（如 /dashboard），确认不是 404；":
    "after deploying, open and {0} a sub-route (e.g. /dashboard) online and confirm it isn't a 404;",
  "刷新": "refresh",
  "GitHub Pages 项目确认 package.json 的 homepage 与仓库地址一致。":
    "for GitHub Pages projects, the homepage in package.json matches the repository address.",
  "全部完成后，你的应用就有了一个任何人都能访问的公网地址。Module 7 的两个主题 —— React Router 与部署 —— 也就都拿下了！":
    "Once all of this is done, your app has a public URL anyone can visit. Both Module 7 topics — React Router and deployment — are officially conquered!",

  /* ---- 代码块内的中文 ---- */
  "# CRA 项目": "# CRA project",
  "# Vite 项目": "# Vite project"
});
