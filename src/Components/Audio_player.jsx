import React from 'react'
import './Components_CSS/Audio_player.css'


function Audio_player(props) {


  return (
    <div className='playbar'>
        <button onClick={()=>props.prev_song()}>prev</button>
        <button onClick={()=>props.update_queue()}>Queue</button>
        <button onClick={()=>props.play_pause()}>play</button>
        <button onClick={()=>props.next_song()}>next</button>
        <audio className='player' src={props.song} controls type="audio/mp3"></audio>
        
    </div>
  )
}

export default Audio_player