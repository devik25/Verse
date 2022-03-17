import React, {useState} from 'react';
import './Components_CSS/Song_card.css';
import play from './images/icons/play_album.svg'
import graph from '../Components/images/controls/graph.gif'


function Song_card(props) {

  const[image, setImage] = useState('');
  const[song_name, setSong_name] = useState('');
  const[album, setAlbum] = useState('');
  const[link, setLink] = useState('');

  const fetch_songByName = async (name)=>{
    let url = 'https://jiosaavn-api-v3.vercel.app/search?query='+name;
    const response = await fetch(url);
    const data = await response.json();
    let song = data.results[0].api_url.song;
    const song_response = await fetch(song);
    const song_data = await song_response.json();
    // song = song_data.image;
    await setSong_name(song_data.song);
    await setAlbum(song_data.album);
    let link = song_data.media_url.slice(0, song_data.media_url.length-7);
    link+='320.mp4';
    let img = song_data.image.slice(0, song_data.image.length-11);
    img+='500x500.jpg';
    await setImage(img);
    // console.log(song_name);
    setLink(link);
    // props.update_all(song_data.song, song_data.album, song_data.url, song_data.image);
  }

  // props.update_all(song_name, album, link, image)
  fetch_songByName(props.name);


  return <div style={{backgroundImage: 'url('+ image +')'}} className='song_card'>
    <div className='song_card_black'>
    {/* style={{backgroundImage:props.status=='play'?"url("+pause+")":"url("+ play+")"}} */}

      <img onClick={()=>{props.update_all(song_name, album, link, image)}} style={{width:'50px'}} src={props.song==link?graph: play}/>


    </div>
  </div>;
}

export default Song_card;
