import { defineClientConfig } from 'vuepress/client'
import Swiper from './components/Swiper.vue'
import IconHome from './components/IconHome.vue'
import IconFire from './components/IconFire.vue'
import IconOther from './components/IconOther.vue'
import IconShang from './components/IconShang.vue'
import IconWechat from './components/IconWechat.vue'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('Swiper', Swiper)
    app.component('IconHome', IconHome)
    app.component('IconFire', IconFire)
    app.component('IconOther', IconOther)
    app.component('IconShang', IconShang)
    app.component('IconWechat', IconWechat)
    if (typeof window !== 'undefined') {
      // 百度统计代码
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?b102e17dcedf0ede8628680519a5229b'
      const s = document.getElementsByTagName('script')[0]
      s && s.parentNode && s.parentNode.insertBefore(hm, s)
      // 监听路由变化
      router.afterEach((to, from) => {
        if (window._hmt) {
          window._hmt.push(['_trackPageview', to.fullPath])
        }
      })
    }
  },
})
