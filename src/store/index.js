import Vue from 'vue'
import Vuex from 'vuex'

import appStore from './appStore'
import editStore from './editStore'
import recordStore from './recordStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appStore,
    editStore,
    recordStore
  }
})

export default store
