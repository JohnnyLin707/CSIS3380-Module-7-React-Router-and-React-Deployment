/**
 * 一键重新编译所有在线演示。
 *
 * 用法：
 *   cd assets/src-demos
 *   npm install      # 首次运行需要安装 esbuild
 *   npm run build    # 把 *.jsx 编译成 ../js/demos/*.js
 *
 * 编译产物是普通的 <script>（IIFE 格式，不依赖模块加载器），
 * 因此整个网站在 file:// 协议下双击 index.html 也能正常运行。
 */
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const outdir = path.resolve(here, '../js/demos');

// 演示清单：源文件 -> 页面挂载点（见各页面中的 <div id="demo-xxx">）
const demos = [
  { entry: 's25-demo.jsx', out: 's25-demo.js' },
  { entry: 'directory-demo.jsx', out: 'directory-demo.js' },
  { entry: 'user-params-demo.jsx', out: 'user-params-demo.js' },
  { entry: 'dashboard-memory-demo.jsx', out: 'dashboard-memory-demo.js' },
  { entry: 'tailwind-exercise-demo.jsx', out: 'tailwind-exercise-demo.js' },
];

for (const d of demos) {
  await build({
    entryPoints: [path.join(here, d.entry)],
    outfile: path.join(outdir, d.out),
    bundle: true,            // 把 react / react-dom / react-router-dom 全部打包进去
    format: 'iife',          // 普通脚本，浏览器直接运行
    minify: true,            // 压缩体积
    target: ['es2018'],      // 兼容当前主流浏览器
    loader: { '.jsx': 'jsx' },
    jsx: 'transform',        // 编译 JSX 为 React.createElement
    logLevel: 'info',
  });
  console.log(`built ${d.out}`);
}

console.log('全部演示编译完成 ->', outdir);
