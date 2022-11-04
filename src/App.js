import React from 'react';

import './App.css';
import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai';

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
// import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const USER_ID = 'adhdcoder';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'bf604ccf0cc54ae8a91711967c79b462';
const APP_ID = 'facerecognitionbrain';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": USER_ID,
    "app_id": APP_ID
  },
  "inputs": [
    {
      "data": {
        "image": {
          "url": IMAGE_URL
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key ' + PAT
  },
  body: raw
};

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  render(){
    return (
      <div className="App">
        <ParticlesBg 
          className='particles' 
          type='cobweb' 
          color='#ffffff' 
          num={100} 
          bg={true} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
