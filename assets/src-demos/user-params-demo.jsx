/**
 * 演示 3：动态路由 —— URL 参数（useParams）+ 编程式导航（useNavigate）
 * 对应教材：React Router Practice Exercise Lab 第三部分
 *
 * 访问 #/user/1、#/user/2、#/user/3 会渲染同一个 UserPage 组件，
 * 但 useParams() 取到的 id 不同 —— 这就是「动态路由」。
 * 页面切换英文时，本演示通过 m7:lang 事件同步切换界面文字。
 */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useParams,     // 读取 URL 中的参数，例如 :id
  useNavigate,   // 编程式导航：在事件处理函数中跳转页面
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

// 用户数据（模拟接口返回），附中英文
const USERS = {
  1: { name: '小明', nameEn: 'Xiao Ming', role: '前端工程师', roleEn: 'Front-end Engineer' },
  2: { name: '小红', nameEn: 'Xiao Hong', role: '后端工程师', roleEn: 'Back-end Engineer' },
  3: { name: '阿伟', nameEn: 'A Wei', role: '全栈工程师', roleEn: 'Full-stack Engineer' }
};

// 用户详情页：同一个组件，根据 URL 参数渲染不同内容
function UserPage() {
  // useParams 返回路由参数对象，键名与路径中的 :id 对应
  const { id } = useParams();
  const navigate = useNavigate(); // 获取导航函数
  const t = useT();
  const lang = useLang();
  const user = USERS[id];

  // 如果 id 不存在（例如 #/user/99），给出提示
  if (!user) {
    return (
      <div className="up-box">
        <h3>{t('找不到 ID 为', 'No user found with ID')} {id}</h3>
        <button className="up-btn" onClick={() => navigate('/')}>{t('返回首页', 'Back to Home')}</button>
      </div>
    );
  }

  return (
    <div className="up-box">
      <h3>User Profile for ID: {id}</h3>
      {/* 注意：URL 参数永远是字符串，即使路径写的是 /user/1 */}
      <p>
        {t('姓名', 'Name')}: <strong>{lang === 'en' ? user.nameEn : user.name}</strong>　{t('职业', 'Role')}: <strong>{lang === 'en' ? user.roleEn : user.role}</strong>
      </p>
      <p className="up-tip">typeof id === '{typeof id}'（{t('字符串', 'string')}）</p>
      <button className="up-btn" onClick={() => {
        // 随机跳转到另一个用户：编程式导航
        const next = String(Math.floor(Math.random() * 3) + 1);
        navigate(`/user/${next}`);
      }}>
        {t('随机拜访一位用户', 'Visit a random user')}
      </button>
    </div>
  );
}

// 首页：列出用户链接
function Home() {
  const t = useT();
  return (
    <div className="up-box">
      <h3>{t('选择一位用户：', 'Choose a user:')}</h3>
      <p>
        <Link className="up-link" to="/user/1">User 1</Link>
        {' | '}
        <Link className="up-link" to="/user/2">User 2</Link>
        {' | '}
        <Link className="up-link" to="/user/3">User 3</Link>
      </p>
      <p className="up-tip">{t('也可以手动把地址栏 # 后面的内容改成 #/user/2 试试。', "You can also change what follows # in the address bar to #/user/2.")}</p>
    </div>
  );
}

function App() {
  const t = useT();
  return (
    <HashRouter>
      <div className="up-app">
        <nav className="up-nav">
          <Link to="/">{t('首页', 'Home')}</Link>
          <Link to="/user/1">User 1</Link>
          <Link to="/user/2">User 2</Link>
          <Link to="/user/3">User 3</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* :id 是「路径参数」，任何 /user/xxx 都会匹配这一条 */}
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

createRoot(document.getElementById('demo-userparams')).render(<App />);
