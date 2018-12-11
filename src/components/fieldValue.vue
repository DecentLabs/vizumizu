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
        <option :key="index" v-for="(visual, index) in selectedVisual"
                :value="visual">{{visual}}</option>
      </select>
    </div>
    <div v-else>
      <label>visual value</label>
      <input type="text" v-model="visualValue" @change="saveVisualValue">
    </div>
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
    value () {
      const field = this.$store.getters['editStore/getFieldById'](this.fieldId)
      return this.$store.getters['editStore/getFieldValueById'](this.id, field) || {name: 'value'}
    },
    selectedVisual () {
      const visual = visualTypes.filter(i => {
        return i.type === this.visual
      }).pop()
      return visual ? visual.mappedValue : ''
    },
    isMultipleValue () {
      return typeof this.selectedVisual === 'object'
    }
  },
  methods: {
    saveValue () {
      const options = {
        name: this.value.name,
        id: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('editStore/saveValueToField', options)
    },
    deleteValue () {
      const options = {
        id: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('editStore/deleteValueOfField', options)
    },
    saveVisualValue () {
      const options = {
        type: this.selectedVisual,
        mappedValue: this.visualValue,
        valueId: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('editStore/saveVisualToField', options)
    }
  },
  watch: {
    selectedVisual () {
      this.$store.dispatch('editStore/resetVisualsOfFiels', this.fieldId)
      if (!this.isMultipleValue) {
        this.visualValue = this.selectedVisual
      } else {
        this.visualValue = ''
      }
    }
  }
}
</script>

<style scoped>
  .value-row {
    margin-bottom: 15px;
    text-align: left;
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
</style>
