<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter"
      :style="headerStyle"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1>Smudged Lines</h1>
            <h3>Handcrafted designs using locally sourced & produced fabric.</h3>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2 id="designs">
              Designs
            </h2>
          </div>
          <designs-section />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DesignsSection from '@/views/components/DesignsSection'

export default {
  name: 'Index',
  components: {
    DesignsSection
  },
  bodyClass: 'index-page',
  props: {
    image: {
      type: String,
      default: require('@/assets/img/bg-acid-synth.png')
    }
  },
  data () {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    }
  },
  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    signupImage () {
      return {
        backgroundImage: `url(${this.signup})`
      }
    }
  },
  mounted () {
    this.leafActive()
    window.addEventListener('resize', this.leafActive)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.leafActive)
  },
  methods: {
    leafActive () {
      if (window.innerWidth < 768) {
        this.leafShow = false
      } else {
        this.leafShow = true
      }
    }
  }
}
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
