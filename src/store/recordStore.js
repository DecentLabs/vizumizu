export default {
  namespaced: true,
  state: {
    records: []
  },
  getters: {
    getRecordsByModel (state) {
      return (id) => {
        return state.records.filter(item => item.model === id).map(record => record.values)
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
    addRecord ({state, commit}, record) {
      commit('addRecord', record)
      localStorage.setItem('records', JSON.stringify(state.records))
    },
    setRecordList ({commit}) {
      if (localStorage.getItem('records')) {
        commit('setRecords', JSON.parse(localStorage.getItem('records')))
      }
    }
  }
}
