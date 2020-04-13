import axios from 'axios';
const API_BASE = 'http://localhost:3000/api/v1';
import { Message } from 'element-ui';

import {// 导入字符串常量
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS,
} from './mutation-types';

// 商品
export const productActions = {
  // 获取商品列表,{ commit } 参数，采用了解构赋值的方式 const { commit } = context，避免后面使用 context.commit 过于繁琐
  allProducts({ commit }) {// 获取全部商品
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/products`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, {
        products: response.data,
      });
    })
  },

  productById({ commit }, payload) {// 通过ID获取商品
    commit(PRODUCT_BY_ID);
    const { productId } = payload;
    axios.get(`${API_BASE}/products/${productId}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, {
        product: response.data,
      });
    })
  },

  removeProduct({ commit }, payload) {// 通过ID移除商品
    commit(REMOVE_PRODUCT);
    const { productId } = payload;
    axios.delete(`${API_BASE}/products/${productId}`).then(() => {
      // 返回 productId，用于删除本地对应的商品
      commit(REMOVE_PRODUCT_SUCCESS, {
        productId,
      });
      Message({
        message: '恭喜你，商品删除成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，商品删除失败！');
    })
  },

  updateProduct({ commit }, payload) {// 更新商品信息
    commit(UPDATE_PRODUCT);
    const { product } = payload;
    axios.put(`${API_BASE}/products/${product._id}`, product).then(() => {
      commit(UPDATE_PRODUCT_SUCCESS, {
        product:product
      });
      Message({
        message: '恭喜你，商品更新成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，商品更新失败！');
    })
  },

  addProduct({ commit }, payload) {// 添加商品
    commit(ADD_PRODUCT);
    const { product } = payload;
    axios.post(`${API_BASE}/products`, product).then(response => {
      commit(ADD_PRODUCT_SUCCESS, {
        product: response.data,
      });
      Message({
        message: '恭喜你，商品添加成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，商品添加失败！');
    })
  }
};

export const manufacturerActions = {
  allManufacturers({ commit }) {// 获取全部生产商
    commit(ALL_MANUFACTURERS);
    axios.get(`${API_BASE}/manufacturers`).then(response => {
      commit(ALL_MANUFACTURERS_SUCCESS, {
        manufacturers: response.data,
      });
    })
  },
  manufacturerById({ commit }, payload) {// 通过ID获取生产商
    commit(MANUFACTURER_BY_ID); 
    const { manufacturerId } = payload;
    axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then(response => {
      commit(MANUFACTURER_BY_ID_SUCCESS, {
        manufacturer: response.data,
      });
    })
  },
  removeManufacturer({ commit }, payload) {// 移除生产商
    commit(REMOVE_MANUFACTURER);
    const { manufacturerId } = payload;
    axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
      // 返回 manufacturerId，用于删除本地对应的制造商
      commit(REMOVE_MANUFACTURER_SUCCESS, {
        manufacturerId,
      });
      Message({
        message: '恭喜你，制造商删除成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，制造商删除失败！');
    })
  },
  updateManufacturer({ commit }, payload) {// 更新生产商信息
    commit(UPDATE_MANUFACTURER);
    const { manufacturer } = payload;
    axios.put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer).then(() => {
      commit(UPDATE_MANUFACTURER_SUCCESS, {
        manufacturer:manufacturer
      });
      Message({
        message: '恭喜你，制造商更新成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，制造商更新失败！');
    })
  },
  addManufacturer({ commit }, payload) {// 添加生产商
    commit(ADD_MANUFACTURER);
    const { manufacturer } = payload;
    axios.post(`${API_BASE}/manufacturers`, manufacturer).then(response => {
      commit(ADD_MANUFACTURER_SUCCESS, {
        manufacturer: response.data,
      });
      Message({
        message: '恭喜你，制造商添加成功！',
        type: 'success'
      })
    })
    .catch(() => {
      Message.error('不好意思，制造商添加失败！');
    })
  }
}