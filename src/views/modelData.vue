<template>
  <main>
    <h1>Collected data</h1>
    <h2>{{model.name}}</h2>
    <div class="visual-grid">
      <visual :key="index" v-for="(set, index) in visualsets" :set="set"></visual>
    </div>
  </main>
</template>

<script>
import visual from '@/components/visual'

export default {
  name: 'ModelData',
  data () {
    return {
      transforms: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    records () {
      return this.$store.getters['recordStore/getRecordsByModel'](this.id)
    },
    model () {
      return this.$store.getters['appStore/getModelById'](this.id)
    },
    visualsets () {
      return this.records.map(record => {
        return record.map(item => this.mapVisual(item.fieldId, item.fieldValueId)).reduce((acc, curr) => {
          Object.assign(acc, curr)
          console.log(acc, curr)
          return acc
        }, {})
      })
    }
  },
  methods: {
    mapVisual (fieldId, fieldValue) {
      const field = this.model.fields.filter(field => field.id === fieldId).pop()
      const transform = field.transform[fieldValue]
      return {[transform.type.toLowerCase()]: transform.mappedValue}
    }
  },
  watch: {},
  created () {
    this.$store.dispatch('appStore/setModelList')
    this.$store.dispatch('recordStore/setRecordList')
  },
  components: {
    visual
  }
}
</script>

<style scoped>
  .visual-grid {
    display: grid;
    width: 600px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, 150px);
    grid-auto-flow: dense;
    margin: 0 auto;
  }
</style>
