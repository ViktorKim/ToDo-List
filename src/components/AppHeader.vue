<template>
    <header>
        <v-navigation-drawer temporary v-model="drawer" right app>
            <v-list dense>
                <v-list-tile v-for="item of menuItems">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="item in menuItems" :key="item.id">{{item.name}}</v-btn>
            </v-toolbar-items>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        </v-toolbar>
    </header>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                title: 'Todo List',
                menuItems: [
                    {
                        name: 'My Lists',
                        icon: 'view_lists',
                    },
                    {
                        name: 'Add Todo List',
                        icon: 'note_add',
                    },
                ],
                drawer: null
            }
        },
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>