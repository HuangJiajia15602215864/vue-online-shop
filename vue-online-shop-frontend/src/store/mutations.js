// 改变state数据
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
import { Message } from 'element-ui';
//商品
export const productMutations = {
    [ALL_PRODUCTS](state) {// 所有商品（加载）
      state.showLoader = true;
    },
    [ALL_PRODUCTS_SUCCESS](state, payload) {// 所有商品获取
      const { products } = payload;
      state.showLoader = false;
      state.products = products;
    },
    [PRODUCT_BY_ID](state) {// 通过ID获取商品（加载）
      state.showLoader = true;
    },
    [PRODUCT_BY_ID_SUCCESS](state, payload) {// 通过ID获取商品
      state.showLoader = false;
      const { product } = payload;
      state.product = product;
    },
    [REMOVE_PRODUCT](state) {// 删除商品（加载）
      state.showLoader = true;
    },
    [REMOVE_PRODUCT_SUCCESS](state, payload) {// 通过ID删除商品
      state.showLoader = false;
      const { productId } = payload;
      state.products = state.products.filter(product => product._id !== productId);
    },
    [UPDATE_PRODUCT](state) {// 更新商品（加载）
        state.showLoader = true;
      },
    [UPDATE_PRODUCT_SUCCESS](state, payload) {// 更新商品
        state.showLoader = false;     
        const { product: newProduct } = payload;   
        state.products = state.products.map(product => {
          if (product._id === newProduct._id) {
            return newProduct;
          }   
          return product;
        })
        state.product = newProduct;
      },
    [ADD_PRODUCT](state) {// 添加商品（加载）
        state.showLoader = true;
      },
    [ADD_PRODUCT_SUCCESS](state, payload) {// 添加商品
        state.showLoader = false;      
        const { product } = payload;
        state.products = state.products.concat(product);
    }
  };

// 购物车
  export const cartMutations = {
    [ADD_TO_CART](state, payload) {// 加入购物车
      const { product } = payload;
      state.cart.push(product)
      Message({
        message: '恭喜你，成功加入购物车！',
        type: 'success'
      })
    },
    [REMOVE_FROM_CART](state, payload) {//从购物车移除
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
      Message({
        message: '恭喜你，成功移除购物车！',
        type: 'success'
      })
    },
  }
 
// 生产商
  export const manufacturerMutations = {
    [ALL_MANUFACTURERS](state) {
      state.showLoader = true;
    },
    [ALL_MANUFACTURERS_SUCCESS](state, payload) {
      const { manufacturers } = payload;
      state.showLoader = false;
      state.manufacturers = manufacturers;
    },
    [REMOVE_MANUFACTURER](state) {
      state.showLoader = true;
    },
    [REMOVE_MANUFACTURER_SUCCESS](state, payload) {
      state.showLoader = false;
      const { manufacturerId } = payload;
      state.manufacturers = state.manufacturers.filter(manufacturer => manufacturer._id !== manufacturerId);
    },
    [MANUFACTURER_BY_ID](state) {
      state.showLoader = true;
    },
    [MANUFACTURER_BY_ID_SUCCESS](state, payload) {
      state.showLoader = false;
    
      const { manufacturer } = payload;
      state.manufacturer = manufacturer;
    },
    [UPDATE_MANUFACTURER](state) {
      state.showLoader = true;
    },
    [UPDATE_MANUFACTURER_SUCCESS](state, payload) {
      state.showLoader = false;
    
      const { manufacturer: newManufacturer } = payload;
      state.manufacturers = state.manufacturers.map(manufacturer => {
        if (manufacturer._id === newManufacturer._id) {
          return newManufacturer;
        }
    
        return manufacturer;
      })
      state.manufacturer = newManufacturer;
    },
    [ADD_MANUFACTURER](state) {
      state.showLoader = true;
    },
    [ADD_MANUFACTURER_SUCCESS](state, payload) {
      state.showLoader = false;
    
      const { manufacturer } = payload;
      state.manufacturers = state.manufacturers.concat(manufacturer);
    }
  }