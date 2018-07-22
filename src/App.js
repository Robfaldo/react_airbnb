import React, { Component } from 'react';
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

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
          // this.state is set in the constructor 
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
