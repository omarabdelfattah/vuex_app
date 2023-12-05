<template>
  <div class="counter">
    <h1>This is an Counter page</h1>
    <h2>Counter is {{ GetCounterModule.counter }}</h2>
    <h2>Counter is {{ getters.multiplyCntr }}</h2>
    <button @click="store.dispatch('increase')">Increase</button>
    <button @click="store.dispatch('decrease')">Decrease</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const GetCounterModule = store.state.GetCounterModule;
const getters = store.getters;
</script>
