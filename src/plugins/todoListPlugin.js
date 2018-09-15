/**
 * Local Storage structure
 *
 * [{
    is_done: false,
    name: '',
    items: [
        {
            is_done: false,
            name: '',
        }
    ]
}]
 */

export default {
    install(Vue) {

        /**
         * DB name
         * @type {string}
         */
        Vue.$STORAGE_NAME = 'TodoList';

        /**
         * Create DB if not exists
         *
         * @return void
         */
        Vue.$_initDB = function () {
            if (localStorage.getItem(Vue.$STORAGE_NAME) === null) {
                localStorage.setItem(Vue.$STORAGE_NAME, '{"next_id": 0, "todos": {}}');
            }
        };

        /**
         * Get data form Local Storage
         *
         * @return array
         */
        Vue.prototype.$_getStorageData = function () {
            let _localStorageData = localStorage.getItem(Vue.$STORAGE_NAME);
            return JSON.parse(_localStorageData.toString());
        };

        /**
         * Add To-do List
         *
         * @return void
         */
        Vue.$_addTodo = function (_name) {
            let _data = Vue.prototype.$_getStorageData();
            let _next_id = _data['next_id'];

            if (isEmpty(_data['todos']) || !isTodoExists(_name, _data['todos'])){
                _data['todos'][_next_id] = {
                    is_done: false,
                    name: _name,
                    items: {}
                };

                _data['next_id']++;

                localStorage.setItem(Vue.$STORAGE_NAME, JSON.stringify(_data));
            }

        };

        /**
         * Get To-do List by name
         *
         * @return Object - To-do List
         */
        Vue.$_getTodoByName = function (_name) {
            let _data = Vue.prototype.$_getStorageData();
            for (let i = 0; i < _data.length; ++i) {
                if (_data[i].name === _name) {
                    return _data[i];
                }
            }
        };

        /**
         * Check if object is empty
         *
         * @param obj
         * @return {boolean}
         */
        let isEmpty = function(obj) {
            for (let key in obj) {
                return false;
            }
            return true;
        };

        /**
         * Check if To-do is already exists
         *
         * @param name
         * @param todos
         * @return {boolean}
         */
        let isTodoExists = function (name, todos) {
            for(let key in todos){
                if (todos[key].name === name){
                    return true;
                }
            }
            return false;
        };

        Vue.prototype.$testF = function () {
            return 'testttt';
        }

    }
}