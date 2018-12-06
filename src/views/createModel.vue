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
          <field-input :id="field.id"/>
      </div>
    </div>
  </main>
</template>

<script>
import fieldInput from '@/components/field.vue'

export default {
  name: 'createModel',
  data () {
    return {
      id: this.$route.params.id,
      isSaved: false
    }
  },
  computed: {
    saved () {
      return this.model.name ? 'saved' : ''
    },
    model () {
      return this.$store.state.editStore.model
    }
  },
  methods: {
    sendModelForm () {
      this.$store.dispatch('editStore/updateModelData', {name: this.model.name})
    },
    addField () {
      this.$store.dispatch('editStore/addFieldToModel')
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('editStore/refreshModel', id)
  },
  components: {
    fieldInput
  }
}
</script>

<style>

</style>

<style>
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
    cursor: pointer;
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
