<template>
  <v-app-bar
    color="green"
  >
    <v-app-bar-nav-icon>
      <template v-slot:default>
        <v-icon color="white" right>mdi-menu</v-icon>
      </template>
    </v-app-bar-nav-icon>

    <v-app-bar-title>
      <template v-slot:default>
        <h3 style="color: white">Smudged Lines</h3>
      </template>
    </v-app-bar-title>
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
