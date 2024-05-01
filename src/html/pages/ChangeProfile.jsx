import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Loader from './Loader';
import Error from './Error';
import { changeProfile } from '../../redux/actions/userAction';

const ChangeProfile = () => {
    const { loading, error } = useSelector((state) => state.uploadProfileReducer);
    const [profile, setProfile] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfile = (e) => {
        const uploadedFile = e.target.files[0]
        setProfile(uploadedFile);
    }

    const handleBack = () => {
        window.history.back();
    }

    const handleChangeProfile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile', profile);
        dispatch(changeProfile(formData, navigate));
    }

    return (
        <>
            {
                loading && <Loader></Loader>
            }
            {
                error && <Error error={error} />
            }
            <div className='login'>
                <div className="background">
                    <div className="log">
                        <form onSubmit={handleChangeProfile}>
                            <h2 className='profile-title'>Change Profile Picture</h2>
                            <div className="regist-col">
                                <label className="regist-label">Select profile picture&nbsp;<span style={{ color: "red" }}>*</span></label>
                                <input type="file" accept='image/jpg, image/jpeg, image/png' className='regist-input' onChange={handleProfile} required />
                            </div>
                            <div className="buttons">
                                <button className="regist-button" type="submit">
                                    Update Profile
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

export default ChangeProfile