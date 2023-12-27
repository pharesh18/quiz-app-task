import React, { useState } from 'react';
import '../../css/Header.css';
// import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
// import profile from '../../images/profile1.jpg'
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        // navigate('/login');
        window.location.href = '/login';
    }

    return (
        <>
            <div className="header">
                <div>
                    <h4 style={{ color: "#fff", textTransform: "capitalize" }}>Welcome : {`${userInfo?.fname} ${userInfo?.lname}`}</h4>
                    {/* <div className="searchbar"> */}
                    {/* <div className="search"> */}
                    {/* <SearchIcon className="search-icon"></SearchIcon> */}
                    {/* <input type="text" className='search-input' placeholder='Search file' onChange={(e) => setSearchInput(e.target.value)} /> */}
                    {/* </div> */}
                    {/* <input type="button" className='search-button' value="Browse" /> */}
                </div>

                <div className="profile">
                    <div className="profile-dropdown" onClick={toggleDropdown}>
                        {/* <img src={`http://localhost:8000/public/profiles/${userInfo?.profile}`} ""alt="" className='profile-image' /> */}
                        <img src={userInfo?.profile_url} alt="" className='profile-image' />

                        <ArrowDropDownRoundedIcon style={{ color: "#fff" }}></ArrowDropDownRoundedIcon>
                        {isDropdownOpen && (
                            <>
                                <div className="dropdown-content">
                                    <NavLink to="/changeprofile" className="dropdown-menu">Change Profile</NavLink>
                                    <NavLink to="/changepassword" className="dropdown-menu">Change Password</NavLink>
                                    <NavLink to="#" className="dropdown-menu" onClick={handleLogout}>Logout</NavLink>
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
