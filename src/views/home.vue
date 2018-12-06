<template>
  <main>
    <button @click="createModel" class="button add">create a new model</button>
    <h2>list of models</h2>
    <ul>
      <li :key="index" v-for="(model, index) in models">
        {{model.name}}
        <router-link :to="{name: 'editModel', params: {id: model.id}}"
          class="button edit">
          edit model
        </router-link>
        <router-link :to="{name: 'Model', params: {id: model.id}}"
                     class="button show">
          see model
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
    this.models = JSON.parse(window.localStorage.getItem('models'))
//    window.localStorage.clear()
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  li {
    margin-bottom: 20px;
  }
</style>
