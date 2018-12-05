<template>
  <button @click="getAspect" :aspectId=aspectId>add new field</button>
</template>

<script>
export default {
  name: 'addField',
  props: ['aspectId'],
  methods: {
    getAspect: function () {
      this.$store.commit('setFieldCountToAspect', this.aspectId)
    }
  }
}
</script>

<style scoped>
  button {
    padding: 10px;
    color: #fff;
    background-color: #dc2f46;
  }
</style>
