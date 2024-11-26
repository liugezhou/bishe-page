<script setup lang="ts">
import type { AutoplayOptions, SwiperModule, Swiper as SwiperType } from 'swiper/types'
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-creative'

interface SlideItem {
  /**
   * 图片地址
   */
  link: string
  /**
   * 跳转链接
   */
  href?: string
  alt?: string
}

interface Props {
  items?: (string | SlideItem)[]
  width?: number | string // 轮播区域宽度，单位 px
  height?: number | string // 轮播区域高度，单位 px
  mode?: 'banner' | 'carousel' | 'broadcast' // banner: 轮播图模式; carousel: 走马灯模式; broadcast: 信息展播模式
  navigation?: boolean // 是否显示导航
  effect?: 'slide' | 'fade' | 'cube' | 'flip' | 'coverflow' | 'cards' | 'creative' // 切换动画效果
  delay?: number // 自动切换的时间间隔，仅当 mode: 'banner' 时生效，单位 ms
  speed?: number // 切换过渡的动画持续时间，单位 ms
  loop?: boolean // 是否循环切换
  pauseOnMouseEnter?: boolean // 当鼠标移入走马灯时，是否暂停自动轮播，仅当 mode: 'banner' 或 mode: 'carousel' 时生效
  swipe?: boolean // 是否可以鼠标拖动
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  mode: 'banner',
  navigation: true,
  effect: 'slide',
  delay: 3000,
  speed: 300,
  loop: true,
  pauseOnMouseEnter: false,
  swipe: true,
})

const showPreview = ref(false)
const currentPreviewIndex = ref(0)

const slideList = computed<SlideItem[]>(() => {
  return props.items?.map((link) => {
    if (typeof link === 'string')
      return { link }

    return link
  }) ?? []
})

function parseSize(size: number | string, isMobile: boolean) {
  if (isMobile) {
    return '100%';
  }
  if (typeof size === 'number') {
    return `${size}px`;
  }
  return size;
}

const isMobile = computed(() => {
  // 这里可以根据你的需求判断是否为移动端
  // 例如：通过媒体查询、用户代理等方式判断
  return window.innerWidth < 768; // 假设移动端的宽度小于768px
});

const styles = computed(() => ({
  width: parseSize(props.width, isMobile.value),
  height: parseSize(isMobile.value ? parseFloat(parseSize(props.width, isMobile.value)) / 2 : props.height, isMobile.value),
}));
// const styles = computed(() => ({
//   width: parseSize(props.width),
//   height: parseSize(props.height),
// }))

const modules = computed<SwiperModule[]>(() => {
  if (props.mode === 'carousel')
    return [Autoplay]

  if (props.mode === 'broadcast')
    return [Navigation, Pagination, Mousewheel]

  const modules: SwiperModule[] = [Navigation, Pagination, Autoplay]
  const effectMoudles = {
    fade: EffectFade,
    cube: EffectCube,
    flip: EffectFlip,
    coverflow: EffectCoverflow,
    cards: EffectCards,
    creative: EffectCreative,
  }
  if (props.effect !== 'slide') {
    modules.push(effectMoudles[props.effect])
  }
  return modules
})

const autoplay = computed<AutoplayOptions | boolean>(() => {
  if (props.mode === 'banner') {
    return {
      delay: props.delay,
      disableOnInteraction: false, // 用户操作 swiper 之后，是否禁止 autoplay。默认为 true：停止。
      pauseOnMouseEnter: props.pauseOnMouseEnter, // 鼠标置于 swiper 时暂停自动切换，鼠标离开时恢复自动切换，默认 false
    }
  }
  else if (props.mode === 'carousel') {
    return {
      delay: 0,
      disableOnInteraction: false,
    }
  }
  return false
})

const hasNavigation = computed(() =>
  props.mode === 'banner' || props.mode === 'broadcast' ? props.navigation : false,
)

function onSwiper(swiper: SwiperType) {
  if (props.mode === 'carousel' && props.pauseOnMouseEnter) {
    swiper.el.onmouseenter = () => swiper.autoplay.stop()
    swiper.el.onmouseleave = () => swiper.autoplay.start()
  }
}

function openPreview(index: number) {
  if (!slideList.value[index].href) {
    currentPreviewIndex.value = index
    showPreview.value = true
  }
}

function closePreview() {
  showPreview.value = false
}

function prevImage() {
  if (currentPreviewIndex.value > 0) {
    currentPreviewIndex.value--
  } else {
    currentPreviewIndex.value = slideList.value.length - 1
  }
}

function nextImage() {
  if (currentPreviewIndex.value < slideList.value.length - 1) {
    currentPreviewIndex.value++
  } else {
    currentPreviewIndex.value = 0
  }
}
</script>

<template>
  <ClientOnly>
    <Swiper
      class="vp-swiper"
      :class="{ 'swiper-no-swiping': mode === 'banner' ? !swipe : mode === 'carousel' }"
      :style="styles"
      :modules="modules"
      :autoplay="autoplay"
      :navigation="hasNavigation"
      :pagination="props.mode !== 'carousel' ? {
        dynamicBullets: true,
        clickable: true,
      } : false"
      :speed="speed"
      :loop="loop"
      :effect="mode === 'banner' ? effect : 'slide'"
      lazy
      v-bind="$attrs"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(item, index) in slideList" :key="item.link + index">
        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="swiper-slide-link no-icon">
          <img class="swiper-slide-img" :src="item.link" :alt="item.alt" loading="lazy">
        </a>
        <div v-else class="swiper-slide-wrapper" @click="openPreview(index)">
          <img class="swiper-slide-img" :src="item.link" :alt="item.alt" loading="lazy">
          <div class="preview-hint">点击预览</div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- 图片预览模态框 -->
    <div v-if="showPreview" class="preview-modal" @click.self="closePreview">
      <div class="preview-content">
        <img :src="slideList[currentPreviewIndex].link" :alt="slideList[currentPreviewIndex].alt">
        <button class="preview-close" @click="closePreview">×</button>
        <button class="preview-prev" @click="prevImage">‹</button>
        <button class="preview-next" @click="nextImage">›</button>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.vp-swiper {
  margin: 24px 0;
}

.swiper-slide-link {
  display: block;
  height: 100%;
}

.swiper-slide-wrapper {
  position: relative;
  height: 100%;
  cursor: pointer;
}

.preview-hint {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  opacity: 1;
  transition: opacity 0.3s;
}

.swiper-slide-wrapper:hover .preview-hint {
  opacity: 1;
}

.swiper-slide-img {
  width: 100%;
  height: 100%;
  cursor: default !important;
  object-fit: cover;
}

.swiper-slide-link .swiper-slide-img {
  cursor: pointer !important;
}

.swiper {
  --swiper-theme-color: var(--vp-c-bg);
  --swiper-pagination-bullet-inactive-color: var(--vp-c-bg);
  --swiper-pagination-bullet-inactive-opacity: 0.4;
}

.swiper-wrapper {
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}

.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.preview-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.preview-close,
.preview-prev,
.preview-next {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 16px;
  font-size: 24px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-close:hover,
.preview-prev:hover,
.preview-next:hover {
  background: rgba(0, 0, 0, 0.8);
}

.preview-close {
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  font-size: 30px;
}

.preview-prev,
.preview-next {
  top: 50%;
  transform: translateY(-50%);
  padding: 16px 24px;
  font-size: 40px;
  height: 80px;
  background: rgba(0,0,0, 0.5);
}

.preview-prev {
  left: 10px;
}

.preview-next {
  right: 10px;
}

@media (max-width: 768px) {
  .preview-close {
    top: 10px;
    right: 10px;
  }
  
  .preview-prev,
  .preview-next {
    padding: 12px 16px;
    font-size: 30px;
    height: 60px;
  }
  
  .preview-prev {
    left: 5px;
  }
  
  .preview-next {
    right: 5px;
  }
}
</style>