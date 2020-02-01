/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import common from './common'
import settings from './settings'
import feedback from './feedback'
import user from './user'
import popups from './popups'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    settings,
    feedback,
    user,
    popups
  }
});
