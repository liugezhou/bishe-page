import { defineClientConfig } from 'vuepress/client'
import Swiper from './components/Swiper.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
  }
})