import { ActionContext } from 'vuex';

export type Context = ActionContext<any, any>;

export interface AuthState {
    token: string;
    isLoggedIn: boolean;
}

export interface UIState {
    isLoading: boolean;
}

export interface HttpState {
    apiUrl: string;
}

export interface SnackbarState {
    shown: boolean;
    hasError: boolean;
    message: string;
}
