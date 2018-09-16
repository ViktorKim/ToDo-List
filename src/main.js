import Vue from 'vue'
import App from './App.vue'
import TodoListPlugin from './plugins/todoListPlugin'

Vue.use(TodoListPlugin);

Vue.$_initDB();

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')