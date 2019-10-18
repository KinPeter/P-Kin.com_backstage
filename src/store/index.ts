import Vue from 'vue';
import Vuex from 'vuex';
import snackbar from './modules/snackbar.store';
import http from './modules/http.store';
import ui from './modules/ui.store';
import auth from './modules/auth.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        snackbar,
        http,
        ui,
        auth,
    },
});
