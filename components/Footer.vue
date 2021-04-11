<template>
  <v-footer
    :absolute="false"
    app
  >
    <v-container style="min-width: 100%">
      <v-row justify="end">
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
