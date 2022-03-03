import React, {useState} from 'react';
import './Components_CSS/Song_card.css';
import play_album from './images/icons/play_album.svg'


function Song_card(props) {

  const[song, setSong] = useState('');

  const fetch_songByName = async (name)=>{
    let url = 'https://jiosaavn-api-v3.vercel.app/search?query='+name;
    const response = await fetch(url);
    const data = await response.json();
    let song = data.results[0].api_url.song;
    const song_response = await fetch(song);
    const song_data = await song_response.json();
    song = song_data.image;
    setSong(song);
  }

  fetch_songByName(props.name);
  console.log(song);

  return <div style={{backgroundImage: 'url('+ song +')'}} className='song_card'>
    <div className='song_card_black'>
      <img style={{width:'50px'}} src={play_album}/>
    </div>
  </div>;
}

export default Song_card;
