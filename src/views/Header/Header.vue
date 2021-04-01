<template>
  <div>
    <v-app-bar
      color="green"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Smudged Lines</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn>
        Designs
        <v-icon right >mdi-home</v-icon>

      </v-btn>
      <v-btn>
        About
        <v-icon right>
          mdi-t-shirt-crew-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
