/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LayoutPlugin } from 'bootstrap-vue'
import Slick from 'vue-slick';
import aside from './components/modules/aside'
import Multiselect from 'vue-multiselect'
import Vuelidate from 'vuelidate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-material-design-icons/styles.css'
import 'slick-carousel/slick/slick.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
// import vuetify from './plugins/vuetify';
import VShowSlide from 'v-show-slide'
import VueSlideBar from 'vue-slide-bar'
import StarRating from 'vue-star-rating'

// Bread crumb
import breadCrumb from './components/modules/breadCrumb'

Vue.config.productionTip = false;
// BootstrapVue
Vue.use(LayoutPlugin)
Vue.use(VShowSlide)
Vue.use(Vuelidate)
Vue.component('bread-crumb', breadCrumb)
Vue.component('slick', Slick)
Vue.component('my-aside', aside)
Vue.component('multiselect', Multiselect)
Vue.component('VueSlideBar', VueSlideBar)
Vue.component('StarRating', StarRating)

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount("#app");
