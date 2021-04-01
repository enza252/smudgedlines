<template>
  <div>
    <v-app-bar
      color="green"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Smudged Lines</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="white" class="ma-1" text>
        Designs
        <v-icon right >{{ mdiTShirtIconPath }}</v-icon>
      </v-btn>

      <v-btn color="white" class="ma-1" text>
        Care
        <v-icon right>{{ mdiHeartOutlineIconPath }}</v-icon>
      </v-btn>

      <v-btn color="white" class="ma-1" text>
        About Us
        <v-icon right>{{ mdiInfoOutlineIconPath }}</v-icon>
      </v-btn>

      <v-btn color="white" class="ma-1" text>
        Shop
        <v-icon right>{{ mdiCartOutlineIconPath }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiTshirtCrewOutline, mdiInformationOutline, mdiHeartOutline, mdiCartOutline } from '@mdi/js'
export default {
  name: 'Header',
  data: () => ({
    mdiTShirtIconPath: mdiTshirtCrewOutline,
    mdiInfoOutlineIconPath: mdiInformationOutline,
    mdiHeartOutlineIconPath: mdiHeartOutline,
    mdiCartOutlineIconPath: mdiCartOutline
  }),
}
</script>
