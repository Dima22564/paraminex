class Review{
  constructor(id, user, title, text, rate){
    this.id = id
    this.user = user
    this.title = title
    this.text = text
    this.rate = rate
  }
}
export default {
  state: {
    responses: [
      {
        id: '1',
        user: 'khrfg',
        title: 'Good',
        text: 'Received it within a week from the other side of the world. Very easy and efficient.',
        rate: 1
      },
      {
        id: '2',
        user: 'khrfg',
        title: 'Thank You',
        text: 'Received it within a week from the other side of the world. Very easy and efficient.',
        rate: 2
      },
      {
        id: '3',
        user: 'khrfg',
        title: 'Good',
        text: 'Received it within a week from the other side of the world. Very easy and efficient.',
        rate: 3
      },
      {
        id: '4',
        user: 'khrfg',
        title: 'Thank You',
        text: 'Received it within a week from the other side of the world. Very easy and efficient.',
        rate: 4
      }
    ]
  },
  mutations: {
    createReview(state, payload) {
      state.responses.push(payload)
    }
  },
  actions: {
    createReview({ commit }, payload) {
      // Some async logic
      const newReview = new Review(payload.id, payload.user, payload.title, payload.text, payload.rate)
      commit('createReview', newReview)
    }
  },
  getters: {
    getResponses(state) {
      return state.responses
    }
  }
}
