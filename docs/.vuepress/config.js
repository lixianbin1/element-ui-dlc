module.exports = {
  title: 'element-ui-dlc',
  description: '一个ElementUi的补充工具包',
  base:'/element-ui-dlc/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'element-ui-dlc',
      description: 'ElementUi的补充工具包'
    },
    '/en': {
      lang: 'en-US',
      title: 'element-ui-dlc',
      description: 'A supplementary toolkit for elementui'
    }
  },
  themeConfig: {
    logo: '/img/logo01.png',
    displayAllHeaders: true, //展开所有
    locales: { //多语言
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/lixianbin1/element-ui-dlc' }, 
        ],
        sidebar:[
            {
              title: '介绍',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/guide/','element-ui-dlc 是什么?'],
                ['/guide/Started','快速上手'],
              ]
            },
        ],
        lastUpdated: '最后更新时间',
      },
      '/en': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'GitHub', link: 'https://github.com/lixianbin1/element-ui-dlc' }, 
        ],
        sidebar:[
            {
              title: 'Introduce',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/en/guide/','What is element-ui-dlc?'],
                ['/en/guide/Started','Get Started'],
              ]
            },
        ],
        lastUpdated: 'Last Updated',
      },
    }
  },
}