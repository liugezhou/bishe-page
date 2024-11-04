<template>
  <carousel :autoplay="true" :loop="true">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
