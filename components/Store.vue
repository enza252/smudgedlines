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
              <v-card-title>Depop</v-card-title>
              <v-card-text :class="mobile ? 'pl-3' : 'pl-5'">
                <v-img :src="depopSVG" max-width="300px" max-height="150px"/>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Smudged Lines Store</v-card-title>
              <v-card-text>
                <v-img :src="slLogoColoured" height="80px" width="80px" style="justify-content: center">
                </v-img>
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
  setup () {

  },
  data () {
    return {
      depopSVG: '/socials/depop_logo.svg',
      slLogoColoured: '/logo/sl-colour-150x150.png'
    }
  },
  computed: {
    mobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
})
</script>
