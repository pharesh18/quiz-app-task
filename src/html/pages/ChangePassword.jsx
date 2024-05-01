import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import Error from './Error';
import { changePassword, setNewPassword } from '../../redux/actions/userAction';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ChangePassword = () => {
    const pass = useSelector(state => state.changePasswordReducer)
    const { loading, error } = pass;

    const setPass = useSelector(state => state.setPasswordReducer)
    const { loading: setPassLoading, error: setPassError } = setPass;

    const [email, setEmail] = useState(null);
    const [otp, setOtp] = useState(null);

    const [password, setPassword] = useState(null);
    const [npassword, setnPassword] = useState(null);
    const [cpassword, setcPassword] = useState(null);
    const [spassword, setSpassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showSetPassword, setShowSetPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        window.history.back();
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleToggleSetPasswordVisibility = () => {
        setShowSetPassword(!showSetPassword);
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        const body = {
            password: password,
            npassword: npassword
        }
        dispatch(changePassword(body, navigate));
    }

    const handleSetPassword = (e) => {
        e.preventDefault();
        const body = {
            email: email,
            otp: otp,
            password: spassword,
        }
        dispatch(setNewPassword(body, navigate));
    }

    useEffect(() => {
        const email = localStorage.getItem('registerEmail') ? JSON.parse(localStorage.getItem('registerEmail')) : null;
        const OTP = localStorage.getItem('OTP') ? JSON.parse(localStorage.getItem('OTP')) : null;
        setEmail(email);
        setOtp(OTP);
    }, []);
    return (
        <>
            {email && otp ? (
                <>
                    {setPassLoading && <Loader />}
                    {setPassError && <Error error={error} />}
                    <div className="register">
                        <div className="background">
                            <div className="regist">
                                <form onSubmit={handleSetPassword}>
                                    {/* <div className="regist-col">
                                        <label className="regist-label">New Password</label>
                                        <input type="password" value={spassword} onChange={(e) => setSpassword(e.target.value)} className="regist-input" name="password" placeholder="Enter New Password" minLength={3} maxLength={10} required></input>
                                    </div> */}

                                    <div className="regist-col">
                                        <label className="regist-label">New Password <span style={{ color: "red" }}>*</span></label>
                                        <div className='input-password'>
                                            <input type={showSetPassword ? 'text' : 'password'} value={spassword} onChange={(e) => setSpassword(e.target.value)} className="regist-password" name="password" placeholder="Enter New Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" required />
                                            <button type='button' className='btn-password' onClick={handleToggleSetPasswordVisibility}>{showSetPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                        </div>
                                    </div>

                                    {/* <div className="regist-col">
                                        <label className="regist-label">Confirm Password</label>
                                        <input type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-input" placeholder="Confirm Password" id="comform" required></input>
                                        {spassword !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                    </div> */}


                                    <div className="regist-col">
                                        <label className="regist-label">Confirm Password <span style={{ color: "red" }}>*</span></label>
                                        <div className='input-password'>
                                            <input type={showConfirmPassword ? 'text' : 'password'} value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-password" placeholder="Enter Confirm Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" id="comform" required></input>
                                            <button type='button' className='btn-password' onClick={handleToggleConfirmPasswordVisibility}>{showConfirmPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                        </div>
                                        {spassword !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                    </div>

                                    <div className="buttons">
                                        {/* <button type="submit" className="regist-button" disabled={spassword === cpassword ? false : true}>
                                            Set Password
                                        </button> */}
                                        <button type="submit" className={spassword === cpassword ? "regist-button" : "regist-button-disabled"} disabled={(spassword === cpassword) ? false : true} >
                                            Submit
                                        </button>
                                        <button className="regist-button" type="button" onClick={handleBack}>
                                            Back
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>) : (
                <>
                    {loading && <Loader />}
                    {error && <Error error={error} />}
                    <div className="register">
                        <div className="background">
                            <div className="regist">
                                <form onSubmit={handleChangePassword}>
                                    <div className="regist-col">
                                        <label className="regist-label">Password <span style={{ color: "red" }}>*</span></label>
                                        <div className='input-password'>
                                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="regist-password" name="password" placeholder="Enter Password" required />
                                            <button type='button' className='btn-password' onClick={handleTogglePasswordVisibility}>{showPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                        </div>
                                    </div>

                                    <div className="regist-col">
                                        <label className="regist-label">New Password <span style={{ color: "red" }}>*</span></label>
                                        <div className='input-password'>
                                            <input type={showNewPassword ? 'text' : 'password'} value={npassword} onChange={(e) => setnPassword(e.target.value)} className="regist-password" name="npassword" placeholder="Enter New Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" required />
                                            <button type='button' className='btn-password' onClick={handleToggleNewPasswordVisibility}>{showNewPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                        </div>
                                    </div>

                                    <div className="regist-col">
                                        <label className="regist-label">Confirm Password <span style={{ color: "red" }}>*</span></label>
                                        <div className='input-password'>
                                            <input type={showConfirmPassword ? 'text' : 'password'} value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-password" placeholder="Enter Confirm Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$" title="Password must have atleast: One uppercase letter, One lowercase letter, One number and One special case letter" id="comform" required></input>
                                            <button type='button' className='btn-password' onClick={handleToggleConfirmPasswordVisibility}>{showConfirmPassword ? <Visibility style={{color: "grey"}} /> : <VisibilityOff style={{color: "grey"}} />}</button>
                                        </div>
                                        {npassword !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                    </div>
           
                                    <div className="regist-col"><label className="regiter"><NavLink to="/forgetpassword">Forget Password?</NavLink></label> </div>

                                    <div className="buttons">
                                        {/* <button type="submit" className="regist-button" disabled={npassword === cpassword ? false : true}>
                                            Change Password
                                        </button> */}
                                        <button type="submit" className={npassword === cpassword ? "regist-button" : "regist-button-disabled"} disabled={(npassword === cpassword) ? false : true} >
                                            Submit
                                        </button>
                                        <button className="regist-button" type="button" onClick={handleBack}>
                                            Back
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default ChangePassword