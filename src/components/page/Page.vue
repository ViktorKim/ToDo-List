<template>
    <div class="page">
        <pageHeader></pageHeader>
        <pageContent v-bind:content="getPageContent"></pageContent>
        <pageFooter></pageFooter>
    </div>
</template>

<script>
    import pageHeader from './parts/PageHeader';
    import pageContent from './parts/PageContent';
    import pageFooter from './parts/PageFooter';
    export default {
        name: "Page",
        components: {
            pageHeader, pageContent, pageFooter
        },
        data: function(){
          return {
          }
        },
        computed: {
            getPageContent: function () {
                return 'list';
            }
        }
    }
</script>

<style scoped>

</style>