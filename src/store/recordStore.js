export default {
  namespaced: true,
  state: {
    records: []
  },
  getters: {
    getRecordsByModel (state) {
      return (id) => {
        const records = JSON.parse(localStorage.getItem(`records-${id}`))
        return records.map(record => record.values)
      }
    }
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
    addRecord ({state, commit}, {record, id}) {
      commit('addRecord', record)
      localStorage.setItem(`records-${id}`, JSON.stringify(state.records))
    },
    setRecordList ({commit}, id) {
      if (localStorage.getItem(`records-${id}`)) {
        commit('setRecords', JSON.parse(localStorage.getItem(`records-${id}`)))
      }
    }
  }
}
