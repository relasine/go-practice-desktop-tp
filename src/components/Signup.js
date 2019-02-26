import React, { Component } from "react";

import "../css/Signup.css";

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
  };

  render() {
    return (
      <form className="signup" onSubmit={e => this.handleSubmit(e)}>
        <p className="signup-label">Register an account</p>
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
