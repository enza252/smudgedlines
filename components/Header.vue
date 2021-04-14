<template>
  <v-container style="min-width: 100%">
    <v-row xs="12" class="d-flex flex-grow-1">
      <v-app-bar
        color="primary"
        style="border-bottom: 1px solid #ffffff !important;"
      >
        <v-app-bar-nav-icon>
          <template v-slot:default>
            <v-img :src="slLogoPath" max-height="50" max-width="50"/>
          </template>
        </v-app-bar-nav-icon>
        <v-app-bar-title v-if="$vuetify.breakpoint.smAndUp">
          <template v-slot:default>
            <h3 style="color: white">Smudged Lines</h3>
          </template>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <!--   Mobile Nav Bar just has icons. Could be a burger bar if changing pages in future     -->
        <template v-if="$vuetify.breakpoint.smAndDown">
          <template v-for="(button, index) in navBarButtons">
            <v-tooltip bottom :key="index">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" class="ma-1" text v-on="on" v-bind="attrs" x-small>
                  <v-icon right >{{ button.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ button.buttonText }}</span>
            </v-tooltip>
          </template>
        </template>
        <!--   NavBar Buttons ToDo implement scroll to section     -->
        <template v-else>
          <template v-for="(button, index) in navBarButtons">
            <v-tooltip bottom :key="index">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" class="ma-1" text v-on="on" v-bind="attrs">
                  {{ button.buttonText }}
                  <v-icon right >{{ button.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ button.buttonText }}</span>
            </v-tooltip>
          </template>
        </template>
      </v-app-bar>
    </v-row>
  </v-container>
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
    slLogoPath: '/logo/sl-icon-white-50x50.png'
  }),
  methods: {
    log (item) {
      console.log(item)
    }
  },
}
</script>
