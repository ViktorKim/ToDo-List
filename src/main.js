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
        localStorage.setItem('todoLists', "{}");
    }
}());

/**
 * Save TodoList in local storage
 *
 * @param todoListName
 *
 * @return _message - error message object
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
        if (_storageData[todoListName] !== undefined){
            _message = {
                status: 'error',
                text: 'This list already exists',
            };
        } else {
            _storageData[todoListName] = '';
            localStorage.setItem('todoLists', JSON.stringify(_storageData));
        }
    }

    return _message;
};