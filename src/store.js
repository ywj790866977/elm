import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: true,
    username: "",
    myHistory: []
  },
  mutations: {
    isTrue(state) {
      state.isLogin = true;
    },
    isFalse(state) {
      state.isLogin = false;
    },
    updateUsername(state, value) {
      state.username = value;
    },
    addHistory(state, value) {
      state.myHistory.push(value);
      console.log(state.myHistory);
    },
    delHistory(state) {
      state.myHistory = [];
      console.log(state.myHistory);
    }
  },
  getters: {
    isLoginning(state) {
      return state.isLogin;
    },
    myHistorying(state) {
      return state.myHistory;
    }
    // getuser(){
    //   return state.
    // }
  },
  actions: {}
});
