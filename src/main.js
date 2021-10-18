import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Vuetify */
import vuetify from './plugins/vuetify'


import VueSimpleAlert from "vue-simple-alert";



/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery
Vue.config.productionTip = false

import axiosConfig from './config/axiosConfig'
import { createNamespacedHelpers } from 'vuex'
window.apiClient = axiosConfig
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false