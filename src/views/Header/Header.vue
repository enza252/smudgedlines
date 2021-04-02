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

    <v-btn color="white" class="ma-1" text v-for="(button, index) in navBarButtons" :key="index">
      {{ button.buttonText }}
      <v-icon right >{{ button.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiTshirtCrewOutline, mdiInformationOutline, mdiHeartOutline, mdiCartOutline } from '@mdi/js'
import path from 'path'
export default {
  name: 'Header',
  data: () => ({
    navBarButtons: [
      {
        icon: mdiTshirtCrewOutline,
        buttonText: 'Designs'
      },
      {
        icon: mdiHeartOutline,
        buttonText: 'Care'
      },
      {
        icon: mdiInformationOutline,
        buttonText: 'About Us'
      },
      {
        icon: mdiCartOutline,
        buttonText: 'Shop'
      }
    ],
    slLogoPath: path.resolve('static/assets/img/logo/sl-icon-white-200x200.png')
  }),
}
</script>
<style>
.white-text {
  color: #fff;
}
</style>
