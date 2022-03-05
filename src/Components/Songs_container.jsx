import React from 'react';
import './Components_CSS/Songs_container.css'
import Song_card from './Song_card';


const artists = ['Arijit', 'Shirley', 'Salman', 'Armaan', 'Darshan', 'Havana'];

function Songs_container(props) {

  return <div>
    <div className='heading'>
        Albums
    </div>
    <div className='songs_container'>
    {artists.map(artist=>(<Song_card key={artist} name={artist}/>))}      
    </div>

    <div className='heading'>
        Artists
    </div>
    <div className='songs_container'>
    {artists.map(artist=>(<Song_card key={artist} name={artist}/>))}      
    </div>

  </div>;
  
}

export default Songs_container;
