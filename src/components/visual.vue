<template>
  <image :href="image.src" :style="style"/>
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
      opacity: this.set.opacity,
      rotation: this.set.rotation,
      size: this.set.size / 2,
      canvas: null,
      ctx: null,
      image: findByName(this.set.shape)
    }
  },
  computed: {
    style () {
      return `fill:${this.fillcolor}, stroke:${this.strokecolor}`
    }
  },
  methods: {
    drawShape () {
      if (this.shape === 'rect') {
        this.drawRect()
      }

      if (this.shape === 'circle') {
        this.drawCircle()
      }

      if (this.shape === 'triangle') {
        this.drawTriangle()
      }
    },
    drawRect () {
      const margin = 10 + this.size
      this.ctx.rect(margin, margin, this.canvas.width - (2 * margin), this.canvas.height - (2 * margin))
      this.ctx.fill()
      this.ctx.stroke()
    },
    drawCircle () {
      const margin = this.size
      this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2 - margin, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
    },
    drawTriangle () {
      this.ctx.beginPath()
      this.ctx.moveTo(this.size, this.canvas.height - this.size)
      this.ctx.lineTo(this.canvas.width / 2, this.size * 2)
      this.ctx.lineTo(this.canvas.width - this.size, this.canvas.height - this.size)
      this.ctx.closePath()
      this.ctx.fill()
      this.ctx.stroke()
    },
    initStyle () {
      this.ctx.fillStyle = this.fillcolor
      this.ctx.strokeStyle = this.strokecolor
      this.ctx.lineWidth = this.strokesize * 3
    }
  },
  _mounted () {
    this.canvas = this.$el.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.initStyle()
    this.drawShape()
  }
}
</script>

<style scoped>

</style>
