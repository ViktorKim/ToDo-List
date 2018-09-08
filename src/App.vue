<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title v-text="title"></v-toolbar-title>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <HelloWorld></HelloWorld>
            </v-container>
        </v-content>

        <v-footer app :fixed="true">
            <v-layout justify-center>
                <span>Copyright &copy; 2018</span>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                title: 'Todo List'
            }
        }
    }
</script>
