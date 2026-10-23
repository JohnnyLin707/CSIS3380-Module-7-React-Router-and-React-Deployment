/* 翻译字典 · tailwind.html Tailwind v4 配置 */
window.M7_DICT = Object.assign(window.M7_DICT || {}, {
  /* ---- 侧边小节 ---- */
  "1. 前提条件": "1. Prerequisites",
  "2. 创建 Vite 项目": "2. Create a Vite Project",
  "3. 安装 Tailwind v4": "3. Install Tailwind v4",
  "4. 配置 Vite": "4. Configure Vite",
  "5. 设置 CSS 文件": "5. Set Up the CSS File",
  "6. 在 React 中使用": "6. Use It in React",
  "7. 自定义主题": "7. Custom Theming",
  "8. 生产构建": "8. Production Build",
  "9. v3 → v4 迁移": "9. Migrating v3 → v4",
  "10. 常见问题": "10. Troubleshooting",

  /* ---- 正文 ---- */
  "Tailwind CSS v4 + React/Vite 配置": "Tailwind CSS v4 + React/Vite Setup",
  "依据《Tutorial: Implementing Tailwind CSS v4.x (Beta) in a React + Vite App》整理。v4 最大的变化：不再需要 tailwind.config.js 和 PostCSS，改用 Vite 插件 + CSS 优先配置。":
    "Compiled from \"Tutorial: Implementing Tailwind CSS v4.x (Beta) in a React + Vite App\". The biggest change in v4: no more tailwind.config.js or PostCSS — use the Vite plugin plus CSS-first configuration instead.",
  "{0}前提条件": "{0}Prerequisites",
  "了解 Vite、React 与 CSS 基础；": "a working knowledge of Vite, React, and CSS;",
  "Tailwind v4 依赖较新的 CSS 特性，过旧的浏览器可能无法完整支持。":
    "Tailwind v4 relies on modern CSS features; very old browsers may not support them fully.",

  "{0}创建 Vite + React 项目": "{0}Create a Vite + React Project",

  "{0}安装 Tailwind v4": "{0}Install Tailwind v4",
  "{0}：核心引擎；": "{0}: the core engine;",
  "{0}：v4 新增的 Vite 集成插件。": "{0}: the new Vite integration plugin added in v4.",
  "{0}不再需要手动安装 {1} 和 {2}，也不再强制需要 {3}。":
    "{0}You no longer need to install {1} and {2} by hand, and {3} is no longer required.",
  "v4 的变化：": "What changed in v4: ",

  "{0}配置 Vite": "{0}Configure Vite",
  "编辑 {0}，加入 tailwindcss 插件：": "Edit {0} and add the tailwindcss plugin:",
  "该插件让 Tailwind 直接集成进 Vite 的构建管线；默认情况下你{0} {1}（除非需要高级配置）。":
    "This plugin integrates Tailwind directly into Vite's build pipeline; by default you {0} {1} (unless you need advanced configuration).",
  "不再需要": "no longer need",

  "{0}设置 CSS 文件": "{0}Set Up the CSS File",
  "创建或打开 {0}，用一行 {1} 引入 Tailwind（v3 需要三行 {2} 指令，v4 精简为一行）：":
    "Create or open {0} and import Tailwind with the single line {1} (v3 needs three {2} directives; v4 trims it to one):",

  "{0}在 React 中使用 Tailwind 类": "{0}Use Tailwind Classes in React",
  "Tailwind v4 的增强能力：": "What Tailwind v4 adds:",
  "更多工具类支持{0}（不必预先定义）；": "more utilities support {0} (no need to predefine them);",
  "动态任意值": "dynamic arbitrary values",
  "新变体：{0}、{1}、容器查询等；": "new variants such as {0}, {1}, and container queries;",
  "通过 CSS 变量进行主题定制（见下一节）。": "theme customization through CSS variables (see the next section).",

  "{0}自定义主题 {1}": "{0}Custom Theming {1}",
  "CSS 优先配置": "CSS-first configuration",
  "v4 把大量定制从 JS 配置转移到 CSS：用 {0} 定义设计令牌（design tokens）：":
    "v4 moves much of the customization from JS config into CSS: define design tokens with {0}:",
  "之后在 JSX 中直接使用这些令牌生成的类：": "Then use the classes generated from those tokens directly in JSX:",
  "使用自定义令牌": "Using custom tokens",
  "如果仍想使用 JS 配置，可以用 {0} 引入：": "If you still want a JS config, pull it in with {0}:",
  "兼容 JS 配置": "JS config compatibility",

  "{0}生产构建与清除未用样式": "{0}Production Build and Purging",
  "Tailwind 会{0}。注意：避免用字符串拼接动态生成类名（如 {1}），否则构建时无法识别、样式会丢失；请写完整的类名。":
    "Tailwind will {0}. Note: avoid building class names with string concatenation (e.g. {1}) — the build can't detect them and the styles vanish; write the full class names out.",
  "自动清除未使用的类": "automatically purge unused classes",

  "{0}v3 → v4 迁移要点": "{0}Migrating v3 → v4",
  "使用 {0} 辅助迁移；": "use {0} to assist the migration;",
  "删除旧的 PostCSS 配置；": "remove the old PostCSS config;",
  "把 {0} 三行替换为 {1}；": "replace the three {0} lines with {1};",
  "Vite 项目改用 {0} 插件；": "switch Vite projects to the {0} plugin;",
  "定制内容迁移到 CSS 的 {0} 中。": "move customizations into the CSS {0}.",
  "项目": "Item",
  "引入方式": "How to import",
  "构建集成": "Build integration",
  "PostCSS 插件 + tailwind.config.js": "PostCSS plugin + tailwind.config.js",
  "@tailwindcss/vite 插件": "the @tailwindcss/vite plugin",
  "配置文件": "Config file",
  "必须 tailwind.config.js": "tailwind.config.js is required",
  "默认不需要，可选 @config": "not needed by default; @config optional",
  "主题定制": "Theming",
  "config.js 的 theme 字段": "the theme field in config.js",
  "CSS 的 {0}": "the CSS {0}",
  "额外依赖": "Extra dependencies",
  "无": "None",

  "{0}常见问题": "{0}Troubleshooting",
  "现象": "Symptom",
  "排查": "Check",
  "样式完全不生效": "No styles at all",
  "检查 {0} 是否只有一行 {1} 且被 main.jsx 引入；vite.config.js 是否加了 tailwindcss() 插件":
    "check that {0} contains only the line {1} and is imported by main.jsx, and that vite.config.js includes the tailwindcss() plugin",
  "部分类名无效": "Some class names do nothing",
  "确认类名写全（不要字符串拼接）；v4 中部分默认值变化，查阅官方文档的升级说明":
    "make sure class names are written in full (no string concatenation); some defaults changed in v4, so consult the official upgrade notes",
  "自定义颜色不生效": "Custom colors don't work",
  "{0} 必须放在 {1} 之后；变量名需以 {2} 等规定前缀开头":
    "{0} must come after {1}; variable names must start with a prescribed prefix such as {2}",
  "还留着旧 postcss.config.js": "An old postcss.config.js is still around",
  "删除它，v4 由 Vite 插件接管，重复配置可能冲突":
    "delete it — v4 is handled by the Vite plugin, and duplicate configs can conflict",
  "构建产物很大": "The build output is huge",
  "确认没有动态拼接类名；生产构建会自动 purge": "make sure no class names are concatenated dynamically; production builds purge automatically",
  "配置完成后，回到「{0}」把练习应用跑起来；做完后就可以「{1}」了。":
    "Once configured, head back to \"{0}\" to run the exercise app; after that you're ready for \"{1}\".",

  /* ---- 代码块内的中文 ---- */
  "# TypeScript 版本：": "# for the TypeScript version:",
  "// 让 Tailwind 新引擎直接接入 Vite 构建流程": "// let Tailwind's new engine plug straight into Vite's build pipeline",
  "// 在入口引入": "// import from the entry file",
  "// min-h-screen：最小高度一屏；flex 居中": "// min-h-screen: at least one screen tall; flex centering",
  "/* 自定义颜色令牌 */": "/* custom color tokens */",
  "/* 自定义字体 */": "/* custom font */",
  "/* 也可以声明断点、间距等令牌 */": "/* you can also declare breakpoints, spacing, and other tokens */",
  "/* 需要 tailwind.config.js 时取消注释 */": "/* uncomment when you need tailwind.config.js */"
});
