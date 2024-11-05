import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default defineUserConfig({
  // base:'/bishe-page/',
  title: '优秀毕设项目',
  description: '毕设交流',
  bundler: viteBundler(),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
  },
  plugins: [
    //docsearch插件,https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html
    docsearchPlugin({
      apiKey: '6d2d2896cc7c52a9e95d58bb1490c45e',
      indexName: 'pages',
      appId: 'LDN7P552TT',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档'
            }
          }
        }
      }
    })
  ],
  // bundler: webpackBundler(),
  theme: recoTheme({
    algolia: {
      // apiKey: '6d2d2896cc7c52a9e95d58bb1490c45e',
      // indexName: 'pages',
      // appId: 'LDN7P552TT',
    },
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '优秀毕设项目精选',
        description: '优秀毕设项目的聚居地',
        tip: '项目说明',
        info: '信息',
        danger: '重要提醒',
        warning: '提醒',
        details: '详情',
        tagsText: '标签',
        backToHome: '返回首页',
        categoriesText: '分类',
        catalogTitle: '页面导航',
        editLinkText: '编辑当前页面',
        lastUpdatedText: '最后更新时间',
        selectLanguageName: '简体中文',
        notFound: '哇哦，没有发现这个页面！',
      },
    },
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'liugezhou',
    authorAvatar: '/head.png',
    // Github的链接
    // docsRepo:
    //   'https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp',
    docsBranch: 'main',
    docsDir: '/docs',
    // series 为原 sidebar
    series: {
      '/docs/guide/': [
        {
          text: '前置知识',
          children: ['introduce', 'test'],
        },
        {
          text: '安装答疑',
          children: ['dayi', 'dayi-java'],
        },
      ],
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: '案例', link: '/categories/vue/1.html' },
      // { text: '标签', link: '/tags/tag1/1.html' },
      {
        text: '其他',
        children: [{ text: '打赏', link: '/docs/others/donate.html' }],
      },
    ],
    // 公告栏
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 优秀毕设项目展示的初版网站搭建成功了，大家可以尽情尝鲜了，有任何毕设相关的问题可以进群交流，或者添加我的微信，我会在第一时间响应。`,
          style: 'font-size: 12px;',
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'QQ 群',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li>QQ群：392177763</li>
          </ul>`,
          style: 'font-size: 12px;',
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: '微信咨询',
        },
        {
          type: 'text',
          content: `
          <image src="https://jsd.cdn.zzko.cn/gh/liugezhou/picx-images-hosting@master/bishe/liugezhou.webp"></image>`,
          style: 'font-size: 12px;',
        },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "title",
        //   content: "GitHub",
        // },
        // {
        //   type: "text",
        //   content: `
        //   <ul>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
        //   </ul>`,
        //   style: "font-size: 12px;",
        // },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '打赏',
              link: '/docs/others/donate.html',
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
})
