<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.instagram.com/smudgedlines/">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.depop.com/smudgedlines/">
              Depop
            </a>
          </li>
          <li>
            <a href="#ToDo/policies">
              Policies
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by smudged lines
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: { type: String, default: '' },
    type: { type: String, default: '' }
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style></style>
