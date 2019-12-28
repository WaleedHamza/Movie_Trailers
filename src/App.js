import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search/Search.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="appTitle">Movie Trailer Search App</h1>
        <img  alt= "powers-by-tmdb" width= "100" src ="powered-by-rectangle-green.svg" />
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
