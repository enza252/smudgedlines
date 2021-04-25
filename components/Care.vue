<template>
  <v-container>
    <v-row class="ml-2">
      <h1 id="care-header">Care</h1>
    </v-row>
    <v-row>
      <template v-for="(card, i) in cards">
        <v-col :key="i">
          <v-card color="accent" rounded elevation="10" min-height="100%">
            <v-card-title style="justify-content: center">
              {{ card.title }}
              <v-icon v-if="card.icon" right >{{ card.icon }}</v-icon>
            </v-card-title>
            <v-card-text style="text-align: center">
              {{ card.content }}
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiWashingMachine, mdiRadiator } from '@mdi/js'
export default defineComponent({
  name: 'Care',
  setup () {

  },
  data () {
    return {
      cards: [
        {
          title: 'Washing',
          content:
            'Machine Wash at 30 degrees celsius on a low spin, or hand wash in a bowl of warm water.',
          icon: mdiWashingMachine
        },
        {
          title: 'Drying',
          content: 'Air dry our Tees on a washing line or near a warm radiator. Do not tumble dry - it\'s bad for the planet and will shrink our Tees!',
          icon: mdiRadiator
        }
      ]
    }
  }
})
</script>
