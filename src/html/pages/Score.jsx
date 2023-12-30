import React, { useEffect } from 'react';
import '../../css/Score.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import Loader from './Loader';
import Error from './Error';

const Score = () => {
    const { question_category, question_difficulty, question_type, amount_of_question, score } = useSelector(state => state.quizReducer);
    // const { loading, error } = useSelector((state) => state.getQuizzesReducer);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/dashboard')
    }

    const handleGoToHistory = () => {
        navigate('/dashboard/history');
    }

    useEffect(() => {
        if (!question_category || !question_difficulty || !question_type || !amount_of_question) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <>
            {/* {loading && <Loader></Loader>}
            {error && <Error error={error} />} */}

            <div className="score-page">
                <div className="score-container">
                    <div className="score-header">
                        {
                            score >= 4 ? (
                                <>
                                    <CelebrationOutlinedIcon className="score-icon"></CelebrationOutlinedIcon>
                                </>
                            ) : (
                                <>
                                    <SentimentDissatisfiedOutlinedIcon className='score-icon'></SentimentDissatisfiedOutlinedIcon>
                                </>
                            )
                        }
                    </div>
                    <div className="score-desc">
                        <h4>You've completed the Quiz!</h4>
                        {
                            score >= 4 ? (
                                <>
                                    <p>and congrats! You got {score} out of {amount_of_question}</p>
                                </>
                            ) : (
                                <>
                                    <p>Oops! You {score === 0 ? '' : 'just'} got {score} out of {amount_of_question}</p>
                                </>
                            )
                        }
                    </div>
                    <div className="score-footer">
                        <button className="go-back-btn" onClick={handleGoBack}>Go to Dashboard</button>
                        <button className="view-quiz-btn" onClick={handleGoToHistory}>Go to History</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Score