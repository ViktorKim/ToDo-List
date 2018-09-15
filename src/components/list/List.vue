<template>
    <ul class="list">
        <listItem v-for="(todo, id) in todos" :item-name="todo.name" :item-id="'list-item-'+id" :key="todo.id"></listItem>
    </ul>
</template>

<script>
    import listItem from './ListItem';

    export default {
        name: "List",
        components: {
            listItem
        },
        data: function () {
            return{
            }
        },
        computed: {
            todos: function () {
                return this.$_getStorageData().todos;
            }
        }
    }
</script>

<style scoped lang="scss">
    .list{
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
    }
</style>