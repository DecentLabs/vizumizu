import { Field, FieldValue, Visual } from '../data/interfaces'

export default {
  namespaced: true,
  state: {
    model: {
      id: '',
      name: '',
      fields: []
    }
  },
  getters: {
    getFieldById (state) {
      return (id) => {
        return state.model.fields.filter(field => field.id === id).pop()
      }
    },
    getFieldValueById () {
      return (valueId, field) => {
        return field.fieldValues.filter(value => value.id === valueId).pop()
      }
    }
  },
  mutations: {
    setModel (state, model) {
      state.model = model
    },
    setFieldToModel (state, field) {
      state.model.fields.push(field)
    }
  },
  actions: {
    addValueToField ({getters}, fieldId) {
      const fieldValue = new FieldValue()
      const field = getters.getFieldById(fieldId)
      field.fieldValues.push(fieldValue)
    },
    saveValueToField ({state, getters}, {name, valueId, fieldId}) {
      const field = getters.getFieldById(fieldId)
      const value = getters.getFieldValueById(valueId, field)
      value.name = name
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
    },
    deleteValueOfField ({state, getters, dispatch}, {valueId, fieldId}) {
      const field = getters.getFieldById(fieldId)
      const value = getters.getFieldValueById(valueId, field)
      const index = field.fieldValues.indexOf(value)
      field.fieldValues.splice(index, 1)

      dispatch('saveModeltoModelList')
    },
    resetVisualsOfFiels ({getters, dispatch}, fieldId) {
      const field = getters.getFieldById(fieldId)
      field.transform = {}
      dispatch('saveModeltoModelList')
    },
    saveVisualToField ({getters, dispatch}, {type, mappedValue, valueId, fieldId}) {
      const field = getters.getFieldById(fieldId)
      field.transform[valueId] = new Visual(type, mappedValue)
      dispatch('saveModeltoModelList')
    },
    addFieldToModel ({commit, dispatch}) {
      const field = new Field()
      commit('setFieldToModel', field)
      dispatch('saveModeltoModelList')
    },
    saveFieldToModel ({getters, dispatch}, {name, fieldId}) {
      const field = getters.getFieldById(fieldId)
      field.name = name
      dispatch('saveModeltoModelList')
    },
    deleteField ({state, getters, dispatch}, {fieldId}) {
      const field = getters.getFieldById(fieldId)
      const index = state.model.fields.indexOf(field)
      state.model.fields.splice(index, 1)
      dispatch('saveModeltoModelList')
    },
    updateModelData ({dispatch, state}, {name}) {
      state.model.name = name
      dispatch('saveModeltoModelList')
      // dispatch('appStore/setModelList', { root: true })
    },
    refreshModel ({commit}, id) {
      const model = JSON.parse(window.localStorage.getItem(id))
      commit('setModel', model)
    },
    saveModeltoModelList ({state, dispatch}) {
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
      dispatch('appStore/updateModel', state.model, { root: true })
    }
  }
}
