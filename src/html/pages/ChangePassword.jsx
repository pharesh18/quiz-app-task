import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import Error from './Error';
import { changePassword, setNewPassword } from '../../redux/actions/userAction';

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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        window.history.back();
    }

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
                    {setPassError && <Error error={error.messsage} />}
                    <div className="register">
                        <div className="background">
                            <div className="regist">
                                <form onSubmit={handleSetPassword}>
                                    <div className="regist-col">
                                        <label className="regist-label">New Password</label>
                                        <input type="password" value={spassword} onChange={(e) => setSpassword(e.target.value)} className="regist-input" name="password" placeholder="Enter New Password" minLength={3} maxLength={10} required></input>
                                    </div>

                                    {/* <div className="regist-col">
                            <label className="regist-label">New Password</label>
                            <input type="password" value={npassword} onChange={(e) => setnPassword(e.target.value)} className="regist-input" name="npassword" placeholder="Enter New Password" minLength={3} maxLength={10} required></input>
                        </div> */}

                                    <div className="regist-col">
                                        <label className="regist-label">Confirm Password</label>
                                        <input type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-input" placeholder="Confirm Password" id="comform" required></input>
                                        {spassword !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                    </div>
                                    {/* style={{ fontSize: "85%", textDecoration: "none", visibility: "hidden" }} */}
                                    {/* <div className="regist-col"><label className="regiter"><NavLink to="/forgetpassword">Forget Password?</NavLink></label> </div> */}

                                    <div className="buttons">
                                        <button type="submit" className="regist-button" disabled={spassword === cpassword ? false : true}>
                                            Set Password
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
                    {error && <Error error={error.messsage} />}
                    <div className="register">
                        <div className="background">
                            <div className="regist">
                                <form onSubmit={handleChangePassword}>
                                    <div className="regist-col">
                                        <label className="regist-label">Current Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="regist-input" name="password" placeholder="Enter Current Password" minLength={3} maxLength={10} required></input>
                                    </div>

                                    <div className="regist-col">
                                        <label className="regist-label">New Password</label>
                                        <input type="password" value={npassword} onChange={(e) => setnPassword(e.target.value)} className="regist-input" name="npassword" placeholder="Enter New Password" minLength={3} maxLength={10} required></input>
                                    </div>

                                    <div className="regist-col">
                                        <label className="regist-label">Confirm Password</label>
                                        <input type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-input" placeholder="Enter Confirm Password" id="comform" required></input>
                                        {npassword !== cpassword ? <span className="password-caution"> password doesn't matched</span> : null}
                                    </div>
                                    {/* style={{ fontSize: "85%", textDecoration: "none", visibility: "hidden" }} */}
                                    <div className="regist-col"><label className="regiter"><NavLink to="/forgetpassword">Forget Password?</NavLink></label> </div>

                                    <div className="buttons">
                                        <button type="submit" className="regist-button" disabled={npassword === cpassword ? false : true}>
                                            Change Password
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