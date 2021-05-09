<template>
  <v-footer
    app
    class="pb-0"
  >
    <v-container style="width: 100%">
      <v-row>
        <v-col cols="5" class="pl-2 pt-0 pb-0" style="height: 26px !important;">
          <template v-for="(social, index) in socials">
            <v-tooltip top :key="index">
              <template v-slot:activator="{ on, attrs }">
                <a :href="social.url">
                  <v-icon  v-if="social.icon" v-on="on" v-bind="attrs" style="margin-bottom: 12px !important;">
                    {{social.icon}}
                  </v-icon>

                  <v-img v-else :src="social.img" height="22" width="22" v-on="on" v-bind="attrs" :class="social.classes"/>

                </a>
              </template>
              Visit our {{social.tooltipText}} Page
            </v-tooltip>

          </template>

        </v-col>
        <v-spacer/>
        <v-col :cols="mobile ? 7 : 6" style="text-align: end" class="pa-0">
          <span v-if="!mobile">&copy; {{ new Date().getFullYear() }} made with <v-icon>mdi-heart</v-icon> by Smudged Lines</span>
          <span v-else>&copy; {{ new Date().getFullYear() }} Smudged Lines</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiInstagram } from '@mdi/js'
import depopLogo from '/static/socials/depop-logo-transparent-24x24.svg'

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
      classes: 'pr-2'
    },
    {
      img: '/socials/depop-logo-transparent.png',
      tooltipText: 'Depop',
      url: 'https://www.depop.com/smudgedlines/',
      classes: 'd-inline-flex flex-grow-1 align-end align-self-end align-content-end pl-2'
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

<style lang="sass">

</style>
