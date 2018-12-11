<template>
  <div>
    <canvas ref="canvas" width="100" height="100"></canvas>
  </div>
</template>

<script>
export default {
  name: 'visual',
  props: ['set'],
  data () {
    return {
      shape: this.set.shape || '',
      bordercolor: this.set.strokecolor,
      fillcolor: this.set.fillcolor,
      strokesize: this.set.strokesize,
      canvas: null,
      ctx: null
    }
  },
  computed: {
    rectangle () {
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
      const margin = 30
      this.ctx.rect(margin, margin, this.canvas.width - (2 * margin), this.canvas.height - (2 * margin))
      this.ctx.fill()
      this.ctx.stroke()
    },
    drawCircle () {
      const margin = 20
      this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2 - margin, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
    },
    drawTriangle () {
      this.ctx.beginPath()
      this.ctx.moveTo(20, this.canvas.height - 20)
      this.ctx.lineTo(this.canvas.width / 2, 40)
      this.ctx.lineTo(this.canvas.width - 20, this.canvas.height - 20)
      this.ctx.closePath()
      this.ctx.fill()
      this.ctx.stroke()
    },
    initStyle () {
      this.ctx.fillStyle = this.fillcolor
      this.ctx.strokeStyle = 'black'
      this.ctx.lineWidth = this.strokesize * 3
    }
  },
  mounted () {
    this.canvas = this.$el.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.initStyle()
    this.drawShape()
  }
}
</script>

<style scoped>

</style>
