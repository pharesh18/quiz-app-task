import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from 'react-router-dom';
import '../../css/ViewQuiz.css';
import Button from 'react-bootstrap/Button';
import Error from './Error';
import Loader from './Loader';


const ViewQuiz = () => {
    const { question_category, question_difficulty, question_type, amount_of_question, score } = useSelector(state => state.quizReducer);
    const { loading, error, state } = useSelector((state) => state.getQuizzesReducer);

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dashboard');
    }

    useEffect(() => {
        if (!question_category || !question_difficulty || !question_type || !amount_of_question) {
            navigate('/dashboard');
        }

        if (state && (!loading || !error)) {
            setData(state[state?.length - 1]);
        }
    }, [state, loading, error])

    return (
        <>
            {loading && <Loader></Loader>}
            {error && <Error error={error}></Error>}

            {
                state ? (
                    <>
                        <div className='view-quiz'>
                            <div className="single-quiz">
                                <div className="view-quiz-header">
                                    <div >
                                        <span className="keys">Category :</span>
                                        <span className='values'>{data ? data.category : null}</span>
                                    </div>
                                    <div >
                                        <span className="keys">Difficulty :</span>
                                        <span className='values'>{data ? data.difficulty : null}</span>
                                    </div>
                                    <div>
                                        <span className="keys">Type :</span>
                                        <span className='values'>{data ? data.type : null}</span>
                                    </div>
                                    <div >
                                        <span className="keys">Score :</span>
                                        <span className='values'>{data ? data.score : null}</span>
                                    </div>
                                </div>
                                {
                                    data?.quiz?.map((singleQuiz, index) => {
                                        return (
                                            <>
                                                <div className="question-box">
                                                    <p className='que'>{index + 1}. {singleQuiz?.question}</p>
                                                    <div className="question-options">
                                                        {singleQuiz?.choices?.map((opt, idx) => {
                                                            return (
                                                                <div key={idx} className="option-box">
                                                                    <button className={singleQuiz?.correct_answer === opt ? 'correct-answer option-btn' : singleQuiz?.correct_answer !== singleQuiz?.user_answer && singleQuiz?.user_answer === opt ? 'incorrect-answer option-btn' : 'option-btn'} disabled>
                                                                        <span>{opt}</span>
                                                                        <div className="answer-icon">
                                                                            {
                                                                                singleQuiz?.correct_answer === opt ? (
                                                                                    <CheckCircleOutlineIcon className='right-icon'></CheckCircleOutlineIcon>
                                                                                ) : (
                                                                                    singleQuiz?.correct_answer !== singleQuiz?.user_answer && singleQuiz?.user_answer === opt ? (
                                                                                        <HighlightOffIcon className='wrong-icon'></HighlightOffIcon>
                                                                                    ) : (
                                                                                        null
                                                                                    )

                                                                                )
                                                                            }
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div style={{ width: "60%", margin: "0 auto", textAlign: "right" }}><Button style={{ fontSize: "16px", fontWeight: "600" }} onClick={handleBack} variant="primary">Go To Dashboard</Button></div>
                        </div >
                    </>
                ) : null
            }
        </>
    )
}

export default ViewQuiz