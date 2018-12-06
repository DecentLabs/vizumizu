<template>
  <div class="field-row">
    <div>
      <label :for="id">Field name</label>
      <input :id="id" type="text" v-model="fieldName">
    </div>
    <button @click="saveField">save field</button>
  </div>
</template>

<script>
export default {
  name: 'fieldInput',
  props: ['id', 'model'],
  data () {
    return {
      fieldName: ''
    }
  },
  methods: {
    saveField () {
      const options = {
        name: this.fieldName,
        fieldId: this.id,
        modelId: this.model
      }
      this.$store.dispatch('saveFieldToModel', options)
        .then((resp) => {
          console.log(resp, 'updated')
          console.log(this.model)
        })
    }
  }
}
</script>

<style scoped>
  .field-row {
    display: flex;
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

  button {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    border: none;
    background-color: #efce10;
  }
</style>
