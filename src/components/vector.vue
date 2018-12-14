<template>
  <div v-once v-html="svg">
</template>

<script>
export default {
  name: 'vector',
  props: ['image'],
  data () {
    return {
      svg: findimagebyname(image).src
    }
  },
  mounted() {
    console.log(felho)
  }
}
</script>

<style scoped>

</style>
