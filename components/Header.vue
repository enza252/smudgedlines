<template>
  <v-container class="pa-0" fluid>
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

      <template v-if="!mobile">
        <v-tooltip bottom v-for="(button, index) in navBarButtons" :key="index">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="white" class="ma-1" text v-on="on" v-bind="attrs" @click="goToSection(button.id)">
              {{ button.buttonText }}
              <v-icon right >{{ button.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ button.buttonText }}</span>
        </v-tooltip>
      </template>

      <v-btn v-if="mobile" @click="toggleDrawer" color="primary" elevation="false">
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group

          active-class="deep-purple--text text--accent-4"
        >
          <template v-for="(button, index) in navBarButtons">
            <v-list-item :key="index" @click="goToSection(button.id)">
              <v-list-item-icon>
                <v-icon left >{{ button.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{button.buttonText }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import { mdiTshirtCrewOutline, mdiInformationOutline, mdiHeartOutline, mdiCartOutline } from '@mdi/js'
export default defineComponent({
  name: 'Header',
  data: () => ({
    navBarButtons: [
      {
        icon: mdiTshirtCrewOutline,
        buttonText: 'Designs',
        id: 'designs'
      },
      {
        icon: mdiCartOutline,
        buttonText: 'Store',
        id: 'store'
      },
      {
        icon: mdiHeartOutline,
        buttonText: 'Care',
        id: 'care'
      },
      {
        icon: mdiInformationOutline,
        buttonText: 'About',
        id: 'about'
      }
    ],
    slLogoPath: '/logo/sl-icon-white-200x200.png',
    drawer: false
  }),
  methods: {
    goToSection (id) {
      this.$vuetify.goTo(`#${id}-header`)
      this.toggleDrawer()
    },
    mobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
})
</script>
