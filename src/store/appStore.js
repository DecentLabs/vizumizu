import { Model, ModelHead } from '../data/interfaces'

export default {
  namespaced: true,
  state: {
    models: [],
    visuals: []
  },
  getters: {
    getModelById (state) {
      return (id) => {
        return state.models.find(model => model.id === id)
      }
    },
    getModelsVisuals (state) {
      return (model) => {
        return model.transform
      }
    }
  },
  mutations: {
    addModelToList (state, model) {
      state.models.push(model)
    },
    setModels (state, models) {
      state.models = models.map(jsonModel => ModelHead.load(jsonModel))
    },
    removeModel (state, id) {
      state.models = state.models.filter(stateModel => stateModel.id !== id)
    },
    updateModel (state, model) {
      state.models = state.models.map(stateModel => {
        if (stateModel.id === model.id) {
          return new ModelHead(model.id, stateModel.name)
        } else {
          return stateModel
        }
      })
    }
  },
  actions: {
    save ({ state }) {
      window.localStorage.setItem('models', JSON.stringify(state.models))
    },
    initModel (context, model) {
      window.localStorage.setItem(model.id, JSON.stringify(model))
    },
    load ({ commit }) {
      const models = JSON.parse(window.localStorage.getItem('models'))
      commit('setModels', models)
    },
    setModelList ({ dispatch }) {
      dispatch('load')
    },
    createModel ({ state, commit, dispatch }) {
      const model = new ModelHead()
      commit('addModelToList', model)
      dispatch('save')
      dispatch('initModel', model)
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateModel ({ state, commit, getters, dispatch }, model) {
      dispatch('load')
      commit('updateModel', model)
      dispatch('save')
    },
    deleteModel ({ state, commit, getters, dispatch }, id) {
      commit('removeModel', id)
      dispatch('save')
    }
  }
}
