import React, { Component } from "react";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

import "../css/Landing.css";

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "login"
    };
  }

  navigate = activePage => {
    this.setState({ activePage });
  };

  render() {
    return (
      <main>
        {this.state.activePage === "login" && (
          <Login setUser={this.props.setUser} navigate={this.navigate} />
        )}
        {this.state.activePage === "signup" && (
          <Signup navigate={this.navigate} />
        )}
        {this.state.activePage === "forgot password" && (
          <ForgotPassword navigate={this.navigate} />
        )}
        <div />
      </main>
    );
  }
}

export default Landing;
