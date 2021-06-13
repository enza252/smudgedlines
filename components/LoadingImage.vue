<template>
  <v-responsive style="height: 100% !important">
    <v-img :src="src" :alt="alt" :height="height" :eager="eager" @load="onImageLoad"/>
    <pulse-loader :loading="!isImageLoaded" :color="$vuetify.theme.currentTheme.primary" style="text-align: center !important, width: 100% !important"/>
  </v-responsive>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default defineComponent({
  name: 'LoadingImage',
  components: {
    PulseLoader
  },
  props: {
    src: { type: String, required: true },
    height: { type: String, required: true },
    alt: { type: String, required: true },
    eager: { type: Boolean }
  },
  data () {
    return {
      isImageLoaded: false
    }
  },
  methods: {
    onImageLoad () {
      this.isImageLoaded = true
    }
  }
})
</script>
