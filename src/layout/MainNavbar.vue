<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute md-dark"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          Smudged Lines
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false" />
            <md-list>
              <md-list-item
                v-if="showDownload"
                href="javascript:void(0)"
                @click="scrollToElement('designs')"
              >
                <p>Designs</p>
              </md-list-item>

              <md-list-item
                v-if="showDownload"
                href="javascript:void(0)"
                @click="scrollToElement('care')"
              >
                <p>Care</p>
              </md-list-item>

              <md-list-item
                v-if="showDownload"
                href="javascript:void(0)"
                @click="scrollToElement('about')"
              >
                <p>About</p>
              </md-list-item>

              <md-list-item
                v-if="showDownload"
                href="javascript:void(0)"
                @click="scrollToElement('store')"
              >
                <p>Store</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout
function resizeThrottler (actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

import MobileMenu from '@/layout/MobileMenu'
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator (value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      extraNavClasses: '',
      toggledClass: false
    }
  },
  computed: {
    showDownload () {
      const excludedRoutes = ['/']
      return excludedRoutes.every(r => r !== this.$route.name)
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    bodyClick () {
      const bodyClick = document.getElementById('bodyClick')

      if (bodyClick === null) {
        const body = document.querySelector('body')
        const elem = document.createElement('div')
        elem.setAttribute('id', 'bodyClick')
        body.appendChild(elem)

        const bodyClick = document.getElementById('bodyClick')
        bodyClick.addEventListener('click', this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile () {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll () {
      const scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      const navbarColor = document.getElementById('toolbar')
      this.currentScrollValue = scrollValue
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove('md-transparent')
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = ''
          navbarColor.classList.add('md-transparent')
        }
      }
    },
    scrollListener () {
      resizeThrottler(this.handleScroll)
    },
    scrollToElement (id) {
      const element_id = document.getElementById(id)
      if (element_id) {
        element_id.scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }
  }
}
</script>
