import { SnackbarState, Context } from './../models/stores';

const state: SnackbarState = {
    shown: true,
    hasError: true,
    message: 'Hello, I am a snackbar',
};

const getters = {
    snackbarShown(st: SnackbarState): boolean {
        return st.shown;
    },
    snackbarError(st: SnackbarState): boolean {
        return st.hasError;
    },
    snackbarMessage(st: SnackbarState): string {
        return st.message;
    },
};

const mutations = {
    setShow(st: SnackbarState, value: boolean): void {
        st.shown = value;
    },
    setError(st: SnackbarState, value: boolean): void {
        st.hasError = value;
    },
    setMessage(st: SnackbarState, message: string): void {
        st.message = message;
    },
};

const actions = {
    errorOccured(context: Context, message: string): void {
        context.commit('setError', true);
        context.commit('setMessage', message);
        context.commit('setShow', true);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
