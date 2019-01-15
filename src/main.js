// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC9XtXetS1HFPSrHJVupje_rFlf7TGut4M',
  authDomain: 'vizumizu-70fc9.firebaseapp.com',
  databaseURL: 'https://vizumizu-70fc9.firebaseio.com',
  projectId: 'vizumizu-70fc9'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
