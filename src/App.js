import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker'

class App extends Component {
  constructor(props) {
    // this line makes sure react still works
    super(props);
    this.state = {
      flats: [],
      // allFlats never changes
      allFlats: [],
      // when i start the application, I don't
      // want there to be any selected flat
      selectFlat: null,
      // search when you start is empty
      search: ""
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
          flats: data,
          allFlats: data
        })
      });
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  // handleSearch will be an event that gets
  // logged every time
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(
        (flat) => new RegExp(event.target.value, "i")
        .exec(flat.name)
      )
    });
  }

  // this.state is set in the constructor
  render() {
      // I use this inside the map div because its
      // used by GoogleMapReact for where to center the map
      let center = {
        lat: 48.8566,
        lng: 2.3522
      }

      // If there is a selected flat (i.e. one has been clicked)
      if (this.state.selectedFlat) {
        center = {
          lat: this.state.selectedFlat.lat,
          lng: this.state.selectedFlat.lng,
        }
      }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat
              key={flat.name}
              flat={flat}
              selectFlat={this.selectFlat} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5zl80idoE-5Wcs3opYzv3miodl0BVwFM" }}
            center={center}
            zoom={11}
          >
          {this.state.flats.map((flat) => {
            return <Marker
              key={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              selected={flat === this.state.selectedFlat} />
          })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
