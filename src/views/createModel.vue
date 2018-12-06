<template>
  <main>
    <div class="button-wrapper">
      <button @click="sendModelForm" class="save-button">save model</button>
      <button @click="addField" class="add-button">add new field</button>
    </div>
    <div>
      <input type="text" placeholder="add model name" v-model="model.name" :class="saved">
      <p>{{model.id}}</p>
      <div :key="field.id" v-for="field in model.fields">
        <div>
          <field-input :id="field.id" :model="model.id"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import fieldInput from '@/components/fieldInput.vue'

export default {
  name: 'createModel',
  data () {
    return {
      count: 0,
      model: {
        id: this.$route.params.id,
        name: '',
        isSaved: false,
        fields: []
      }
    }
  },
  computed: {
    saved () {
      return this.model.isSaved && 'saved'
    }
  },
  methods: {
    sendModelForm () {
      this.$store.dispatch('updateModel', {name: this.model.name, id: this.model.id})
        .then((resp) => {
          console.log(resp, 'updated')
          console.log(this.model)
          this.model.isSaved = true
        })
    },
    addField () {
      this.$store.dispatch('addFieldToModel', this.model.id)
        .then((resp) => {
          this.model.fields = resp.fields
        })
    }
  },
  created () {
    const id = this.$route.params.id

    this.$store.dispatch('updateStore', id).then(resp => {
      this.model.name = resp.name
      this.model.fields = resp.fields
      console.log(this.model, 'refresh')
    })
  },
  components: {
    fieldInput
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  .button-wrapper {
    text-align: right;
  }
  button {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    border: none;
  }
  .save-button {
    background-color: #efce10;
  }

  .add-button {
    background-color: #ff6232;
  }

  input {
    font-size: 18px;
    color: #848484;
    border: none;
    border-bottom: 1px solid #efce10;
  }

  input.saved {
    color: #121212;
    font-weight: 700;
    border-bottom: 1px solid #333;
  }
</style>
