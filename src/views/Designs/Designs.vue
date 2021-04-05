<template>
  <v-container class="pa-6">
    <v-row>
      <h1 id="designs-header">Designs</h1>
    </v-row>
    <v-row>
      <h4 id="designs-subheader">View our designs and Tees</h4>
    </v-row>
    <v-row>
      <template>
        <v-tabs background-color="green" color="light" icons-and-text fixed-tabs>
          <template v-for="(design, index) in tabHeaders">
            <v-tab :key="index">{{ design.name }}
              <v-icon :key="index">{{ design.icon }}</v-icon>
            </v-tab>
          </template>
        </v-tabs>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import { designs } from '@/utils/designs'
export default {
  name: 'Designs',
  data () {
    return {
      tabHeaders: designs.map(design => ({ name: design.name, icon: design.icon }))
    }
  }
}
</script>
