import React, { useEffect } from 'react'
// import InputField from '../Components/InputField';
import { Route, Routes } from 'react-router-dom';
// import useAxios from '../hooks/useAxios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Quiz from './Quiz';
import UserProfile from './UserProfile';
import History from './History';
import { useDispatch } from 'react-redux';
import '../../css/Dashboard.css';
import { getAllQuizzes } from '../../redux/actions/quizAction';
import ShowQuiz from './ShowQuiz';
import Leaderboard from './Leaderboard';
import UpdateUserProfile from './UpdateUserProfile';
// import Loader from './Loader';
// import Error from './Error';

const Dashboard = () => {
    // const navigate = useNavigate();
    // const { response, error, loading } = useAxios({ url: "/api_category.php" });

    // if (loading) {
    //     return (
    //         <Loader></Loader>
    //     )
    // }

    // if (error) {
    //     return (
    //         <Error error={error}></Error>
    //     )
    // }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllQuizzes());
    }, [])


    return (
        <>
            <div className="Dashboard">
                <div className="left">
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <Header></Header>
                    </div>
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<Quiz></Quiz>} />
                            <Route path="userprofile" element={<UserProfile></UserProfile>} />
                            <Route path="editprofile" element={<UpdateUserProfile></UpdateUserProfile>} />
                            <Route path="history" element={<History></History>} />
                            <Route path="history/quiz/:quiz_id" element={<ShowQuiz></ShowQuiz>}></Route>
                            <Route path="leaderboard" element={<Leaderboard></Leaderboard>}></Route>
                        </Routes>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Dashboard