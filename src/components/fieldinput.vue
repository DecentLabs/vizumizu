<template>
  <div>
    <label for="aspect">Field name</label>
    <input id="aspect" :name=name type="text">
  </div>
</template>

<script>
export default {
  name: 'fieldInput',
  props: ['name']
}
</script>

<style scoped>
  label, input {
    font-size: 18px;
    padding: 5px 10px;
  }
</style>
