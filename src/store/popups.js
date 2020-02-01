export default {
  state: {
    popups: {
      regPopupShow: false,
      recoveryPopupShow: false,
      reviewPopupShow: false,
      investPopupShow: false,
      withdrawPopupShow: false,
      congratsPopupShow: false,
      oopsPopupShow: false,
      cardOrderPopup: false
    }
  },
  mutations: {
    regPopup(state, payload) {
      state.popups.regPopupShow = payload
    },
    recoveryPopup(state, payload) {
      state.popups.recoveryPopupShow = payload
    },
    reviewPopup(state, payload) {
      state.popups.reviewPopupShow = payload
    },
    investPopup(state, payload) {
      state.popups.investPopupShow = payload
    },
    withdrawPopup(state, payload) {
      state.popups.withdrawPopupShow = payload
    },
    congratsPopup(state, payload) {
      state.popups.congratsPopupShow = payload
    },
    oopsPopup(state, payload) {
      state.popups.oopsPopupShow = payload
    },
    cardOrderPopup(state, payload) {
      state.popups.cardOrderPopup = payload
    }
  },
  getters: {
    getPopup(state) {
      return state.popups
    }
  }
}
