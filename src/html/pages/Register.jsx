import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/Register.css';
import Loader from './Loader';
import Error from './Error';
import { register } from '../../redux/actions/userAction';

const Register = () => {
    const { loading, error } = useSelector((state) => state.registerReducer);
    console.log(loading, error);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setcPassword] = useState(null);
    const [profile, setProfile] = useState(null);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProfile = (e) => {
        const uploadedFile = e.target.files[0]
        setProfile(uploadedFile);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fname', e.target.fname.value);
        data.append('lname', e.target.lname.value);
        data.append('email', email);
        data.append('password', password);
        data.append('profile', profile);
        data.append('is_admin', false);

        dispatch(register(data, navigate));
    }

    return (
        <>
            {
                loading && <Loader></Loader>
            }
            {
                error && <Error error={error} />
            }
            <>
                <div className="register">
                    <div className="background">
                        <div className="regist">
                            <form onSubmit={handleRegister}>
                                <div className="regist-col">
                                    <label className="regist-label">fname <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="regist-input" name="fname" placeholder="Enter First Name" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">lname <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="regist-input" name="lname" placeholder="Enter Last Name" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">E-mail <span style={{ color: "red" }}>*</span></label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="regist-input" name="email" placeholder="Enter email" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Profile</label>
                                    <input type="file" name="profile" onChange={handleProfile} className="regist-input"></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Password <span style={{ color: "red" }}>*</span></label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="regist-input" name="password" placeholder="Enter Password" minLength={3} maxLength={10} required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Confirm Password <span style={{ color: "red" }}>*</span></label>
                                    <input type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-input" placeholder="Enter Confirm Password" id="comform" required></input>
                                    {password !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                </div>

                                <div className="regist-col">
                                    <div className="regist-row">
                                        <input type="checkbox" onChange={(e) => e.target.checked ? setChecked(true) : setChecked(false)} className="radio-button" style={{ height: '1.01rem', marginTop: '5px' }} required></input>
                                        <label className="regist-label terms">Agree with Terms & Conditions <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    {/* <div className="regist-col"><label className="regiter"><Link to="/terms" style={{ fontSize: "85%", textDecoration: "none" }}>Terms and Condition</Link></label> </div> */}
                                    <div className="links">
                                        <div className="regist-col"><label className="regiter"><Link to="/terms" style={{ fontSize: "85%", textDecoration: "none" }}>Terms and Condition</Link></label> </div>
                                        <div className="regist-col"><label className="regiter"><NavLink to="/login" style={{ fontSize: "85%", textDecoration: "none" }}>Already Registered?</NavLink></label> </div>
                                    </div>
                                </div>

                                {/* <button className="regist-button" type="submit" disabled={password !== cpassword ? true : false} > */}
                                <button className="regist-button" type="submit" disabled={(checked && password === cpassword) ? false : true} >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Register