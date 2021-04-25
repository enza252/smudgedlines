<template>
  <v-parallax :src="imgPath">
    <v-container>
      <v-row justify="center" align="center" class="d-flex flex-grow-1">
        <v-col>
          <h1>Smudged Lines</h1>
          <h3>Vibrant t-shirts for any occasion, responsibly sourced and made with <v-icon>mdi-heart</v-icon></h3>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Splash',
  data: () => ({
    imgPath: '/img/bg-acid-synth.png'
  })
})
</script>
