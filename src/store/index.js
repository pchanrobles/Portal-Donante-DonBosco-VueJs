import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data.usuario;
      console.log(state)
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", JSON.stringify(data.token));
      console.log('set_user_Data')
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
    },
    LOGOUT(state) {
      state.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      apiClient.defaults.headers.common['Authorization'] = null
      location.reload()
    }
  },
  actions: {
    register({
      commit
    }, credentials) {
      return apiClient
        .post('/api/register', credentials)
        .then(({
          data
        }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login({
      commit
    }, credentials) {
      return apiClient
        .post('/api/login', credentials)
        .then(({
          data
        }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({
      commit
    }) {
      return apiClient
        .get('/api/logout')
        .then(() => {
          commit('LOGOUT')
        })
    }
  },
  modules: {},
});