/**
 * 演示 5：Tailwind + React Router 综合练习
 * 对应教材：React Router Exercise Lab（Header / Home / Projects / Team）
 *
 * 原始练习用 Tailwind CSS 类名 + index.css 美化；
 * 本演示为了离线可用，用 style.css 中的 .tw-* 类复刻了相同的视觉效果，
 * 路由逻辑与教材完全一致：一个 HashRouter + 三个页面。
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

/* ---------------- Header：粉色导航栏 ---------------- */

const Header = () => (
  <header className="tw-header">
    <h1>Header</h1>
    <nav>
      <ul>
        {/* NavLink 激活时自动加 active 类，用于高亮当前页面 */}
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/team">Our team</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </ul>
    </nav>
  </header>
);

/* ---------------- Home：文章页 ---------------- */

const Home = () => (
  <main className="tw-main">
    <article>
      <h2>Article heading</h2>
      <p>这是 Home 页面。React Router 让页面切换无需整页刷新，内容区由路由决定渲染哪个组件。</p>
      <h3>subsection</h3>
      <p>点击顶部导航在 Home / Our team / Projects 之间切换，注意地址栏 # 后面的变化。</p>
      <h3>Another subsection</h3>
      <p>左侧粉色区域是 Header 组件，右侧白色区域是各个页面组件，它们通过路由切换。</p>
    </article>
  </main>
);

/* ---------------- Team：团队成员 ---------------- */

const TEAM = [
  { name: 'John Marshall', role: 'Designer' },
  { name: 'Steve Roberts', role: 'Photographer' },
  { name: 'Michael Cartney', role: 'Designer' },
];

const Team = () => (
  <main className="tw-main">
    <h2>Our team</h2>
    <div className="tw-team-row">
      {TEAM.map((m) => (
        <div className="tw-team-member" key={m.name}>
          <div className="tw-team-img">
            {/* 用首字母头像替代外链图片，保证离线可用 */}
            <span className="tw-avatar">{m.name.charAt(0)}</span>
          </div>
          <h6 className="tw-team-title">{m.name}</h6>
          <span>{m.role}</span>
        </div>
      ))}
    </div>
  </main>
);

/* ---------------- Projects：项目卡片 ---------------- */

const Projects = () => (
  <main className="tw-main">
    <h2>Projects</h2>
    <div className="tw-wrap">
      {[1, 2, 3].map((i) => (
        <div className="tw-tile" key={i}>
          <div className="tw-text">
            <h1>Lorem ipsum.</h1>
            <h2>More lorem ipsum bacon ipsum.</h2>
            <p>Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf.</p>
          </div>
        </div>
      ))}
    </div>
  </main>
);

/* ---------------- 路由表 ---------------- */

function App() {
  return (
    <HashRouter>
      <div className="tw-app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById('demo-exercise')).render(<App />);
