<template>
<ul class="todo-list">
    <TodoListItem></TodoListItem>
</ul>
</template>

<script>
    import TodoListItem from './TodoListItem.vue'

    export default {
        name: "TodoList",
        components: {
            TodoListItem
        }
    }
</script>

<style lang="scss" scoped>

</style>