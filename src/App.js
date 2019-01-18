import React, { Component } from 'react';
import './App.css';

const Intro = (props) => (
  <p>
    Our first functional component
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h3>TV Series List</h3>
          </p>
          <Intro />
        </header>
      </div>
    );
  }
}

export default App;
