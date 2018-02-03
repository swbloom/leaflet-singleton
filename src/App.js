import React, { Component } from 'react';
import logo from './logo.svg';
import L from 'leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css'
import Map from './leaflet';
import OtherComponent from './OtherComponent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    const map = Map.getMap() // instantiates the singleton

    this.setState({
      loaded: true,
    })

  }
  render() {
    return (
      <div id="map">
        {this.state.loaded &&
          <OtherComponent />
        }
      </div>
    );
  }
}

export default App;
