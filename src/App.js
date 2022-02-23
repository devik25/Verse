import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import Song_card from './Components/Song_card';
import Songs_container from './Components/Songs_container';
import './App.css';

// async fetch_song_list(){
//   let url = 'https://jiosaavn-api-v3.vercel.app/search?query=jubin';
//   const response = await fetch(url);
//   const data = await response.json();
//   let song = data.results[0].api_url.song;
//   const song_response = await fetch(song);
//   const song_data = await song_response.json();
//   console.log(song_data.media_url);
//   this.setState({song_link:song_data.media_url});
// }

class App extends Component {
  state = { 
    searched:'havana',
    queued_list:null,
    current_song:null,
    current_song_link:null,
    song_count:0
};

async update_queue(){
  let url = 'https://jiosaavn-api-v3.vercel.app/search?query='+this.state.searched;
  const response = await fetch(url);
  const data = await response.json();
  this.setState({queued_list:data.results});
  this.song_player();
  console.log(this.state.queued_list);
}

async song_player(){
  let song = this.state.queued_list[this.state.song_count].api_url.song;
  const response = await fetch(song);
  const data = await response.json();
  this.setState({current_song:data});
  this.setState({current_song_link:data.media_url});
}

async next_song(){
  const l = this.state.queued_list.length;
  let cnt = this.state.song_count;
  if(cnt == l-1) cnt=0;
  else cnt++;
  this.setState({song_count:cnt});
  this.song_player();
}

async prev_song(){
  const l = this.state.queued_list.length;
  let cnt = this.state.song_count;
  if(cnt == 0) cnt=l-1;
  else cnt--;
  this.setState({song_count:cnt});
  this.song_player();
}


  render() { 
    return (
      
      <div className='main_section'>

        {/* <div className='left'>
          <Sidebar/>
        </div>
            
        <div className='right'> 
          <div className='black_grad'>
            <Searchbar_light/>     
            <Songs_container/>
            <Songs_container/>
          </div>
        </div>         */}
        
        <button onClick={()=>this.prev_song()}>prev</button>
        <button onClick={()=>this.update_queue()}>Play</button>
        <button onClick={()=>this.next_song()}>next</button>
        <div>
        <audio src={this.state.current_song_link} controls autoPlay type="audio/mp3"></audio>
        </div>

      </div>

    );
  }
}
 
export default App;
