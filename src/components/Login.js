import React, { Component } from "react";

import "../css/Login.css";
import { callLogin } from "../utilities/fetchcalls";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      status: "entry"
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

    if (!this.state.email || !this.state.password) {
      this.setState({
        status: "incomplete"
      });
      return;
    }

    this.login();
  };

  login = async () => {
    this.setFetching();
    const payload = { email: this.state.email, password: this.state.password };

    try {
      const user = await callLogin(payload);

      if (user === "Email/password do not match our records") {
        this.setState({
          status: "no match"
        });
      } else if (user.webtoken) {
        this.props.setUser(user);
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: "error" });
    }
  };

  setFetching = () => {
    this.setState({
      status: "fetching"
    });
  };

  render() {
    return (
      <form className="login" onSubmit={e => this.handleSubmit(e)}>
        <p className="login-label">Log in to Go Practice Teacher Portal</p>
        <input
          className="login-input"
          name="email"
          type="email"
          onChange={e => this.handleChange(e)}
          placeholder="email address"
        />
        <input
          className="login-input"
          name="password"
          type="password"
          onChange={e => this.handleChange(e)}
          placeholder="password"
        />
        <button>log in</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => this.props.navigate("signup")}>Sign up!</span>
        </p>
        <p onClick={() => this.props.navigate("forgot password")}>
          Forgot your password?
        </p>
      </form>
    );
  }
}

export default Login;
