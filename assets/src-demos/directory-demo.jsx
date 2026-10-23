/**
 * 演示 2：React Router V6「课程目录应用」最终版
 * 对应教材：React Router-V6/4-React Router-...-with 404
 *
 * 知识点：
 * - NavLink：带「当前激活状态」的链接，适合做导航高亮
 * - 嵌套路由：/courses 下再分 html / css / javascript
 * - index + Navigate：访问 /courses 时自动重定向到 /courses/html
 * - path="*"：404 页面
 * - 页面切换英文时，本演示通过 m7:lang 事件同步切换界面文字
 */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,   // 与 Link 用法相同，激活时自动添加 active 类名
  Outlet,
  Navigate,  // 声明式重定向：渲染时立即跳转到 to 指定的地址
} from 'react-router-dom';

/* ---------- 语言同步：store + useLang Hook ---------- */

const langStore = {
  lang: window.__M7_LANG || 'zh',
  listeners: new Set(),
  set(next) {
    this.lang = next;
    this.listeners.forEach((fn) => fn(next));
  }
};
window.addEventListener('m7:lang', (e) => langStore.set(e.detail));

function useLang() {
  const [l, setL] = useState(langStore.lang);
  useEffect(() => {
    const fn = (v) => setL(v);
    langStore.listeners.add(fn);
    return () => langStore.listeners.delete(fn);
  }, []);
  return l;
}

function useT() {
  const lang = useLang();
  return (zh, en) => (lang === 'en' ? en : zh);
}

/* ---------------- 数据（与教材 data/courses.js 相同的课程数据） ---------------- */

// 每门课程附中英两种描述，页面切换语言时同步更换
const HTMLCourses = [
  { title: 'How to Make a Website', desc: { zh: '从零开始构建现代响应式作品集网站，学习 HTML 与 CSS 基础语法。', en: 'Build a modern responsive portfolio site from scratch while learning HTML and CSS basics.' }, id: 'html-1' },
  { title: 'HTML Forms', desc: { zh: '学习创建 Web 表单：输入框、按钮、下拉菜单等最常用的表单元素。', en: 'Learn to build web forms: inputs, buttons, dropdowns, and the other form elements you use every day.' }, id: 'html-2' },
  { title: 'HTML Video and Audio', desc: { zh: '使用标准化的 HTML5 视频/音频播放器，无需任何插件。', en: 'Use standards-based HTML5 video and audio players, no plugins required.' }, id: 'html-3' },
  { title: 'SVG Basics', desc: { zh: 'SVG 是用矢量绘制二维图像的 XML 标记语言，任意缩放依然清晰。', en: 'SVG is an XML markup language for drawing 2D images with vectors — sharp at any zoom level.' }, id: 'html-4' },
  { title: 'Responsive Images', desc: { zh: '使用 srcset、sizes 与 picture 元素，为不同设备交付最合适的图片。', en: 'Use srcset, sizes, and the picture element to deliver the right image to each device.' }, id: 'html-5' },
  { title: 'Introduction to HTML and CSS', desc: { zh: 'Web 开发的基石：用 HTML 描述结构，用 CSS 描述外观。', en: 'The building blocks of web development: HTML describes structure, CSS describes appearance.' }, id: 'html-6' }
];

const CSSCourses = [
  { title: 'CSS Basics', desc: { zh: 'CSS 描述网页的呈现：颜色、背景、字号、布局，是设计网站的核心技术之一。', en: 'CSS describes how web pages look — colors, backgrounds, font sizes, layout — one of the core web technologies.' }, id: 'css-1' },
  { title: 'CSS Selectors', desc: { zh: '在类型/ID/类选择器之外，按属性、位置、元素关系来选择元素。', en: 'Beyond type, ID, and class selectors: target elements by attribute, position, and relationship.' }, id: 'css-2' },
  { title: 'Responsive Layouts', desc: { zh: '响应式网页设计技巧集合，让同一页面适配多种屏幕尺寸。', en: 'A collection of responsive design techniques for making one page fit many screen sizes.' }, id: 'css-3' },
  { title: 'CSS Flexbox Layout', desc: { zh: 'Flexbox 用几行 CSS 即可改变元素方向、对齐、尺寸和顺序。', en: 'Flexbox changes element direction, alignment, size, and order with just a few lines of CSS.' }, id: 'css-4' },
  { title: 'CSS Transitions and Transforms', desc: { zh: '用过渡与变换创建简单动画，增强用户交互体验。', en: 'Create simple animations with transitions and transforms to enhance user interactions.' }, id: 'css-5' },
  { title: 'Bootstrap 4 Basics', desc: { zh: '学习使用 Bootstrap 4 快速搭建功能完善的设计与布局。', en: 'Learn to use Bootstrap 4 to build functional designs and layouts in little time.' }, id: 'css-6' }
];

const JSCourses = [
  { title: 'JavaScript Basics', desc: { zh: 'JavaScript 驱动整个 Web，本课学习编程基本概念与语法。', en: 'JavaScript drives the whole web; this course covers fundamental programming concepts and syntax.' }, id: 'js-1' },
  { title: 'JavaScript Loops, Arrays and Objects', desc: { zh: '数组可以在一个变量中存储多个值，是传递列表的便捷方式。', en: 'Arrays store multiple values in a single variable — a handy way to pass around a list of items.' }, id: 'js-2' },
  { title: 'jQuery Basics', desc: { zh: '为什么要用 jQuery、它是什么、如何在项目中引入。', en: "Why you'd want jQuery, what it is, and how to include it in your projects." }, id: 'js-3' },
  { title: 'AJAX Basics', desc: { zh: 'AJAX 让 JavaScript 与服务器通信，无需离开当前页面即可加载新内容。', en: 'AJAX lets JavaScript talk to a web server, loading new content without leaving the page.' }, id: 'js-4' },
  { title: 'Interactive Web Pages with JavaScript', desc: { zh: '不借助第三方库，用纯 JavaScript 打造待办清单应用。', en: 'Build a to-do list app with pure JavaScript, no third-party libraries.' }, id: 'js-5' },
  { title: 'Node.js Basics', desc: { zh: '在 Node.js 平台上用 JavaScript 编写命令行应用。', en: 'Write command-line applications in JavaScript on the Node.js platform.' }, id: 'js-6' }
];

/* ---------------- 通用：课程列表组件 ---------------- */

// 一个课程卡片
const Course = ({ title, desc }) => {
  const lang = useLang();
  const t = useT();
  return (
    <li className="dir-course">
      {/* 用课程首字母做一个彩色徽章，替代教材中的图片 */}
      <span className="dir-badge">{title.charAt(0)}</span>
      <div>
        <h4>{title}</h4>
        <p>{lang === 'en' ? desc.en : desc.zh}</p>
      </div>
    </li>
  );
};

// 课程列表：接收课程数组并逐个渲染
const CourseList = ({ courses }) => {
  const t = useT();
  return (
    <ul className="dir-course-list">
      {courses.map((c) => (
        <Course key={c.id} title={c.title} desc={c.desc} />
      ))}
    </ul>
  );
};

/* ---------------- 页面组件 ---------------- */

const Home = () => {
  const t = useT();
  return (
    <div className="dir-main">
      <h2>{t('Front End Course Directory（前端课程目录）', 'Front End Course Directory')}</h2>
      <p>{t('这是 React Router 课程中的一个示例项目。这里预览了我们的课程库，内容涵盖 HTML、CSS 到 JavaScript，数千个由专家教师录制的视频持续更新。',
        'This is a sample project from the React Router course. It previews our course library, covering HTML, CSS, and JavaScript, with thousands of videos by expert teachers continually refreshed.')}</p>
    </div>
  );
};

const About = () => {
  const t = useT();
  return (
    <div className="dir-main">
      <h2>{t('About（关于）', 'About')}</h2>
      <p>{t('课程目录收录了 HTML、CSS、JavaScript 等众多课程。欢迎访问 Teachers 查看教师列表，或在 Courses 中选择一个主题查看课程。',
        'The directory lists many courses on HTML, CSS, JavaScript, and more. Visit Teachers to see our talented instructors, or head to Courses and pick a topic to browse courses.')}</p>
    </div>
  );
};

const Teachers = () => {
  const t = useT();
  return (
    <div className="dir-main">
      <h2>{t('Teachers（教师）', 'Teachers')}</h2>
      <ul className="dir-teachers">
        {['Angie McAngular', 'NodeStradamus', 'Geo Location', 'Ecma Scriptnstuff', 'Jay Query', 'Json Babel'].map((name) => (
          <li key={name} className="dir-teacher">
            <span className="dir-avatar">{name.charAt(0)}</span>
            <h4>{name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Courses 是父路由组件：顶部子导航 + Outlet（渲染 html/css/js 子页面）
const Courses = () => {
  const t = useT();
  return (
    <div className="dir-main">
      <div className="dir-course-header">
        <h2>{t('Courses（课程）', 'Courses')}</h2>
        <ul className="dir-course-nav">
          <li><NavLink to="html">HTML</NavLink></li>
          <li><NavLink to="css">CSS</NavLink></li>
          <li><NavLink to="javascript">JavaScript</NavLink></li>
        </ul>
      </div>
      {/* html / css / javascript 三个子路由渲染在这里 */}
      <Outlet />
    </div>
  );
};

const HTML = () => <CourseList courses={HTMLCourses} />;
const CSS = () => <CourseList courses={CSSCourses} />;
const JavaScript = () => <CourseList courses={JSCourses} />;

const NotFound = () => {
  const t = useT();
  return (
    <div className="dir-main dir-notfound">
      <h2>404 · Page Not Found</h2>
      <p>{t('你访问的页面不存在，请检查地址栏。', "The page you visited doesn't exist. Please check the address bar.")}</p>
    </div>
  );
};

/* ---------------- 顶部导航 ---------------- */

const Header = () => (
  <header className="dir-header">
    <span className="dir-logo">{'</>'}</span>
    <ul className="dir-nav">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>
  </header>
);

/* ---------------- 路由表 ---------------- */

function App() {
  return (
    <HashRouter>
      <div className="dir-app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />

          {/* /courses 是父路由，内部再嵌套三个子路由 */}
          <Route path="/courses" element={<Courses />}>
            {/* index 路由：访问 /courses 时触发，用 Navigate 重定向到 html */}
            {/* replace：替换历史记录，避免「后退」按钮卡住 */}
            <Route index element={<Navigate replace to="html" />} />
            <Route path="html" element={<HTML />} />
            <Route path="css" element={<CSS />} />
            <Route path="javascript" element={<JavaScript />} />
          </Route>

          {/* 通配 404 路由：放在最后，兜住所有未匹配的地址 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById('demo-directory')).render(<App />);
