<template>
  <v-container class="pa-6">
    <v-row class="ml-1">
      <h1 id="about-header">About</h1>
    </v-row>
    <v-row>
      <v-sheet min-width="100%" color="accent" class="pa-6" rounded elevation="10">
        <v-row>
          <v-col :cols="getColumns"><p>{{ fillerText }}</p></v-col>
          <v-col :cols="getColumns"><p>{{ fillerText }}</p></v-col>
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
  name: 'About',
  data () {
    return {
      fillerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper libero urna, vel accumsan enim ultricies in. Quisque augue purus, interdum nec lacinia vitae, pharetra at mi. Curabitur vitae condimentum dolor, non hendrerit neque. Aenean commodo cursus turpis vitae euismod. Duis eget tortor quis leo cursus sodales. Sed maximus neque est, id convallis quam semper non. Aliquam sit amet metus tempor, tincidunt diam sed, convallis ligula. Phasellus non ligula egestas, luctus lacus et, accumsan mauris. In hac habitasse platea dictumst. Donec malesuada ullamcorper fringilla. Suspendisse pharetra tempus facilisis. Nam ut scelerisque libero, vitae cursus odio. Phasellus lobortis vehicula maximus. Mauris lobortis in ligula accumsan egestas. Praesent ut magna sed ante dignissim mattis sit amet in ipsum.'
    }
  },
  computed: {
    mobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    getColumns () {
      return this.mobile ? '12' : '6'
    }
  }
})
</script>
