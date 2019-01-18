import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';

class App extends Component {
  state = {
    series: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h3>TV Series List</h3>
          </p>
          <Intro message="Here you can find all of your most loved series" />
          The lenght of series array - {this.state.series.length}
        </header>
      </div>
    );
  }
}

export default App;
