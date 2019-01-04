<template>
  <div class="value-row">
    <div>
      <label :for="id">Value name</label>
      <input :id="id" type="text" v-model="value" :class="{error: isError(value)}">
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
      <div v-if="isColor" class="colormarker" :style="{backgroundColor: visualValue}"></div>
    </div>
    <button @click="deleteValue" class="button delete"></button>
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
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
    text-align: left;
  }

  .value-row > div {
    flex: 1;
    margin-right: 60px;
  }

  .value-row button {
    flex: 1;
    max-width: 40px;
  }

  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }
</style>
