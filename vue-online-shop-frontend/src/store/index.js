import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 定义后端接口根路由
const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    },
    ALL_PRODUCTS(state) {// 显示加载状态
      state.showLoader = true;
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {//将 action中提交的数据保存到 state 中,并取消加载状态；
      const { products } = payload;

      state.showLoader = false;
      state.products = products;
    }
  },
  // 进行异步操作
  actions: {
    allProducts({ commit }) {
      commit('ALL_PRODUCTS')

      axios.get(`${API_BASE}/products`).then(response => {
        console.log('response', response);
        commit('ALL_PRODUCTS_SUCCESS', {// 将请求到的数据提交到对应的 mutation
          products: response.data,
        });
      })
    }
  }
});