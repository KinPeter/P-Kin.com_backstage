import { HttpState, HttpOptions, Context } from './../models/stores';
import { API_URL, API_KEY, LOGIN_URL } from '../../credentials';

const state: HttpState = {
    apiUrl: API_URL,
    loginUrl: LOGIN_URL,
};

const getters = {
};

const mutations = {
};

const actions = {
    async sendRequest(context: Context, options: HttpOptions): Promise<any> {
        context.dispatch('startLoading');
        let url: string;
        if (options.login) {
            url = context.state.loginUrl + API_KEY;
        } else {
            const params = options.queryParams ? '&' + options.queryParams : '';
            const auth = `?auth=${context.getters('token')}`;
            url = context.state.apiUrl + options.endpoint + auth + params;
        }
        try {
            const response: Response = await fetch(url, {
                method: options.method,
                body: options.data ? JSON.stringify(options.data) : null,
                // headers: {}
            });
            const data = await response.json();
            if (response.status === 200) {
                context.dispatch(options.successAction, data);
                context.dispatch('showSuccess', options.successMessage);
            } else {
                throw new Error(JSON.stringify(data));
            }
        } catch (error) {
            // tslint:disable-next-line: no-console
            console.log(error);
            context.dispatch('showError', options.errorMessage);
        } finally {
            context.dispatch('stopLoading');
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
