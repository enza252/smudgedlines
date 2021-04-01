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
        <v-icon right >{{ mdiTShirtPath }}</v-icon>
      </v-btn>
      <!--      <v-btn>-->
      <!--        About-->
      <!--        <v-icon right>info-outline</v-icon>-->
      <!--      </v-btn>-->
    </v-app-bar>
  </div>
</template>

<script>
import { mdiTshirtCrewOutline } from '@mdi/js'
export default {
  name: 'Header',
  data: () => ({
    mdiTShirtPath: mdiTshirtCrewOutline
  }),
}
</script>
