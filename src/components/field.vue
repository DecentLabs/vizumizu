<template>
  <div class="field-row">
    <div>
      <label :for="id">Field name</label>
      <input :id="id" type="text" v-model="name">
    </div>
    <div>
      <label>Field visual</label>
      <select v-model="selectedVisual">
        <option :key="index" v-for="(visual, index) in visualTypes"
                :value="visual">{{visual}}
        </option>
      </select>
    </div>
    <div>
      <label>Field shape</label>
      <shape-select defaultOption="model" :selectedItem="shape"
                    @onSelectChange="onShapeChange"></shape-select>
    </div>
    <div class="field-values">
      <div :key="val.id" v-for="val in field.fieldValues">
        <field-value :value="val" :field="field"/>
      </div>
    </div>
    <div class="button-row">
      <button @click="addFieldValue" class="add-button">add value</button>
      <button @click="deleteField" class="delete-button">X</button>
    </div>
  </div>
</template>

<script>
import fieldValue from '@/components/fieldValue.vue'
import shapeSelect from '@/components/shapeSelect.vue'
import { Transform, visualTypes } from '../data/interfaces'

export default {
  name: 'fieldInput',
  props: ['field'],
  data () {
    return {
      visualTypes: visualTypes.map(i => i.type),
      shapes: visualTypes.find(i => i.type === 'Shape').mappedValue
    }
  },
  computed: {
    id () {
      return this.field.id
    },
    name: {
      get () {
        return this.field.name
      },
      set (value) {
        this.$store.dispatch('modelStore/updateField', { id: this.field.id, name: value })
      }
    },
    shape: {
      get () {
        return this.field.shape || null
      }
    },
    selectedVisual: {
      get () {
        return this.field.transform && this.field.transform.type
      },
      set (value) {
        this.$store.dispatch('modelStore/updateField', { id: this.field.id, transform: new Transform(value) })
      }
    }
  },
  methods: {
    onShapeChange (shape) {
      this.$store.dispatch('modelStore/updateField', { id: this.field.id, shape: shape })
    },
    saveField () {
      const options = {
        name: this.field.name,
        fieldId: this.id,
        shape: this.fieldShape
      }

      this.$store.dispatch('modelStore/saveVisualToField', { fieldId: this.id, type: this.selectedVisual })
      this.$store.dispatch('modelStore/saveFieldToModel', options)
    },
    addFieldValue () {
      this.$store.dispatch('modelStore/addValueToField', this.id)
    },
    deleteField () {
      this.$store.dispatch('modelStore/deleteField', { fieldId: this.field.id })
    }
  },
  components: {
    fieldValue,
    shapeSelect
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
