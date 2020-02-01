export default {
  state: {
    userName: 'dmitriy_vrb'
  },
  mutations: {
    changeUserName(state, payload) {
      state.userName = payload
    }
  },
  actions: {},
  getters: {
    getUserName(state) {
      return state.userName
    }
  }
}
