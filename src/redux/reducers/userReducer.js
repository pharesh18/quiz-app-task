import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_RERQUEST, CHANGE_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_RERQUEST, FORGET_PASSWORD_SUCCESS, LOGIN_ERROR, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, OTP_ERROR, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, REGISTRATION_ERROR, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, SET_PASSWORD_ERROR, SET_PASSWORD_FAIL, SET_PASSWORD_RERQUEST, SET_PASSWORD_SUCCESS, UPDATE_USER_DETAILS_ERROR, UPDATE_USER_DETAILS_FAIL, UPDATE_USER_DETAILS_REQUEST, UPDATE_USER_DETAILS_SUCCESS, UPLOAD_PROFILE_ERROR, UPLOAD_PROFILE_FAIL, UPLOAD_PROFILE_REQUEST, UPLOAD_PROFILE_SUCCESS } from "../constants/constants"

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return { loading: true }
        case REGISTRATION_SUCCESS:
            return { loading: false }
        case REGISTRATION_FAIL:
            return { loading: false }
        case REGISTRATION_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case LOGIN_FAIL:
            return { loading: false }
        case LOGIN_ERROR:
            return { loading: false, error: action.payload }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}

export const otpReducer = (state = {}, action) => {
    switch (action.type) {
        case OTP_REQUEST:
            return { loading: true }
        case OTP_SUCCESS:
            return { loading: false }
        case OTP_FAIL:
            return { loading: false }
        case OTP_ERROR:
            return { loading: false }
        default:
            return state;
    }
}

export const uploadProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_PROFILE_REQUEST:
            return { loading: true }
        case UPLOAD_PROFILE_SUCCESS:
            return { loading: false }
        case UPLOAD_PROFILE_FAIL:
            return { loading: false }
        case UPLOAD_PROFILE_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const updateUserDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_DETAILS_REQUEST:
            return { loading: true }
        case UPDATE_USER_DETAILS_SUCCESS:
            return { loading: false }
        case UPDATE_USER_DETAILS_FAIL:
            return { loading: false }
        case UPDATE_USER_DETAILS_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const changePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_RERQUEST:
            return { loading: true }
        case CHANGE_PASSWORD_SUCCESS:
            return { loading: false }
        case CHANGE_PASSWORD_FAIL:
            return { loading: false }
        case CHANGE_PASSWORD_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const forgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_RERQUEST:
            return { loading: true }
        case FORGET_PASSWORD_SUCCESS:
            return { loading: false }
        case FORGET_PASSWORD_FAIL:
            return { loading: false }
        case FORGET_PASSWORD_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const setPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PASSWORD_RERQUEST:
            return { loading: true }
        case SET_PASSWORD_SUCCESS:
            return { loading: false }
        case SET_PASSWORD_FAIL:
            return { loading: false }
        case SET_PASSWORD_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}