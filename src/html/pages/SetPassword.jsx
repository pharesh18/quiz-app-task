import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
// import { setPassword } from '../../actions/userAction';
import { setPassword } from '../../actions/userAction';

const SetPassword = () => {
    const [spassword, setSpassword] = useState(null);
    const [cpassword, setcPassword] = useState(null);
    const { email } = useParams();

    const navigate = useNavigate();

    const handleBack = () => {
        window.history.back();
    }

    const handleSetPassword = (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: spassword,
        }
        setPassword(body, navigate);

    }
    return (
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
    )
}

export default SetPassword