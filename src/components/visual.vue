<template>
  <div v-once v-html="image.src" :style="style" class="visual"></div>
</template>

<script>
import { findByName } from '../data/images.js'

export default {
  name: 'visual',
  props: ['set'],
  data () {
    return {
      shape: this.set.shape || '',
      fillcolor: this.set.fillcolor,
      strokecolor: this.set.strokecolor || '#000',
      strokesize: this.set.strokesize || 2,
      stroketype: this.set.stroketype,
      opacity: this.set.opacity || 1,
      rotation: this.set.rotation || 0,
      size: this.set.size || 1,
      image: findByName(this.set.shape)
    }
  },
  computed: {
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
