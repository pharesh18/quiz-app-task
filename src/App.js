// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './html/pages/Register';
import Login from './html/pages/Login';
import ChangePassword from './html/pages/ChangePassword';
import ChangeProfile from './html/pages/ChangeProfile';
import ForgetPassword from './html/pages/ForgetPassword';
import Terms from './html/pages/Terms';
import Otp from './html/pages/Otp';
import Home from './html/pages/Home';
import Sidebar from './html/components/Sidebar';
import Header from './html/components/Header';
import { useSelector } from 'react-redux'
import Dashboard from './html/pages/Dashboard';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './html/pages/Questions';

function App() {
  // const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const userLogin = useSelector((state) => state.loginReducer);
  const { userInfo } = userLogin;

  return (
    <div className="App">
      {/* <div className="left">
        <div>
          <Sidebar></Sidebar>
        </div>
      </div> */}
      {/* 
      <div className='right'>
        <div>
          <Header></Header>
        </div>
        <div className="main"> */}
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        {/* <Route exact path="/dashboard/*" element={userInfo ? <Dashboard></Dashboard> : <Login></Login>} /> */}
        <Route exact path="/dashboard/*" element={<Dashboard></Dashboard>} />
        <Route exact path="/register" element={<Register></Register>} />
        <Route exact path="/otp" element={<Otp></Otp>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path='/changeprofile' element={userInfo ? <ChangeProfile></ChangeProfile> : <Login></Login>} />
        <Route exact path='/changepassword' element={<ChangePassword></ChangePassword>} />
        <Route exact path='/forgetpassword' element={<ForgetPassword></ForgetPassword>} />
        <Route exact path='/terms' element={<Terms></Terms>} />
        <Route exact path='/questions' element={<Questions></Questions>} />
      </Routes>
      {/* </div>
      </div> */}
    </div>
  );
}

export default App;
