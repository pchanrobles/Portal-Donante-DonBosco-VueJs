import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Vuetify */
import vuetify from './plugins/vuetify'


// Prefered: as a plugin (directive + filter) + custom placeholders support
import VueMask from 'v-mask'
Vue.use(VueMask);

/* Fontawesome */
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery
Vue.config.productionTip = false

import axiosConfig from './config/axiosConfig'
window.apiClient = axiosConfig

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false