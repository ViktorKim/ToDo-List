<template>
    <v-toolbar app>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
        <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                title: 'Todo List'
            }
        }
    }
</script>

<style scoped>

</style>