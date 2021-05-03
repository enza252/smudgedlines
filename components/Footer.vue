<template>
  <v-footer
    app
  >
    <v-container style="min-width: 100%">
      <v-row>
        <v-col v-for="(social, index) in socials" cols="1" :key="index" class="pl-2 pt-0 pb-0">
          <v-tooltip top >
            <template v-slot:activator="{ on, attrs }">
              <a :href="social.url">
                <v-img v-if="social.img" :src="social.img" height="24" max-height="24" width="24" v-on="on" v-bind="attrs" :class="social.classes"/>
                <v-icon v-else v-on="on" v-bind="attrs" >
                  {{social.icon}}
                </v-icon>
              </a>
            </template>
            {{social.tooltipText}}
          </v-tooltip>

        </v-col>
        <v-spacer/>
        <v-col cols="6" style="text-align: end" class="pa-0">
          <!-- ToDo mobile version of thisq -->
          <span v-if="!mobile">&copy; {{ new Date().getFullYear() }} made with <v-icon>mdi-heart</v-icon> by Smudged Lines</span>
          <span v-else>&copy; {{ new Date().getFullYear() }} Smudged Lines</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiInstagram, mdiFacebook } from '@mdi/js'
import depopLogo from '/static/socials/depop-logo-transparent-24x24.svg'

const pa0 = 'pa-0'
const pl3 = 'pl-3'
const pl6 = 'pl-6'

export default defineComponent({
  name: 'Footer',
  components: {
    depopLogo
  },
  data: () => ({
    socials: [{
      icon: mdiInstagram,
      tooltipText: 'Instagram',
      url: 'https://www.instagram.com/smudgedlines/',
      classes: pa0
    },
    {
      icon: mdiFacebook,
      tooltipText: 'Facebook',
      url: 'https://www.facebook.com/smudgedlinesfb',
      classes: pl3
    },
    {
      img: '/socials/depop-logo-transparent.png',
      tooltipText: 'Depop',
      url: 'https://www.depop.com/smudgedlines/',
      classes: pl6 + ' ' + 'mt-0'
    }
    ]
  }),
  computed: {
    mobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
})
</script>
