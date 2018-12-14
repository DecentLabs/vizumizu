<template>
  <main>
    <h1>Collected data: {{model.name}}</h1>
    <router-link :to="{name: 'editModel', params: {id: model.id}}"
                 class="button edit">
      edit model
    </router-link>
    <div class="legend">
      <p v-for="item in transforms">{{item}}</p>
    </div>
    <div class="visual-grid">
      <vector image="rect"></vector>
    </div>
  </main>
</template>

<script>
import visual from '@/components/visual'
import vector from '@/components/vector'

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
    field () {
      return (id) => this.model.fields.filter(field => field.id === id).pop()
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
      console.log(fieldId, fieldValue)
      const field = this.field(fieldId)
      const transform = field.transform.values[fieldValue]
      return {[transform.type.toLowerCase()]: transform.mappedValue}
    }
  },
  created () {
    this.$store.dispatch('appStore/setModelList')
    this.$store.dispatch('recordStore/setRecordList')
    console.log(localStorage.getItem('models'))
    this.transforms = this.model.fields.map(field => field.transform)
  },
  components: {
    visual,
    vector
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
