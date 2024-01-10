import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import '../../css/ShowQuiz.css';
import Button from 'react-bootstrap/Button';
import Load from './Load';
import Error from './Error';


const ShowQuiz = () => {
    const { loading, error, state } = useSelector((state) => state.getQuizzesReducer);
    const { quiz_id } = useParams();

    const [data, setData] = useState([]);

    const handleBack = () => {
        window.history.back();
    }

    useEffect(() => {
        const data = state?.find((ele) => {
            return ele.quiz_id === quiz_id;
        });
        setData(data);
    }, [state, quiz_id])

    return (
        <>
            {loading && <Load></Load>}
            {error && <Error error={error}></Error>}

            {
                state ? (
                    <>
                        <div className='show-quiz'>
                            <div className="single-quiz">
                                <div className="show-quiz-header">
                                    <div >
                                        <span className="keys">Category :</span>
                                        <span className='values' style={{ textTransform: "capitalize", fontSize: "18px" }}>{data ? data.category : null}</span>
                                    </div>
                                    <div >
                                        <span className="keys">Difficulty :</span>
                                        <span className='values' style={{ textTransform: "capitalize", fontSize: "18px" }}>{data ? data.difficulty : null}</span>
                                    </div>
                                    <div>
                                        <span className="keys">Type :</span>
                                        <span className='values' style={{ textTransform: "capitalize", fontSize: "18px" }}>{data ? data.type === 'multiple' ? "Multiple Choice" : "True/False" : null}</span>
                                    </div>
                                    <div >
                                        <span className="keys">Score :</span>
                                        <span className='values' style={{ textTransform: "capitalize", fontSize: "18px" }}>{data ? data.score : null}</span>
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
                            <div style={{ width: "80%", margin: "0 auto", textAlign: "right" }}><Button style={{ width: "100px", fontSize: "18px", fontWeight: "600" }} onClick={handleBack} variant="primary">Back</Button></div>
                        </div >
                    </>
                ) : null
            }
        </>
    )
}

export default ShowQuiz