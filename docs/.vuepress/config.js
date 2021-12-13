module.exports = {
  base: '/vuepress/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    repo: 'https://github.com/zhangxwhope/vuepress',
    editLinks: true,
    docsRepo: 'https://github.com/zhangxwhope/vuepress',
    docsDir: 'docs',
    smoothScroll: true,
    sidebar: {
      '/guide/': ['/guide/', '/guide/tip', '/guide/demo'],
      '/config/': ['/config/'],
      '/category/': ['/category/'],
      '/': ['config']
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Config', link: '/config/' },
          { text: 'Category', link: '/category/' }
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '配置', link: '/zh/config/' },
          { text: '目录', link: '/zh/category/' }
        ],
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/zh/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ]
  ]
}