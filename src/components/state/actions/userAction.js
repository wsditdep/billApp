import axios from "axios";
import {
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERROR,

} from "../constants/userConstant";

const globalLink = process.env.REACT_APP_API_URL;

// loaduser::begin
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        };

        const res = await axios.get(`${globalLink}/api/get-home`, config, axios.defaults.withCredentials = true);



        dispatch({ type: LOAD_SUCCESS, payload: res.data });
    } catch (error) {
        // dispatch({ type: LOAD_FAIL, payload: error.response.data.message });
        dispatch({ type: LOAD_FAIL });
    }
}
// loaduser::end

// login::begin
export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        };

        const res = await axios.post(`${globalLink}/api/signin`,
            { username, password },
            config,
            axios.defaults.withCredentials = true
        );

        if (res?.data?.userData?.accountStatus === "Block") {
            dispatch({ type: LOGIN_FAIL, payload: "Account Block!" });
        } else {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        }

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}
// login::end

// logout::begin
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        const res = await axios.delete(`${globalLink}/api/logout`, config, axios.defaults.withCredentials = true);

        dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
}
// logout::end

// clear error::begin
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
}
// clear error::end