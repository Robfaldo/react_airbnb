import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    // this line makes sure react still works
    super(props);
    this.state = {
      flats: []
    };
  }

  // componentDidMount is a special function which is
  // called by react when a component is ready to be
  // displayed in the browser
  componentDidMount() {
    // fetch takes url as an argument and returns promise
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      // THEN transform the response into a json object
      .then(response => response.json())
      // THEN take the information I get from the api and
      // assign it to the component state
      .then((data) => {
        // this line sets the state of the component
        this.setState({
          // flats is what I want to update in the components state
          // data is the value I want to give it
          flats: data
        })
      });
  }

  // this.state is set in the constructor
  render() {
      // I use this inside the map div because its
      // used by GoogleMapReact for where to center the map 
      const center = {
        lat: 48.8566,
        lng: 2.3522
      }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={11}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
