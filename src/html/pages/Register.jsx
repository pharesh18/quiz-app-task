import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/Register.css';
import Loader from './Loader';
import Error from './Error';
import { register } from '../../redux/actions/userAction';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
    const { loading, error } = useSelector((state) => state.registerReducer);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setcPassword] = useState(null);
    const [profile, setProfile] = useState(null);
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProfile = (e) => {
        const uploadedFile = e.target.files[0]
        setProfile(uploadedFile);
    }
    
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

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
                                    <label className="regist-label">First Name <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="regist-input" name="fname" pattern="[A-Za-z]{2,30}" title="Please enter 1-30 characters, A-Z or a-z, no space" placeholder="Enter First Name" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Last Name <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="regist-input" name="lname" pattern="[A-Za-z']{2,30}" title="Please enter 1-30 characters, A-Z or a-z or ', no space" placeholder="Enter Last Name" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">E-mail <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" value={email} pattern="^[a-z][a-z0-9]*(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,}$" title="Please enter a valid email address"  onChange={(e) => setEmail(e.target.value)} className="regist-input" name="email" placeholder="Enter email" required></input>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Profile Picture</label>
                                    <input type="file" name="profile" accept="image/png, image/jpg, image/jpeg" onChange={handleProfile} className="regist-input"></input>
                                </div>

                                {/* <div className="regist-col">
                                    <label className="regist-label">Password <span style={{ color: "red" }}>*</span></label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="regist-input" name="password" placeholder="Enter Password" required></input>
                                </div> */}

                                <div className="regist-col">
                                    <label className="regist-label">Password <span style={{ color: "red" }}>*</span></label>
                                    <div className='input-password'>
                                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="regist-password" name="password" placeholder="Enter Password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" />
                                        <button type='button' className='btn-password' onClick={handleTogglePasswordVisibility}>{showPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                    </div>
                                </div>

                                <div className="regist-col">
                                    <label className="regist-label">Confirm Password <span style={{ color: "red" }}>*</span></label>
                                    <div className='input-password'>
                                        <input type={showConfirmPassword ? 'text' : 'password'} value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-password" placeholder="Enter Confirm Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" id="comform" required></input>
                                        <button type='button' className='btn-password' onClick={handleToggleConfirmPasswordVisibility}>{showConfirmPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                    </div>
                                    {password !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                </div>

                                <div className="regist-col">
                                    <div className="regist-row">
                                        <input type="checkbox" onChange={(e) => e.target.checked ? setChecked(true) : setChecked(false)} style={{width: "20px", height: "1.1rem", marginTop: "5px", marginRight: "20px"}} required></input>
                                        <label className="regist-label terms">Agree with Terms & Conditions <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="links">
                                        <div className="regist-col"><label className="regiter"><a href='/terms' target='_blank' style={{ fontSize: "100%", textDecoration: "none", color: "blue", cursor: "pointer" }}>Terms and Condition</a></label> </div>
                                        <div className="regist-col"><label className="regiter"><NavLink to="/login" style={{ fontSize: "100%", textDecoration: "none", color: "blue", cursor: "pointer" }}>Already Registered?</NavLink></label> </div>
                                    </div>
                                </div>

                                <button type="submit" className={checked && password === cpassword ? "regist-button" : "regist-button-disabled"} disabled={(checked && password === cpassword) ? false : true} >
                                    Submit
                                </button>
                            </form>
                            <div className='required-fields'>
                                <span>Fields marked</span>&nbsp;
                                <span style={{ color: "red" }}>*</span>&nbsp;
                                <span>are required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Register