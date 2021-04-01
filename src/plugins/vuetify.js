import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
  VCard,
  VImg,
  VCardTitle,
  VBtn,
  VCardActions,
  VCardText,
  VProgressCircular,
  VSpacer,
  VDialog,
  VDivider,
  VAlert,
  VApp,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCard,
    VImg,
    VCardTitle,
    VBtn,
    VCardActions,
    VCardText,
    VProgressCircular,
    VSpacer,
    VDialog,
    VDivider,
    VAlert,
    VApp,
  },
})

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        light: '#f8f5f1',
        orange: '#e9896a',
        green: '#387c6d',
        blue: '#343f56'
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
}

export default new Vuetify(opts)
