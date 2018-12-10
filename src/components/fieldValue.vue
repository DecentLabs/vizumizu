<template>
  <div class="value-row">
    <label :for="id">Value name</label>
    <input :id="id" type="text" v-model="value.name" :class="saved" @change="saveValue">
    <button @click="deleteValue">X</button>
  </div>
</template>

<script>
export default {
  name: 'fieldValue',
  props: ['id', 'fieldId'],
  computed: {
    value () {
      const field = this.$store.getters['editStore/getFieldById'](this.fieldId)
      return this.$store.getters['editStore/getFieldValueById'](this.id, field) || {name: 'value'}
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
    },
    deleteValue () {
      const options = {
        id: this.id,
        fieldId: this.fieldId
      }
      this.$store.dispatch('editStore/deleteValueOfField', options)
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
