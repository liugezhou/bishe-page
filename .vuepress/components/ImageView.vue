<template>
  <div class="image-viewer">
    <!-- 原始图片容器 -->
    <div class="image-preview-container">
      <img
        :src="url"
        alt="Image"
        @click="showFullScreen"
        class="original-image"
        ref="originalImage"
        :style="{ 
          objectFit: fit,
          width: typeof width === 'number' ? width + 'px' : width,
          height: typeof height === 'number' ? height + 'px' : height
        }"
      />
      <div class="preview-overlay" @click="showFullScreen">
        <span class="preview-text">点击预览</span>
      </div>
    </div>

    <!-- 全屏显示的图片 -->
    <div v-if="isFullScreen" class="full-screen-overlay" @keyup.esc="hideFullScreen">
      <div class="full-screen-controls">
        <button @click="zoomIn" class="control-button">放大</button>
        <button @click="zoomOut" class="control-button">缩小</button>
        <button @click="hideFullScreen" class="control-button close-button">关闭</button>
      </div>
      <div class="full-screen-image-container" @click.self="hideFullScreen">
        <img
          :src="url"
          alt="Full Screen Image"
          :style="{ transform: `scale(${scale})` }"
          class="full-screen-image"
          @wheel="handleWheel"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    fit: {
      type: String,
      default: 'contain',
      validator: (value) => {
        return ['contain', 'cover', 'fill', 'none', 'scale-down'].includes(value);
      }
    },
    width: {
      type: [String, Number],
      default: 'auto'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    }
  },
  data() {
    return {
      isFullScreen: false,
      scale: 1,
    };
  },
  methods: {
    showFullScreen() {
      this.isFullScreen = true;
      // 添加键盘事件监听
      document.addEventListener('keydown', this.handleKeyDown);
    },
    hideFullScreen() {
      this.isFullScreen = false;
      this.scale = 1;
      // 移除键盘事件监听
      document.removeEventListener('keydown', this.handleKeyDown);
    },
    handleKeyDown(event) {
      if (event.key === 'Escape') {
        this.hideFullScreen();
      }
    },
    zoomIn() {
      this.scale += 0.1;
    },
    zoomOut() {
      this.scale -= 0.1;
      if (this.scale < 0.1) {
        this.scale = 0.1;
      }
    },
    handleWheel(event) {
      event.preventDefault(); // 防止页面滚动
      if (event.deltaY > 0) {
        this.zoomOut();
      } else {
        this.zoomIn();
      }
    },
  },
  beforeUnmount() {
    // 组件销毁前移除事件监听
    document.removeEventListener('keydown', this.handleKeyDown);
  },
};
</script>

<style scoped>
.image-viewer {
  position: relative;
  display: inline-block;
}

.image-preview-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.original-image {
  max-width: 100%;
  height: auto;
  filter: blur(1px) brightness(0.9);
  transition: filter 0.3s ease;
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.preview-text {
  color: white;
  font-size: 1.2em;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.image-preview-container:hover .original-image {
  filter: blur(0.5px) brightness(0.95);
}

.image-preview-container:hover .preview-overlay {
  opacity: 0.8;
}

.full-screen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.full-screen-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 1001;
}

.full-screen-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-image {
  max-width: 90vw;
  max-height: 90vh;
  transition: transform 0.2s ease;
  filter: none;
}

.control-button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.control-button:hover {
  background: white;
}

.close-button {
  background: rgba(255, 82, 82, 0.9);
  color: white;
}

.close-button:hover {
  background: rgb(255, 82, 82);
}
</style>