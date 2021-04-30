<template>
  <v-footer
    app
  >
    <v-container style="min-width: 100%">
      <v-row>
        <v-col cols="6" class="pa-0">
          <span v-for="(social, index) in socials" :key="index">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <a :href="social.url">
                  <!-- <v-img v-if="social.img" :src="social.img" height="24" max-height="24" width="24" v-on="on" v-bind="attrs" :class="social.padding"/> -->
                  <v-icon v-on="on" v-bind="attrs" :class="social.padding">
                    {{social.icon}}
                  </v-icon>
                </a>
              </template>
              {{social.tooltipText}}
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

const pa0 = 'pa-0'
const pl3 = 'pl-3'

export default defineComponent({
  name: 'Footer',
  data: () => ({
    socials: [{
      icon: mdiInstagram,
      tooltipText: 'Instagram',
      url: 'https://www.instagram.com/smudgedlines/',
      padding: pa0
    },
    {
      icon: mdiFacebook,
      tooltipText: 'Facebook',
      url: 'https://www.facebook.com/smudgedlinesfb',
      padding: pl3
    },
    {
      img: '/socials/depop-logo-transparent.png',
      tooltipText: 'Depop',
      url: 'https://www.depop.com/smudgedlines/',
      padding: pl3
    }
    ]
  })
})
</script>
