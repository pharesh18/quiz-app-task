import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/Login.css';
import { login } from '../../redux/actions/userAction';
import Loader from './Loader';
import Error from './Error';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const { loading, error } = useSelector((state) => state.loginReducer);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let body = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        dispatch(login(body, navigate));
    }

    return (
        <>
            {loading && <Loader />}
            {error && <Error error={error} />}

            <div className='login'>
                <div className="background">
                    <div className="log">
                        <form onSubmit={handleLogin}>
                            <div className="regist-col">
                                <label className="regist-label">Email address&nbsp;<span style={{ color: "red" }}>*</span></label>
                                <input type="text" pattern="^[a-z][a-z0-9]*(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,}$" title="Please enter a valid email address" className="regist-input" placeholder="Enter email" name="email" required></input>
                                {/* <label style={{ fontSize: '13px', color: 'rgb(120, 120, 121)', marginTop: '3px' }} class="text-muted">We'll never share your email with anyone else.</label> */}
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">Password <span style={{ color: "red" }}>*</span></label>
                                <div className='input-password'>
                                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="regist-password" name="password" placeholder="Enter Password" required />
                                        <button type='button' className='btn-password' onClick={handleTogglePasswordVisibility}>{showPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                </div>
                            </div>

                            <div className="links" style={{ marginBottom: "20px" }}>
                                {/* style={{ fontSize: "85%", textDecoration: "none", visibility: "hidden" }} */}
                                <div className="regist-col"><label className="regiter"><NavLink to="/forgetpassword">Forget Password ?</NavLink></label> </div>
                                <div className="regist-col"><label className="regiter"><Link to="/register" style={{ fontSize: "85%", textDecoration: "none" }}>New On This Site ?</Link></label> </div>
                            </div>
                            <button className="regist-button" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

