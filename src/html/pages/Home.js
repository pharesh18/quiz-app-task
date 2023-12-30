import React from 'react';
import '../../css/Home.css';
import { Link } from 'react-router-dom';
import quizBg from '../../images/quiz2.png';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="left">
                    <h2>Quizzeria Web Application</h2>
                    <p className='welcome'>Welcome to Quizzeria Web Application! </p>
                    <p className='descri'>Enhance your knowledge by giving different types of quiz for the different categories. Here you can create a quiz based on your choice. Here we have different categories of quizzes with the different types of difficulty level, also multiple choice as well as true/false types of questions are available for the user.</p>
                    <Link to='/login'><Button variant="primary">Start Now</Button></Link>
                </div>
                <div className="right">
                    <img src={quizBg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home