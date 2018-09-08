<template>
    <v-app>
        <AppHeader></AppHeader>

        <v-content>
            <v-container fluid>
                <HelloWorld></HelloWorld>
                <AddListModal></AddListModal>
            </v-container>
        </v-content>

        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import AppHeader from './components/AppHeader'
    import AppFooter from './components/AppFooter'
    import AddListModal from './components/AddListModal'


    export default {
        name: 'App',
        components: {
            HelloWorld, AppHeader, AppFooter, AddListModal
        },
    }
</script>
