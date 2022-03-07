import React from 'react';
import './Components_CSS/Songs_container.css'
import Song_card from './Song_card';


const artists = ['Arijit', 'Shirley', 'Salman', 'Armaan', 'Darshan', 'Havana'];
const albums = ['Yaarian', 'Jugnoo', 'Sanam', 'Wake up sid', 'Lagaan', 'Raone'];

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
    {albums.map(album=>(<Song_card key={album} name={album}/>))}      
    </div>

    <div className='heading'>
        Artists
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
