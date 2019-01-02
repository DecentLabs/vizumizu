<template>
  <div v-once v-html="img.src" :style="style" class="visual" :class="final">
  </div>
</template>

<script>
import { findByName } from '../data/images.js'

export default {
  name: 'visual',
  props: ['set', 'image', 'final'],
  data () {
    return {
      shape: (this.set && this.set.shape) || 'circle',
      fillcolor: (this.set && this.set.fillcolor) || 'none',
      strokecolor: (this.set && this.set.strokecolor) || '#000',
      strokesize: (this.set && this.set.strokesize) || 5,
      stroketype: (this.set && this.set.stroketype) || 'solid',
      opacity: (this.set && this.set.opacity) || 1,
      rotation: (this.set && this.set.rotation) || 0,
      size: (this.set && this.set.size) || 100
    }
  },
  computed: {
    img () {
      if (this.image) {
        return this.image
      } else if (this.set && this.set.shape) {
        return findByName(this.set.shape)
      } else {
        return ''
      }
    },
    initStyle () {
      const scale = parseInt(this.size, 10) / 100

      return {
        fill: this.fillcolor,
        stroke: this.strokecolor,
        strokeWidth: this.strokesize,
        opacity: this.opacity,
        transform: `scale(${scale}) rotate(${this.rotation}deg)`
      }
    },
    style () {
      if (this.set && this.set.positions) {
        console.log(this.set)
        return Object.assign(this.initStyle, this.set.positions)
      } else {
        return this.initStyle
      }
    }
  }
}
</script>

<style scoped>
  .visual {
    position: relative;
  }

  .visual,
  .visual svg {
    width: 100%;
    height: 100%;
    padding: 10%;
    box-sizing: border-box;
  }

  .visual.final {
    position: absolute;
    width: 50%;
    height: 50%;
  }

  svg {
    width: 100px;
  }
</style>
