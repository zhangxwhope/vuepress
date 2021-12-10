module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    repo: 'https://github.com/zhangxwhope/vuepress',
    editLinks: true,
    docsRepo: 'https://github.com/zhangxwhope/vuepress',
    docsDir: 'docs',
    lastUpdated: true,
    smoothScroll: true,
    sidebar: 'auto',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
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
  plugins: ['@vuepress/back-to-top']
}