<template>
  <v-container class="pa-6" style="min-height: 500px !important">
    <v-row class="ml-1">
      <h1 id="designs-header">Designs</h1>
    </v-row>
    <v-row class="ml-1 mb-1">
      <h4 id="designs-subheader">View some of our previous tees</h4>
    </v-row>
    <v-sheet color="accent" class="pa-6" rounded elevation="10" :style="`min-height: ${mobile ? 550 : 600}px !important`">
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
            <v-tab :key="index">{{design.name}}
              <v-icon :key="index">{{design.icon}}</v-icon>
            </v-tab>
          </template>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(design, index) in designs"
            :key="index"
          >
            <v-carousel
              :height="getViewportHeight"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
            >
              <template v-for="(source, i) in design.source">
                <v-carousel-item
                  :key="i"
                  v-if="doRenderOnDevice(source.mobile)"
                  eager
                >
                  <LoadingImage
                    :src="source.image"
                    :alt="source.alt"
                    height="100%"
                    eager
                  />
                </v-carousel-item>
              </template>
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

export default defineComponent({
  name: 'Designs',
  data () {
    return {
      tab: null,
      tabHeaders: designs.map(design => ({ name: design.name, icon: design.icon })),
      designs: designs,
      isHydrated: false
    }
  },
  computed: {
    mobile () {
      return this.isHydrated && this.$vuetify.breakpoint.xsOnly
    },
    xlMobile () {
      return this.isHydrated && this.$vuetify.breakpoint.mdAndDown
    },
    getViewportHeight () {
      if (this.isHydrated) {
        if (this.$vuetify.breakpoint.xsOnly) {
          return '450'
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
  },
  mounted () {
    this.isHydrated = true
  },
  methods: {
    doRenderOnDevice (isImageMobileCompatible) {
      return isImageMobileCompatible || !(!isImageMobileCompatible && (this.mobile || this.xlMobile))
    }
  }
})
</script>
