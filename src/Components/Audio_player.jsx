import React, {useRef, useEffect, useState} from 'react'
import './Components_CSS/Audio_player.css'
import './Components_CSS/Slider.css'
import play from '../Components/images/controls/play.svg'
import pause from '../Components/images/controls/pause.svg'
import volume_on from '../Components/images/controls/volume_on.svg'
import volume_off from '../Components/images/controls/volume_off.svg'
import graph from '../Components/images/controls/graph.svg'
import graph_play from '../Components/images/controls/graph.gif'

function Audio_player(props) {
  const audio = useRef(0);
  const slide = useRef(0);
  const slide2 = useRef(0);
  const volume = useRef(0);

  const[grap, setGrap] = useState(graph);
  const[current, setcurrent] = useState(0);
  const[duration, setduration] = useState(0);
  const[curr_min, set_curr_min] = useState(0);
  const[curr_sec, set_curr_sec] = useState(0);
  const[dur_min, set_dur_min] = useState(0);
  const[dur_sec, set_dur_sec] = useState(0);

  let play_btn={
    backgroundImage: "url("+ play +")",
  };

  let pause_btn={
    backgroundImage: "url("+ pause +")",
  }

  useEffect(()=>{
    if(props.status === 'play'){
      audio.current.play();
      setGrap(graph_play);
    }
    else{
      audio.current.pause();
      setGrap(graph);
  }
  });

  useEffect(()=>{
    let minute = 0;
    let curr_duration = (current/duration)*100;

    //Change track after completion
    if(current === duration){
      props.next_song();
    }

    
    //Current Minutes
    set_curr_min('0' + Math.trunc(current/59))
    //Current seconds
    if((current%59).toFixed(0).length === 2){
      set_curr_sec((current%59).toFixed(0))
    }
    else{
      set_curr_sec('0' + (current%59).toFixed(0))
    }

    //Duration Minutes
    set_dur_min('0' + Math.trunc(duration/59))
    //Duration seconds
    if((duration%60).toFixed(0).length === 2){
      set_dur_sec((duration%60).toFixed(0))
    }
    else{
      set_dur_sec('0' + (duration%60).toFixed(0))
    }

    //thumb update
    // console.log(curr_duration)
    slide.current.value = curr_duration;
    slide2.current.value = curr_duration;
  }, [current])

  const update_duration = (e)=>{
    let curr_duration = (duration/100)*e.currentTarget.value;
    audio.current.currentTime = curr_duration;
  }

  const update_volume = (e)=>{
    audio.current.volume = e.currentTarget.value/100;
  }

  // Full player
  let full_player_css = {
    backgroundImage:"url("+props.song_img+")",
  }

  const[controller, setController]=useState({display:'none'});



  return (

    //First level
    <div>
    
    {/* child 1 */}
    <div className='playbar'>
      <div onClick={()=>{setController({})}} className='playBox'>
        <img className='graph' src={grap}></img>
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
          <div className='slider_container'>
            <div className='duration'>{curr_min}:{curr_sec}</div>
            <input className='slider' ref={slide2} onChange={update_duration} type={'range'} step={0.01}></input>
            <div className='duration'>{dur_min}:{dur_sec}</div>
          </div>

          <img className='volume' src={volume_on}></img>
          <input ref={volume} type={'range'} onChange={update_volume} className='volume_slider'></input>          

          {/* <a href={props.song} download="filename.mp3">DownloadButton</a>  */}

      </div>     
    </div>

    {/* child2 */}
    <div style={controller} className='full_player'>
      <div style={full_player_css}  className='full_player_img'></div>

      <div className='full_player_control'>

          <div className='full_playBox'>
            <img className='full_audio_image' src={props.song_img}></img>
              <div className='full_playbox_title'>{props.song_name}</div>
              <div className='full_playbox_album'>{props.song_album}</div>
              <div className='full_browse' >
                <button className='full_prev btn_reset'  onClick={()=>props.prev_song()}></button>
                <button style={{backgroundImage:props.status=='play'?"url("+pause+")":"url("+ play+")"}} className='full_play btn_reset' onClick={()=>props.play_pause()}></button>
                <button className='full_next btn_reset' onClick={()=>props.next_song()}></button>
              </div>
          </div>
          
          <div className='full_controls'>
              <div onClick={()=>{setController({display:'none'})}} className='full_back'></div>
              <div className='slider_container full'>
                <div className='duration'>{curr_min}:{curr_sec}</div>
                <input className='slider' ref={slide} onChange={update_duration} type={'range'} step={0.01}></input>
                <div className='duration'>{dur_min}:{dur_sec}</div>
              </div>

              <img className='volume' src={volume_on}></img>
              <input ref={volume} type={'range'} onChange={update_volume} className='volume_slider'></input>
              <audio 
              ref={audio} 
              className='player' 
              src={props.song}
              title={props.song_name}
              onLoadedData={(e)=>{
                setduration(e.currentTarget.duration.toFixed(0))
              }}

              onTimeUpdate={(e)=>{
                setcurrent(e.currentTarget.currentTime.toFixed(0));
              }}
              autoPlay 
              type="audio/mp3"
              controls
              ></audio>
          </div>
                
      </div>

    </div>
    </div>
  )
}

export default Audio_player