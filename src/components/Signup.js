import React, { Component } from "react";

import "../css/Signup.css";

import { callSignup } from "../utilities/fetchcalls";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      status: "entry",
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    if (this.state.status === "fetching") {
      return;
    }

    this.setState({
      [event.target.name]: event.target.value,
      status: "entry"
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.status === "fetching") {
      return;
    }

    if (
      !this.state.email ||
      !this.state.name ||
      !this.state.password ||
      !this.state.confirmPassword
    ) {
      this.setState({
        status: "incomplete"
      });
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        status: "no match"
      });
    }

    this.setState({
      status: "fetching"
    });

    this.sendSignupRequest();
  };

  sendSignupRequest = async () => {
    const payload = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    try {
      const response = await callSignup(payload);

      if (response === "Succesfully added user") {
        this.setState({
          status: "success"
        });
      } else if (response === "User already exists") {
        this.setState({
          status: "duplicate"
        });
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
      <form className="signup" onSubmit={e => this.handleSubmit(e)}>
        {status === "entry" && (
          <p className="signup-label">Register an account</p>
        )}
        {status === "error" && (
          <p className="signup-label">Server error - try again later</p>
        )}
        {status === "success" && (
          <p className="signup-label">Success! New account created.</p>
        )}
        {status === "duplicate" && (
          <p className="signup-label">
            Email address already assigned to an account.
          </p>
        )}
        {status === "fetching" && (
          <p className="signup-label">Signing you up...</p>
        )}
        {status === "incomplete" && (
          <p className="signup-label">Please fill all fields to sign up.</p>
        )}
        <input
          className="signup-input"
          name="name"
          onChange={e => this.handleChange(e)}
          placeholder="name"
        />
        <input
          className="signup-input"
          name="email"
          onChange={e => this.handleChange(e)}
          placeholder="email address"
          type="email"
        />
        <input
          className="signup-input"
          name="password"
          type="password"
          onChange={e => this.handleChange(e)}
          placeholder="password"
        />
        <input
          className="signup-input"
          name="confirmPassword"
          type="password"
          onChange={e => this.handleChange(e)}
          placeholder="confirm password"
        />
        <button>sign up</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => this.props.navigate("login")}>Log in!</span>
        </p>
      </form>
    );
  }
}

export default Signup;
