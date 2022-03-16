import React, {useState, useRef, useEffect} from 'react'
import './Components_CSS/Songs_list.css'
import playable_icon from './images/icons/playable_icon.svg'

function Songs_list(props) {

  const[image, setImage] = useState('');
  const[song_name, setSong_name] = useState('');
  const[album, setAlbum] = useState('');
  const[time, setTime] = useState('');
  const[link, setLink] = useState('');

  let css;
  if(link == props.current_song_link){
    css = {color:'#FF305C'};
    // image = playable_icon;
  }

  const fetch_songByName = async (name)=>{
    let song = name;
    const song_response = await fetch(song);
    const song_data = await song_response.json();
    let s_name = song_data.song;
    if(s_name.length > 20){
      s_name = s_name.slice(0, 20);
      s_name+='...';
    }
    let a_name = song_data.album;
    if(a_name.length > 30){
      a_name = a_name.slice(0, 30);
      a_name+='...';
    }
    await setSong_name(s_name);
    await setAlbum(a_name);
    let link = song_data.media_url.slice(0, song_data.media_url.length-7);
    link+='320.mp4';
    let img = song_data.image.slice(0, song_data.image.length-11);
    img+='500x500.jpg';
    await setImage(img);
    // console.log(song_name);
    setTime(song_data.duration);
    setLink(link);
  }
  fetch_songByName(props.song);

  return (
    <div style={css} className='song_list'>
        <div onClick={()=>props.update_cnt(props.num, song_name, album, link, image)} className='song_list_text'>
            <div className='serial_num'>
            {props.num}
            </div>

            <div className='song_list_name'>
            <img src={image}></img>
            {song_name}  
            </div>

            <div className='song_list_album'>
            {album}  
            </div>

        </div>
        <div className='song_list_time'>{time}</div>
    </div>
  )
}

export default Songs_list