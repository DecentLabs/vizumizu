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
      shape: this.set.shape || 'circle',
      fillcolor: this.set.fillcolor || 'none',
      strokecolor: this.set.strokecolor || '#000',
      strokesize: this.set.strokesize || 5,
      stroketype: this.set.stroketype,
      opacity: this.set.opacity || 1,
      rotation: this.set.rotation || 0,
      size: this.set.size || 100,
      image: findByName(this.set.shape)
    }
  },
  computed: {
    style () {
      const scale = parseInt(this.size, 10) / 100

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
  .visual,
  .visual svg {
    width: 100%;
    height: 100%;
    padding: 10%;
    box-sizing: border-box;
  }

  svg {
    width: 100px;
  }
</style>
