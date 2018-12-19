<template>
  <main>
    <div class="button-wrapper">
      <router-link :to="{name: 'ModelData', params: {id}}"
                   class="button show">
        see model data
      </router-link>
      <button @click="save" class="save-button">save model</button>
      <button @click="addField" class="add-button">add new field</button>
      <router-link :to="{name: 'ShapeEditor', params: {id}}"
                   class="button shape">
        edit layout
      </router-link>
    </div>
    <div class="model-details">
      <label>model name</label>
      <input type="text" placeholder="add model name" v-model="name" class="title" :class="{error: isError(name)}">
      <div class="basic-visuals">
        <div>
          <label>basic shape</label>
          <shape-select defaultOption="select a shape" @onSelectChange="onShapeChange" :selectedItem="shape" ></shape-select>
        </div>
        <div>
          <label>basic fill</label>
          <input type="text" placeholder="add fill color" v-model="fill" :class="{error: isError(fill)}">
          <div class="colormarker" :style="{backgroundColor: fill}"></div>
        </div>
        <div>
          <label>basic stroke</label>
          <input type="text" placeholder="add stroke color" v-model="stroke" :class="{error: isError(stroke)}">
          <div class="colormarker" :style="{borderColor: stroke}"></div>
        </div>
      </div>
    </div>
    <div :key="field.id" v-for="field in fields">
      <field-input :id="field.id" :field="field"/>
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
      id: this.$route.params.id,
      shapes: visualTypes.find(i => i.type === 'Shape').mappedValue
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.modelStore.name
      },
      set (value) {
        this.$store.commit('modelStore/setName', value)
      }
    },
    shape: {
      get () {
        return this.$store.state.modelStore.shape
      }
    },
    fill: {
      get () {
        return this.$store.state.modelStore.fill
      },
      set (value) {
        this.$store.commit('modelStore/setFill', value)
      }
    },
    stroke: {
      get () {
        return this.$store.state.modelStore.stroke
      },
      set (value) {
        this.$store.commit('modelStore/setStroke', value)
      }
    },
    fields () {
      return this.$store.state.modelStore.fields
    }
  },
  methods: {
    isError (val) {
      return !val && this.$store.state.modelStore.error
    },
    onShapeChange (value) {
      console.log(value)
      this.$store.commit('modelStore/setShape', value)
    },
    save () {
      this.$store.dispatch('modelStore/save')
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

  input.error,
  select.error {
    border-color: #ff6232;
  }

  .colormarker {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
  }

  .shape {
    background-color: #f33c6d;
  }
</style>
