<template>
  <div class="md-layout md-gutter md-alignment-center">
    <md-toolbar class="md-layout-item md-large-size-100 md-primary">
      <h3
        class="md-title"
        style="flex: 1"
      >
        Title
      </h3>
      <md-button class="md-icon-button md-layout-item">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.md-layout-item {
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(purple, 200);
    content: " ";
  }
}
</style>

<script>
export default {
  name: 'ContentActions'
}
</script>
