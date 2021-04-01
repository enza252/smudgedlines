<template>
  <v-container fluid class="d-flex flex-column flex-grow-1">
    <v-row class="d-flex flex-grow-1" justify="center" align="center">
      <Header/>
    </v-row>
    <v-row class="d-flex flex-column flex-grow-0">
      <Splash/>
    </v-row>
  </v-container>
</template>

<script>
import Header from '@/views/Header/Header'
import Splash from '@/views/Splash/Splash'

export default {
  name: 'Index',
  components: {
    Header,
    Splash
  }
}
</script>

<style>
</style>
