<template>
  <v-parallax :src="useParallax()" class="sl-parallax">
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
    isHydrated: false
  }),
  mounted () {
    this.isHydrated = true
  },
  methods: {
    useParallax () {
      if (this.isHydrated && this.$vuetify.breakpoint.smAndDown) {
        return '/designs/purple-haze/purple-haze-pattern-mobile-parallax.jpg'
      } else if (this.isHydrated && this.$vuetify.breakpoint.lgAndUp) {
        return '/designs/purple-haze/purple-haze-pattern-og.jpg'
      } else {
        return '/designs/purple-haze/purple-haze-pattern-tablet.jpg'
      }
    }
  }
})
</script>
<style>
.sl-parallax {
 border: 5px solid #1E1E1E;
 border-radius: 5px;
}
</style>
