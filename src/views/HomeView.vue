<template>
  <div class="home">
    <h1>This is homepage</h1>
    <h1>Your name is {{ $store.getters.getNameWithTitle }}</h1>
    <h1>Your age is {{ $store.state.age }}</h1>
    <button @click="changeTitle">change title</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  mounted() {
    console.log("HomeView mounted");
    console.log(this.$store);
  },
  methods: {
    changeTitle() {
      this.$store.commit("changeTitle");
    },
  },
};
</script>
