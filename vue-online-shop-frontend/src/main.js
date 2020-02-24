// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这个是 Vue 应用的入口。
// 我们通过导入 Vue 类、App 组件、router 路由，再加上 el ，将这些参数传给 Vue 类，生成一个 Vue 实例
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});