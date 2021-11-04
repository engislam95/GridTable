import Vue from 'vue'
import Vuex from 'vuex'
import userData from '../jsonData/user.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: userData,
    openModel : false
  },
  mutations: {
    EDIT_USER(state, payload) {
      state.users.map((ele) => {
        if (ele.id == payload.id) {
          ele.first_name = payload.Fname;
          ele.last_name = payload.Lname;
          ele.notes = payload.notes;
        }
        return ele;
      });

      localStorage.setItem("users", JSON.stringify(state.users));
    },
    DELETE_USER(state, payload) {
      const index = state.users.indexOf(payload);
      if (index > -1) {
        state.users.splice(index, 1);
      }
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    CLOSE_MODEL(state , payload) {
      state.openModel = payload;
    },
  },
  actions: {},
  modules: {},
});
