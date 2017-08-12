import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                name:''
        };
    }
  render() {
    return (
      <div className="App">
          <button onClick={()=> {this.setState({name:"kim fun"});}}>Click Me</button>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>kim1234aqt{this.state.name}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
