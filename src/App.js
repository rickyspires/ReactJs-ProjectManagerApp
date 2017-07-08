import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  
  constructor(){
  	super();
  	this.state = {
  		projects: [
  			{
  				title: "Business Website",
  				category: "webdesign"
  			},
  			{
  				title: "Social App",
  				category: "mobile dev"
  			},
   			{
  				title: "Ecommerce shop",
  				category: "web dev"
  			}

  		]
  	}
  }

  render() {
    return (
      <div className="App">

        <Projects projects={this.state.projects}/>
      
      </div>
    );
  }
}

export default App;
