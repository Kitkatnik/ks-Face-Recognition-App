import React from 'react';

import './App.css';
import ParticlesBg from 'particles-bg'

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

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
    console.log('click')
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
