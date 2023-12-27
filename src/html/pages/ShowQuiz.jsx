import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import '../../css/ShowQuiz.css';
import Button from 'react-bootstrap/Button';


const ShowQuiz = () => {
    const { state } = useSelector((state) => state.getQuizzesReducer);
    const { quiz_id } = useParams();
    console.log(state);

    const [category, setCategory] = useState("");

    const handleBack = () => {
        window.history.back();
    }

    return (
        <>
            <div className='show-quiz'>
                <div className="single-quiz">
                    <div className="show-quiz-header">
                        <div >
                            <span className="keys">Category :</span>
                            <span className='values'>{state ? state[0].quiz[0].category : null}</span>
                        </div>
                        <div >
                            <span className="keys">Difficulty :</span>
                            <span className='values'>{state ? state[0].quiz[0].difficulty : null}</span>
                        </div>
                        <div>
                            <span className="keys">Type :</span>
                            <span className='values'>{state ? state[0].quiz[0].type : null}</span>
                        </div>
                        <div >
                            <span className="keys">Score :</span>
                            <span className='values'>{state ? 0 : null}</span>
                        </div>
                    </div>
                    {
                        state?.map((val) => {
                            return (
                                <>
                                    {val.quiz_id === quiz_id ? (
                                        <>
                                            {val?.quiz?.map((singleQuiz, index) => {
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
                                            }</>
                                    ) : (
                                        null
                                    )}
                                </>
                            )
                        })
                    }
                </div>
            </div >
            <div><Button onClick={handleBack} variant="primary">Back</Button></div>
        </>
    )
}

export default ShowQuiz