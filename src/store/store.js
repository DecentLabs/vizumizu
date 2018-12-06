import Vue from 'vue'
import Vuex from 'vuex'
import {Model, Field} from '../data/interfaces'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    models: [],
    modelToEdit: {}
  },
  getters: {
    getModelsById (state) {
      return (id) => {
        return state.models.filter(model => model.id === id).pop()
      }
    },
    getFieldsById () {
      return (id, model) => {
        return model.fields.filter(field => field.id === id).pop()
      }
    }
  },
  mutations: {
    setModelList (state, model) {
      state.models.push(model)
    }
  },
  actions: {
    addFieldToModel ({getters}, id) {
      const model = getters.getModelsById(id)
      const field = new Field()
      model.fields.push(field)
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    saveFieldToModel ({getters}, {name, fieldId, modelId}) {
      const model = getters.getModelsById(modelId)
      const field = getters.getFieldsById(fieldId, model)
      console.log(field)
      field.name = name
      console.log(model, name)
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateModel ({getters}, {name, id}) {
      const model = getters.getModelsById(id)
      model.name = name
      window.localStorage.setItem(id, JSON.stringify(model))

      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    createModel () {
      const model = new Model()
      window.localStorage.setItem(model.id, JSON.stringify(model))
      return new Promise(resolve => resolve(model), err => console.log(err))
    },
    updateStore ({commit}, id) {
      const model = JSON.parse(window.localStorage.getItem(id))
      commit('setModelList', model)
      return new Promise(resolve => resolve(model), err => console.log(err))
    }
  }
})

export default store
