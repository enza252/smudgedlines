<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <tabs
        :tab-name="designNames"
        :tab-icon="designIcons"
        nav-pills-icons
        color-button="primary"
      >
        <template
          v-for="(design, designIndex) in designs"
          v-slot:[getTabPane(designIndex+1)]
          :load="log('tab-pane-' + (designIndex+1) + '')"
        >
          <carousel
            :key="designIndex"
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigation-enabled
            navigation-next-label="<i class='material-icons'>keyboard_arrow_right</i>"
            navigation-prev-label="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide
              v-for="(source, index) in design.source"
              :key="index"
            >
              <div class="carousel-caption">
                <h4 class="sm-tee-tag">
                  {{ design.name }}
                </h4>
              </div>
              <img
                :src="source.image"
                :alt="source.alt"
              >
            </slide>
          </carousel>
        </template>
      </tabs>
    </div>
  </div>
</template>

<style>
.sm-tee-tag {
  background: black;
}
</style>
<script>
import { Tabs } from '@/components'
const sources = {
  acid_synth: [{
    image: require('@/assets/img/designs/acid-synth/acid-synth-carousel-1450x1088-combined.jpg'),
    alt: 'Acid Synth T-Shirt with Model'
  }],
  amoeba: [{
    image: require('@/assets/img/designs/amoeba/amoeba-carousel-1450x1088-combined.jpg'),
    alt: 'Amoeba T-Shirt with Model'
  }],
  rose_fireworks: [{
    image: require('@/assets/img/designs/rose-fireworks/rose-fireworks-carousel-1450x1088-combined.jpg'),
    alt: 'Rosé Fireworks T-Shirt with Model'
  }],
  djibou: [{
    image: require('@/assets/img/designs/djibou/djibou-carousel-1450x1088-combined-flipped.jpg'),
    alt: 'Djibou T-Shirt with Model'
  }],
  connection: [{
    image: require('@/assets/img/designs/connection/connection-carousel-1450x1088-combined.jpg'),
    alt: 'Connection T-Shirt with Model'
  }],
}

const designs = [
  {
    name: 'Djibou',
    source: sources.djibou,
    alt: 'Djibou - Men\'s T-Shirt',
    icon: 'waves'
  },
  {
    name: 'Rosé Firework',
    source: sources.rose_fireworks,
    alt: 'Rosé Fireworks - Men\'s T-Shirt',
    icon: 'local_fire_department\n'
  },
  {
    name: 'Connection',
    source: sources.connection,
    alt: 'Connection - Men\'s T-Shirt',
    icon: 'stop'
  },
  {
    name: 'Amoeba',
    source: sources.amoeba,
    alt: 'Amoeba - Men\'s T-Shirt',
    icon: 'bubble_chart'
  },
  {
    name: 'Acid Synth',
    source: sources.acid_synth,
    alt: 'Acid Synth - Men\'s T-Shirt',
    icon: 'fiber_manual_record'
  }
]

const designNames = designs.map(d => d.name)
const designIcons = designs.map(d => d.icon)

export default {
  components: {
    Tabs
  },
  data () {
    return {
      designs: designs,
      designNames: designNames,
      designIcons: designIcons
    }
  },
  methods: {
    log (item) {
      console.log(item)
    },
    getTabIndex (i) {
      return 'tab-pane-' + i + ''
    },
    getTabPane: function (index) {
      return 'tab-pane-' + index + ''
    },
  }
}
</script>
