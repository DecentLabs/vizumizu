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
          <option selected value="null">choose one</option>
        </select>
      </div>
      <div v-if="selectedModel">
        <div :key="i" v-for="(field, i) in selectedModel.fields" class="input-row">
          <label>select {{field.name}}</label>
          <select v-model="selectedModelsFields[i].value">
            <option :key="index" v-for="(value, index) in field.fieldValues"
                    :value="value.id">{{value.value}}</option>
          </select>
        </div>
      </div>
      <button @click="saveRecordAndFinish">save</button>
      <button @click="saveRecordAndAdd">save and add new</button>
    </form>
  </main>
</template>

<script>
import { Model } from '../data/interfaces'

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
      const modelStr = window.localStorage.getItem(this.selectedModelId)
      return Model.load(JSON.parse(modelStr))
    },
    models () {
      return this.$store.state.appStore.models
    }
  },
  methods: {
    saveRecord () {
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
    },
    saveRecordAndAdd (e) {
      e.preventDefault()
      this.saveRecord()
      this.$router.go(this.$route.path)
    },
    saveRecordAndFinish (e) {
      e.preventDefault()
      this.saveRecord()
      this.$router.go('/')
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
    this.$store.dispatch('recordStore/setRecordList')
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
