import {Model} from '../data/interfaces'

export default {
  namespaced: true,
  state: {
    models: []
  },
  getters: {
    getModelById (state) {
      return (id) => {
        return state.models.filter(model => model.id === id).pop()
      }
    }
  },
  mutations: {
    addModelToList (state, model) {
      state.models.push(model)
    },
    setModels (state, model) {
      state.models = model
    }
  },
  actions: {
    createModel ({state, commit}) {
      const model = new Model()
      commit('addModelToList', model)
      window.localStorage.setItem(model.id, JSON.stringify(model))
      window.localStorage.setItem('models', JSON.stringify(state.models))
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateModels ({state, commit, getters}, model) {
      const models = JSON.parse(window.localStorage.getItem('models'))
      commit('setModels', models)
      const modelById = getters.getModelById(model.id)
      console.log(model.id, state.models, modelById)
      modelById.name = model.name
      window.localStorage.setItem('models', JSON.stringify(state.models))
    }
  }
}
