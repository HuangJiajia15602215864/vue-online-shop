<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
        <product-item :products="products"></product-item>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue';
  export default {
    name: 'product-list',
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts') // 触发action
      }
    },
    computed: {
      products() {
        return this.$store.getters.allProducts;
      }
    },
    components: {
      'product-item': ProductItem
    },
    methods: {

    }
  }
</script>