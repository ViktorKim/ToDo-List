<template>
    <li class="list__item" v-if="itemName !== undefined">
        <input type="checkbox" class="list__item_checkbox" :id="'list-item-checkbox-'+itemId">
        <label :for="'list-item-checkbox-'+itemId" class="list__item_name">{{itemName}}</label>
    </li>
</template>

<script>
    export default {
        name: "ListItem",
        data: function () {
            return {
            }
        },
        props: {
            itemName: String,
            itemId: String,
        }
    }
</script>

<style scoped lang="scss">
    .list__item{
        color: olivedrab;
        &_checkbox{
            display: none;
        }
        &_checkbox:checked+&_name{
            text-decoration: line-through;
            color: lightcoral;
        }
        
        &_name{
            cursor: pointer;
        }
    }
</style>