import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search/Search.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Movie Search App</h1>
        <img  alt= "powers-by-tmdb" width= "50" src ="powered-by-rectangle-green.svg" />
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
