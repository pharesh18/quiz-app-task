import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../../css/Sidebar.css';

import DashboardIcon from '@mui/icons-material/Dashboard';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import UploadDocument from './UploadDocument';
// import CreateFolder from './CreateFolder';
// import logo from '../../images/logo2.png';


const Sidebar = () => {
    const { pathname } = useLocation();
    const [navActive, setNavActive] = useState(1);

    useEffect(() => {
        if (pathname === '/dashboard') {
            setNavActive(1);
        } else if (pathname === '/dashboard/history' || '/dashboard/history/*') {
            setNavActive(2);
        }
        else if (pathname === '/dashboard/leaderboard') {
            setNavActive(3);
        } else if (pathname === '/dashboard/userprofile') {
            setNavActive(4);
        }

    }, [pathname])
    return (
        <>
            <div className="sidebar">
                <div className="logo" style={{ width: "160px", marginTop: "40px" }}>
                    <img src={""} style={{ width: "160px", marginTop: "20px" }} alt="" />
                </div>
                <div className="menu">
                    <Link to="/dashboard" className="single-menu" id={navActive === 1 ? 'nav-active' : ''} onLoad={() => setNavActive(1)}>
                        <DashboardIcon className='menu-icon' />
                        <span className="route"> Quiz</span>
                    </Link>

                    <Link to="/dashboard/history" className="single-menu" id={navActive === 2 ? 'nav-active' : ''} onLoad={() => setNavActive(2)}>
                        <AccessTimeIcon className='menu-icon' />
                        <span className="route">History</span>
                    </Link>

                    <Link to="/starred" className="single-menu" id={navActive === 3 ? 'nav-active' : ''} onLoad={() => setNavActive(3)}>
                        <StarBorderIcon className='menu-icon' />
                        <span className="route">Leaderboard</span>
                    </Link>

                    <Link to="/dashboard/userprofile" className="single-menu" id={navActive === 4 ? 'nav-active' : ''} onLoad={() => setNavActive(4)}>
                        <RestoreFromTrashIcon className='menu-icon' />
                        <span className="route">Profile Information</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar