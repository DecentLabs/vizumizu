<template>
  <main>
    <div class="button-wrapper">
      <button @click="createModel" class="button add">new model</button>
      <router-link to="/record" class="button show">new record</router-link>
    </div>
    <ul>
      <li :key="index" v-for="(model, index) in models">
        {{model.name}}
        <div>
          <router-link :to="{name: 'editModel', params: {id: model.id}}"
            class="button edit"></router-link>
          <router-link :to="{name: 'ModelData', params: {id: model.id}}"
                       class="button see"></router-link>
          <button @click="deleteModel(model.id)" class="delete"></button>
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

  .edit,
  .see {
    width: 40px;
    height: 40px;
    border: 0;
  }

  .edit {
    background: url('../assets/edit.png') center / 80% no-repeat transparent;
  }

  .see {
    background: url('../assets/see.png') center / 80% no-repeat transparent;
  }
</style>
