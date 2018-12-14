<template>
  <main>
    <img v-for="img in imgs" :src="img.src" :width="img.width" :height="img.height">
  </main>
</template>

<script>
import images from '../data/images.js'

export default {
  name: 'ShapeEditor',
  computed: {
    imgs () {
      return images
    }
  }
}
</script>

<style>
</style>
