import Vue from 'vue'
import Vuex from 'vuex'

import appStore from './appStore'
import modelStore from './modelStore'
import recordStore from './recordStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appStore,
    modelStore,
    recordStore
  }
})

export default store
