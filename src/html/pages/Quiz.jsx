import React from 'react';
import SelectField from '../components/SelectField';
import { useNavigate } from 'react-router-dom';
import '../../css/Quiz.css';

const Quiz = () => {
    const navigate = useNavigate();

    const categoryOptions = [
        { id: 'General Knowledge', name: 'General Knowledge' },
        { id: 'Geography', name: 'Geography' },
        { id: 'History', name: 'History' },
        { id: 'Art', name: 'Art' },
    ];

    const dificultyOptions = [
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
    ]

    const typeOptions = [
        { id: 'multiple', name: "Multiple choice" },
        { id: "boolean", name: "True/False" }
    ]

    const numberOfQuestions = [
        { id: '10', name: "10" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/rules');
    }

    return (
        <>
            <div className="quiz">
                <div className="quiz-container">
                    <h1>Quiz Board</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <SelectField label="Category" options={categoryOptions}></SelectField>
                        <SelectField label="Difficulty" options={dificultyOptions}></SelectField>
                        <SelectField label="Type" options={typeOptions}></SelectField>
                        <SelectField label="Amount of questions" options={numberOfQuestions}></SelectField>
                        <button type='submit'>Start Quiz</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Quiz