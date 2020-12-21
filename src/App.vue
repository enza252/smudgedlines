<template>
  <div
    id="app"
  >
    <IndexPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import IndexPage from './pages/IndexPage/IndexPage.vue'

export default {
  name: 'App',
  components: {
    IndexPage: IndexPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
