import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : null,
  },
  getters: {
    account: (state) => state.account,
  },
  mutations: {},
  actions: {},
  modules: {},
});
