<template>
    <header class="page__header">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="logo">Todo List</div>
                </div>
                <div class="col-md-8">
                    <ul class="menu">
                        <li class="menu__item">
                            <a href="#" class="menu__item_link" @click="showTodoLists">Show Todo</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__item_link" @click="addTodoList">Add Todo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            showTodoLists: function () {
                this.$emit('showTodoLists');
            },
            addTodoList: function () {
                this.$emit('addTodoList');
            }
        }
    }
</script>

<style scoped lang="scss">
    .page__header {
        background-color: lightblue;
    }

    .logo {
        display: flex;
        font-size: 20px;
        font-weight: bold;
        height: 100%;
        align-items: center;
    }

    .menu {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        &__item {
            display: inline-block;
            padding: 0 5px;
            text-transform: uppercase;
            &_link {
                display: inline-block;
                padding: 10px 20px;
            }
        }
    }
</style>