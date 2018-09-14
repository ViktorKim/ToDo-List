import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

/**
 * Init local storage
 *
 * Create todoLists Local Storage if not exists
 */
(function() {
    if (localStorage.getItem('todoLists') === null){
        localStorage.setItem('todoLists', "[]");
    }
}());

/**
 * Save TodoList in local storage
 *
 * @param todoListName
 *
 */
window.saveTodoList = function(todoListName) {
    let _message = {};
    if (todoListName.trim() === ''){
        _message = {
            status: 'error',
            text: 'This field is required',
        };
    } else {
        let _storageData = JSON.parse(localStorage.getItem('todoLists'));

        for(let i = 0; i < _storageData.length; ++i){
            if ((_storageData[i].name).toLowerCase() === todoListName.toLowerCase()){
                _message = {
                    status: 'error',
                    text: 'This list already exists',
                };
                return _message;
            }
        }

        _storageData.push({
            name: todoListName,
            items: []
        });
        localStorage.setItem('todoLists', JSON.stringify(_storageData));
    }

    return _message;
};