import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Logo from'./component/Logo/Logo';
import ImageLinkForm from'./component/ImageLinkForm/ImageLinkForm';
import Rank from'./component/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons' 

const particlesOptions = {
  particles: {
    number:{
      value: 80,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
