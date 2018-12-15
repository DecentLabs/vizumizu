<template>
  <main>
    <h1>Collected data: {{model.name}}</h1>
    <router-link :to="{name: 'editModel', params: {id: model.id}}"
                 class="button edit">
      edit model
    </router-link>
    <div>
      <div v-for="f in model.fields">
        {{f.fieldValues}}
        <div v-for="v in f.fieldValues">
          {{v.name}}
          {{f.transform[v.id]}}
          </div>
        {{f.transform}}
        <hr>
      </div>
    </div>
    <div class="visual-grid">
      <visual :key="index" v-for="(set, index) in visualsets" :set="set"></visual>
    </div>
  </main>
</template>

<script>
import visual from '@/components/visual'

export default {
  name: 'ModelData',
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
    values () {
      const vals = []
      this.model.fields.forEach(field => field.fieldValues.forEach(i => vals.push({[i.id]: i.name})))
      return vals
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
    getFieldById (id) {
      return this.model.fields.find(field => field.id === id)
    },
    mapVisual (fieldId, fieldValue) {
      const field = this.getFieldById(fieldId)
      const transform = field.transform.values[fieldValue]
      return {[transform.type.toLowerCase()]: transform.mappedValue}
    }
  },
  created () {
    this.$store.dispatch('appStore/setModelList')
    this.$store.dispatch('recordStore/setRecordList')
    console.log(this.values, 'vals')
    console.log(this.visualsets, 'visualsets')  },
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
    grid-template-rows: repeat(10, 200px);
    grid-auto-flow: dense;
    margin: 0 auto;
  }
</style>
