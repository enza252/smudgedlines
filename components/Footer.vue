<template>
  <v-footer
    app
  >
    <v-container style="min-width: 100%">
      <v-row>
        <v-col cols="6" class="pa-0">
          <span v-for="(logo, index) in logos" :key="index">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-on="on" v-bind="attrs" class="pa-1">
                  {{logo.icon}}
                </v-icon>
              </template>
              {{logo.tooltipText}}
            </v-tooltip>
          </span>
        </v-col>
        <v-col cols="6" style="text-align: end" class="pa-0">
          <span>&copy; {{ new Date().getFullYear() }} made with <v-icon>mdi-heart</v-icon> by Smudged Lines</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiInstagram, mdiFacebook } from '@mdi/js'

export default defineComponent({
  name: 'Footer',
  data: () => ({
    logos: [{
      icon: mdiInstagram,
      tooltipText: 'Instagram'
    },
    {
      icon: mdiFacebook,
      tooltipText: 'Facebook'
    }]
  })
})
</script>
