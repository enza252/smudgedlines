<template>
  <v-app-bar
    color="primary"
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
    <div v-for="(button, index) in navBarButtons" :key="index">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="white" class="ma-1" text v-on="on" v-bind="attrs">
            {{ button.buttonText }}
            <v-icon right >{{ button.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ button.buttonText }}</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
import { mdiTshirtCrewOutline, mdiInformationOutline, mdiHeartOutline, mdiCartOutline } from '@mdi/js'
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
    slLogoPath: '/logo/sl-icon-white-200x200.png'
  }),
}
</script>