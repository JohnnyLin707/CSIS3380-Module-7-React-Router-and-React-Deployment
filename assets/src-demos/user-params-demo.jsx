/**
 * 演示 3：动态路由 —— URL 参数（useParams）+ 编程式导航（useNavigate）
 * 对应教材：React Router Practice Exercise Lab 第三部分
 *
 * 访问 #/user/1、#/user/2、#/user/3 会渲染同一个 UserPage 组件，
 * 但 useParams() 取到的 id 不同 —— 这就是「动态路由」。
 */
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useParams,     // 读取 URL 中的参数，例如 :id
  useNavigate,   // 编程式导航：在事件处理函数中跳转页面
} from 'react-router-dom';

// 用户数据（模拟接口返回）
const USERS = {
  1: { name: '小明', role: '前端工程师' },
  2: { name: '小红', role: '后端工程师' },
  3: { name: '阿伟', role: '全栈工程师' },
};

// 用户详情页：同一个组件，根据 URL 参数渲染不同内容
function UserPage() {
  // useParams 返回路由参数对象，键名与路径中的 :id 对应
  const { id } = useParams();
  const navigate = useNavigate(); // 获取导航函数
  const user = USERS[id];

  // 如果 id 不存在（例如 #/user/99），给出提示
  if (!user) {
    return (
      <div className="up-box">
        <h3>找不到 ID 为 {id} 的用户</h3>
        <button className="up-btn" onClick={() => navigate('/')}>返回首页</button>
      </div>
    );
  }

  return (
    <div className="up-box">
      <h3>User Profile for ID: {id}</h3>
      {/* 注意：URL 参数永远是字符串，即使路径写的是 /user/1 */}
      <p>
        姓名：<strong>{user.name}</strong>　职业：<strong>{user.role}</strong>
      </p>
      <p className="up-tip">typeof id === '{typeof id}'（字符串）</p>
      <button className="up-btn" onClick={() => {
        // 随机跳转到另一个用户：编程式导航
        const next = String(Math.floor(Math.random() * 3) + 1);
        navigate(`/user/${next}`);
      }}>
        随机拜访一位用户
      </button>
    </div>
  );
}

// 首页：列出用户链接
function Home() {
  return (
    <div className="up-box">
      <h3>选择一位用户：</h3>
      <p>
        <Link className="up-link" to="/user/1">User 1</Link>
        {' | '}
        <Link className="up-link" to="/user/2">User 2</Link>
        {' | '}
        <Link className="up-link" to="/user/3">User 3</Link>
      </p>
      <p className="up-tip">也可以手动把地址栏 # 后面的内容改成 #/user/2 试试。</p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="up-app">
        <nav className="up-nav">
          <Link to="/">首页</Link>
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
