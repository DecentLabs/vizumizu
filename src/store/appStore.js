import {Model} from '../data/interfaces'

export default {
  namespaced: true,
  state: {
    models: []
  },
  getters: {
    getModelsById (state) {
      return (id) => {
        return state.models.filter(model => model.id === id).pop()
      }
    }
  },
  mutations: {
    setModelList (state, model) {
      state.models.push(model)
    }
  },
  actions: {
    createModel ({state, commit}) {
      const model = new Model()
      commit('setModelList', model)
      window.localStorage.setItem(model.id, JSON.stringify(model))
      window.localStorage.setItem('models', JSON.stringify(state.models))
      return new Promise(resolve => resolve(model), err => console.log(err))
    }
  }
}
