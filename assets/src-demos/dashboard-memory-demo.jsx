/**
 * 演示 4：MemoryRouter —— 把路由状态保存在内存里（不改变地址栏）
 * 对应教材：React Router Practice Exercise Lab 第四部分（嵌套路由）
 *
 * 什么时候用 MemoryRouter？
 * - 单元测试 / 组件库文档（如 Storybook）
 * - 嵌在页面里的小组件（比如本页这两个演示嵌在同一篇文章中，
 *   如果都用 HashRouter，两个演示会互相干扰）
 *
 * 注意：useLocation() 可以读取「当前路由位置」，我们用它把内存中的
 * 路径显示出来，这样即使没有地址栏也能看到路由变化。
 * 页面切换英文时，本演示通过 m7:lang 事件同步切换界面文字。
 */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MemoryRouter, // 内存路由器：location 只存在于内存中
  Routes,
  Route,
  Link,
  Outlet,
  useLocation, // 读取当前 location（pathname、search、hash 等）
} from 'react-router-dom';

/* ---------- 语言同步 ---------- */
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

// Dashboard：父组件，含子导航 + Outlet
function Dashboard() {
  const location = useLocation(); // 当前路径，例如 /dashboard/stats
  const t = useT();
  return (
    <div className="mm-box">
      <h3>Dashboard</h3>
      <nav className="mm-nav">
        {/* 相对路径：解析为 /dashboard/stats、/dashboard/settings */}
        <Link to="stats">Stats</Link>
        <Link to="settings">Settings</Link>
      </nav>
      {/* 子路由渲染在这里 */}
      <Outlet />
      <p className="mm-path">{t('当前内存路径：', 'Current in-memory path: ')}<code>{location.pathname}</code></p>
    </div>
  );
}

function Stats() {
  const t = useT();
  return <h4 className="mm-sub">{t('Stats Page（统计）', 'Stats Page')}</h4>;
}

function Settings() {
  const t = useT();
  return <h4 className="mm-sub">{t('Settings Page（设置）', 'Settings Page')}</h4>;
}

function App() {
  return (
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        {/* dashboard/* 表示这个父路由下的地址都以 /dashboard 开头 */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

createRoot(document.getElementById('demo-dashboard')).render(<App />);
