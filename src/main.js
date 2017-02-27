import Vue from 'vue';
import App from './app';
import {router} from './router.js'
import {store} from './store/store';
import {main} from './methods';

Vue.prototype.ClassObject = main.classObject;
Vue.prototype.ClassHeader = main.classHeader;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#main');