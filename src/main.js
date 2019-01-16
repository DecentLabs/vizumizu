// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyC9XtXetS1HFPSrHJVupje_rFlf7TGut4M',
  authDomain: 'vizumizu-70fc9.firebaseapp.com',
  databaseURL: 'https://vizumizu-70fc9.firebaseio.com',
  projectId: 'vizumizu-70fc9'
}

firebase.initializeApp(config)
const database = firebase.database()
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export {
  database,
  auth,
  provider
}
