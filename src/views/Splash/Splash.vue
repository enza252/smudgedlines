<template>
  <v-parallax :src="imgPath">
    <v-container>
      <v-row justify="center" align="center" class="d-flex flex-grow-1">
        <v-col>
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
    imgPath: path.resolve('public/assets/img/bg-acid-synth.png')
  })
}
</script>
