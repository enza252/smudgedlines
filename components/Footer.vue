<template>
  <v-footer
    :absolute="false"
    app
  >
    <v-container>
      <v-row>
        <span>&copy; {{ new Date().getFullYear() }} made with <v-icon>mdi-heart</v-icon> by Smudged Lines</span>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
