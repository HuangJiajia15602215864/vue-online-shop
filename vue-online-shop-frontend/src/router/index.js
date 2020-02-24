import Vue from 'vue';
import Router from 'vue-router';

// 在 webpack 配置中将会 "@"映射成 resolve('src')，也就是我们项目目录下 src 文件夹的路径
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Detail from '@/pages/Detail';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',// name代表此页面在 vue-router 中的标识符
      component: Home,
    },
    { //嵌套路由
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',// 动态路由
          name: 'Edit',
          component: Edit,
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    }
  ],
});
