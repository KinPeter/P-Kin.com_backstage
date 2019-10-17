import { AuthState, Context, LoginData, HttpOptions } from './../models/stores';

const state: AuthState = {
    token: null,
    isLoggedIn: false,
};

const getters = {
    token(st: AuthState): string | null {
        return st.token;
    },
    isLoggedIn(st: AuthState): boolean {
        return st.isLoggedIn;
    },
};

const mutations = {
    setToken(st: AuthState, token: string): void {
        st.token = token;
    },
    setAuth(st: AuthState, value: boolean): void {
        st.isLoggedIn = value;
    },
};

const actions = {
    login(context: Context, credentials: LoginData): void {
        const requestOptions: HttpOptions = {
            method: 'POST',
            login: true,
            data: {
                ...credentials,
                returnSecureToken: true,
            },
            successAction: 'loginSuccess',
            successMessage: 'Logged in successfully!',
            errorMessage: 'Authentication failed.',
        };
        context.dispatch('sendRequest', requestOptions);
    },
    loginSuccess(context: Context, userData: any): void {
        // tslint:disable-next-line: no-console
        console.log(userData);
        context.commit('setToken', userData.idToken);
        context.commit('setAuth', true);
    },
    logout(context: Context): void {
        context.commit('setToken', null);
        context.commit('setAuth', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
