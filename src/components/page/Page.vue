<template>
    <div class="page">
        <div class="page__wrapper">
            <pageHeader
                    @showTodoLists="showTodoLists"
                    @addTodoList="addTodoList"
            ></pageHeader>
            <pageContent v-bind:content="page"></pageContent>
        </div>
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
        data: function () {
            return {
                page: ''
            }
        },
        methods: {
            showTodoLists: function () {
                this.page = 'list';
            },
            addTodoList: function () {
                this.page = 'newTodoList';
            }
        }
    }
</script>

<style scoped lang="scss">
    .page {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__wrapper {
            height: 100%;
        }
    }
</style>