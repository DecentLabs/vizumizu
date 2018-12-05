<template>
  <button @click="getAspect">add new aspect</button>
</template>

<script>
export default {
  name: 'addAspect',
  methods: {
    getAspect: function () {
      this.$store.commit('setAspects', {id: this.$store.state.aspectInputs})
      this.$store.commit('setAspectInputs')
    }
  }
}
</script>

<style scoped>
  button {
    padding: 10px;
    color: #fff;
    background-color: #321fb2;
  }
</style>
