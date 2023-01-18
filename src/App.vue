<script setup>
import Header from './components/pure/Header.vue'
import Footer from './components/pure/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: -1;
  display: block;
  background-color: #FFFFFF;
}

</style>
