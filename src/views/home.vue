<template>
  <main>
    <button @click="createModel" class="button add">create a new model</button>
    <h2>list of models</h2>
    <ul>
      <li :key="index" v-for="(model, index) in models">
        {{model.id}}
        <router-link :to="{name: 'editModel', params: {id: model.id}}"
          class="button edit">
          edit model
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      models: []
    }
  },
  methods: {
    createModel () {
      this.$store.dispatch('appStore/createModel').then(resp => {
        this.$router.replace(`/editModel/${resp.id}`)
      })
    }
  },
  created () {
    const models = JSON.parse(window.localStorage.getItem('models'))
    this.models = models
//    window.localStorage.clear()
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  .button {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    color: #fff;
  }

  .add {
    background-color: #ff6232;
  }

  .edit {
    background-color: #3fbaa9;
  }
</style>
