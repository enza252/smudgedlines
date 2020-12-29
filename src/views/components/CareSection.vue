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
            {{ item.text }}
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
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
        },
        {
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
        },
        {
          title: 'Title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
        }
      ]
    }
  }
}
</script>
