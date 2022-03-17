import React from 'react'
import Songs_list from './Songs_list'
import { Link } from 'react-router-dom';
import Searchbar_dark from './Searchbar_dark';
import back from './images/controls/home_back.svg'
import './Components_CSS/Navigation_content.css'

function Navigation_content(props) {
  // console.log(props.list);

  let cnt=1;
  return (
    <div className='navigate'>
    
    <div className='container_navigate'>
    <div className='heading_navigate'><Link to={'/'}><img style={{marginRight:'10px'}} src={back}></img></Link>{props.song}</div>

    {props.list.map(music=>(<Songs_list song={music.api_url.song} num = {cnt++} update_cnt={props.update_cnt} current_song_link={props.current_song_link}/>))}

    </div>
    </div>
  )
}

export default Navigation_content