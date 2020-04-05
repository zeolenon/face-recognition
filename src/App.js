import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import SignIn from './component/SignIn/SignIn';
import Register from './component/Register/Register';
import Logo from'./component/Logo/Logo';
import ImageLinkForm from'./component/ImageLinkForm/ImageLinkForm';
import Rank from'./component/Rank/Rank';
import FaceRecognition from'./component/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
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

const app = new Clarifai.App({
 apiKey: 'e95f995cd391401fa7d8bf05e48d1839'
});




class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      listZeo: {},
      box: {},
      route: 'signin',
      isLoggedIn: false
    }
  }

// métodos para as funcionalidades/comunicação entre o container e os components

  calculateFaceLocation = (data,i) => {
  //  console.log(i,data)
    const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const pos = i;
    //const length = data.length;
    // console.log(width,height,clarifaiFace)
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (width * clarifaiFace.right_col),
      bottomRow : height - (height * clarifaiFace.bottom_row),
      pos,
    }
  }

  onFaceCalculation = (box,i) => {
    //console.log(box.type, box.length, i, box)
    this.setState({box: box})
  }
/*
  faceArrayMount = (items) => {
    this.setState({listZeo: items})
  }
*/
  onInputChange = (event) => {
    // método que seta um valor a uma variável de estado (input) a partir de uma ação de usuário (event)
    this.setState({input: event.target.value})
    
  }

  onButtonClick = () => {

    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => {
          
           // console.log(response.outputs[0].data.regions.length)
            response.outputs[0].data.regions.forEach((regions,i) => {
              this.onFaceCalculation(
                this.calculateFaceLocation(response, i)
              )
            })
          
    /*    this.onFaceCalculation(
          this.calculateFaceLocation(response, response.regions.length)
        )
      ) */
    })
    
      
    .catch(err=>console.log('no face'))
  }

onRouteChange = (route) => {
  if (route === 'signin') {
    this.setState({isLoggedIn: false} )
  } else if (route === 'home'){
    this.setState({isLoggedIn: true} )
  }
  this.setState({route: route})
}



  render(){
    const { imageUrl, box, isLoggedIn, route} = this.state;
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation 
          isLoggedIn = {isLoggedIn} 
          onRouteChange = {this.onRouteChange}/>
        { route === 'home' 
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
                  onInputChange = {this.onInputChange}
                  onButtonClick = {this.onButtonClick}
                />
              <FaceRecognition 
                box = {box}
                imageUrl= {imageUrl} 
              />
            </div>
          : ( 
              route === 'signin'
              ? <SignIn
                isLoggedIn = {isLoggedIn} 
                onRouteChange = {this.onRouteChange} 
              />
              : <Register onRouteChange = {this.onRouteChange} />
           )
        }
      </div>
    );
  }
}

export default App;
