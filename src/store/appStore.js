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
    },
    removeModel (state, index) {
      state.models.splice(index, 1)
    }
  },
  actions: {
    setModelList ({commit}) {
      const models = JSON.parse(window.localStorage.getItem('models'))
      commit('setModels', models)
    },
    createModel ({state, commit}) {
      const model = new Model()
      commit('addModelToList', model)
      window.localStorage.setItem(model.id, JSON.stringify(model))
      window.localStorage.setItem('models', JSON.stringify(state.models))
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateModel ({state, commit, getters}, model) {
      const models = JSON.parse(window.localStorage.getItem('models'))
      commit('setModels', models)
      const modelById = getters.getModelById(model.id)
      modelById.name = model.name
      modelById.fields = model.fields
      window.localStorage.setItem('models', JSON.stringify(state.models))
    },
    deleteModel ({state, commit, getters}, id) {
      const model = getters.getModelById(id)
      const index = state.models.indexOf(model)
      commit('removeModel', index)
      window.localStorage.setItem('models', JSON.stringify(state.models))
    }
  }
}