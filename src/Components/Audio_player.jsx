import React, {useRef, useEffect, useState} from 'react'
import './Components_CSS/Audio_player.css'
import './Components_CSS/Slider.css'
import play from '../Components/images/controls/play.svg'
import pause from '../Components/images/controls/pause.svg'
import graph from '../Components/images/controls/graph.svg'

function Audio_player(props) {
  const audio = useRef(null);
  const slide = useRef(null);
  const volume = useRef(null);

  const[current, setcurrent] = useState(0);
  const[duration, setduration] = useState(0);
  const[curr_min, set_curr_min] = useState(0);
  const[curr_sec, set_curr_sec] = useState(0);
  const[dur_min, dur_curr_min] = useState(0);
  const[dur_sec, dur_curr_sec] = useState(0);

  let play_btn={
    backgroundImage: "url("+ play +")",
  };

  let pause_btn={
    backgroundImage: "url("+ pause +")",
  }

  useEffect(()=>{
    if(props.status === 'play'){
      audio.current.play();
    }
    else{
      audio.current.pause();
  }
  });

  useEffect(()=>{
    let curr_duration = (current/duration)*100;
    if((current/60).toFixed(0).length )
    slide.current.value = curr_duration;
  }, [current])

  const update_duration = (e)=>{
    let curr_duration = (duration/100)*e.currentTarget.value;
    audio.current.currentTime = curr_duration;
  }

  const update_volume = (e)=>{
    audio.current.volume = e.currentTarget.value/100;
  }


  return (
    <div className='playbar'>
      <div className='playBox'>
        <img className='graph' src={graph}></img>
        <img className='audio_image' src={props.song_img}></img>
        <div>
          <div className='playbox_title'>{props.song_name}</div>
          <div className='playbox_album'>{props.song_album}</div>
        </div>

        {/* <button>Button</button> */}
      </div>
      <div className='music_player'>
          <button className='prev btn_reset'  onClick={()=>props.prev_song()}></button>
          <button style={{backgroundImage:props.status=='play'?"url("+pause+")":"url("+ play+")"}} className='play btn_reset' onClick={()=>props.play_pause()}></button>
          <button className='next btn_reset' onClick={()=>props.next_song()}></button>
          <audio 
          ref={audio} 
          className='player' 
          src={props.song} 
          onLoadedData={(e)=>{
            setduration(e.currentTarget.duration.toFixed(2))
          }}

          onTimeUpdate={(e)=>{
            setcurrent(e.currentTarget.currentTime.toFixed(2));
          }}
          autoPlay 
          type="audio/mp3"></audio>

          <div className='slider_container'>
            <div className='duration'>{(current/60).toFixed(0)}:{(current%60).toFixed(0)}</div>
            <input className='slider' ref={slide} onChange={update_duration} type={'range'} step={0.01}></input>
            <div className='duration'>{(duration/60).toFixed(0)}:{(duration%60).toFixed(0)}</div>
          </div>

          <input ref={volume} type={'range'} onChange={update_volume} className='volume_slider'></input>

      </div>     
    </div>
  )
}

export default Audio_player