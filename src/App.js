import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    };
  }
  handleClick = () => {
  this.setState({working: !this.state.working });
  };

  render() {
    const light = this.state.working ? 'pausse' : 'travail';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "logoo" : "App-logo"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
        <figure className={light} />
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }

}

export default App;