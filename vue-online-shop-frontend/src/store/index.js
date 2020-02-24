import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 定义后端接口根路由
const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 必须使用 Vuex 的 Mutation 函数来改变 state
  state: { // 全局状态
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

  mutations: { // 修改状态的唯一手段,对 `state` 进行操作以返回新的 `state`
    ADD_TO_CART(state, payload) { // 加入购物车
      const {
        product
      } = payload;
      state.cart.push(product)
    },

    REMOVE_FROM_CART(state, payload) { // 移除购物车
      const {
        productId
      } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    },

    ALL_PRODUCTS(state) { // 显示加载状态
      state.showLoader = true;
    },

    ALL_PRODUCTS_SUCCESS(state, payload) { //将 action中提交的数据保存到 state 中,并取消加载状态；
      const {
        products
      } = payload;

      state.showLoader = false;
      state.products = products;
    },

    PRODUCT_BY_ID(state) {
      state.showLoader = true;
    },
    PRODUCT_BY_ID_SUCCESS(state, payload) {
      state.showLoader = false;
      const {
        product
      } = payload;
      state.product = product;
    }
  },

  getters: {
    allProducts(state) {// 获取本地中所有的商品
      return state.products;
    },
    productById: (state, getters) => id => {// 
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id == id)[0];
      } else {
        return state.product;
      }
    }
  },

  // 进行异步操作,获取远程数据，将请求到的数据提交到对应的 mutation 中。
  actions: {
    // 获取商品列表,{ commit } 参数，采用了解构赋值的方式 const { commit } = context，避免后面使用 context.commit 过于繁琐
    allProducts({
      commit
    }) {
      commit('ALL_PRODUCTS')

      axios.get(`${API_BASE}/products`).then(response => {
        console.log('response', response);
        commit('ALL_PRODUCTS_SUCCESS', { // 将请求到的数据提交到对应的 mutation
          products: response.data,
        });
      })
    },

    productById({ commit }, payload) {
      commit('PRODUCT_BY_ID');
 
      const { productId } = payload;
      axios.get(`${API_BASE}/products/${productId}`).then(response => {
        commit('PRODUCT_BY_ID_SUCCESS', {
          product: response.data,
        });
      })
    }
  }
});
