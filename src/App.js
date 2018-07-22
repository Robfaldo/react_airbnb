import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {
    const flat = {
      "price": 500,
      "priceCurrency": "£",
      "imageUrl": "https://s.iha.com/6521800004976/Holiday-lettings-Florence-Flat-Apartments_4.jpeg",
      "name": "Great flat"
    };

    const flats = [ flat, flat, flat, flat ];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {flats.map((flat) => {
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
