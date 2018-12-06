<template>
  <div class="field-row">
    <div>
      <label :for="id">Value name</label>
      <input :id="id" type="text" v-model="value.name" :class="saved">
    </div>
    <button @click="saveValue" class="save-button">save value</button>
  </div>
</template>

<script>
export default {
  name: 'fieldValue',
  props: ['id', 'fieldId'],
  computed: {
    value () {
      return this.$store.getters['editStore/getFieldValueById'](this.id) || {name: 'value'}
    },
    saved () {
      return this.value.name ? 'saved' : ''
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
    }
  }
}
</script>

<style scoped>
  .field-row {
    display: flex;
    justify-content: space-between;
    padding: 20px;
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
</style>
