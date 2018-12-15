import Vue from 'vue'
import Vuex from 'vuex'

import appStore from './appStore'
import modelStore from './modelStore'
import recordStore from './recordStore'
import layoutStore from './layoutEditorStore.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appStore,
    modelStore,
    recordStore,
    layoutStore
  }
})

export default store
