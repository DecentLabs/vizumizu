<template>
  <main>
    <h1>Collected data: {{model.name}}</h1>
    <router-link :to="{name: 'editModel', params: {id: model.id}}"
                 class="button yellow">
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
      <div class="visual-wrapper" :key="index" v-for="(setItem, index) in visualsets">
        <visual :key="key" v-for="(set, key) in setItem" :set="set" final="final"></visual>
      </div>
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
      return this.$store.state.recordStore.records
    },
    model () {
      return this.$store.state.modelStore
    },
    visualsets () {
      return this.records
        .map(record => record.map(item => this.mapVisual(item.fieldId, item.fieldValueId))
          .reduce((acc, curr) => this.reduceShapes(acc, curr), {})
        ).map(item => {
          item = this.setDefaultStyles(item)
          return Object.values(item)
        })
    },
    layout () {
      return this.$store.getters['layoutStore/relativeLayout'].reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
      }, {})
    }
  },
  methods: {
    getFieldById (id) {
      return this.model.fields.find(field => field.id === id)
    },
    getShape (field, fieldValue) {
      return field.transform.type === 'Shape'
        ? field.transform.values[fieldValue.id].mappedValue
        : this.$store.getters['modelStore/getFieldShape'](field)
    },
    getLegendVisual (field, fieldValue) {
      const type = field.transform.values[fieldValue.id].type.toLowerCase()
      const value = field.transform.values[fieldValue.id].mappedValue
      const shape = this.getShape(field, fieldValue)
      return {
        [type]: value,
        shape
      }
    },
    mapVisual (fieldId, fieldValue) {
      const field = this.getFieldById(fieldId)
      const transform = field.transform.values[fieldValue]
      const shape = this.getShape(field, fieldValue)
      return {
        [shape]: {
          fieldId,
          position: this.layout[fieldId],
          shape,
          [transform.type.toLowerCase()]: transform.mappedValue
        }
      }
    },
    reduceShapes (acc, curr) {
      let currKey = Object.keys(curr)[0]
      if (acc.hasOwnProperty(currKey)) {
        Object.assign(acc[currKey], curr[currKey])
      } else {
        Object.assign(acc, curr)
      }
      return acc
    },
    setDefaultStyles (shapes) {
      for (let shape in shapes) {
        if (shape === this.model.shape) {
          if (!shapes[shape].hasOwnProperty('fillcolor')) {
            shapes[shape].fillcolor = this.model.fill
          }
          if (!shapes[shape].hasOwnProperty('strokecolor')) {
            shapes[shape].strokecolor = this.model.stroke
          }
        }
      }
      return shapes
    }
  },
  mounted () {
    this.$store.dispatch('modelStore/refreshModel', this.id)
    this.$store.dispatch('recordStore/setRecordList', this.id)
    this.$store.dispatch('layoutStore/reset', this.id)
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
    width: 90%;
    flex-flow: row wrap;
    margin: 0 auto 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #666;
  }

  .legend .field {
    min-width: 25%;
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

  .legend-visuals p {
    margin: 0 0 5px;
  }

  .legend .visual-wrapper {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .visual-grid .visual-wrapper {
    position: relative;
  }
</style>
