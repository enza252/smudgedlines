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
          <slide>
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                Acid Synth - Men's Tee
              </h4>
            </div>
            <img
              :src="carousel1_acid_synth"
              alt="carousel1"
            >
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                Amoeba - Men's Tee
              </h4>
            </div>
            <img
              :src="carousel2_amoeba"
              alt="carousel2"
            >
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                Rosé Fireworks - Men's Tee
              </h4>
            </div>
            <img
              :src="carousel3_rose_fireworks"
              alt="carousel3"
            >
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                Djibou - Men's Tee
              </h4>
            </div>
            <img
              :src="carousel4_djibou"
              alt="carousel4"
            >
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4 class="sm-tee-tag">
                Connection - Men's Tee
              </h4>
            </div>
            <img
              :src="carousel5_connection"
              alt="carousel5"
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
export default {
  data () {
    return {
      carousel1_acid_synth: require('@/assets/img/designs/acid-synth-carousel-1450x1088-model.jpg'),
      carousel2_amoeba: require('@/assets/img/designs/amoeba-carousel-1450x1088-model.jpg'),
      carousel3_rose_fireworks: require('@/assets/img/designs/rose-fireworks-carousel-1450x1088-model.jpg'),
      carousel4_djibou: require('@/assets/img/designs/djibou-carousel-1450x1088-model-flip.jpg'),
      carousel5_connection: require('@/assets/img/designs/connection-carousel-1450x1088.jpg'),
    }
  },
  methods: {
    classicModalHide () {
      this.classicModal = false
    }
  }
}
</script>
