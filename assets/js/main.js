/* ============================================================
   Module 7 网页学习版 —— 全站脚本
   功能：侧边目录生成 / 当前章节高亮 / 代码复制 / 语法高亮 /
        选项卡切换 / 学习进度（localStorage）/ 移动端菜单
   ============================================================ */
(function () {
  'use strict';

  /* 当前语言（与 lang.js 共用同一个 localStorage 键，保证动态文字同步换语言） */
  var LANG = 'zh';
  try { LANG = localStorage.getItem('m7-lang') === 'en' ? 'en' : 'zh'; } catch (e) { /* ignore */ }

  /* ---------------- 1. 站点导航配置（与页面文件名一一对应） ---------------- */

  var PAGES = [
    { file: 'index.html', label: '首页 · 课程总览', idx: '★', group: '开始' },
    { file: 'concepts.html', label: '核心概念', idx: '1', group: '第一部分 · 打基础' },
    { file: 'lab.html', label: '实战：三步搭建路由', idx: '2', group: '第一部分 · 打基础' },
    { file: 'v6.html', label: 'V6 课程目录应用', idx: '3', group: '第二部分 · 进阶' },
    { file: 'practice.html', label: '动态路由练习', idx: '4', group: '第二部分 · 进阶' },
    { file: 'tailwind-exercise.html', label: 'Tailwind 综合练习', idx: '5', group: '第三部分 · 整合' },
    { file: 'tailwind.html', label: 'Tailwind v4 配置', idx: '6', group: '第三部分 · 整合' },
    { file: 'deploy.html', label: '免费部署指南', idx: '7', group: '第四部分 · 上线' }
  ];

  // 当前页面文件名（兼容 file:// 与 http://）
  var here = location.pathname.split('/').pop() || 'index.html';
  var page = PAGES.filter(function (p) { return p.file === here; })[0] || PAGES[0];

  /* ---------------- 2. 顶栏：面包屑 ---------------- */

  var crumb = document.querySelector('.topbar .crumb');
  if (crumb) {
    crumb.innerHTML = 'Module 7 · React Router 与部署　/　<b>' + page.label + '</b>';
  }

  /* ---------------- 3. 侧边目录 ---------------- */

  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    var html = '';
    var lastGroup = null;
    PAGES.forEach(function (p) {
      if (p.group !== lastGroup) {
        html += '<div class="nav-group">' + p.group + '</div>';
        lastGroup = p.group;
      }
      html += '<a class="nav-item' + (p.file === page.file ? ' active' : '') +
        '" href="' + p.file + '"><span class="idx">' + p.idx + '</span>' + p.label + '</a>';
    });

    // 当前页的小节（扫描页面中带 data-nav 的 section）
    var sections = Array.prototype.slice.call(
      document.querySelectorAll('main.content section.doc[data-nav]')
    );
    if (sections.length) {
      html += '<div class="nav-group">本页目录</div><div class="sub-nav">';
      sections.forEach(function (sec) {
        var id = sec.id;
        var title = sec.getAttribute('data-nav');
        html += '<a href="#' + id + '" data-sec="' + id + '">' +
          '<span>' + title + '</span>' +
          '<input type="checkbox" title="标记为已掌握" data-done="' + here + '::' + id + '">' +
          '</a>';
      });
      html += '</div>';
    }

    sidebar.innerHTML = html;

    // 小节完成状态
    var doneKey = function (k) { return 'm7-done:' + k; };
    Array.prototype.forEach.call(
      sidebar.querySelectorAll('input[data-done]'),
      function (box) {
        var key = box.getAttribute('data-done');
        try {
          box.checked = !!localStorage.getItem(doneKey(key));
        } catch (e) { /* 隐私模式下忽略 */ }
        var link = box.closest('a');
        if (box.checked && link) link.classList.add('done');
        box.addEventListener('change', function () {
          try {
            if (box.checked) localStorage.setItem(doneKey(key), '1');
            else localStorage.removeItem(doneKey(key));
          } catch (e) { /* ignore */ }
          if (link) link.classList.toggle('done', box.checked);
          updateProgress();
        });
      }
    );
  }

  /* ---------------- 4. 学习进度（按小节计算） ---------------- */

  function updateProgress() {
    var boxes = document.querySelectorAll('#sidebar input[data-done]');
    var total = boxes.length, done = 0;
    Array.prototype.forEach.call(boxes, function (b) { if (b.checked) done++; });
    var pct = total ? Math.round((done / total) * 100) : 0;
    var pill = document.querySelector('.progress-pill .bar i');
    var txt = document.querySelector('.progress-pill .pct');
    if (pill) pill.style.width = pct + '%';
    if (txt) txt.textContent = total ? (done + '/' + total + ' ' + (LANG === 'en' ? 'sections' : '小节')) : '—';
  }
  updateProgress();

  /* ---------------- 5. 代码卡片：复制按钮 + 语法高亮 ---------------- */

  Array.prototype.forEach.call(document.querySelectorAll('.code-card'), function (card) {
    var head = card.querySelector('.code-head');
    var code = card.querySelector('pre code');
    if (!head || !code) return;

    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = LANG === 'en' ? 'Copy' : '复制';
    btn.addEventListener('click', function () {
      var text = code.textContent;
      function ok() {
        btn.textContent = LANG === 'en' ? 'Copied ✓' : '已复制 ✓';
        btn.classList.add('ok');
        setTimeout(function () {
          btn.textContent = LANG === 'en' ? 'Copy' : '复制';
          btn.classList.remove('ok');
        }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok, function () { fallback(); });
      } else { fallback(); }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); ok(); } catch (e) { btn.textContent = LANG === 'en' ? 'Copy failed' : '复制失败'; }
        document.body.removeChild(ta);
      }
    });
    head.appendChild(btn);

    if (window.hljs) {
      try { window.hljs.highlightElement(code); } catch (e) { /* ignore */ }
    }
  });

  // 终端块同样做高亮
  Array.prototype.forEach.call(document.querySelectorAll('.term pre code'), function (code) {
    if (window.hljs) {
      try { window.hljs.highlightElement(code); } catch (e) { /* ignore */ }
    }
  });

  /* ---------------- 6. 选项卡（对比多个步骤的代码） ---------------- */

  Array.prototype.forEach.call(document.querySelectorAll('.tabs'), function (tabs) {
    var btns = tabs.querySelectorAll('.tab-btns button');
    var panels = tabs.querySelectorAll('.tab-panel');
    Array.prototype.forEach.call(btns, function (btn, i) {
      btn.addEventListener('click', function () {
        Array.prototype.forEach.call(btns, function (b) { b.classList.remove('on'); });
        Array.prototype.forEach.call(panels, function (p) { p.classList.remove('on'); });
        btn.classList.add('on');
        if (panels[i]) panels[i].classList.add('on');
      });
    });
  });

  /* ---------------- 7. 滚动时高亮当前小节 ---------------- */

  var subLinks = Array.prototype.slice.call(
    document.querySelectorAll('#sidebar .sub-nav a[data-sec]')
  );
  if (subLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    subLinks.forEach(function (a) { map[a.getAttribute('data-sec')] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = map[en.target.id];
        if (!link) return;
        if (en.isIntersecting) {
          subLinks.forEach(function (a) { a.classList.remove('cur'); });
          link.classList.add('cur');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('section.doc[data-nav]').forEach(function (sec) {
      obs.observe(sec);
    });
  }

  /* ---------------- 8. 移动端菜单 ---------------- */

  var menuBtn = document.querySelector('.menu-btn');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('open');
      }
    });
  }
})();
