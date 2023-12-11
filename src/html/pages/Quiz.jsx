import React from 'react';
import SelectField from '../components/SelectField';
import { useNavigate } from 'react-router-dom';
import '../../css/Quiz.css';

const Quiz = () => {
    const navigate = useNavigate();

    const categoryOptions = [
        { id: 'General Knowledge', name: 'General Knowledge' },
        { id: 'Entertainment: Books', name: 'Entertainment: Books' },
        { id: 'Entertainment: Film', name: 'Entertainment: Film' },
        { id: 'Entertainment: Music', name: 'General Knowledge' },
        { id: 'Entertainment: Musicals & Theatres', name: 'Entertainment: Musicals & Theatres' },
        { id: 'Entertainment: Television', name: 'Entertainment: Television' },
        { id: 'Entertainment: Video Games', name: 'Entertainment: Video Games' },
        { id: 'Entertainment: Board Games', name: 'Entertainment: Board Games' },
        { id: 'Science & Nature', name: 'Science & Nature' },
        { id: 'Science: Computers', name: 'Science: Computers' },
        { id: 'Science: Mathematics', name: 'Science: Mathematics' },
        { id: 'Mythology', name: 'Mythology' },
        { id: 'Sports', name: 'Sports' },
        { id: 'Geography', name: 'Geography' },
        { id: 'History', name: 'History' },
        { id: 'Politics', name: 'Politics' },
        { id: 'Art', name: 'Art' },
        { id: 'Celebrities', name: 'Celebrities' },
        { id: 'Animals', name: 'Animals' },
        { id: 'Vehicles', name: 'Vehicles' },
        { id: 'Entertainment: Comics', name: 'Entertainment: Comics' },
        { id: 'Science: Gadgets', name: 'Science: Gadgets' },
        { id: 'Entertainment: Japanese Anime & Manga', name: 'Entertainment: Japanese Anime & Manga' },
        { id: 'Entertainment: Cartoon & Animations', name: 'Entertainment: Cartoon & Animations' },
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
        { id: '5', name: "5" },
        { id: '10', name: "10" },
        { id: '15', name: "15" },
        { id: '20', name: "20" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questions');
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