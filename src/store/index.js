import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

function redirectUser(){
  return router.push("/");
 };

export default new Vuex.Store({
  state: {
    user: null,
    donantes: null,
  },
  getters: {
    getStatusUser: state =>  state.user.is_admin
},
  mutations: {
    SET_USER_DATA(state, data) {
      console.log(data.usuario.is_admin)
      if (data.usuario.is_admin == 0) {
        redirectUser()
      }
      state.user = data.usuario;
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", JSON.stringify(data.token));
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
    },
    REFRESH_USER(state, data) {
      state.user = data.usuario;
      localStorage.setItem("user", JSON.stringify(data.usuario));
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      apiClient.defaults.headers.common["Authorization"] = null;
      location.reload();
    },
    GET_DONANTES(state, data) {
      console.log(data);
      state.donantes = data;
    },
    BUSCAR_DONANTES(state, data) {
      console.log(data[0]);
      state.donantes = data;
    },
    Estado_Donantes(state, data) {
      state.donantes = data;
    },
  },
  actions: {
    register({ commit }, credentials) {
      return apiClient.post("/api/register", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    login({ commit }, credentials) {
      return apiClient.post("/api/login", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    logout({ commit }) {
      return apiClient.get("/api/logout").then(() => {
        commit("LOGOUT");
      });
    },
    getDonantes({ commit }) {
      return apiClient.get("/api/donantes").then(({ data }) => {
        commit("GET_DONANTES", data);
      });
    },
    byDocument({ commit }, document) {
      return apiClient.post("/api/donantes/byDocument", {documento: document})
      .then(({ data }) => {
        commit("BUSCAR_DONANTES", data);
      });
    },
    requestDonanteInfo({ commit }, ) {
      return apiClient.post("/api/donantes/request/+$id", {})
      .then(({ data }) => {
        commit("BUSCAR_DONANTES", data);
      });
       },
    updateStateUser({      commit
    }, credentials) {
      return apiClient
        .get('/api/refresh', credentials)
        .then(({
          data, 
        }) => {
          commit('REFRESH_USER', data)
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
