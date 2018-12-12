<template>
  <main>
    <h1>Collected data: {{model.name}}</h1>
    <router-link :to="{name: 'editModel', params: {id: model.id}}"
                 class="button edit">
      edit model
    </router-link>
    <!--<div class="legend">-->
      <!--<p v-for="item in transforms"> {{item}}</p>-->
    <!--</div>-->
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
          return acc
        }, {})
      })
    }
  },
  methods: {
    mapVisual (fieldId, fieldValue) {
      const field = this.model.fields.filter(field => field.id === fieldId).pop()
      const transform = field.transform.values[fieldValue]
      return {[transform.type.toLowerCase()]: transform.mappedValue}
    }
  },
  created () {
    this.$store.dispatch('appStore/setModelList')
    this.$store.dispatch('recordStore/setRecordList')

    this.transforms = this.model.fields.map(field => field.transform)
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
