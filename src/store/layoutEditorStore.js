import { findByName } from '../data/images.js'
import { Solver, Strength, Operator, Constraint, Expression } from 'kiwi.js'
import LayoutItem from '../data/LayoutItem.js'
import getters from './layoutGetters/getters.js'

const LAYOUT_ACTIONS = {
  setImageByName: 'setImageByName',
  addField: 'addField',
  setFieldPosition: 'setFieldPosition',
  setFieldConstrain: 'setFieldConstrain',
  removeFieldConstrain: 'removeFieldConstrain',
  loadFields: 'loadFields',
  loadFieldConstrains: 'loadFieldConstrains',
  reset: 'reset'
}

const LAYOUT_MUTATIONS = {
  setModelId: 'setModelId',
  addField: 'addField',
  updateFieldFile: 'updateFieldFile',
  selectField: 'selectField',
  updateImage: 'updateImage',
  updatePosition: 'updatePosition',
  resetLayoutStore: 'resetLayoutStore',
  updateSolver: 'updateSolver',
  updateLayout: 'updateLayout'
}

const createConstrainKey = constrainTuple =>
  `${constrainTuple[0].fieldId}:${constrainTuple[0].prop}` +
  `=` +
  `${constrainTuple[1].fieldId}:${constrainTuple[1].prop}`

export default {
  namespaced: true,
  state: {
    modelId: '',
    fields: [],
    solver: new Solver(),
    constrains: new Map(),
    layout: []
  },
  mutations: {
    [LAYOUT_MUTATIONS.updateLayout] (state, tuple) {
      state.layout = tuple
    },
    [LAYOUT_MUTATIONS.setModelId] (state, id) {
      state.modelId = id
    },
    [LAYOUT_MUTATIONS.updateSolver] (state) {
      state.solver.updateVariables()
    },
    [LAYOUT_MUTATIONS.resetLayoutStore] (state) {
      state.solver = new Solver()
      state.fields = []
      state.constrains = new Map()
    },
    [LAYOUT_MUTATIONS.addField] (state, field) {
      if (field.shape) {
        const defaultPosition = [20, 40]
        const layoutItem = new LayoutItem(state.solver)
        const layoutField = {
          id: field.id,
          name: field.name,
          image: findByName(field.shape),
          position: defaultPosition,
          layoutItem
        }
        state.fields = state.fields.concat(layoutField)

        layoutItem.setPosition(defaultPosition)
        layoutItem.setSize([layoutField.image.width, layoutField.image.height])
      }
    },
    [LAYOUT_MUTATIONS.updatePosition] (state, {field, position}) {
      field.layoutItem.setPosition(position)
    }
  },
  actions: {
    [LAYOUT_ACTIONS.reset] ({commit, dispatch, rootGetters}, modelId) {
      commit(LAYOUT_MUTATIONS.setModelId, modelId)
      commit(LAYOUT_MUTATIONS.resetLayoutStore)
      dispatch(LAYOUT_ACTIONS.loadFields, rootGetters['modelStore/getFieldsToDraw'])

      const tuples = JSON.parse(localStorage.getItem(`layout-${modelId}`))
      if (tuples && tuples.length) {
        dispatch(LAYOUT_ACTIONS.setFieldConstrain, tuples)
      }
    },
    [LAYOUT_ACTIONS.loadFields] ({commit, rootGetters}, fieldList) {
      fieldList.forEach(field => {
        field.shape = rootGetters['modelStore/getFieldShape'](field)
        commit(LAYOUT_MUTATIONS.addField, field)
      })
    },
    [LAYOUT_ACTIONS.setFieldPosition] ({state, commit, getters}, {id, position}) {
      const field = getters.getFieldById(id)
      commit(LAYOUT_MUTATIONS.updatePosition, {field, position})
      commit(LAYOUT_MUTATIONS.updateSolver)
    },
    [LAYOUT_ACTIONS.removeFieldConstrain] ({state}, fieldId) {
      // this should be in mutations
      const solver = state.solver
      const newConstrains = new Map()
      for (let [key, constrain] of state.constrains) {
        const [p1, p2] = key
        if (p1.fieldId === fieldId || p2.fieldId === fieldId) {
          solver.removeConstraint(constrain)
        } else {
          newConstrains.set(key, constrain)
        }
      }

      state.constrains = newConstrains
    },
    [LAYOUT_ACTIONS.setFieldConstrain] ({state, getters, commit}, nearby) {
      const solver = state.solver
      const constrains = state.constrains
      console.log('nearby', nearby)
      nearby.forEach(constrainTuple => {
        const [p1, p2] = constrainTuple
        const field1 = getters.getFieldById(p1.fieldId)
        const field2 = getters.getFieldById(p2.fieldId)

        console.log('new constrain: ', createConstrainKey(constrainTuple))
        const constrain = new Constraint(
          new Expression(
            [-1, field1.layoutItem[p1.prop]],
            field2.layoutItem[p2.prop]
          ),
          Operator.Eq,
          0,
          Strength.strong
        )
        solver.addConstraint(constrain)
        constrains.set(constrainTuple, constrain)
      })

      commit(LAYOUT_MUTATIONS.updateSolver)
      localStorage.setItem(`layout-${state.modelId}`, JSON.stringify(Array.from(constrains.keys())))
    },
    [LAYOUT_ACTIONS.loadFieldConstrains] ({state, getters, commit}, modelId) {
      const solver = state.solver
      const constrains = state.constrains
      const layouts = getters.getLayout(modelId)

      layouts.forEach(constrainTuple => {
        const [p1, p2] = constrainTuple
        const field1 = getters.getFieldById(p1.fieldId)
        const field2 = getters.getFieldById(p2.fieldId)

        console.log('new constrain: ', createConstrainKey(constrainTuple))
        const constrain = new Constraint(
          new Expression(
            [-1, field1.layoutItem[p1.prop]],
            field2.layoutItem[p2.prop]
          ),
          Operator.Eq,
          0,
          Strength.strong
        )
        solver.addConstraint(constrain)
        constrains.set(constrainTuple, constrain)
      })
      commit(LAYOUT_MUTATIONS.updateSolver)
    }
  },
  getters
}

export { LAYOUT_ACTIONS }
export { LAYOUT_MUTATIONS }
