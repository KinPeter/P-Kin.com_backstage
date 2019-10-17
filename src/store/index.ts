import Vue from 'vue';
import Vuex from 'vuex';
import snackbar from './snackbar.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        snackbar,
    },
});
