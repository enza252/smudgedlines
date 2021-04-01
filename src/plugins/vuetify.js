import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

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
}

export default new Vuetify(opts)
