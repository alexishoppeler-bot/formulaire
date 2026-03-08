'use strict';

(function initSharedLayout() {
  function currentPageId() {
    const file = window.location.pathname.split('/').pop() || '';
    return file.replace(/\.html$/i, '') || 'accueil';
  }

  function sectionedLinks() {
    return [
      {
        title: 'Général',
        links: ['accueil', 'evaluations', 'regles', 'donnees']
      },
      {
        title: 'Cours',
        links: ['cours-protection-donnees', 'cours-vocabulaire-pro', 'cours-joindre-fichiers', 'cours-revision-semaine']
      },
      {
        title: 'Exercices',
        links: (window.EXERCISE_CONFIG && window.EXERCISE_CONFIG.orderedPages) || []
      }
    ];
  }

  function renderHeader() {
    const slot = document.getElementById('header-slot');
    if (!slot) return;
    slot.innerHTML = [
      '<header class="header">',
      '  <div class="header-logo">',
      '    <a href="accueil.html" class="header-logo" style="text-decoration:none;color:inherit;">',
      '      <span class="header-logo-icon" aria-hidden="true"></span>',
      '      <span>Autonomie Numérique</span>',
      '    </a>',
      '    <div class="header-progress-wrap">',
      '      <span id="headerProgressText">0%</span>',
      '      <div class="header-progress-bar"><div id="headerProgressFill" class="header-progress-fill" style="width:0%"></div></div>',
      '    </div>',
      '  </div>',
      '  <div class="header-right">',
      '    <button class="sidebar-toggle" id="sidebarToggle" type="button" aria-label="Ouvrir le menu">☰</button>',
      '  </div>',
      '</header>'
    ].join('');
  }

  function renderSidebar() {
    const slot = document.getElementById('sidebar-slot');
    if (!slot) return;
    const pageId = currentPageId();
    const meta = (window.EXERCISE_CONFIG && window.EXERCISE_CONFIG.meta) || {};

    const parts = ['<aside class="sidebar" id="sidebar">'];
    for (const section of sectionedLinks()) {
      parts.push('<div class="sidebar-section">');
      parts.push('<div class="sidebar-section-title">' + section.title + '</div>');
      for (const page of section.links) {
        const m = meta[page] || { name: page, href: page + '.html', icon: '•' };
        const active = page === pageId ? ' active' : '';
        let statusAttr = '';
        if (window.ScoreManager && section.title === 'Exercices') {
          const status = window.ScoreManager.readMetrics(page).status;
          statusAttr = ' data-status="' + status + '"';
        }
        parts.push(
          '<a class="sidebar-link' + active + '" href="' + m.href + '"' + statusAttr + '>' +
          '<span class="icon">' + (m.icon || '•') + '</span>' +
          '<span>' + (m.name || page) + '</span>' +
          '</a>'
        );
      }
      parts.push('</div>');
    }
    parts.push('</aside>');
    slot.innerHTML = parts.join('');
  }

  function renderFooter() {
    const slot = document.getElementById('footer-slot');
    if (!slot) return;
    slot.innerHTML = [
      '<footer class="footer">',
      '  <span>AH · Plateforme locale</span>',
      '  <span>Progression sauvegardée sur cet appareil</span>',
      '</footer>'
    ].join('');
  }

  function updateHeaderProgress() {
    if (!window.ScoreManager || !window.EXERCISE_CONFIG) return;
    const summary = window.ScoreManager.getGlobalSummary(window.EXERCISE_CONFIG.orderedPages || []);
    const total = (window.EXERCISE_CONFIG.orderedPages || []).length || 1;
    const pct = Math.round((summary.completed / total) * 100);
    const text = document.getElementById('headerProgressText');
    const fill = document.getElementById('headerProgressFill');
    if (text) text.textContent = pct + '%';
    if (fill) fill.style.width = pct + '%';
  }

  function initSidebarToggle() {
    const btn = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    if (!btn || !sidebar) return;
    btn.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      btn.classList.toggle('active', open);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderSidebar();
    renderFooter();
    updateHeaderProgress();
    initSidebarToggle();

    document.addEventListener('score:updated', () => {
      updateHeaderProgress();
      renderSidebar();
      initSidebarToggle();
    });
  });
})();
