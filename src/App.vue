<template>
  <div id="app">
    <Toolbar />
    <img
      alt="Vue logo"
      src="assets/logo.png"
    >
    <IndexPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import IndexPage from './pages/IndexPage/IndexPage.vue'
import Toolbar from './components/Toolbar/Toolbar.vue'

export default {
  name: 'App',
  components: {
    IndexPage: IndexPage,
    Toolbar: Toolbar
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
  margin-top: 60px;
}
</style>
