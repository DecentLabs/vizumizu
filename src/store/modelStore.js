import { Field, FieldValue, Visual } from '../data/interfaces'

const initTransform = {
  type: '',
  values: {}
}

export default {
  namespaced: true,
  state: {
    model: {
      id: '',
      name: '',
      fields: [],
      shape: '',
      fill: '',
      stroke: ''
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
    },
    getAllFields (state) {
      return state.model.fields
    }
  },
  mutations: {
    setModel (state, model) {
      state.model = model
    },
    setFieldToModel (state, field) {
      state.model.fields.push(field)
    },
    setName (state, name) {
      state.model.name = name
    },
    setShape (state, shape) {
      state.model.shape = shape
    },
    setFill (state, fill) {
      state.model.fill = fill
    },
    setStroke (state, stroke) {
      state.model.stroke = stroke
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

      dispatch('updateModelData')
    },
    resetVisualsOfFiels ({getters, dispatch}, fieldId) {
      const field = getters.getFieldById(fieldId)
      field.transform = initTransform
      dispatch('updateModelData')
    },
    saveVisualToField ({getters, dispatch}, {type, mappedValue = '', valueId = '', fieldId}) {
      const field = getters.getFieldById(fieldId)
      field.transform.values[valueId] = new Visual(type, mappedValue)
      dispatch('updateModelData')
    },
    addFieldToModel ({commit, dispatch}) {
      const field = new Field()
      commit('setFieldToModel', field)
      dispatch('updateModelData')
    },
    saveFieldToModel ({getters, dispatch}, {name, shape, fieldId}) {
      const field = getters.getFieldById(fieldId)
      field.name = name
      field.shape = shape
      dispatch('updateModelData')
    },
    deleteField ({state, getters, dispatch}, {fieldId}) {
      const field = getters.getFieldById(fieldId)
      const index = state.model.fields.indexOf(field)
      state.model.fields.splice(index, 1)
      dispatch('updateModelData')
    },
    refreshModel ({commit}, id) {
      const model = JSON.parse(window.localStorage.getItem(id))
      commit('setModel', model)
    },
    updateModelData ({state, dispatch}) {
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
      dispatch('appStore/updateModel', state.model, { root: true })
    }
  }
}
