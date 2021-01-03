<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <tabs
        :tab-name="designNames"
        :tab-icon="designIcons"
        nav-pills-icons
      >
        <template
          v-for="(design, designIndex) in designs"
          v-slot:[getTabPane(designIndex+1)]
          :load="log('tab-pane-' + (designIndex+1) + '')"
        >
          <div
            :key="designIndex"
            class="md-layout"
          >
            <div class="md-layout-item md-size-66">
              <carousel
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
                  <img
                    :src="source.image"
                    :alt="source.alt"
                  >
                </slide>
              </carousel>
            </div>
            <div class="md-layout-item md-size-33">
              <h1>{{ design.name }}</h1>
              <h3>{{ design.productType }}</h3>
              <div class="md-layout">
                <div
                  v-if="design.style"
                  class="md-layout-item md-size-33"
                >
                  Style
                </div>
                <div
                  v-if="design.style"
                  class="md-layout-item md-size-66"
                >
                  <p>{{ design.style }}</p>
                </div>
                <div
                  v-if="design.material.fabric"
                  class="md-layout-item md-size-33"
                >
                  Fabric
                </div>
                <div
                  v-if="design.material.fabric"
                  class="md-layout-item md-size-66"
                >
                  <p>{{ design.material.fabric }}</p>
                </div>
                <div
                  v-if="design.material.source"
                  class="md-layout-item md-size-33"
                >
                  Source
                  <md-icon>
                    info
                    <md-tooltip md-direction="left">
                      Where our fabric originates
                    </md-tooltip>
                  </md-icon>
                </div>
                <div
                  v-if="design.material.source"
                  class="md-layout-item md-size-66"
                >
                  <p>{{ design.material.source }}</p>
                </div>
                <div
                  v-if="design.produced"
                  class="md-layout-item md-size-33"
                >
                  Crafted
                </div>
                <div
                  v-if="design.produced"
                  class="md-layout-item md-size-66"
                >
                  <p>{{ design.produced }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </tabs>
    </div>
  </div>
</template>

<script>
import { Tabs } from '@/components'
const sources = {
  acid_synth: [
    {
      image: require('@/assets/img/designs/acid-synth/acid-synth-carousel-1450x1088.jpg'),
      alt: 'Acid Synth Print'
    },
    {
      image: require('@/assets/img/designs/acid-synth/acid-synth-carousel-1450x1088-combined.jpg'),
      alt: 'Acid Synth T-Shirt with Model'
    }
  ],
  amoeba: [
    {
      image: require('@/assets/img/designs/amoeba/amoeba-carousel-1450x1088.jpg'),
      alt: 'Amoeba Print'
    },
    {
      image: require('@/assets/img/designs/amoeba/amoeba-carousel-1450x1088-combined.jpg'),
      alt: 'Amoeba T-Shirt with Model'
    }
  ],
  rose_fireworks: [
    {
      image: require('@/assets/img/designs/rose-fireworks/rose-fireworks-carousel-1450x1088.jpg'),
      alt: 'Rosé Fireworks Print'
    },
    {
      image: require('@/assets/img/designs/rose-fireworks/rose-fireworks-carousel-1450x1088-combined.jpg'),
      alt: 'Rosé Fireworks T-Shirt with Model'
    }
  ],
  djibou: [
    {
      image: require('@/assets/img/designs/djibou/djibou-carousel-1450x1088.jpg'),
      alt: 'Djibou Print'
    },
    {
      image: require('@/assets/img/designs/djibou/djibou-carousel-1450x1088-combined-flipped.jpg'),
      alt: 'Djibou T-Shirt with Model'
    }
  ],
  connection: [
    {
      image: require('@/assets/img/designs/connection/connection-carousel-1450x1088.jpg'),
      alt: 'Connection Print'
    },
    {
      image: require('@/assets/img/designs/connection/connection-carousel-1450x1088-combined.jpg'),
      alt: 'Connection T-Shirt with Model'
    },
    {
      image: require('@/assets/img/designs/connection/connection_carousel_1450x1088-hanging.jpg'),
      alt: 'Connection T-Shirt with Model'
    }
  ],
}

const productTypes = {
  mensTee: 'Men\'s T-Shirt'
}

const designs = [
  {
    name: 'Djibou',
    source: sources.djibou,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Zig/zag pattern in orange',
    icon: 'waves'
  },
  {
    name: 'Rosé Firework',
    source: sources.rose_fireworks,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Sparkling Rosé Fireworks fractal pattern in red',
    icon: 'local_fire_department'
  },
  {
    name: 'Connection',
    source: sources.connection,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Connection tessellated pattern in blue',
    icon: 'stop'
  },
  {
    name: 'Amoeba',
    source: sources.amoeba,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Crepe',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Funky amoeba geometric pattern in blue',
    icon: 'bubble_chart'
  },
  {
    name: 'Acid Synth',
    source: sources.acid_synth,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Silky Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Acid Synth fractal pattern in green/black',
    icon: 'disc_full'
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
    }
  }
}
</script>
