<template>
  <main>
    <h1>Add a new record</h1>
    <form>
      <div class="input-row">
        <label>Name</label>
        <input type="text" v-model="recordName">
      </div>
      <div class="input-row">
        <label>select model</label>
        <select v-model="selectedModelId">
          <option :key="index" v-for="(model, index) in models"
                  :value="model.id">{{model.name}}</option>
        </select>
      </div>
      <div v-if="selectedModel">
        <div :key="i" v-for="(field, i) in selectedModel.fields" class="input-row">
          <label>select {{field.name}}</label>
          <select v-model="selectedModelsFields[i].value">
            <option :key="index" v-for="(value, index) in field.fieldValues"
                    :value="value.id">{{value.name}}</option>
          </select>
        </div>
      </div>
      <button @click="saveRecord">save</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Record',
  data () {
    return {
      recordName: 'untitled',
      selectedModelId: 'select one',
      selectedModelsFields: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    selectedModel () {
      return this.$store.getters['appStore/getModelById'](this.selectedModelId)
    },
    models () {
      return this.$store.state.appStore.models
    }
  },
  methods: {
    saveRecord (e) {
      e.preventDefault()
      console.log(this.selectedModel)
      console.log(this.selectedModelsFields)

      const values = this.selectedModelsFields.map(field => ({
        fieldId: field.data.id,
        fieldValueId: field.value
      }))

      const recordData = {
        name: this.recordName,
        model: this.selectedModel.id,
        values
      }
      this.$store.dispatch('recordStore/addRecord', recordData)
    }
  },
  watch: {
    selectedModel () {
      console.log(this.selectedModel)
      this.selectedModelsFields = this.selectedModel.fields.map(field => (
        {
          data: field,
          value: ''
        }
      ))
    }
  },
  created () {
    this.$store.dispatch('appStore/setModelList')
  }
}
</script>

<style scoped>
  main {
    width: 760px;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    text-align: left;
  }

  select, options {
    width: 150px;
    height: 30px;
  }

  .input-row {
    margin-bottom: 20px;
  }

  input {
    font-size: 18px;
    border: none;
    color: #121212;
    font-weight: 700;
    border-bottom: 1px solid #333;
  }

  button {
    background-color: #3fbaa9;
  }
</style>
