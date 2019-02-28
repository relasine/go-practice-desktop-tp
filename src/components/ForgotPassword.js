import React, { Component } from "react";

import "../css/ForgotPassword.css";

import { callResetPassword } from "../utilities/fetchcalls";

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

    this.sendResetRequest();
  };

  sendResetRequest = async () => {
    try {
      const response = await callResetPassword(this.state.email);

      if (response === "Password reset email sent") {
        this.setState({
          status: "success",
          email: ""
        });
      } else if (response === "User not found") {
        this.setState({
          status: "no match"
        });
      } else {
        throw Error;
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      this.setState({
        status: "error"
      });
    }
  };

  render() {
    const { status } = this.state;
    return (
      <form className="forgot-password" onSubmit={e => this.handleSubmit(e)}>
        {status === "entry" && (
          <p className="forgot-password-label">Forgot your password?</p>
        )}
        {status === "incomplete" && (
          <p className="forgot-password-label">
            Please enter your email address
          </p>
        )}
        {status === "error" && (
          <p className="forgot-password-label">
            Server error - please try again later
          </p>
        )}
        {status === "no match" && (
          <p className="forgot-password-label">
            Email address does not match any account
          </p>
        )}
        {status === "success" && (
          <p className="forgot-password-label">
            Success! New password sent to your email
          </p>
        )}
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
