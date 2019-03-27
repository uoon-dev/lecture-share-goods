import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    items: '',
    price: 0,
    lists: ''
  },
  mutations: {
    setProducts(state, products) {
      console.log(products);
      state.products = products;
    },
    setItems(state, items) {
      state.items = items;
    },
    setPrice(state, price) {
      state.price = price; 
    },
    setLists(state, lists) {
      state.lists = lists; 
    } 
  },
  actions: {
    setProducts({ commit }, products) {
      commit('setProducts', products);
    },
    setItems({ commit }, items) {
      commit('setItems', items);
    },
    setPrice({ commit }, price) {
      commit('setPrice', price);
    },
    setLists({ commit }, lists) {
      commit('setLists', lists);
    }
  }
});