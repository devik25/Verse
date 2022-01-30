import React from 'react';
import './Components_CSS/Sidebar.css'

function Sidebar() {
  return <h1 className='container'>
      <img className='logo' src={require('./images/logo.png')} width="100px" />

      <div className='nav_box'>
          <div>DISCOVER</div>
          <ul>
              <li>Trending</li>
              <li>New Release</li>
              <li>Recommended</li>
          </ul>
      </div>

      <div className='nav_box'>
          <div>LIBRARY</div>
          <ul>
              <li>Albums</li>
              <li>Radio</li>
              <li>Liked</li>
              <li>History</li>
          </ul>
      </div>

  </h1>
}

export default Sidebar;
