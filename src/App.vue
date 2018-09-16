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
    @import "../node_modules/bootstrap/scss/bootstrap-reboot";
    @import "../node_modules/bootstrap/scss/bootstrap-grid";

    html, body {
        height: 100%;
    }

    #app {
        height: 100%;
    }
</style>
