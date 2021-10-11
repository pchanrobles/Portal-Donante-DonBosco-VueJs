import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueSimpleAlert from "vue-simple-alert"
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