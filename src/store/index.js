import Vue from 'vue'
import Vuex from 'vuex'

import appStore from './appStore'
import editStore from './editStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appStore,
    editStore
  }
})

export default store
