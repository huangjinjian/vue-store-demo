import Vue from "vue";
import Vuex from "vuex";

import http from "../http/http";
import api from "../http/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    userId: "",
    cartList: [],
    addrId: ""
  },
  getters: {
    cartCount(state) {
      let count = 0;
      state.cartList.forEach(item => {
        count = item.checked ? count + item.productNum : count;
      });
      return count;
    }
  },
  mutations: {
    updateUserState(state, { userName = "", userId = "" }) {
      state.userName = userName;
      state.userId = userId;
    },
    updatedCartList(state, array) {
      state.cartList = array;
    },
    init(state) {
      state.cartList = [];
    },
    updataAddrId(state, addrId) {
      state.addrId = addrId;
    }
  },
  actions: {
    async cart({ state, commit }) {
      let cartRes = await http.post(api.Users.getCartlist, {
        user_id: state.userId
      });
      commit("updatedCartList", cartRes.data.cartList);
    }
  },
  modules: {}
});
