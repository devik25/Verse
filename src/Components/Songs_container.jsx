import React from 'react';
import './Components_CSS/Songs_container.css'
import Song_card from './Song_card';

function Songs_container() {
  return <div>
    <div className='heading'>
        Albums
    </div>
    <div className='songs_container'>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    <Song_card/>
    
    </div>
  </div>;
}

export default Songs_container;
