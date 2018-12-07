<template>
  <div class="value-row">
    <label :for="id">Value name</label>
    <input :id="id" type="text" v-model="value.name" :class="saved" @change="saveValue">
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
      console.log(options.name)
      this.$store.dispatch('editStore/saveValueToField', options)
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
</style>
