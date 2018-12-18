<template>
  <div class="value-row">
    <div>
      <label :for="id">Value name</label>
      <input :id="id" type="text" v-model="value" :class="{error: isError(value)}">
      <button @click="deleteValue">X</button>
    </div>

    <div v-if="isMultipleValue">
      <label>visual value</label>
      <select v-model="visualValue" :class="{error: isError(visualValue)}">
        <option :key="index" v-for="(visual, index) in selectedVisualValue"
                :value="visual">{{visual}}
        </option>
      </select>
    </div>
    <div v-else>
      <label>visual value</label>
      <input type="text" v-model="visualValue" :class="{error: isError(visualValue)}">
    </div>
    <div v-if="isColor" class="colormarker" :style="{backgroundColor: visualValue}"></div>
  </div>
</template>

<script>
import { visualTypes } from '../data/interfaces.js'

export default {
  name: 'fieldValue',
  props: ['field', 'fieldValue'],
  data () {
    return {}
  },
  computed: {
    id () {
      return this.fieldValue.id
    },
    value: {
      get () {
        return this.fieldValue.value
      },
      set (newName) {
        this.$store.dispatch('modelStore/updateValueOfField',
          { field: this.field, value: { id: this.fieldValue.id, value: newName } })
      }
    },
    visualValue: {
      get () {
        return this.$store.getters['modelStore/getVisualById'](this.field, this.fieldValue.id) || this.selectedVisual.mappedValue
      },
      set (value) {
        this.saveVisualValue(value)
      }
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
    isError (val) {
      return typeof val !== 'number' && !val
    },
    deleteValue () {
      const options = {
        id: this.id,
        fieldId: this.field.id
      }

      console.log(options, 'fv')
      this.$store.dispatch('modelStore/deleteValueOfField', options)
    },
    saveVisualValue (value) {
      const visual = {
        type: this.selectedVisual.type,
        mappedValue: value
      }
      this.$store.dispatch('modelStore/saveVisualToField',
        { field: this.field, value: this.fieldValue, visual })
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

  button {
    background-color: #020202;
  }
</style>
