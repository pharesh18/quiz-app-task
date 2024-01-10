import React, { useState } from 'react';
import '../../css/Header.css';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import profileImage from '../../images/user.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem("registerEmail");
        localStorage.removeItem("forgetPassword");
        localStorage.removeItem("OTP");
        window.location.href = '/';
    }

    return (
        <>
            <div className="header">
                <div>
                    <h4 style={{ color: "#fff", textTransform: "capitalize" }}>Welcome : {`${userInfo?.fname} ${userInfo?.lname}`}</h4>
                </div>

                <div className="profile">
                    <div className="profile-dropdown" onClick={toggleDropdown}>
                        <img src={userInfo?.profile_url ? userInfo?.profile_url : profileImage} alt="" className='profile-image' />

                        <ArrowDropDownRoundedIcon style={{ color: "#fff" }}></ArrowDropDownRoundedIcon>
                        {isDropdownOpen && (
                            <>
                                <div className="dropdown-content">
                                    <NavLink to="/changeprofile" className="dropdown-tab">Change Profile Photo</NavLink>
                                    <NavLink to="/dashboard/editprofile" className="dropdown-tab">Edit Profile</NavLink>
                                    <NavLink to="/changepassword" className="dropdown-tab">Change Password</NavLink>
                                    <NavLink to="/login" className="dropdown-tab" onClick={handleLogout}>Logout</NavLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
