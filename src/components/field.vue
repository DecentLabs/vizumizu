<template>
  <div class="field-row">
    <div>
      <label :for="id">Field name</label>
      <input :id="id" type="text" v-model="field.name" :class="saved">
    </div>
    <div>
      <button @click="saveField" class="save-button">save field</button>
      <button @click="addFieldValue" class="add-button">add value</button>
    </div>
    <div class="field-values">
      <div :key="val.id" v-for="val in field.fieldValues">
        <field-value :id="val.id" :fieldId="id"/>
      </div>
    </div>
  </div>
</template>

<script>
import fieldValue from '@/components/fieldValue.vue'

export default {
  name: 'fieldInput',
  props: ['id'],
  computed: {
    field () {
      return this.$store.getters['editStore/getFieldById'](this.id)
    },
    saved () {
      return this.field.name ? 'saved' : ''
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
    padding: 0 40px;
    margin-bottom: 15px;
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
</style>
