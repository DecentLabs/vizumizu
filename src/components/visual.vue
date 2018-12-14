<template>
  <div v-once v-html="img.src" :style="style" class="visual"></div>
</template>

<script>
import { findByName } from '../data/images.js'

export default {
  name: 'visual',
  props: ['set', 'image'],
  data () {
    return {
      fillcolor: (this.set && this.set.fillcolor) || '#eee',
      strokecolor: (this.set && this.set.strokecolor) || '#000',
      strokesize: (this.set && this.set.strokesize) || 2,
      stroketype: (this.set && this.set.stroketype) || 'solid',
      opacity: (this.set && this.set.opacity) || 1,
      rotation: (this.set && this.set.rotation) || 0,
      size: (this.set && this.set.size) || 1
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
    style () {
      const scale = (50 + parseInt(this.size, 10)) / 100

      return {
        fill: this.fillcolor,
        stroke: this.strokecolor,
        strokeWidth: this.strokesize,
        opacity: this.opacity,
        transform: `scale(${scale}) rotate(${this.rotation}deg)`
      }
    }
  }
}
</script>

<style scoped>
  .visual {
    padding: 15%;
  }
</style>
