import React from 'react'
// import InputField from '../Components/InputField';
import { Route, Routes } from 'react-router-dom';
// import useAxios from '../hooks/useAxios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Quiz from './Quiz';
import UserProfile from './UserProfile';
import '../../css/Dashboard.css';
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
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard