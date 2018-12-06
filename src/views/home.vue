<template>
  <main>
    <button @click="createModel" class="add-button">create a new model</button>
    <h2>list of models</h2>
  </main>
</template>

<script>
export default {
  name: 'home',
  methods: {
    createModel () {
      this.$store.dispatch('createModel').then(resp => {
        this.$router.replace(`/editModel/${resp.id}`)
      })
    }
  }
}
</script>

<style scoped>
  main {
    padding: 40px;
  }

  .add-button {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    background-color: #ff6232;
  }
</style>
