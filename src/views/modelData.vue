<template>
  <main>
    <h1>Collected data: {{model.name}}</h1>
    <router-link :to="{name: 'editModel', params: {id: model.id}}"
                 class="button edit">
      edit model
    </router-link>
    <div class="legend">
      <div :key="index" v-for="(field, index) in model.fields" class="field">
        <h3>{{field.name}}</h3>
        <div class="legend-visuals">
          <div :key="i" v-for="(value, i) in field.fieldValues">
            <p>{{value.value}}</p>
            <div class="visual-wrapper">
              <visual :set="getLegendVisual(field, value)"></visual>
            </div>
          </div>
        </div>
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
      return this.$store.state.modelStore
    },
    visualsets () {
      return this.records.map(record => {
        return record.map(item => {
          return this.mapVisual(item.fieldId, item.fieldValueId)}).reduce((acc, curr) => {
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
    getLegendVisual (field, fieldValue) {
      const type = field.transform.values[fieldValue.id].type.toLowerCase()
      const value = field.transform.values[fieldValue.id].mappedValue
      const shape = field.transform.type === 'Shape'
        ? field.transform.values[fieldValue.id].mappedValue
        : this.$store.getters['modelStore/getFieldShape'](field)
      return {
        [type]: value,
        shape
      }
    },
    mapVisual (fieldId, fieldValue) {
      const field = this.getFieldById(fieldId)
      const transform = field.transform.values[fieldValue]
      return {[transform.type.toLowerCase()]: transform.mappedValue}
    }
  },
  mounted () {
    this.$store.dispatch('modelStore/refreshModel', this.id)
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
    grid-template-rows: repeat(10, 200px);
    grid-auto-flow: dense;
    margin: 0 auto;
  }

  .legend {
    display: flex;
    width: 70%;
    flex-flow: row wrap;
    margin: 0 auto 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #666;
  }

  .legend .field {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
  }

  .legend .field h3 {
    width: 100%;
    text-align: left;
  }

  .legend-visuals {
    width: 100%;
    display: flex;
  }

  .legend .visual-wrapper {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
</style>
