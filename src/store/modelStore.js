import { Model, Field, FieldValue, Visual, Transform } from '../data/interfaces'
import { getModelData } from '../data/db.js'

export default {
  namespaced: true,
  state: {
    id: '',
    name: '',
    fields: [],
    shape: 'rect',
    fill: '',
    stroke: '',
    error: false,
    fieldErrors: []
  },
  getters: {
    getFieldById (state) {
      return (id) => {
        return state.fields.find(field => field.id === id)
      }
    },
    getFieldValueById () {
      return (valueId, field) => {
        return field.fieldValues.find(value => value.id === valueId)
      }
    },
    getVisualById () {
      return (field, valueId) => {
        return field.transform.values[valueId] && field.transform.values[valueId].mappedValue
      }
    },
    getAllFields (state) {
      return state.fields
    },
    getFieldShape (state) {
      return (field) => {
        return field.shape === 'null' ? state.shape : field.shape
      }
    },
    getFieldsToDraw (state) {
      return state.fields.reduce((acc, curr) => {
        const hasShape = acc.find(item => item.shape === curr.shape)

        if (!hasShape) {
          acc.push(curr)
        }
        return acc
      }, [])
    }
  },
  mutations: {
    setModel (state, model) {
      Object.assign(state, model)
    },
    addField (state, field) {
      state.fields = state.fields.concat(field)
    },
    removeField (state, fieldId) {
      state.fields = state.fields.filter(stateField => fieldId !== stateField.id)
    },
    updateField (state, { oldField, newField }) {
      Object.assign(oldField, newField)
    },
    addFieldValue (state, { field, value }) {
      field.fieldValues = field.fieldValues.concat(value)
    },
    removeFieldValue (state, { field, valueId }) {
      field.fieldValues = field.fieldValues.filter(stateFieldValue => stateFieldValue.id !== valueId)
    },
    updateFieldValue (state, { field, value }) {
      field.fieldValues = field.fieldValues.map(stateFieldValue => {
        if (stateFieldValue.id === value.id) {
          return Object.assign(stateFieldValue, value)
        } else {
          return stateFieldValue
        }
      })
    },
    setVisualToValue (state, {field, value, visual}) {
      field.transform.values[value.id] = Visual.load(visual)
    },
    setName (state, name) {
      state.name = name
    },
    setShape (state, shape) {
      state.shape = shape
    },
    setFill (state, fill) {
      state.fill = fill
    },
    setStroke (state, stroke) {
      state.stroke = stroke
    },
    resetFieldValues (state) {
      state.fields = state.fields.map(field => {
        field.value = undefined
        return field
      })
    }
  },
  actions: {
    addValueToField ({ getters, commit }, fieldId) {
      const field = getters.getFieldById(fieldId)
      commit('addFieldValue', { field, value: new FieldValue() })
    },
    updateValueOfField ({ commit }, { field, value }) {
      commit('updateFieldValue', { field, value })
    },
    deleteValueOfField ({ getters }, { valueId, fieldId }) {
      const field = getters.getFieldById(fieldId)
      const value = getters.getFieldValueById(valueId, field)
      const index = field.fieldValues.indexOf(value)
      field.fieldValues.splice(index, 1)
    },
    resetVisualsOfFiels ({ getters }, fieldId) {
      const field = getters.getFieldById(fieldId)
      field.transform = new Transform()
    },
    saveVisualToField ({ commit }, { field, value, visual }) {
      commit('setVisualToValue', {field, value, visual})
    },
    addFieldToModel ({ commit }) {
      commit('addField', new Field())
    },
    saveFieldToModel ({ getters, dispatch }, { name, shape, fieldId }) {
      // we shouldn't use this action

      const field = getters.getFieldById(fieldId)
      field.name = name
      field.shape = shape
    },
    deleteField ({ commit, dispatch }, { fieldId }) {
      commit('removeField', fieldId)
    },
    updateField ({ getters, commit }, newField) {
      const oldField = getters.getFieldById(newField.id)
      commit('updateField', { oldField, newField })
    },
    refreshModel ({ rootState, commit }, id) {
      getModelData(rootState.appStore.user, id).then(resp => {
        const modelData = resp.val()
        const model = Model.load(modelData)
        commit('setModel', model)
      })
    },
    save ({ state, dispatch }) {
      const fieldErrors = state.fields.filter(item => item.name === 'untitled' || !item.transform.type)
      if (state.name === '' || state.fill === '' || state.stroke === '' || state.shape === '' || fieldErrors.length) {
        state.error = true
        state.fieldErrors = fieldErrors
        return
      }

      dispatch('appStore/updateModel', state, { root: true })
    }
  }
}
