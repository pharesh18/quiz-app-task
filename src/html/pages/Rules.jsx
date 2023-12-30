import React, { useEffect } from 'react';
import '../../css/Rules.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Rules = () => {
    const { question_category, question_difficulty, question_type, amount_of_question } = useSelector(state => state.quizReducer);
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/dashboard')
    }

    const handleContinue = () => {
        navigate('/questions');
    }

    useEffect(() => {
        if (!question_category || !question_difficulty || !question_type || !amount_of_question) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <>
            <div className="rules">
                <div className="rules-container">
                    <div className="rules-header">
                        <h3>Some Rules of this Quiz</h3>
                    </div>
                    <div className="rules-desc">
                        <p>1. Once you select the answer, it can't be undone.</p>
                        <p>2. You will get points on the basis of your correct answers.</p>
                        <p>3. Do not refresh the page until the quiz is finished.</p>
                        <p>4. There is no nagative marking of any wrong answers.</p>
                    </div>
                    <div className="rules-footer">
                        <button className="exit-btn" onClick={handleExit}>Exit Quiz</button>
                        <button className="continue-btn" onClick={handleContinue}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rules