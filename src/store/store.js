import Vue from 'vue';
import Vuex from 'vuex';
import {Add} from './modules/Add.js';
import {Keys} from './modules/Keys.js';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules:{
        Add,
        Keys
    }
});