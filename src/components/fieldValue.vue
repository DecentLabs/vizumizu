<template>
  <div class="value-row">
    <div>
      <label :for="id">Value name</label>
      <input :id="id" type="text" v-model="value.name" @change="saveValue">
      <button @click="deleteValue">X</button>
    </div>
    <div v-if="isMultipleValue">
      <label>visual value</label>
      <select v-model="visualValue" @change="saveVisualValue">
        <option :key="index" v-for="(visual, index) in selectedVisualValue"
                :value="visual">{{visual}}</option>
      </select>
    </div>
    <div v-else>
      <label>visual value</label>
      <input type="text" v-model="visualValue" @change="saveVisualValue">
    </div>
    <div v-if="isColor" class="colormarker" :style="{backgroundColor: visualValue}"></div>
  </div>
</template>

<script>
import {visualTypes} from '../data/interfaces'

export default {
  name: 'fieldValue',
  props: ['id', 'fieldId', 'visual'],
  data () {
    return {
      visualValue: ''
    }
  },
  computed: {
    field () {
      return this.$store.getters['modelStore/getFieldById'](this.fieldId)
    },
    value () {
      return this.$store.getters['modelStore/getFieldValueById'](this.id, this.field) || {name: 'value'}
    },
    selectedVisual () {
      return visualTypes.filter(i => {
        return i.type === this.visual
      }).pop()
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
    saveValue () {
      const options = {
        name: this.value.name,
        id: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('modelStore/saveValueToField', options)
    },
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
  },
  created () {
    this.visualValue = this.field.transform.values[this.id].mappedValue
  },
  watch: {
    selectedVisualValue () {
      this.$store.dispatch('modelStore/resetVisualsOfFiels', this.fieldId)
      if (this.isMultipleValue) {
        this.visualValue = ''
      } else {
        this.visualValue = this.selectedVisualValue
      }
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
