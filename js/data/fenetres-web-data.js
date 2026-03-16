'use strict';

window.FENETRES_WEB_DATA = {
  pageId: 'fenetres-web',
  name: 'Gestion des fenêtres internet',

  windows: {
    browser: {
      title: 'Google Chrome',
      icon: '🌐',
      tabs: ['Job Room', 'ORP Vaud', 'Gmail']
    },
    email: {
      title: 'Messagerie',
      icon: '📧',
      tabs: ['Boîte de réception', 'Messages envoyés']
    },
    ad: {
      title: 'Publicité',
      icon: '📢',
      tabs: ['Offre spéciale']
    }
  },

  tasks: [
    {
      instruction: 'Ouvrez la fenêtre Google Chrome pour chercher un emploi.',
      expected: { type: 'open', target: 'browser' },
      state: {
        open: [],
        minimized: [],
        maximized: [],
        focused: null,
        activeTab: 'Job Room'
      }
    },
    {
      instruction: 'Agrandissez la fenêtre Google Chrome pour mieux voir le site Job Room.',
      expected: { type: 'maximize', target: 'browser' },
      state: {
        open: ['browser'],
        minimized: [],
        maximized: [],
        focused: 'browser',
        activeTab: 'Job Room'
      }
    },
    {
      instruction: 'Réduisez Google Chrome dans la barre des tâches.',
      expected: { type: 'minimize', target: 'browser' },
      state: {
        open: ['browser'],
        minimized: [],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Job Room'
      }
    },
    {
      instruction: 'Restaurez Google Chrome depuis la barre des tâches.',
      expected: { type: 'restore', target: 'browser' },
      state: {
        open: ['browser'],
        minimized: ['browser'],
        maximized: ['browser'],
        focused: null,
        activeTab: 'Job Room'
      }
    },
    {
      instruction: 'Cliquez sur l’onglet Gmail dans Google Chrome.',
      expected: { type: 'switch-tab', target: 'browser', value: 'Gmail' },
      state: {
        open: ['browser'],
        minimized: [],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Job Room'
      }
    },
    {
      instruction: 'Une publicité apparaît. Fermez la fenêtre publicitaire.',
      expected: { type: 'close', target: 'ad' },
      state: {
        open: ['browser', 'ad'],
        minimized: [],
        maximized: ['browser'],
        focused: 'ad',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Ouvrez la fenêtre Messagerie pour répondre à votre conseiller ORP.',
      expected: { type: 'open', target: 'email' },
      state: {
        open: ['browser'],
        minimized: [],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Cliquez sur la fenêtre Messagerie pour la mettre au premier plan.',
      expected: { type: 'focus', target: 'email' },
      state: {
        open: ['browser', 'email'],
        minimized: [],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Réduisez la fenêtre Messagerie dans la barre des tâches.',
      expected: { type: 'minimize', target: 'email' },
      state: {
        open: ['browser', 'email'],
        minimized: [],
        maximized: ['browser'],
        focused: 'email',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Rouvrez la fenêtre Messagerie depuis la barre des tâches.',
      expected: { type: 'restore', target: 'email' },
      state: {
        open: ['browser', 'email'],
        minimized: ['email'],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Fermez la fenêtre Messagerie après avoir envoyé votre réponse.',
      expected: { type: 'close', target: 'email' },
      state: {
        open: ['browser', 'email'],
        minimized: [],
        maximized: ['browser'],
        focused: 'email',
        activeTab: 'Gmail'
      }
    },
    {
      instruction: 'Fermez Google Chrome quand vous avez fini.',
      expected: { type: 'close', target: 'browser' },
      state: {
        open: ['browser'],
        minimized: [],
        maximized: ['browser'],
        focused: 'browser',
        activeTab: 'Gmail'
      }
    }
  ]
};
