<template>
  <main>
    <div class="button-wrapper">
      <router-link :to="{name: 'ModelData', params: {id: model.id}}"
                                             class="button show">
      see model data
    </router-link>
      <button @click="sendModelForm" class="save-button">save model</button>
      <button @click="addField" class="add-button">add new field</button>
    </div>
    <div class="model-details">
      <label>model name</label>
      <input type="text" placeholder="add model name" v-model="model.name" class="title">
      <div class="basic-visuals">
        <div>
          <label>basic shape</label>
          <select v-model="basicShape">
            <option :key="index" v-for="(visual, index) in shapes"
                    :value="visual">{{visual}}</option>
          </select>
        </div>
        <div>
          <label>basic fill</label>
          <input type="text" v-model="model.fill">
        </div>
        <div>
          <label>basic stroke</label>
          <input type="text" v-model="strokeColor">
        </div>
      </div>
    </div>
    <div :key="field.id" v-for="field in model.fields">
      <field-input :id="field.id" :shape="basicShape"/>
    </div>
  </main>
</template>

<script>
import fieldInput from '@/components/field.vue'
import {visualTypes} from '../data/interfaces'

export default {
  name: 'createModel',
  data () {
    return {
      id: this.$route.params.id,
      basicVisuals: ['Shape', 'FillColor', 'StrokeColor'],
      basicShape: '',
      basicFill: '',
      basicStroke: ''
    }
  },
  computed: {
    model () {
      return this.$store.state.modelStore.model
    },
    shapes () {
      return this.getVisualType('Shape')
    },
    fillColor: {
      get () {
        return this.model.fill || this.getVisualType('FillColor')
      },
      set (value) {
        this.$store.commit('modelStore/setFill', value)
      }
    },
    strokeColor: {
      get () {
        return this.model.stroke || this.getVisualType('StrokeColor')
      },
      set (value) {
        this.$store.commit('modelStore/setStroke', value)
      }
    }
  },
  methods: {
    getVisualType (type) {
      const visual = visualTypes.filter(i => {
        return i.type === type
      }).pop()
      return visual.mappedValue
    },
    sendModelForm () {
      const data = {
        name: this.model.name,
        shape: this.basicShape,
        fill: this.model.fill
      }
      console.log(data)
      this.$store.dispatch('modelStore/updateModelData', data)
    },
    addField () {
      this.$store.dispatch('modelStore/addFieldToModel')
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('modelStore/refreshModel', id)

    this.basicShape = this.model.shape
  },
  components: {
    fieldInput
  }
}
</script>

<style>
  main {
    width: 900px;
    padding: 40px;
    margin: 0 auto;
  }

  .model-details {
    padding: 30px;
    border: 5px dashed #efce10;
    text-align: left;
  }

  .button-wrapper {
    text-align: right;
    margin-bottom: 20px;
  }

  .save-button {
    background-color: #efce10;
  }

  .add-button {
    background-color: #ff6232;
  }

  .title {
    font-size: 24px;
  }

  input,
  select,
  option {
    font-size: 18px;
    border: none;
    color: #121212;
    font-weight: 700;
    border-bottom: 1px solid #333;
    border-radius: 0;
    -webkit-appearance: initial;
    appearance: initial;
    background: none;
  }

  .colormarker {
    width: 20px;
    height: 20px;
  }
</style>
