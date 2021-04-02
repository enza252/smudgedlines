<template>
  <v-parallax :src="imgPath">
    <v-container>
      <v-row class="">
        <v-col class="">
          <h1>Smudged Lines</h1>
          <h3>Handcrafted designs from locally sourced & produced fabric.</h3>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
import path from 'path'
export default {
  name: 'Splash',
  data: () => ({
    imgPath: path.resolve('static/assets/img/bg-acid-synth.png')
  })
}
</script>
