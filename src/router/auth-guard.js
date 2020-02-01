import store from '../store/index'

export default function (to, from, next) {
  if (store.getters.getUser !== null) {
    next()
  } else {
    next('/home')
  }
}
