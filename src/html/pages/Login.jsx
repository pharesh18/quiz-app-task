import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/Login.css';
import { login } from '../../redux/actions/userAction';
import Loader from './Loader';
import Error from './Error';

const Login = () => {
    const { loading, error } = useSelector((state) => state.loginReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                                <label className="regist-label">Email address</label>
                                <input type="email" className="regist-input" placeholder="Enter email" name="email" required></input>
                                {/* <label style={{ fontSize: '13px', color: 'rgb(120, 120, 121)', marginTop: '3px' }} class="text-muted">We'll never share your email with anyone else.</label> */}
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">Password</label>
                                <input type="password" className="regist-input" placeholder="Enter Password" minLength={3} maxLength={10} name="password" required></input>
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

