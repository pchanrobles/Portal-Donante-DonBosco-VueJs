import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    donantes: null,
   
  },
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data.usuario;
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", JSON.stringify(data.token));
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      apiClient.defaults.headers.common["Authorization"] = null;
      location.reload();
    },
    GET_DONANTES(state, data) {
      console.log(data[0]);
      state.donantes = data;
    },
    BUSCAR_DONANTES(state, data) {
      console.log(data[0]);
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
  },
  modules: {},
});
