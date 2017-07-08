import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        my app<br/>

        <Projects test="Hello World"/><br/>
        
        <Projects/>
      </div>
    );
  }
}

export default App;
