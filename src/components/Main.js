import React, { Component } from "react";

import "../css/Main.css";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "classes"
    };
  }

  navigate = activePage => {
    this.setState({
      activePage
    });
  };

  render() {
    return (
      <main className="main">
        <div />
      </main>
    );
  }
}
