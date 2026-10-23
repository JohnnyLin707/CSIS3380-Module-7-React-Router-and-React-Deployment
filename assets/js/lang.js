/* ============================================================
   Module 7 网页学习版 —— 中英文切换引擎
   功能：
   1) 扫描页面文本，按字典原地替换为英文（或还原中文）；
   2) 普通区域按「元素模板」翻译（行内标签保留为 {0} {1} 占位符）；
      代码块（pre）内按「文本节点」翻译，完整保留缩进与高亮；
   3) 右下角悬浮按钮，固定可见，随时点击切换；
   4) 选择记忆在 localStorage，刷新后保持；
   5) 切换时派发 m7:lang 事件，在线演示同步换语言。
   ============================================================ */
(function () {
  'use strict';

  var STORE = 'm7-lang';
  var CJK = /[\u4e00-\u9fff]/;
  var NL = '\u23CE'; // 换行标记
  var DICT = window.M7_DICT || {};
  var TITLES = window.M7_TITLES || {};

  var state = 'zh';
  try { state = localStorage.getItem(STORE) === 'en' ? 'en' : 'zh'; } catch (e) { /* ignore */ }
  window.__M7_LANG = state;
  var origTitle = document.title;

  /* ---------- 工具 ---------- */

  // 与提取脚本一致的规范化：换行 → ⏎，空白折叠
  function norm(s) {
    return s.replace(/\s*\n\s*/g, ' ' + NL + ' ').trim().replace(/\s+/g, ' ');
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function depthOf(el) {
    var d = 0, p = el;
    while ((p = p.parentElement)) d++;
    return d;
  }

  function inSkip(el) {
    return !!el.closest('[id^="demo-"], .demo-stage, script, style, .lang-fab, .progress-pill, .copy-btn');
  }

  /* ---------- 目标收集 ---------- */

  var elTargets = [];   // { el, key, origHTML }
  var nodeTargets = []; // { node, key, orig }
  var attrTargets = []; // { el, attr, orig }

  function collect() {
    elTargets = [];
    nodeTargets = [];
    attrTargets = [];

    // 1) 元素级模板（pre 内部除外，交给文本节点处理）
    var all = document.body.querySelectorAll('*');
    Array.prototype.forEach.call(all, function (el) {
      if (inSkip(el) || el.closest('pre')) return;
      var hasText = false;
      Array.prototype.forEach.call(el.childNodes, function (n) {
        if (n.nodeType === 3 && CJK.test(n.textContent)) hasText = true;
      });
      if (!hasText) return;
      var tpl = '', ph = 0;
      Array.prototype.forEach.call(el.childNodes, function (n) {
        if (n.nodeType === 3) tpl += n.textContent;
        else if (n.nodeType === 1) tpl += '{' + ph++ + '}';
      });
      var key = norm(tpl);
      if (!key.replace(/\{\d+\}/g, '').trim()) return; // 只有占位符则跳过
      elTargets.push({ el: el, key: key });
    });

    // 2) 代码块（pre）内的中文文本节点
    Array.prototype.forEach.call(document.querySelectorAll('pre'), function (pre) {
      if (inSkip(pre)) return;
      var w = document.createTreeWalker(pre, NodeFilter.SHOW_TEXT);
      while (w.nextNode()) {
        var n = w.currentNode;
        if (CJK.test(n.textContent)) {
          var k = norm(n.textContent);
          if (k) nodeTargets.push({ node: n, key: k });
        }
      }
    });

    // 3) 含中文的属性（title / aria-label / alt / placeholder）
    Array.prototype.forEach.call(
      document.querySelectorAll('[title],[placeholder],[aria-label],[alt]'),
      function (el) {
        if (inSkip(el)) return;
        ['title', 'placeholder', 'aria-label', 'alt'].forEach(function (a) {
          var v = el.getAttribute(a);
          if (v && CJK.test(v)) attrTargets.push({ el: el, attr: a, orig: v });
        });
      }
    );
  }

  /* ---------- 切换到英文 ---------- */

  function applyEN() {
    // 1) 先记录原始内容（用于还原）
    elTargets.forEach(function (t) { t.origHTML = t.el.innerHTML; });
    nodeTargets.forEach(function (t) { t.orig = t.node.textContent; });

    // 2) 元素级：深的先替换，父元素重建时才能拿到已翻译的子元素
    var sorted = elTargets.slice().sort(function (a, b) {
      return depthOf(b.el) - depthOf(a.el);
    });
    sorted.forEach(function (t) {
      var tr = DICT[t.key];
      if (!tr) return;
      var kids = [];
      Array.prototype.forEach.call(t.el.childNodes, function (n) {
        if (n.nodeType === 1) kids.push(n.outerHTML);
      });
      var parts = tr.split(/\{(\d+)\}/);
      var html = '';
      for (var i = 0; i < parts.length; i++) {
        if (i % 2 === 0) html += esc(parts[i]);
        else html += kids[Number(parts[i])] || '';
      }
      t.el.innerHTML = html;
    });

    // 3) 代码块文本节点：按行替换，保留原有缩进
    nodeTargets.forEach(function (t) {
      var tr = DICT[t.key];
      if (!tr) return;
      var raw = t.orig;
      var lines = raw.split('\n');
      var segs = tr.split(NL);
      if (segs.length === lines.length) {
        var out = [];
        for (var i = 0; i < lines.length; i++) {
          var lead = (lines[i].match(/^\s*/) || [''])[0];
          var trail = (lines[i].match(/\s*$/) || [''])[0];
          if (!lines[i].trim()) { out.push(lines[i]); continue; } // 空行原样保留
          out.push(lead + segs[i].trim() + trail);
        }
        t.node.textContent = out.join('\n');
      } else {
        var lead2 = (raw.match(/^\s*/) || [''])[0];
        t.node.textContent = lead2 + tr.split(NL).join('\n').trim();
      }
    });

    // 4) 属性
    attrTargets.forEach(function (t) {
      var tr = DICT[t.orig.trim()];
      if (tr) t.el.setAttribute(t.attr, tr);
    });

    // 5) 标题与 lang
    var file = location.pathname.split('/').pop() || 'index.html';
    if (TITLES[file]) document.title = TITLES[file];
    document.documentElement.lang = 'en';
  }

  /* ---------- 还原中文 ---------- */

  function applyZH() {
    elTargets.forEach(function (t) {
      if (t.origHTML !== undefined && document.contains(t.el)) {
        t.el.innerHTML = t.origHTML;
      }
    });
    nodeTargets.forEach(function (t) {
      if (t.orig !== undefined && t.node.parentNode) t.node.textContent = t.orig;
    });
    attrTargets.forEach(function (t) { t.el.setAttribute(t.attr, t.orig); });
    document.title = origTitle;
    document.documentElement.lang = 'zh-CN';
  }

  /* ---------- 悬浮按钮 ---------- */

  var fab = document.createElement('button');
  fab.className = 'lang-fab';
  fab.type = 'button';
  fab.innerHTML = '<span class="globe">🌐</span><span class="label">EN</span>';

  function updateFab() {
    var label = fab.querySelector('.label');
    if (state === 'en') {
      label.textContent = '中文';
      fab.title = '切换为中文（Click to switch to Chinese）';
      fab.setAttribute('aria-label', '切换为中文');
    } else {
      label.textContent = 'EN';
      fab.title = '切换为英文（Switch to English）';
      fab.setAttribute('aria-label', '切换为英文');
    }
  }

  function toggle() {
    state = state === 'en' ? 'zh' : 'en';
    window.__M7_LANG = state;
    try { localStorage.setItem(STORE, state); } catch (e) { /* ignore */ }
    if (state === 'en') {
      collect();
      applyEN();
    } else {
      applyZH();
    }
    updateFab();
    // 通知在线演示同步切换语言
    window.dispatchEvent(new CustomEvent('m7:lang', { detail: state }));
  }

  fab.addEventListener('click', toggle);
  document.body.appendChild(fab);

  /* ---------- 初始化 ---------- */

  if (state === 'en') {
    collect();
    applyEN();
  }
  updateFab();
})();
