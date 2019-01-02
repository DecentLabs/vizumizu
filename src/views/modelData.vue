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
      <div class="visual-wrapper">
        <visual :key="index" v-for="(set, index) in visualsets" :set="set" final="final"></visual>
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
    layout () {
      return this.$store.state.layoutStore.layout.length > 0
        ? this.$store.state.layoutStore.layout
        : JSON.parse(localStorage.getItem(`layout-${this.id}`))
    },
    records () {
      return this.$store.getters['recordStore/getRecordsByModel'](this.id)
    },
    model () {
      return this.$store.state.modelStore
    },
    visualsets () {
      const shapeSets = this.records.map(record => {
        return record.map(item => this.mapVisual(item.fieldId, item.fieldValueId)).reduce((acc, curr) => {
          let currKey = Object.keys(curr)[0]
          if (acc.hasOwnProperty(currKey)) {
            Object.assign({}, curr[currKey])
          } else {
            Object.assign(acc, curr)
          }
          return acc
        }, {})
      })
      return Object.values(shapeSets[0])
    }
  },
  methods: {
    getFieldById (id) {
      return this.model.fields.find(field => field.id === id)
    },
    getPositionById (id) {
      let positions = {}

      this.layout.forEach(item => {
        if (item[0].prop === item[1].prop) {
          let match = item[0].prop
          positions[match] = 0
        } else {
          item.forEach(i => {
            if (i.fieldId === id) {
              positions[i.prop] = '50%'
            }
          })
        }
      })
      return positions
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
      const positions = this.getPositionById(fieldId)

      return {
        [shape]: {
          shape,
          positions,
          [transform.type.toLowerCase()]: transform.mappedValue
        }
      }
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

  .visual-grid .visual-wrapper {
    position: relative;
  }
</style>
