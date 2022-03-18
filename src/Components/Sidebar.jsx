import React from 'react';
import './Components_CSS/Sidebar.css';
import { Link } from 'react-router-dom';
import logo from './images/Logo.svg'
import trend from './images/icons/trend.svg';
import new_release from './images/icons/new.svg';
import recommend from './images/icons/recommend.svg';
import albums from './images/icons/albums.svg';
import radio from './images/icons/radio.svg';
import liked from './images/icons/like.svg';
import history from './images/icons/history.svg'

function Sidebar() {

  return<div className='left'>
  <h1 className='container'>
      <Link to={'/'}><img className='logo' src={logo} width="90px" /></Link>

      <div className='nav_box_contain'>
      <div className='nav_box'>
          <div>DISCOVER</div>
          <ul>
              <li><Link to={'/trending'}><img className='nav_icons' src={trend}/>Trending</Link></li>
              <li><Link to={'/new_release'}><img className='nav_icons' src={new_release}/>New Release</Link></li>
              <li><Link to={'/recommended'}><img className='nav_icons' src={recommend}/>Recommended</Link></li>
          </ul>
      </div>

      <div className='nav_box'>
          <div>LIBRARY</div>
          <ul>
              <li><Link to={'/albums'}><img className='nav_icons' src={albums}/>Albums</Link></li>
              <li><Link to={'/radio'}><img className='nav_icons' src={radio}/>Radio</Link></li>
              <li><Link to={'/liked'}><img className='nav_icons' src={liked}/>Liked</Link></li>
              <li><Link to={'/history'}><img className='nav_icons' src={history}/>History</Link></li>
          </ul>
      </div>
      </div>

  </h1>
  </div>
}

export default Sidebar;
