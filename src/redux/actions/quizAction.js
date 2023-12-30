import ApiCaller from '../../apiCaller/ApiCaller';
import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_AMOUNT, CHANGE_SCORE, GET_LEADERBOARD_DATA_REQUEST, GET_LEADERBOARD_DATA_SUCCESS, GET_LEADERBOARD_DATA_FAIL, GET_LEADERBOARD_DATA_ERROR, GET_QUIZZES_REQUEST, GET_QUIZZES_FAIL, GET_QUIZZES_SUCCESS, GET_QUIZZES_ERROR, ADD_QUIZ_SUCCESS, ADD_QUIZ_ERROR, ADD_QUIZ_FAIL, ADD_QUIZ_REQUEST } from '../constants/constants';
import axios from 'axios';
import { toast } from 'react-toastify';
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


export const handleChangeCategory = payload => ({
    type: CHANGE_CATEGORY,
    payload
});

export const handleChangeDifficulty = payload => ({
    type: CHANGE_DIFFICULTY,
    payload
});

export const handleChangeType = payload => ({
    type: CHANGE_TYPE,
    payload
});

export const handleChangeAmount = payload => ({
    type: CHANGE_AMOUNT,
    payload
});

export const handleChangeScore = payload => ({
    type: CHANGE_SCORE,
    payload
});

export const addQuizHistory = (body) => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };
        // dispatch({ type: ADD_QUIZ_REQUEST });
        const { data } = await axios.post(`${ApiCaller.site}/quiz/add`, body, { headers });
        if (!data.error) {
            console.log(data);
            // dispatch({ type: ADD_QUIZ_SUCCESS, payload: data.data[0] });
        } else {
            // dispatch({ type: ADD_QUIZ_FAIL });
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
        // dispatch({ type: ADD_QUIZ_ERROR, payload: err });
    }
}

export const getAllQuizzes = () => async (dispatch) => {
    console.log(userInfo);
    try {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        dispatch({ type: GET_QUIZZES_REQUEST });
        const { data } = await axios.get(`${ApiCaller.site}/quiz/getall`, { headers });
        if (!data.error) {
            // console.log(data.data);
            dispatch({ type: GET_QUIZZES_SUCCESS, payload: data.data });
        } else {
            toast.error(data.message);
            dispatch({ type: GET_QUIZZES_FAIL });
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: GET_QUIZZES_ERROR, payload: err });
    }
}


export const getLeaderboardData = (body) => async (dispatch) => {
    try {
        dispatch({ type: GET_LEADERBOARD_DATA_REQUEST });
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const { data } = await axios.post(`${ApiCaller.site}/quiz/get/leaderboard`, body, { headers });
        if (!data.error) {
            dispatch({ type: GET_LEADERBOARD_DATA_SUCCESS, payload: data.data });
        } else {
            dispatch({ type: GET_LEADERBOARD_DATA_FAIL });
            toast.error(data.message);
        }
    } catch (err) {
        dispatch({ type: GET_LEADERBOARD_DATA_ERROR, payload: err });
        console.log(err);
    }
}
