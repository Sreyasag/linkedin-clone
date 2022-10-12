import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'

function Sidebar() {

  const recentItem = (topic)=>{
    return <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
          <img src="https://cdn.fansshare.com/photo/facebookwallpaper/nature-facebook-cover-background-wallpaper-cover-578377.jpg" alt="" />
          <Avatar className="sidebar__avatar" />
          <h2>Sreyas</h2>
          <h4>sreyags@gmail</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">5455</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">5455</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('programming')}
          {recentItem('nature')}
          {recentItem('football')}
        </div>
    </div>
  )
}

export default Sidebar