<template>
  <v-container class="pa-6" style="min-height: 500px !important">
    <v-row class="ml-1">
      <h1 id="designs-header">Designs</h1>
    </v-row>
    <v-row class="ml-1 mb-1">
      <h4 id="designs-subheader">View our designs and Tees</h4>
    </v-row>
    <v-sheet color="accent" class="pa-6" rounded elevation="10" style="min-height: 600px !important">
      <v-row>
        <v-tabs
          background-color="primary"
          color="light"
          icons-and-text
          fixed-tabs
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          v-model="tab"
        >
          <template v-for="(design, index) in tabHeaders">
            <v-tab :key="index">{{ design.name }}
              <v-icon :key="index">{{ design.icon }}</v-icon>
            </v-tab>
          </template>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(design, index) in designs"
            :key="index"
          >
            <v-carousel
              cycle
              :height="getHeight"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(source, i) in design.source"
                :key="i"
                :src="source.image"
              >
              </v-carousel-item>
            </v-carousel>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

import { designs } from '@/middleware/designs'

// ToDo in here
//  - lazy loaded version of each design to show some blurred image for UX
//  - include new designs

export default defineComponent({
  name: 'Designs',
  data () {
    return {
      tab: null,
      tabHeaders: designs.map(design => ({ name: design.name, icon: design.icon })),
      designs: designs
    }
  },
  computed: {
    getViewportHeight () {
      if (this.$vuetify.breakpoint.xsAndDown) {
        return '548'
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        return '650'
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        return '850'
      }
      if (this.$vuetify.breakpoint.lgAndUp) {
        return '950'
      }
      if (this.$vuetify.breakpoint.xlAndUp) {
        return '1150'
      }
    }
  }
})
</script>
