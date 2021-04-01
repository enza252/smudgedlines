<template>
  <v-parallax :src="imgPath"></v-parallax>
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
