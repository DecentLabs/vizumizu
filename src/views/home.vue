<template>
  <main>
    <div class="button-wrapper">
      <button @click="createModel" class="button add">create a new model</button>
      <router-link to="/record" class="button show">add a record</router-link>
    </div>
    <ul>
      <li :key="index" v-for="(model, index) in models">
        <router-link :to="{name: 'Model', params: {id: model.id}}">
          {{model.name}}
        </router-link>
        <div>
          <router-link :to="{name: 'editModel', params: {id: model.id}}"
            class="button edit">
            edit model
          </router-link>
          <router-link :to="{name: 'ModelData', params: {id: model.id}}"
                       class="button show">
            see model data
          </router-link>
          <button @click="deleteModel(model.id)" class="delete">delete model</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'home',
  computed: {
    models () {
      return this.$store.state.appStore.models
    }
  },
  methods: {
    createModel () {
      this.$store.dispatch('appStore/createModel').then(resp => {
        this.$router.replace(`/editModel/${resp.id}`)
      })
    },
    deleteModel (id) {
      this.$store.dispatch('appStore/deleteModel', id)
    }
  },
  mounted () {
    this.$store.dispatch('appStore/setModelList')
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  .button-wrapper {
    margin-bottom: 60px;
    text-align: center;
  }

  ul {
    width: 760px;
    margin: 0 auto;
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 22px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }

  button {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .delete {
    background-color: #194959;
  }
</style>
