import React, {useRef, useEffect} from 'react'
import './Components_CSS/Audio_player.css'
import play from '../Components/images/controls/play.svg'
import pause from '../Components/images/controls/pause.svg'

function Audio_player(props) {
  const audio = useRef(null);

  let play_btn={
    backgroundImage: "url("+ play+")",
  };

  let pause_btn={
    backgroundImage: "url("+ pause+")",
  }

  useEffect(()=>{
    // console.log(audio.current);
    if(props.status === 'play'){
      audio.current.play();
    }
    else{
      audio.current.pause();
  }
  });

  return (
    <div className='playbar'>
      <div className='playBox'>
        <div className='graph'></div>
        <img src=''></img>

        <button>Button</button>
      </div>
      <div className='music_player'>
          <button className='prev btn_reset'  onClick={()=>props.prev_song()}></button>
          <button style={{backgroundImage:props.status=='play'?"url("+play+")":"url("+ pause+")"}} className='play btn_reset' onClick={()=>props.play_pause()}></button>
          <button className='next btn_reset' onClick={()=>props.next_song()}></button>
          <audio ref={audio} className='player' src={props.song} autoPlay type="audio/mp3"></audio>  
          <button onClick={()=>props.update_queue()}>Queue</button>
      </div>     
    </div>
  )
}

export default Audio_player