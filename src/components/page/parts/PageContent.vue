<template>
    <div class="page__content">
        <div class="container">
            <list v-if="content==='list'"></list>
        </div>
    </div>
</template>

<script>
    import list from '../../list/List';

    export default {
        name: "PageContent",
        components: {
            list
        },
        props: {
            content: String
        },
    }
</script>

<style scoped>

</style>