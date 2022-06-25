import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import axios from "axios";



const store = createStore({
  state: {
    list: [],
    basket: [],
    title: "Sepete Ekle",
  },

  getters: {
    getList(state) {
      return state.list;
    },
    getTitle(state) {
      return state.title;
    },
    getBasket(state){
      return state.basket
    }
  },

  mutations: {
    SET_PRODUCT(state, list) {
      state.list = list;
    },
    update(state, title) {
      state.title = title;
    },
    newItem(state, newItem) {
      state.basket.push(newItem)
    }
  },
  actions: {
    getData({ commit }) {
      try {
        return axios.get("http://localhost:3000/data/").then((res) => {
          commit("SET_PRODUCT", res.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    updateName({ commit }) {
      let title = "Sepete Eklendi";
      setTimeout(() => {
        title = "Sepete Ekle";
        commit("update", title);
      }, 1500);
      commit("update", title);
    },
  
    newItem({ commit }, item) {
      commit("newItem", item);
    },
  },
  //  plugins: [createPersistedState()]

});
export default store;
