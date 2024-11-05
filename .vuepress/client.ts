import { defineClientConfig } from 'vuepress/client'
import Swiper from './components/Swiper.vue'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('Swiper', Swiper)
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
