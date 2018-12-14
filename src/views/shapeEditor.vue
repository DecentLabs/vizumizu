<template>
  <main>
    <div
      v-for="img in layout"
      v-bind:style="{
        top: img.top + 'px',
        left: img.left + 'px',
        width: img.width + 'px',
        height: img.height + 'px'
      }"
      :data-field-id="img.id"
      :data-top="img.top"
      :data-left="img.left"
      class="draggable-source"
    >
      <visual :image="img.image"></visual>
    </div>

    <!-- img v-for="img in imgs" :src="img.src" :width="img.width" :height="img.height" -->
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { Draggable } from '@shopify/draggable'
import { LAYOUT_ACTIONS } from '../store/layoutEditorStore.js'
import visual from '../components/visual.vue'

export default {
  name: 'ShapeEditor',
  components: {
    visual
  },
  computed: {
    ...mapGetters({ layout: 'layoutStore/layout' }),
    model () {
      return this.$store.getters['appStore/getModelById'](this.id)
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    setupDrag () {
      const d = new Draggable(this.$el)
      let offsetX = 0
      let offsetY = 0
      let field = null
      let nearby = null
      d.on('drag:start', e => {
        const sensorEvent = e.sensorEvent
        const target = e.source
        const id = target.dataset.fieldId
        offsetX = sensorEvent.clientX - target.dataset.left
        offsetY = sensorEvent.clientY - target.dataset.top
        field = this.$store.getters['layoutStore/getFieldById'](id)
        nearby = null
        this.$store.dispatch('layoutStore/' + LAYOUT_ACTIONS.removeFieldConstrain, field.id)
      })
      d.on('drag:move', e => {
        const id = e.source.dataset.fieldId
        const sensorEvent = e.sensorEvent
        const position = [
          sensorEvent.clientX - offsetX,
          sensorEvent.clientY - offsetY
        ]
        this.$store.dispatch('layoutStore/' + LAYOUT_ACTIONS.setFieldPosition, { id, position })
      })
      d.on('drag:stop', e => {
        nearby = this.$store.getters['layoutStore/getNearbyPoints'](field)
        if (nearby) {
          this.$store.dispatch('layoutStore/' + LAYOUT_ACTIONS.setFieldConstrain, nearby)
        }
      })
    }
  },
  mounted () {
    this.setupDrag()
    this.$store.dispatch('modelStore/refreshModel', this.$route.params.id)
    this.$store.dispatch('layoutStore/' + LAYOUT_ACTIONS.loadFields, this.$store.getters['modelStore/getAllFields'])
  }
}
</script>

<style>
  main {
    position: relative;
  }

  main .draggable-source {
    position: absolute;
    outline: 1px solid red;
  }

</style>
