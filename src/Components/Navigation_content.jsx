import React from 'react'
import Songs_list from './Songs_list'
import Searchbar_dark from './Searchbar_dark';
import './Components_CSS/Navigation_content.css'

function Navigation_content(props) {
  // console.log(props.list);

  let cnt=1;
  return (
    <div className='navigate'>
    <Searchbar_dark song={props.song} update_song={props.update_song}/> 
    <div className='container_navigate'>
    <div className='heading_navigate'>This Week: Most Trending</div>

    {props.list.map(music=>(<Songs_list song={music.api_url.song} num = {cnt++} update_cnt={props.update_cnt} current_song_link={props.current_song_link}/>))}

    </div>
    </div>
  )
}

export default Navigation_content