import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { decode } from 'html-entities';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../../css/Questions.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { addQuizHistory, getAllQuizzes, handleChangeScore } from '../../redux/actions/quizAction';
import ApiCaller from '../../apiCaller/ApiCaller';
import { GET_QUESTIONS_ERROR, GET_QUESTIONS_FAIL, GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS } from '../../redux/constants/constants';
import Loader from './Loader';
import Error from './Error';
import Loading from './Loading';

const Questions = () => {
    const { question_category, question_difficulty, question_type, amount_of_question, score } = useSelector(state => state.quizReducer);
    const { loading, error } = useSelector(state => state.getQuestionsReducer);
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;

    const [ques, setQues] = useState([]);
    const [curQue, setCurQue] = useState(0);
    const [quiz, setQuiz] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = () => {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const body = {
            category: question_category,
            difficulty: question_difficulty,
            type: question_type,
            amount_of_questions: amount_of_question
        }

        dispatch({ type: GET_QUESTIONS_REQUEST });
        axios.post(`${ApiCaller.site}/questions/get`, body, { headers }).then((data) => {
            if (!data.error) {
                dispatch({ type: GET_QUESTIONS_SUCCESS });
                setQues(data.data.data);
            } else {
                toast.error(data.message);
                dispatch({ type: GET_QUESTIONS_FAIL });
                navigate('/dashboard');
            }
        }).catch((err) => {
            console.log(err);
            dispatch({ type: GET_QUESTIONS_ERROR, payload: err });
        });
    }

    const handleQuitQuiz = () => {
        navigate('/dashboard');
    }

    const handleBtnClick = (e, rightAnswer) => {
        const selectedOption = e.target.value;

        if (selectedOption === rightAnswer) {
            dispatch(handleChangeScore(score + 1));
        }

        // Display right icon for the correct answer
        const rightIcon = e.target.parentNode.querySelector('.right-icon');
        if (rightIcon) {
            rightIcon.style.display = selectedOption === rightAnswer ? 'block' : 'none';
        }

        // Display wrong icon for incorrect answer
        const wrongIcon = e.target.parentNode.querySelector('.wrong-icon');
        if (wrongIcon) {
            wrongIcon.style.display = selectedOption !== rightAnswer ? 'block' : 'none';
        }

        // Display right icon for the correct answer in the selected option
        const selectedOptionRightIcon = document.querySelector(`.option-btn[value="${rightAnswer}"] .right-icon`);
        if (selectedOptionRightIcon) {
            selectedOptionRightIcon.style.display = 'block';
        }

        const selectedOptionRightBtn = document.querySelector(`.option-btn[value="${rightAnswer}"]`);
        if (selectedOptionRightBtn) {
            selectedOptionRightBtn.style.backgroundColor = '#aaf8c9';
            selectedOptionRightBtn.style.color = 'green';
            selectedOptionRightBtn.style.border = '2px solid green';
        }

        if (selectedOption !== rightAnswer) {
            const selectedOptionWrongBtn = document.querySelector(`.option-btn[value="${selectedOption}"]`);
            if (selectedOptionWrongBtn) {
                selectedOptionWrongBtn.style.backgroundColor = '#ffcbd1';
                selectedOptionWrongBtn.style.color = 'red';
                selectedOptionWrongBtn.style.border = '2px solid red';
            }
        }

        document.querySelectorAll('.option-btn').forEach((ele) => {
            if (ele)
                ele.disabled = true;
        });

        document.querySelectorAll('.next-btn').forEach((ele) => {
            if (ele)
                ele.disabled = false;
        });

        const data = {
            que_id: ques[curQue]._id,
            user_answer: selectedOption,
        }

        setQuiz(prev => [
            ...prev, data
        ]);
    };

    const handleNext = () => {
        setCurQue(curQue + 1);

        document.querySelectorAll('.option-btn').forEach((ele) => {
            if (ele) {
                ele.disabled = false;
                ele.style.backgroundColor = "aliceblue";
                ele.style.color = "black";
                ele.style.border = '2px solid #84c5fe';
            }
        });

        document.querySelectorAll('.wrong-icon').forEach((ele) => {
            if (ele)
                ele.style.display = 'none';
        });

        document.querySelectorAll('.right-icon').forEach((ele) => {
            if (ele)
                ele.style.display = 'none';
        });

        document.querySelectorAll('.next-btn').forEach((ele) => {
            if (ele)
                ele.disabled = true
        });
    }

    const handleFinish = () => {
        const body = {
            category: question_category,
            difficulty: question_difficulty,
            type: question_type,
            score: score,
            total_questions: amount_of_question,
            quiz: quiz,
        }
        dispatch(addQuizHistory(body));
        dispatch(getAllQuizzes());
        navigate('/score');
    }

    useEffect(() => {
        if (!question_category || !question_difficulty || !question_type || !amount_of_question) {
            navigate('/dashboard');
        }

        document.querySelectorAll('.next-btn').forEach((ele) => {
            if (ele)
                ele.disabled = true;
        });

        dispatch(handleChangeScore(0));

        loadData();
    }, []);

    return (
        <>
            {
                loading && <Loader />
            }
            {
                error && <Error error={error} />
            }
            {ques ? (
                <>
                    <div className='questions'>
                        <div className="question-box">
                            <div className="question-header">
                                <h5>Quizzeria Online Quiz</h5>
                                <div className="score">Score : {score}/{ques?.length}</div>
                            </div>
                            <p className='que'>{curQue + 1}. {ques[curQue]?.question}</p>
                            <div className="question-options">
                                {ques[curQue]?.choices?.map((val, idx) => {
                                    return (
                                        <div key={idx} className="option-box">
                                            <button className='option-btn' onClick={(e) => handleBtnClick(e, ques[curQue].correct_answer)} value={val}>
                                                <span>{val}</span>
                                                <div className="answer-icon">
                                                    <CheckCircleOutlineIcon className='right-icon'></CheckCircleOutlineIcon>
                                                    <HighlightOffIcon className='wrong-icon'></HighlightOffIcon>
                                                </div>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="question-footer">
                                <button className='quit' onClick={handleQuitQuiz}>Quit</button>
                                <span>{curQue + 1} of {ques?.length} questions</span>
                                {curQue + 1 === ques?.length ? (
                                    <button className="next-btn" onClick={handleFinish}>Finish</button>
                                ) : (
                                    <button className="next-btn" onClick={handleNext}>Next</button>
                                )}
                            </div>
                        </div>
                    </div>
                </>) : (null)}
        </>
    )
}

export default Questions