import Vue from 'vue';
import Vuex from 'vuex';
import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

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
  ...productMutations,
  ...cartMutations,
  ...manufacturerMutations,
  },

  getters: {
    ...productGetters,
    ...manufacturerGetters,
  },

  // 进行异步操作,获取远程数据，将请求到的数据提交到对应的 mutation 中。
  actions: {
    ...productActions,
    ...manufacturerActions,
  }
});
