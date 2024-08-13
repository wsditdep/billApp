import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERROR,
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from "../constants/userConstant";

export const userReducer = (state = {
    user: null,
    isAuthenticated: false,
    loading: false
}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.userData
            };
        case LOGIN_FAIL:
        case LOAD_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}