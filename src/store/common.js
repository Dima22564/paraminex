/* eslint-disable */ 
export default {
  state: {
    windowSize: 0,
    darkMode: false
  },
  mutations: {
    changeWindowSize(state, payload) {
      state.windowSize = payload
    },
    toggleDarkMode(state, payload) {
      state.darkMode = payload
    }
  },
  actions: {
    changeWindowSizeAction ({ commit, getters }, payload) {
      commit('changeWindowSize', payload)
    }
  },
  getters: {
    getWindowSize (state) {
      return state.windowSize
    },
    getDarkMode (state) {
      return state.darkMode
    }
  }
}
