import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import index from './store/index.js'
/* Vuetify */
import vuetify from './plugins/vuetify'


// Prefered: as a plugin (directive + filter) + custom placeholders support
import VueMask from 'v-mask'
Vue.use(VueMask);

/* Fontawesome */
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* VueSimpleAlert */
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery
Vue.config.productionTip = false

/* Axios Config*/
import axiosConfig from './config/axiosConfig'
window.apiClient = axiosConfig

new Vue({
  router,
  store,
  index,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.config.productionTip = false
