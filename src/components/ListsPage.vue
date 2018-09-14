<template>
    <ul class="todoLists" v-if="getListsFromStorage() !== ''">
        <li class="todoList" v-for="(listItem, index) in getListsFromStorage()" :key="listItem.id">
            <input type="checkbox" :id="'listItem-' + index">
            <label :for="'listItem-' + index">{{listItem.name}}</label>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ListsPage",
        data() {
            return {}
        },
        methods: {
            getListsFromStorage: function () {
                let _list = '';
                if (localStorage.getItem('todoLists') !== null && localStorage.getItem('todoLists') !== '') {
                    _list = JSON.parse(localStorage.getItem('todoLists'));
                }
                return _list;
            }
        }
    }
</script>

<style scoped lang="scss">

    .todoLists {
        list-style: none;
        margin: 0;
        padding: 0;
        .todoList{
            input{
                display: none;
            }
            input:checked+label{
                text-decoration: line-through;
                color: firebrick;
            }
        }
    }

</style>