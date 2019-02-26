import React, { Component } from "react";

import "../css/ForgotPassword.css";

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      status: "entry"
    };
  }

  handleChange = event => {
    if (this.state.status === "fetching") {
      return;
    }

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.status === "fetching") {
      return;
    }

    if (!this.state.email) {
      this.setState({
        status: "incomplete"
      });
      return;
    }

    this.setState({
      status: "fetching"
    });

    try {
    } catch (error) {
      console.log(error);
      this.setState({
        status: "error"
      });
    }
  };

  render() {
    return (
      <form className="forgot-password" onSubmit={e => this.handleSubmit(e)}>
        <p className="forgot-password-label">Forgot your password?</p>
        <input
          className="forgot-password-input"
          name="email"
          type="email"
          onChange={e => this.handleChange(e)}
          placeholder="email"
        />
        <button>reset password</button>
        <p onClick={() => this.props.navigate("login")}>Back to log in</p>
      </form>
    );
  }
}

export default ForgotPassword;
