<template>
  <div
    class="md-layout md-alignment-center"
    :class="`md-alignment-space-between`"
  >
    <div class="md-layout-item md-size-100">
      <h3>Our items are available only to buy on Depop, the web store is coming soon!</h3>
    </div>
    <div
      class="md-layout-item md-size-50 text-center"
    >
      <md-card
        class="md-elevation-6"
        md-with-hover
      >
        <a
          href="https://depop.com/smudgedlines"
          target="_blank"
        >
          <md-ripple>
            <md-card-content>
              <img
                :src="depop_vector"
                alt="the depop logo"
              >
            </md-card-content>
            <div class="md-layout md-alignment-center md-size-100">
              <div class="md-layout-item">
                <!--       ToDo check this span is responsive and if not, deal with small screens         -->
                <span class="center-span">
                  <md-card-actions>
                    <md-button class="md-raised md-card-header-red">
                      Go to the depop store
                    </md-button>
                  </md-card-actions>
                </span>
              </div>
            </div>
          </md-ripple>
        </a>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      depop_vector: require('@/assets/img/socials/depop_logo.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.center-span {
  display: flex;
  justify-content: center;
}
</style>
