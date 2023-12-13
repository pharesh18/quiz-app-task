import { combineReducers, createStore, applyMiddleware } from 'redux';
import { changePasswordReducer, forgetPasswordReducer, loginReducer, otpReducer, registerReducer, setPasswordReducer, updateUserDetailsReducer } from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import quizReducer, { getQuestionsReducer, getQuizzesReducer } from './reducers/quizReducer';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const mainReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    changePasswordReducer: changePasswordReducer,
    otpReducer: otpReducer,
    updateUserDetailsReducer: updateUserDetailsReducer,
    forgetPasswordReducer: forgetPasswordReducer,
    setPasswordReducer: setPasswordReducer,
    quizReducer: quizReducer,
    getQuestionsReducer: getQuestionsReducer,
    getQuizzesReducer: getQuizzesReducer
});

const initialState = {
    loginReducer: { userInfo: userInfoFromStorage },
}

const store = createStore(mainReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;