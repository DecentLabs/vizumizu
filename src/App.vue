<template>
  <div id="app">
    <h1><router-link to="/">vizumizu</router-link></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  color: #020202;
}

button, .button {
  display: inline-block;
  height: 44px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  border: none;
  cursor: pointer;
  line-height: 24px;
  box-sizing: border-box;
  vertical-align: middle;
}

.add {
  background-color: #ff6232;
}

.edit {
  background-color: #efce10;
}

.show {
  background-color: #3fbaa9;
}
</style>
