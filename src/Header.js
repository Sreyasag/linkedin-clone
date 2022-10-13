import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
                    alt="" 
                />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                {user && <HeaderOption 
                    title='Logout' 
                    avatar={true}
                    onClick={logoutOfApp}
                />}
                
            </div>

        </div>
    )
}

export default Header