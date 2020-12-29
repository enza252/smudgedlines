<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
      <md-card>
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
            v-for="(item, index) in carouselData"
            :key="index"
          >
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                {{ item.name }}
              </h4>
            </div>
            <img
              :src="item.source"
              :alt="item.alt"
            >
          </slide>
        </carousel>
      </md-card>
    </div>
  </div>
</template>

<style>
.sm-tee-tag {
  background: black;
}
</style>
<script>
const sources = {
  carousel_acid_synth: require('@/assets/img/designs/acid-synth-carousel-1450x1088-model.jpg'),
  carousel_amoeba: require('@/assets/img/designs/amoeba-carousel-1450x1088-model.jpg'),
  carousel_rose_fireworks: require('@/assets/img/designs/rose-fireworks-carousel-1450x1088-model.jpg'),
  carousel_djibou: require('@/assets/img/designs/djibou-carousel-1450x1088-model-flip.jpg'),
  carousel_connection: require('@/assets/img/designs/connection-carousel-1450x1088-model.jpg'),
}
export default {
  data () {
    return {
      carouselData: [
        {
          name: 'Djibou - Men\'s Tee',
          source: sources.carousel_djibou,
          alt: 'Djibou - Men\'s T-Shirt'
        },
        {
          name: 'Rosé Fireworks - Men\'s Tee',
          source: sources.carousel_rose_fireworks,
          alt: 'Rosé Fireworks - Men\'s T-Shirt'
        },
        {
          name: 'Connection - Men\'s Tee',
          source: sources.carousel_connection,
          alt: 'Connection - Men\'s T-Shirt'
        },
        {
          name: 'Amoeba - Men\'s Tee',
          source: sources.carousel_amoeba,
          alt: 'Amoeba - Men\'s T-Shirt'
        },
        {
          name: 'Acid Synth - Men\'s Tee',
          source: sources.carousel_acid_synth,
          alt: 'Acid Synth - Men\'s T-Shirt'
        }
      ]
    }
  },
  methods: {
    classicModalHide () {
      this.classicModal = false
    }
  }
}
</script>
