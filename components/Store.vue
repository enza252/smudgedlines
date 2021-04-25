<template>
  <v-container class="pa-6">
    <v-row class="ml-2">
      <h1 id="store-header">Store</h1>
    </v-row>
    <v-row>
      <v-sheet min-width="100%" color="accent" class="pa-6" rounded elevation="10">
        <v-row >
          <v-col>
            <v-card style="max-height: 100%">
              <v-card-title>Depop</v-card-title>
              <v-card-text class="pl-3">
                <v-img :src="depopSVG" max-width="300px" max-height="150px"/>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Smudged Lines Store</v-card-title>
              <v-card-text>
                <v-img :src="slLogoColoured" height="100px" width="100px" style="justify-content: center"/>
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
  }
})
</script>
