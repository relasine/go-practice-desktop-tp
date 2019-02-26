import React, { Component } from "react";

import "./App.css";

import Landing from "./components/Landing";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: undefined
    };
  }

  setUser = user => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.user && <Landing setUser={this.setUser} />}
      </div>
    );
  }
}

export default App;
