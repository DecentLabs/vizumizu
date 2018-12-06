<template>
  <main>
    <h1>{{model.name}}</h1>
    <p><router-link :to="{name: 'editModel', params: id}" class="button edit">edit model</router-link></p>
    <ul>
      <li :key="field.id" v-for="field in model.fields">
        <h2>{{field.name}}</h2>
        <ul>
          <li :key="val.id" v-for="val in field.fieldValues">{{val.name}}</li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'model',
  computed: {
    id () {
      return this.$route.params.id
    },
    model () {
      return this.$store.state.editStore.model
    }
  },
  created () {
    this.$store.dispatch('editStore/refreshModel', this.id)
  }
}
</script>

<style scoped>
  main {
    width: 760px;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    text-align: left;
  }
</style>
