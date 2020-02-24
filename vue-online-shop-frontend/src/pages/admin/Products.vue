<template>
  <div>
    <div class="title">
      <h1>This is Admin</h1>
    </div>
    <div class="body">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      // return this.$store.state.products[0];
      return this.$store.getters.allProducts[0];// 通过属性访问的方式调用对应的 getter 属性
    }
  }
}
</script>