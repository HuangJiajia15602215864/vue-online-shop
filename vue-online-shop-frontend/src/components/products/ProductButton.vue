<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">加入购物车</button>
    <button v-else class="button" @click="removeFromCart(product._id)">从购物车移除</button>
  </div>
</template>

<script>
  export default {
    props: ['product'],
    computed: {
      // 判断商品是否存在购物车
      isAdding() {// true:未加入；false：已加入
        let isAdding = true;
        this.cart.map(product => {
          if (product._id === this.product._id) {
            isAdding = false;
          }
        });
        return isAdding;
      },

      cart() {
        return this.$store.state.cart;
      }
    },

    methods: {
      // 加入购物车
      addToCart() {
        this.$store.commit('ADD_TO_CART', {
          product: this.product,
        })
      },

      // 从购物车移除
      removeFromCart(productId) {
        this.$store.commit('REMOVE_FROM_CART', {
          productId,
        })
      }
    }
  }

</script>
