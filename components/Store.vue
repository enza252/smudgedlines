<template>
  <v-container class="pa-6">
    <v-row class="ml-2">
      <h1 id="store-header">Store</h1>
    </v-row>
    <v-row>
      <v-sheet min-width="100%" color="accent" class="pa-6" rounded elevation="10">
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Depop</v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Smudged Lines Store</v-card-title>
            </v-card>
            <v-img :src="slLogoColouredSVG" max-height="50" max-width="50"/>
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
      slLogoColouredSVG: '/svg/sl-colour-500x500.svg'
    //   slLogoColouredSVG: '/logo/sl-icon-white-200x200.png' static/svg/sl-colour-500x500.svg
    }
  }
})
</script>
