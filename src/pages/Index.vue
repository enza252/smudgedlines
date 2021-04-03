<template>
  <v-container fluid class="d-flex flex-column flex-grow-1">
    <v-row class="d-flex flex-grow-1" justify="center" align="center">
      <Header/>
    </v-row>
    <v-row class="d-flex flex-column flex-grow-1">
      <Splash/>
    </v-row>
    <v-row class="d-flex flex-column flex-grow-1" justify="center" align="center">
      <v-sheet width="95%" rounded elevation="12" class="main" style="margin-top: -5rem; z-index: 1">
        <Designs/>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import Header from '@/views/Header/Header'
import Splash from '@/views/Splash/Splash'
import Designs from '@/views/Designs/Designs'

export default {
  name: 'Index',
  components: {
    Designs,
    Header,
    Splash
  }
}
</script>

<style>
</style>
