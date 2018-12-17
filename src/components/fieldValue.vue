<template>
  <div class="value-row">
    <div>
      <label :for="id">Value name</label>
      <input :id="id" type="text" v-model="name">
      <button @click="deleteValue">X</button>
    </div>
    <div v-if="isMultipleValue">
      <label>visual value</label>
      <select v-model="visualValue">
        <option :key="index" v-for="(visual, index) in selectedVisualValue"
                :value="visual">{{visual}}
        </option>
      </select>
    </div>
    <div v-else>
      <label>visual value</label>
      <input type="text" v-model="visualValue">
    </div>
    <div v-if="isColor" class="colormarker" :style="{backgroundColor: visualValue}"></div>
  </div>
</template>

<script>
import { visualTypes } from '../data/interfaces.js'

export default {
  name: 'fieldValue',
  props: ['field', 'value'],
  data () {
    return {}
  },
  computed: {
    id () {
      return this.value.id
    },
    name: {
      get () {
        return this.value.name
      },
      set (newName) {
        this.$store.dispatch('modelStore/updateValueOfField',
          { field: this.field, value: { id: this.value.id, name: newName } })
      }
    },
    visualValue: {
      get () {},
      set (value) {}
    },
    transform () {
      return this.field.transform
    },
    selectedVisual () {
      const transformType = this.transform && this.transform.type
      return visualTypes.find(vt => vt.type === transformType)
    },
    selectedVisualValue () {
      return this.selectedVisual ? this.selectedVisual.mappedValue : ''
    },
    isMultipleValue () {
      return typeof this.selectedVisualValue === 'object'
    },
    isColor () {
      return this.selectedVisual && this.selectedVisual.type.includes('Color')
    }
  },
  methods: {
    deleteValue () {
      const options = {
        id: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('modelStore/deleteValueOfField', options)
    },
    saveVisualValue () {
      const options = {
        type: this.selectedVisual.type,
        mappedValue: this.visualValue,
        valueId: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('modelStore/saveVisualToField', options)
    }
  }
}
</script>

<style scoped>
  .value-row {
    display: flex;
    margin-bottom: 15px;
    text-align: left;
  }

  .value-row > div {
    margin-right: 60px;
  }

  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }

  input {
    border: none;
    border-bottom: 1px solid #333;
  }

  button {
    background-color: #020202;
  }

  .colormarker {
    width: 20px;
    height: 20px;
  }
</style>
