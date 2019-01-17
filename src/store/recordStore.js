import { setRecord, getRecord } from '../data/db'

export default {
  namespaced: true,
  state: {
    records: []
  },
  mutations: {
    addRecord (state, record) {
      state.records.push(record)
    },
    setRecords (state, records) {
      state.records = records
    }
  },
  actions: {
    addRecord ({rootState, commit}, {record, id}) {
      commit('addRecord', record)
      setRecord(rootState.appStore.user, id, record)
    },
    setRecordList ({commit, rootState}, id) {
      return getRecord(rootState.appStore.user, id).then(resp => {
        if (resp.val()) {
          let records = Object.values(resp.val())
          records = records.map(rec => rec.values)
          commit('setRecords', records)
        }
      })
    }
  }
}
