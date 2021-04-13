<template>
  <v-container class="pa-6">
    <v-sheet color="accent" style="padding: 2em" rounded elevation="10">
      <v-row>
        <h1 id="designs-header">Designs</h1>
      </v-row>
      <v-row>
        <h4 id="designs-subheader">View our designs and Tees</h4>
      </v-row>
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
              height="400"
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
import { designs } from '@/middleware/designs'
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'Designs',
  data () {
    return {
      tab: null,

    }
  },
  setup () {
    const tabHeaders = ref(designs.map(design => ({ name: design.name, icon: design.icon })))
    return {
      designs,
      tabHeaders
    }
  }
}
</script>
