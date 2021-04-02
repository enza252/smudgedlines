<template>
  <v-app-bar
    color="green"
    style="border-bottom: 1px solid #ffffff !important;"
  >
    <v-app-bar-nav-icon>
      <template v-slot:default>
        <v-img :src="slLogoPath" max-height="50" max-width="50"/>
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
import path from 'path'
export default {
  name: 'Header',
  data: () => ({
    mdiTShirtIconPath: mdiTshirtCrewOutline,
    mdiInfoOutlineIconPath: mdiInformationOutline,
    mdiHeartOutlineIconPath: mdiHeartOutline,
    mdiCartOutlineIconPath: mdiCartOutline,
    slLogoPath: path.resolve('static/assets/img/logo/sl-icon-white-200x200.png')
  }),
}
</script>
<style>
.white-text {
  color: #fff;
}
</style>
