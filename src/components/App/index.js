import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';
import Series from '../../containers/series';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>TV Series List</h3>
          <Intro message="Here you can find all of your most loved series" />
          <Series />
        </header>
      </div>
    );
  }
}

export default App;