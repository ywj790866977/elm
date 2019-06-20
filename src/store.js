import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:true,
    username:""
  },
  mutations: {
    isTrue(state){
      state.isLogin = true;
    },
    isFalse(state){
      state.isLogin = false;
    },
    updateUsername(state,value){
      state.username  = value
    }
  },
  getters:{
    isLoginning(state){
      return state.isLogin
    },
    // getuser(){
    //   return state.
    // }
  },
  actions: {}
});
