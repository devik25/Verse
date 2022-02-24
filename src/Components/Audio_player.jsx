import React, {useRef, useEffect} from 'react'
import './Components_CSS/Audio_player.css'


function Audio_player(props) {
  const audio = useRef(null);

  useEffect(()=>{
    console.log(audio.current);
    if(props.status === 'play'){
      audio.current.play();
    }
    else{
      audio.current.pause();
  }
  });

  return (
    <div className='playbar'>
        <button onClick={()=>props.prev_song()}>prev</button>
        <button onClick={()=>props.update_queue()}>Queue</button>
        <button onClick={()=>props.play_pause()}>play</button>
        <button onClick={()=>props.next_song()}>next</button>
        <audio ref={audio} className='player' src={props.song} controls autoPlay type="audio/mp3"></audio>       
    </div>
  )
}

export default Audio_player