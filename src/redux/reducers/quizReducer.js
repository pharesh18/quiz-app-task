import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAIL,
    GET_QUESTIONS_ERROR,
    GET_QUIZZES
} from '../constants/constants';


const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 0,
    score: 0
}

export const getQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS_REQUEST:
            return { loading: true }
        case GET_QUESTIONS_SUCCESS:
            return { loading: false }
        case GET_QUESTIONS_FAIL:
            return { loading: false }
        case GET_QUESTIONS_ERROR:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getQuizzesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_QUIZZES:
            return { state: action.payload }
        default:
            return state;
    }
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload,
            };

        case CHANGE_DIFFICULTY:
            return {
                ...state,
                question_difficulty: action.payload
            };

        case CHANGE_TYPE:
            return {
                ...state,
                question_type: action.payload
            };

        case CHANGE_AMOUNT:
            return {
                ...state,
                amount_of_question: action.payload
            };

        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            };

        default:
            return state;
    }
}

export default quizReducer;