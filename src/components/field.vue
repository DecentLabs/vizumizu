<template>
  <div class="field-row">
    <div>
      <label :for="id">Field name</label>
      <input :id="id" type="text" v-model="field.name">
    </div>
    <div>
      <label>Field visual</label>
      <select v-model="selectedVisual">
        <option :key="index" v-for="(visual, index) in visualTypes"
            :value="visual">{{visual}}</option>
      </select>
    </div>
    <div>
      <label>Field shape</label>
      <shape-select :options="shapes" defaultOption="model" :selectedItem="field.shape" @onSelectChange="onShapeChange"></shape-select>
    </div>
    <div class="field-values">
      <!--<div :key="i" v-for="(val, i) in field.fieldValues">-->
        <!--<field-value v-if="val !== null" :id="val.id" :fieldId="id" :visual="selectedVisual"/>-->
      <!--</div>-->
    </div>
    <div class="button-row">
      <button @click="saveField" class="save-button">save field</button>
      <button @click="addFieldValue" class="add-button">add value</button>
      <button @click="deleteField" class="delete-button">X</button>
    </div>
  </div>
</template>

<script>
import fieldValue from '@/components/fieldValue.vue'
import shapeSelect from '@/components/shapeSelect.vue'

import {visualTypes} from '../data/interfaces'

export default {
  name: 'fieldInput',
  props: ['id', 'shape'],
  data () {
    return {
      visualTypes: visualTypes.map(i => i.type),
      selectedVisual: '',
      fieldShape: null
    }
  },
  computed: {
    field () {
      return this.$store.getters['modelStore/getFieldById'](this.id)
    },
    shapes () {
      const shapes = visualTypes.filter(i => {
        return i.type === 'Shape'
      }).pop()
      return shapes.mappedValue
    }
  },
  methods: {
    onShapeChange (shape) {
      this.fieldShape = shape

      this.saveField()
    },
    saveField () {
      const options = {
        name: this.field.name,
        fieldId: this.id,
        shape: this.fieldShape
      }

      this.$store.dispatch('modelStore/saveVisualToField', {fieldId: this.id, type: this.selectedVisual})
      this.$store.dispatch('modelStore/saveFieldToModel', options)
    },
    addFieldValue () {
      this.$store.dispatch('modelStore/addValueToField', this.id)
    },
    deleteField () {
      const options = {
        fieldId: this.id
      }
      this.$store.dispatch('modelStore/deleteField', options)
    }
  },
  components: {
    fieldValue,
    shapeSelect
  },
  mounted () {
    this.selectedVisual = this.field.transform !== undefined ? this.field.transform.type : visualTypes[0].type
    this.fieldShape = this.field.shape || null
  }
}
</script>

<style scoped>
  .field-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 20px 40px;
    margin-bottom: 15px;
    border-bottom: 1px solid #848484;
  }

  .button-row {
    width: 100%;
    text-align: right;
  }

  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }

  input,
  select {
    border: none;
    border-bottom: 1px solid #333;
  }

  .field-values {
    width: 100%;
    padding: 20px;
  }

  .delete-button {
    background-color: #020202;
  }
</style>
