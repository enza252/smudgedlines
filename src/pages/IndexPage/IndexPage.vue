<template>
  <div class="hello">
    <Toolbar />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Toolbar from '../../components/Toolbar/Toolbar.vue'

export default {
  name: 'HelloWorld',
  components: {
    Toolbar: Toolbar
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
