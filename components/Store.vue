<template>
  <v-container class="pa-6">
    <v-row class="ml-2">
      <h1 id="store-header">Store</h1>
    </v-row>
    <v-row>
      <v-sheet min-width="100%" color="accent" class="pa-6" rounded elevation="10">
        <v-row align="center">
          <v-col>
            <v-card>
              <v-card-title :class="`${xsMobile() ? 'text-subtitle-2' : null}`">Find us on Depop</v-card-title>
              <v-card-text class="justify-center">
                <a href="https://www.depop.com/smudgedlines/">
                  <v-img :src="depopSVG" max-width="300px" max-height="150px" class="mx-auto" eager/>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card >
              <template v-if="xsMobile()">
                <v-card-title :class="text-subtitle-2">Smudged Lines Store</v-card-title>
                <v-card-subtitle v-if="xsMobile()">Coming Soon!</v-card-subtitle>
              </template>
              <v-card-title v-else>Smudged Lines Store Coming Soon!</v-card-title>
              <v-card-text class="justify-center">
                <v-img :src="slLogoColoured" height="80px" width="80px" class="mx-auto" disabled eager/>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data () {
    return {
      depopSVG: '/socials/depop_logo.svg',
      slLogoColoured: '/logo/sl-colour-150x150.png',
      isHydrated: false
    }
  },
  mounted () {
    this.isHydrated = true
  },
  methods: {
    xsMobile () {
      return this.isHydrated && this.$vuetify.breakpoint.xsOnly
    }
  }
})
</script>
