import React, { Component } from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <Counter /><br />
        <AddCounter />
      </div>
    );
  }
}

export default App;
