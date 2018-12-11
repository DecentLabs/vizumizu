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
      <button @click="saveField" class="save-button">save field</button>
      <button @click="addFieldValue" class="add-button">add value</button>
      <button @click="deleteField" class="delete-button">X</button>
    </div>
    <div class="field-values">
      <div :key="val.id" v-for="val in field.fieldValues">
        <field-value :id="val.id" :fieldId="id" :visual="selectedVisual"/>
      </div>
    </div>
  </div>
</template>

<script>
import fieldValue from '@/components/fieldValue.vue'
import {visualTypes} from '../data/interfaces'

export default {
  name: 'fieldInput',
  props: ['id'],
  data () {
    return {
      visualTypes: visualTypes.map(i => i.type),
      selectedVisual: ''
    }
  },
  computed: {
    field () {
      return this.$store.getters['editStore/getFieldById'](this.id)
    }
  },
  methods: {
    saveField () {
      const options = {
        name: this.field.name,
        fieldId: this.id
      }
      this.$store.dispatch('editStore/saveFieldToModel', options)
    },
    addFieldValue () {
      this.$store.dispatch('editStore/addValueToField', this.field.id)
    },
    deleteField () {
      const options = {
        fieldId: this.id
      }
      this.$store.dispatch('editStore/deleteField', options)
    }
  },
  components: {
    fieldValue
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

  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }

  input {
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
