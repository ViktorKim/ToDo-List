<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>
  import page from './components/page/Page';
export default {
  name: 'app',
  components: {
      page
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
</style>
