<template>
  <main>
    <h1>Add a new record</h1>
    <form>
      <div class="input-row">
        <label>Name</label>
        <input type="text" v-model="recordName">
      </div>
      <div>
        <div :key="i" v-for="(field, i) in fields" class="input-row">
          <label>select {{field.name}}</label>
          <select v-model="field.value">
            <option :value="undefined">choose one</option>
            <option :key="index" v-for="(value, index) in field.fieldValues"
                    :value="value.id">{{value.value}}</option>
          </select>
        </div>
      </div>
      <button @click="saveRecordAndFinish">save</button>
      <button @click="saveRecordAndAdd">save and add new</button>
      <p v-if="error">please select a value for all fields</p>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Record',
  data () {
    return {
      recordName: 'untitled',
      error: false
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    fields () {
      return this.$store.state.modelStore.fields
    }
  },
  methods: {
    saveRecord () {
      const values = this.fields.map(field => {
        if (!field.value) {
          this.error = true
        }

        return {
          fieldId: field.id,
          fieldValueId: field.value
        }
      })

      const record = {
        name: this.recordName,
        values
      }

      if (!this.error) {
        this.$store.dispatch('recordStore/addRecord', {record, id: this.id})
      }
    },
    saveRecordAndAdd (e) {
      e.preventDefault()
      this.saveRecord()
      if (!this.error) {
        this.$store.commit('modelStore/resetFieldValues')
      }
    },
    saveRecordAndFinish (e) {
      e.preventDefault()
      this.saveRecord()
      if (!this.error) {
        this.$router.replace('/')
      }
    }
  },
  created () {
    this.$store.dispatch('modelStore/refreshModel', this.$route.params.id)
    this.$store.commit('modelStore/resetFieldValues')
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
