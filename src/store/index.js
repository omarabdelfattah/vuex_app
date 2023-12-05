import { createStore } from "vuex";
import ProductsModule from "@/store/products/getProducts";
import GetCounterModule from "@/store/products/getCounter";

export default createStore({
  state: {
    name: "Omar Abdelfattah",
    age: 22,
    title: "Software Engineer",
  },
  getters: {
    getNameWithTitle(state) {
      return state.name + " (" + state.title + ")";
    },
  },
  mutations: {
    changeTitle(state) {
      state.title = "Full Stack Developer";
    },
  },
  modules: {
    ProductsModule,
    GetCounterModule,
  },
});
