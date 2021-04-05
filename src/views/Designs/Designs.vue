<template>
  <v-container class="pa-6">
    <v-row>
      <h1 id="designs-header">Designs</h1>
    </v-row>
    <v-row>
      <h4 id="designs-subheader">View our designs and Tees</h4>
    </v-row>
    <v-row>
      <v-tabs
        background-color="green"
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
          <v-container>
            <v-row class="d-flex flex-column flex-grow-1">
              <v-card>
                <v-card-text>{{ design.name }}</v-card-text>
              </v-card>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>
<script>
import { designs } from '@/utils/designs'
export default {
  name: 'Designs',
  data () {
    return {
      tab: null,
      tabHeaders: designs.map(design => ({ name: design.name, icon: design.icon })),
      designs: designs
    }
  }
}
</script>
