import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

const store = createStore({
  state: {
    count: 0,
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

    getBasket(state) {
      console.log("basket", state.basket);
      return state.basket;
    },
  },

  mutations: {
    SET_PRODUCT(state, list) {
      state.list = list;
    },
    update(state, title) {
      state.title = title;
    },
    increment(state) {
      state.count++;
    },

    newItem(state, newItem) {
      state.basket.push(newItem);
    },
  },

  actions: {
    async getData({ commit }) {
      try {
        const data = await axios.get("http://localhost:3000/data/");
        commit("SET_PRODUCT", data.data);
      } catch (error) {
        console.log(error);
      }
    },

    updateName({ commit }) {
      let title = "Sepete Eklendi";
      setTimeout(() => {
        title = "Sepete Ekle";
        commit("update", title);
      }, 2000);
      commit("update", title);
    },
    increment({ commit }) {
      commit("increment");
    },
    newItem({ commit }, ıtem) {
      commit("newItem", ıtem);
    },
  },

  plugins: [createPersistedState()],
});
export default store;
