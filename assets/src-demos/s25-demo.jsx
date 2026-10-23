/**
 * 演示 1：S25「三步搭建」最终成果 —— 布局 + 嵌套路由 + 404
 * 对应教材：React Router 2 - S25/router-step3
 *
 * 说明：
 * - 教材中使用 <BrowserRouter>；本页面为了在 file:// 协议下直接双击打开也能运行，
 *   演示代码使用 <HashRouter>（路由信息保存在 URL 的 # 后面，例如 #/dashboard/stats）。
 * - 两者用法完全一致，只是改变地址栏的方式不同，部署时的区别见「免费部署」一页。
 * - 页面切换到英文时，本演示通过 m7:lang 事件同步切换界面文字。
 */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,   // 路由器：把路由状态接入 URL 的 hash
  Routes,       // 路由容器：所有 <Route> 都要放在它里面
  Route,        // 单条路由：path -> element 的映射
  Link,         // 导航链接：不会引起整页刷新
  Outlet,       // 占位符：父组件中渲染子路由的位置
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

// 在组件里调用，返回当前语言；页面切换语言时自动重新渲染
function useLang() {
  const [l, setL] = useState(langStore.lang);
  useEffect(() => {
    const fn = (v) => setL(v);
    langStore.listeners.add(fn);
    return () => langStore.listeners.delete(fn);
  }, []);
  return l;
}

// 便捷取词函数：中文 / 英文 一对
function useT() {
  const lang = useLang();
  return (zh, en) => (lang === 'en' ? en : zh);
}

/* ---------------- 1. 页面组件（每个路由对应一个组件） ---------------- */

// 首页
const Home = () => <h1 className="s25-title">Home</h1>;

// 博客页
const Blogs = () => <h1 className="s25-title">Blog Articles</h1>;

// 联系页
const Contact = () => <h1 className="s25-title">Contact Me</h1>;

// 404 页：path="*" 的通配路由会匹配所有未定义的地址
const NoPage = () => {
  const t = useT();
  return <h1 className="s25-title s25-title-404">{t('404 页面不存在', '404 Page Not Found')}</h1>;
};

// Dashboard 的两个子页面
const Stats = () => {
  const t = useT();
  return <h3 className="s25-subtitle">{t('Statistics（统计数据）', 'Statistics')}</h3>;
};
const Settings = () => {
  const t = useT();
  return <h3 className="s25-subtitle">{t('Settings Page（设置页）', 'Settings Page')}</h3>;
};

/* ---------------- 2. 布局组件：导航 + Outlet ---------------- */

// Layout 是「父路由 /」的组件，所有页面都通过 <Outlet /> 渲染在它里面
const Layout = () => (
  <>
    <nav className="s25-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
    {/* Outlet：子路由（Home/Blogs/Contact/Dashboard/NoPage）渲染在这里 */}
    <Outlet />
  </>
);

/* ---------------- 3. 嵌套路由：Dashboard ---------------- */

// Dashboard 自己也有导航和 Outlet，用于渲染 Stats / Settings
const Dashboard = () => (
  <div className="s25-dashboard">
    <h2>Dashboard</h2>
    <nav className="s25-subnav">
      <ul>
        {/* 相对路径：相对于 /dashboard，最终解析为 /dashboard/stats */}
        <li><Link to="stats">Stats</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>
    </nav>
    {/* 子路由 Stats / Settings 渲染在这里 */}
    <Outlet />
  </div>
);

/* ---------------- 4. 路由表 ---------------- */

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* path="/" 的 Layout 是根布局，其它路由都是它的子路由 */}
        <Route path="/" element={<Layout />}>
          {/* index 路由：父路径精确匹配时显示，即访问 / 时显示 Home */}
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />

          {/* 嵌套路由：/dashboard 下再挂 stats / settings */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* 通配路由：匹配以上所有未命中的地址，必须放在最后 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

// 挂载到页面上的演示容器（id 与 lab.html 中的容器对应）
createRoot(document.getElementById('demo-s25')).render(<App />);
