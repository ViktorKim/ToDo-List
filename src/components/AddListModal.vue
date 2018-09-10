<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">Create new Todo List</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Todo List name" :error-messages="errorMessage" v-model="newTodo" type="text" required clearable autofocus></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="discard">Discard</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        name: "AddListModal",
        data () {
            return {
                dialog: false,
                newTodo: '',
                errorMessage: '',
            }
        },
        methods: {
            save: function () {
                let _message = window.saveTodoList(this.newTodo);
                if (_message.status === 'error'){
                    this.dialog = true;
                    this.errorMessage = _message.text;
                } else {
                    this.dialog = false;
                    this.newTodo = '';
                }
            },
            discard: function () {
                this.dialog = false;
                this.newTodo = '';
                this.errorMessage = '';
            }
        },
    }
</script>

<style scoped>

</style>