import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import YouTube from 'react-youtube';

const videoIdA = 'XxVg_s8xAms';
const videoIdB = '-DX3vJiqxm4';

var config = {
  apiKey: "AIzaSyBexPxMhJxoKGW6CNaYJKeWY1Krgd9Efmw",
  authDomain: "test-3c2a1.firebaseapp.com",
  databaseURL: "https://test-3c2a1.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var converter = new Showdown.converter();

class Player extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      videoId: videoIdA,
      player: null,
    };
    
    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

onReady(event) {
  console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
  this.setState({
    player: event.target,
  });
}

onPlaying(event) {
  console.log("This is an event", event);
}

onPlayVideo() {
  console.log("I guess this is playing now");
  this.state.player.playVideo();
}

onPauseVideo() {
  console.log("I guess this is pausing now");
  console.log(this.state.player.PlayerState);
  this.state.player.pauseVideo();
}

onChangeVideo() {
  this.setState({
    videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
  });
}


render() {
  return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <YouTube videoId={this.state.videoId} onReady={this.onReady} onPlay={this.onPlaying} />
        <button onClick={this.onPlayVideo}>Play</button>
        <button onClick={this.onPauseVideo}>Pause</button>
        <button onClick={this.onChangeVideo}>Change Video</button>
      </div>
    );
    }
}

export default Player;
