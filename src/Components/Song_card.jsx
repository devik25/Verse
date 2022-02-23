import React from 'react';
import './Components_CSS/Song_card.css';
import play_album from './images/icons/play_album.svg'

function Song_card() {
  return <div className='song_card'>
  <div className='song_card_black'>
    <img style={{width:'50px'}} src={play_album}/>
  </div>
  </div>;
}

export default Song_card;
