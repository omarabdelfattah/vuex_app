<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Your name is {{ $store.getters.getNameWithTitle }}</h1>
    <h1>Your age is {{ $store.state.age }}</h1>
    <input type="text" v-model="$store.state.name" />
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  mounted() {
    console.log("About mounted");
    console.log(this.$store);
  },
};
</script>
