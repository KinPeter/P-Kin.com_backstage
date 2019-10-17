import Vue from 'vue';
import Vuex from 'vuex';
import snackbar from './snackbar.store';
import http from './http.store';
import ui from './ui.store';
import auth from './auth.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        snackbar,
        http,
        ui,
        auth,
    },
});
