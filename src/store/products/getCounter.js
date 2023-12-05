export default {
  state: {
    counter: 0,
  },
  mutations: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
  },
  getters: {
    multiplyCntr(state) {
      return state.counter * 2;
    },
  },
  actions: {
    increase(context) {
      context.commit("inc");
    },
    decrease(context) {
      context.commit("dec");
    },
  },
};
