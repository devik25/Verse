import React from 'react';
import './Components_CSS/Sidebar.css'

function Sidebar() {
  return <h1 className='container'>
      <img className='logo' src={require('./images/logo.png')} width="90px" />

      <div className='nav_box'>
          <div>DISCOVER</div>
          <ul>
              <li><img className='nav_icons' src={require('./images/icons/trend.png')}/>Trending</li>
              <li><img className='nav_icons' src={require('./images/icons/new.png')}/>New Release</li>
              <li><img className='nav_icons' src={require('./images/icons/recommend.png')}/>Recommended</li>
          </ul>
      </div>

      <div className='nav_box'>
          <div>LIBRARY</div>
          <ul>
              <li><img className='nav_icons' src={require('./images/icons/albums.png')}/>Albums</li>
              <li><img className='nav_icons' src={require('./images/icons/radio.png')}/>Radio</li>
              <li><img className='nav_icons' src={require('./images/icons/like.png')}/>Liked</li>
              <li><img className='nav_icons' src={require('./images/icons/history.png')}/>History</li>
          </ul>
      </div>

  </h1>
}

export default Sidebar;
