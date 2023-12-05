export default {
  state: {
    products: [],
  },
  mutations: {
    getProducts(state, products) {
      state.products = products;
      console.log(products);
    },
  },
  getters: {
    getFirstProduct(state) {
      return state.products[0];
    },
  },
  actions: {
    async doGetProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          context.commit("getProducts", data.products);
        });
    },
  },
};
