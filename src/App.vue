<template>
  <div id="app">
    <h1><router-link to="/">vizumizu</router-link></h1>
    <button @click="logIn" class="yellow" v-if="!user">log in</button>
    <button @click="logOut" class="yellow" v-if="user">log out</button>
    <router-view/>
  </div>
</template>

<script>
import { auth, provider } from './main'
import { setUserData } from './data/db'

export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.state.appStore.user
    }
  },
  methods: {
    logIn () {
      auth.signInWithPopup(provider).then((result) => {
        const userId = result.user.uid
        this.$store.commit('appStore/setUser', userId)
        setUserData(userId)
      }).catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
    },
    logOut () {
      auth.signOut().then(() => {
        this.$store.commit('appStore/setUser', null)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  border: 2px solid transparent;
  cursor: pointer;
  line-height: 24px;
  box-sizing: border-box;
  vertical-align: middle;
  transition: background-color .3s;
}

.add {
  border-color: #ff6232;
  color: #ff6232;
}

.add:hover {
  background-color: #ff6232;
  color: #fff;
}

.yellow {
  border-color: #efce10;
  color: #efce10;
}

.yellow:hover {
  background-color: #efce10;
  color: #fff;
}

.show {
  border-color: #3fbaa9;
  color: #3fbaa9;
}

.show:hover {
  background-color: #3fbaa9;
  color: #fff;
}

.delete {
  width: 40px;
  height: 40px;
  background: url('./assets/delete.png') center / contain no-repeat transparent;
  border: none;
}
</style>
