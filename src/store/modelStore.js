import { Model, Field, FieldValue, Visual, Transform } from '../data/interfaces'

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
        return state.model.fields.find(field => field.id === id)
      }
    },
    getFieldValueById () {
      return (valueId, field) => {
        return field.fieldValues.find(value => value.id === valueId)
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
    addValueToField ({ getters }, fieldId) {
      const fieldValue = new FieldValue()
      const field = getters.getFieldById(fieldId)
      field.fieldValues.push(fieldValue)
    },
    saveValueToField ({ state, getters }, { name, valueId, fieldId }) {
      const field = getters.getFieldById(fieldId)
      const value = getters.getFieldValueById(valueId, field)
      value.name = name
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
    },
    deleteValueOfField ({ state, getters, dispatch }, { valueId, fieldId }) {
      const field = getters.getFieldById(fieldId)
      const value = getters.getFieldValueById(valueId, field)
      const index = field.fieldValues.indexOf(value)
      field.fieldValues.splice(index, 1)

      dispatch('updateModelData')
    },
    resetVisualsOfFiels ({ getters, dispatch }, fieldId) {
      const field = getters.getFieldById(fieldId)
      field.transform = new Transform()
      dispatch('updateModelData')
    },
    saveVisualToField ({ getters, dispatch }, { type, mappedValue = '', valueId = '', fieldId }) {
      const field = getters.getFieldById(fieldId)
      field.transform.values[valueId] = new Visual(type, mappedValue)
      dispatch('updateModelData')
    },
    addFieldToModel ({ commit, dispatch }) {
      const field = new Field()
      commit('setFieldToModel', field)
      dispatch('updateModelData')
    },
    saveFieldToModel ({ getters, dispatch }, { name, shape, fieldId }) {
      const field = getters.getFieldById(fieldId)
      field.name = name
      field.shape = shape
      dispatch('updateModelData')
    },
    deleteField ({ state, getters, dispatch }, { fieldId }) {
      state.model.fields = state.model.fields.filter(field => field.id !== fieldId)
      dispatch('updateModelData')
    },
    refreshModel ({ commit }, id) {
      const modelStr = window.localStorage.getItem(id)
      if (modelStr) {
        const model = Model.load(JSON.parse(modelStr))
        commit('setModel', model)
      }
    },
    updateModelData ({ state, dispatch }) {
      dispatch('appStore/updateModel', state.model, { root: true })
      window.localStorage.setItem(state.model.id, JSON.stringify(state.model))
    }
  }
}
