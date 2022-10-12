import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HeaderOption from './HeaderOption';

function Header() {
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
            <HeaderOption title='Me' avatar='https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png' />
            
        </div>

    </div>
  )
}

export default Header