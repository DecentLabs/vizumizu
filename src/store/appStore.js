import { ModelHead, Model } from '../data/interfaces'
import {getUserData, setModelData, updateModelData, removeModelData} from '../data/db.js'

export default {
  namespaced: true,
  state: {
    user: null,
    models: [],
    visuals: []
  },
  getters: {
    getModelById (state) {
      return (id) => {
        return state.models.find(model => model.id === id)
      }
    }
  },
  mutations: {
    setUser (state, token) {
      state.user = token
    },
    addModelToList (state, model) {
      state.models.push(model)
    },
    setModels (state, models) {
      state.models = models && models.map(model => Model.load(model))
    },
    removeModel (state, id) {
      state.models = state.models.filter(stateModel => stateModel.id !== id)
    },
    updateModel (state, model) {
      state.models = state.models.map(stateModel => {
        if (stateModel.id === model.id) {
          return new ModelHead(model.id, model.name)
        } else {
          return stateModel
        }
      })
    }
  },
  actions: {
    load ({ state, commit }) {
      if (state.user) {
        getUserData(state.user).then(resp => {
          const data = resp.val().models || {}
          const models = Object.values(data)
          commit('setModels', models)
        })
      } else {
        commit('setModels', [])
      }
    },
    createModel ({ commit }, {user}) {
      const model = new ModelHead()
      commit('addModelToList', model)
      setModelData(user, model)
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateModel ({ state, commit, dispatch }, model) {
      dispatch('load')
      commit('updateModel', model)
      updateModelData(state.user, model)
    },
    deleteModel ({ commit, state }, id) {
      commit('removeModel', id)
      removeModelData(state.user, id)
    }
  }
}
