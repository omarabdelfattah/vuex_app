<template>
  <div class="home">
    <h1>This is Products page</h1>
    <button @click="getProductsFunc">Get Products</button>
    <ul>
      <li v-for="product in ProductsModule.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <h1>First Product</h1>
    <h2>{{ getFirstProduct?.title }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "ProductsPage",
  components: {},
  computed: {
    ...mapState(["ProductsModule"]),
    ...mapGetters(["getFirstProduct"]),
  },
  methods: {
    changeTitle() {
      this.$store.commit("changeTitle");
    },
    ...mapMutations(["getProducts"]),
    ...mapActions(["doGetProducts"]),
    async getProductsFunc() {
      await this.doGetProducts();
      console.log("products=>" + this.ProductsModule.products);
      // setTimeout(() => {
      //   this.getProducts(["product1", "product2"]);
      // }, 1000);
    },
  },
};
</script>
