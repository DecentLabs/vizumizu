import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    aspectInputs: 0,
    fieldInputs: 0,
    aspects: []
  },
  getters: {
    getAspectById (state) {
      return (id) => {
        return state.aspects.filter(item => item.id === id).pop()
      }
    }
  },
  mutations: {
    setAspects (state, aspect) {
      state.aspects.push(Object.assign(aspect, {fieldCount: 0}))
      console.log(aspect, state.aspects)
    },
    setAspectInputs (state) {
      state.aspectInputs++
    },
    setFieldCountToAspect (state, aspectId) {
      const aspect = state.aspects.filter(item => item.id === aspectId).pop()
      aspect.fieldCount++
    },
    addFieldToAspect (state, aspectId, newField) {
      const aspect = this.getters['getAspectById'](state, aspectId)
      const fields = aspect.fields ? aspect.fields : [newField]
      Object.assign(aspect, { fields })
    }
  },
  actions: {

  }
})

export default store
