import { Field, FieldValue } from '../data/interfaces'

export default {
  namespaced: true,
  state: {
    model: {
      id: '',
      name: '',
      fields: []
    },
    currentField: {}
  },
  getters: {
    getFieldById (state) {
      return (id) => {
        return state.model.fields.filter(field => field.id === id).pop()
      }
    },
    getFieldValueById (state) {
      return (id) => {
        return state.currentField.fieldValues && state.currentField.fieldValues.filter(value => value.id === id).pop()
      }
    }
  },
  mutations: {
    setModel (state, model) {
      state.model = model
    },
    setFieldToModel (state, field) {
      state.model.fields.push(field)
    },
    setCurrentField (state, field) {
      state.currentField = field
    },
    setValueToField (state, value) {
      state.currentField.fieldValues.push(value)
    }
  },
  actions: {
    addValueToField ({getters, commit}, fieldId) {
      const fieldValue = new FieldValue()
      const field = getters.getFieldById(fieldId)
      commit('setCurrentField', field)
      commit('setValueToField', fieldValue)
    },
    saveValueToField ({state, commit, getters}, {name, id, fieldId}) {
      const field = getters.getFieldById(fieldId)
      commit('setCurrentField', field)
      const value = getters.getFieldValueById(id)
      value.name = name
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
    },
    addFieldToModel ({commit}) {
      const field = new Field()
      commit('setFieldToModel', field)
    },
    saveFieldToModel ({state, getters, dispatch}, {name, fieldId}) {
      const field = getters.getFieldById(fieldId)
      field.name = name
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
      dispatch('appStore/updateModel', state.model, { root: true })
    },
    updateModelData ({dispatch, state}, {name}) {
      state.model.name = name
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
      dispatch('appStore/updateModel', state.model, { root: true })
      // dispatch('appStore/setModelList', { root: true })
    },
    refreshModel ({commit}, id) {
      const model = JSON.parse(window.localStorage.getItem(id))
      commit('setModel', model)
    }
  }
}
