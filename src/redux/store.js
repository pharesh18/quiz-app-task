import { combineReducers, createStore, applyMiddleware } from 'redux'
import { changePasswordReducer, forgetPasswordReducer, loginReducer, otpReducer, registerReducer, setPasswordReducer, updateUserDetailsReducer, uploadProfileReducer } from './reducers/userReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import quizReducer, { getLeaderboardDataReducer, getQuestionsReducer, getQuizzesReducer } from './reducers/quizReducer';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const mainReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    changePasswordReducer: changePasswordReducer,
    otpReducer: otpReducer,
    uploadProfileReducer: uploadProfileReducer,
    updateUserDetailsReducer: updateUserDetailsReducer,
    forgetPasswordReducer: forgetPasswordReducer,
    setPasswordReducer: setPasswordReducer,
    quizReducer: quizReducer,
    getQuestionsReducer: getQuestionsReducer,
    getQuizzesReducer: getQuizzesReducer,
    getLeaderboardDataReducer: getLeaderboardDataReducer
});

const initialState = {
    loginReducer: { userInfo: userInfoFromStorage },
}

const store = createStore(mainReducer, initialState, applyMiddleware(thunk));

export default store;