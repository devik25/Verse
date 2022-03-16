import React from 'react';
import './Components_CSS/Sidebar.css';
import logo from './images/Logo.svg'
import trend from './images/icons/trend.svg';
import new_release from './images/icons/new.svg';
import recommend from './images/icons/recommend.svg';
import albums from './images/icons/albums.svg';
import radio from './images/icons/radio.svg';
import liked from './images/icons/like.svg';
import history from './images/icons/history.svg'

function Sidebar() {
  return<h1 className='container'>
      <img className='logo' src={logo} width="90px" />

      <div className='nav_box'>
          <div>DISCOVER</div>
          <ul>
              <li><img className='nav_icons' src={trend}/>Trending</li>
              <li><img className='nav_icons' src={new_release}/>New Release</li>
              <li><img className='nav_icons' src={recommend}/>Recommended</li>
          </ul>
      </div>

      <div className='nav_box'>
          <div>LIBRARY</div>
          <ul>
              <li><img className='nav_icons' src={albums}/>Albums</li>
              <li><img className='nav_icons' src={radio}/>Radio</li>
              <li><img className='nav_icons' src={liked}/>Liked</li>
              <li><img className='nav_icons' src={history}/>History</li>
          </ul>
      </div>

  </h1>
}

export default Sidebar;
