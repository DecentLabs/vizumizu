<template>
  <main>
    <div class="button-wrapper">
      <router-link :to="{name: 'ModelData', params: {id: model.id}}"
                   class="button show">
        see model data
      </router-link>
      <button @click="sendModelForm" class="save-button">save model</button>
      <button @click="addField" class="add-button">add new field</button>
      <router-link :to="{name: 'ShapeEditor', params: {id: model.id}}"
                   class="button shape">
        edit layout
      </router-link>
    </div>
    <div class="model-details">
      <label>model name</label>
      <input type="text" placeholder="add model name" v-model="model.name" class="title">
      <div class="basic-visuals">
        <div>
          <label>basic shape</label>
          <shape-select defaultOption="select a shape" @onSelectChange="onShapeChange" :selectedItem="model.shape"></shape-select>
        </div>
        <div>
          <label>basic fill</label>
          <input type="text" v-model="model.fill">
        </div>
        <div>
          <label>basic stroke</label>
          <input type="text" v-model="model.stroke">
        </div>
      </div>
    </div>
    <div :key="field.id" v-for="field in model.fields">
      <field-input :id="field.id"/>
    </div>
  </main>
</template>

<script>
import fieldInput from '@/components/field.vue'
import shapeSelect from '@/components/shapeSelect.vue'

import { visualTypes } from '../data/interfaces'

export default {
  name: 'createModel',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    model () {
      return this.$store.state.modelStore.model
    },
    shapes () {
      const shapes = visualTypes.filter(i => {
        return i.type === 'Shape'
      }).pop()
      return shapes.mappedValue
    }
  },
  methods: {
    onShapeChange (value) {
      this.model.shape = value
    },
    sendModelForm () {
      this.$store.commit('modelStore/setName', this.model.name)
      this.$store.commit('modelStore/setFill', this.model.fill)
      this.$store.commit('modelStore/setStroke', this.model.stroke)
      this.$store.commit('modelStore/setShape', this.model.shape)
      this.$store.dispatch('modelStore/updateModelData')
    },
    addField () {
      this.$store.dispatch('modelStore/addFieldToModel')
    }
  },
  mounted () {
    this.$store.dispatch('modelStore/refreshModel', this.$route.params.id)
  },
  components: {
    fieldInput,
    shapeSelect
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

  .shape {
    background-color: #f33c6d;
  }
</style>
