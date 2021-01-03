<template>
  <div
    class="md-layout md-gutter"
    :class="`md-alignment-space-between`"
  >
    <div
      v-for="(item, index) in tiles"
      :key="index"
      class="md-layout-item md-size-33 text-center ml-auto"
    >
      <md-card
        class="md-elevation-6"
        md-with-hover
      >
        <md-ripple>
          <h2 class="md-title">
            {{ item.title }}
          </h2>
          <md-divider />
          <md-card-content>
            <div
              v-for="(bullet, bulletIndex) in item.bullets"
              :key="bulletIndex"
            >
              {{ bullet }}
            </div>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tiles: [
        {
          title: 'Machine Wash',
          bullets: ['Gentle and warm wash, 30°C is ideal.', 'Wash with similar colours.']
        },
        {
          title: 'Drying',
          bullets: ['Hang outside or near a warm radiator.', 'Do not tumble dry.']
        },
        {
          title: 'Other Do Nots',
          bullets: ['Do not bleach.', 'Do not iron.']
        }
      ]
    }
  }
}
</script>
