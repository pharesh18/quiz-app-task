import axios from 'axios';
import { toast } from 'react-toastify';
import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_RERQUEST, CHANGE_PASSWORD_SUCCESS, FORGET_PASSWORD_ERROR, FORGET_PASSWORD_FAIL, FORGET_PASSWORD_RERQUEST, FORGET_PASSWORD_SUCCESS, LOGIN_ERROR, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, OTP_ERROR, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, REGISTRATION_ERROR, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, SET_PASSWORD_ERROR, SET_PASSWORD_FAIL, SET_PASSWORD_RERQUEST, SET_PASSWORD_SUCCESS } from '../constants/constants';
import ApiCaller from '../../apiCaller/ApiCaller';
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// export const register = async (body, navigate) => {
//     try {
//         const { data } = await axios.post(`${ApiCaller.site}/users/register`, body);
//         // console.log(data);
//         if (!data.error) {
//             toast.success("OTP sent on your email");
//             // setIsRegistered(true);
//             // console.log(data.email);
//             navigate(`/otp/${data.email}`);
//         } else {
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const register = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: REGISTRATION_REQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/register`, body);
        if (!data.error) {
            setTimeout(() => {
                toast.success("OTP sent on your email");
                dispatch({ type: REGISTRATION_SUCCESS });
                localStorage.setItem('registerEmail', JSON.stringify(body.get("email")));
                navigate('/otp');
            }, 2000);
        } else {
            toast.error(data.message);
            dispatch({ type: REGISTRATION_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: REGISTRATION_ERROR, payload: err });
    }
}

// export const verifyOtp = async (body, navigate) => {
//     try {
//         const { data } = await axios.post(`${ApiCaller.site}/users/otp`, body);
//         console.log(data);
//         if (!data.error) {
//             toast.success(data.message);
//             localStorage.setItem('userInfo', JSON.stringify(data.data));
//             navigate('/');
//             // window.location.href = '/';
//         } else {
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const verifyOtp = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: OTP_REQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/otp`, body);
        if (!data.error) {
            dispatch({ type: OTP_SUCCESS });
            const isForgetPassword = localStorage.getItem('forgetPassword') ? JSON.parse(localStorage.getItem('forgetPassword')) : false;
            if (isForgetPassword) {
                localStorage.setItem('OTP', JSON.stringify(body.otp));
                navigate('/changepassword');
            } else {
                dispatch({ type: LOGIN_SUCCESS, payload: data.data });
                localStorage.setItem('userInfo', JSON.stringify(data.data));
                window.localStorage.removeItem("registerEmail");
                navigate('/');
            }
        } else {
            toast.error(data.message);
            dispatch({ type: OTP_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: OTP_ERROR });
        dispatch({ type: REGISTRATION_ERROR, payload: err });
    }
}

// export const verifyFotp = async (body, navigate) => {
//     try {
//         const { data } = await axios.post(`${ApiCaller.site}/users/otp`, body);
//         console.log(data);
//         if (!data.error) {
//             toast.success(data.message);
//             // localStorage.setItem('userInfo', JSON.stringify(data.data));
//             navigate(`/setpassword/${data.data.email}`);
//             // window.location.href = '/';
//         } else {
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// export const login = async (body, navigate) => {
//     try {
//         const { data } = await axios.post(`${ApiCaller.site}/users/login`, body);
//         console.log(data);
//         if (!data.error) {
//             console.log(data);
//             toast.success(data.message);
//             console.log(data.data);
//             localStorage.setItem('userInfo', JSON.stringify(data.data));
//             navigate('/');
//             // window.location.href = '/';
//         } else {
//             console.log(data);
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const login = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/login`, body);
        if (!data.error) {
            // console.log(data);
            // toast.success(data.message);
            dispatch({ type: LOGIN_SUCCESS, payload: data.data });
            // console.log(data.data);
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            // navigate('/');
            window.location.href = '/';
        } else {
            toast.error(data.message);
            dispatch({ type: LOGIN_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: LOGIN_ERROR, payload: err });
    }
}




// export const forgetPassword = async (body, navigate) => {
//     try {
//         const { data } = await axios.post(`${ApiCaller.site}/users/forgetpassword`, body);
//         if (!data.error) {
//             toast.success(data.message);
//             navigate(`/fotp/${body.email}`);
//         } else {
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const forgetPassword = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: FORGET_PASSWORD_RERQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/forgetpassword`, body);
        if (!data.error) {
            toast.success(data.message);
            dispatch({ type: FORGET_PASSWORD_SUCCESS });
            localStorage.setItem('registerEmail', JSON.stringify(body.email));
            localStorage.setItem('forgetPassword', JSON.stringify(true));
            navigate(`/otp`);
        } else {
            toast.error(data.message);
            dispatch({ type: FORGET_PASSWORD_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: FORGET_PASSWORD_ERROR, payload: err });
    }
}

export const changeProfile = (profile, navigate) => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'multipart/form-data',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const { data } = await axios.post(`${ApiCaller.site}/users/uploadprofile`, profile, { headers });
        console.log(data);
        if (!data.error) {
            dispatch({ type: LOGIN_SUCCESS, payload: data.data });
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            console.log(data.data);
            navigate('/');
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}

export const editProfile = (body, navigate) => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const { data } = await axios.put(`${ApiCaller.site}/users/editprofile`, body, { headers });
        if (!data.error) {
            toast.success(data.message);
            dispatch({ type: LOGIN_SUCCESS, payload: data.data });
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            navigate('/dashboard/userprofile');
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}


// export const changePassword = async (body, navigate) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json',
//             _id: userInfo._id,
//             accesstoken: userInfo.accesstoken
//         };

//         const { data } = await axios.post(`${ApiCaller.site}/users/changepassword`, body, { headers });
//         console.log(data);
//         if (!data.error) {
//             toast.success(data.message);
//             localStorage.setItem('userInfo', JSON.stringify(data.data));
//             navigate('/');
//         } else {
//             toast.error(data.message);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const changePassword = (body, navigate) => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        dispatch({ type: CHANGE_PASSWORD_RERQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/changepassword`, body, { headers });
        if (!data.error) {
            toast.success(data.message);
            dispatch({ type: CHANGE_PASSWORD_SUCCESS });
            // dispatch({ type: LOGIN_SUCCESS, payload: data.data });
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            navigate('/');
        } else {
            toast.error(data.message);
            dispatch({ type: CHANGE_PASSWORD_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: CHANGE_PASSWORD_ERROR, payload: err });
    }
}


export const setNewPassword = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: SET_PASSWORD_RERQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/users/setpassword`, body);
        console.log(data);
        if (!data.error) {
            toast.success(data.message);
            dispatch({ type: SET_PASSWORD_SUCCESS });
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            window.localStorage.removeItem("registerEmail");
            window.localStorage.removeItem("forgetPassword");
            window.localStorage.removeItem("OTP");
            navigate('/dashboard');
        } else {
            toast.error(data.message);
            dispatch({ type: SET_PASSWORD_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: SET_PASSWORD_ERROR, payload: err });
    }
}
