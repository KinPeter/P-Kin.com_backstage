export enum HttpActions {
    SEND_REQUEST = 'sendRequest',
}

export enum SnackbarActions {
    SHOW_ERROR = 'showError',
    SHOW_SUCCESS = 'showSuccess',
    CLOSE_SNACKBAR = 'closeSnackbar',
}

export enum UIActions {
    START_LOADING = 'startLoading',
    STOP_LOADING = 'stopLoading',
}

export enum AuthActions {
    LOGIN = 'login',
    LOGOUT = 'logout',
    LOGIN_SUCCESS = 'loginSuccess',
}

export enum SkillsActions {
    FETCH_SKILLS = 'fetchSkills',
    POPULATE_SKILLS = 'populateSkills',
    FETCH_OTHERS = 'fetchOtherTechs',
    POPULATE_OTHERS = 'populateOtherTechs',
    MOVE_ITEM_UP = 'moveItemUp',
    MOVE_ITEM_DOWN = 'moveItemDown',
    DELETE_ITEM = 'deleteItem',
    ADD_NEW_ITEM = 'addNewItem',
    SAVE_SKILLS = 'saveSkills',
}
