import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Error from './Error';

const ForgetPassword = () => {
    const forPass = useSelector((state) => state.forgetPasswordReducer);
    let { loading, error } = forPass;

    const [email, setEmail] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        window.history.back();
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const body = {
            email: email,
        }
        dispatch(forgetPassword(body, navigate));
    }

    return (
        <>
            {
                loading && <Loader />
            }
            {
                error && <Error error={error} />
            }
            <div className="register">
                <div className="background">
                    <div className="regist">
                        <form onSubmit={handleForgetPassword}>
                            <div className="regist-col">
                                <label className="regist-label">Email address</label>
                                <input type="email" className="regist-input" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>

                            <div className="buttons">
                                <button type="submit" className="regist-button">
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
    )
}

export default ForgetPassword