import React, { Component } from "react";
import "./LogIn.css";
import { Redirect } from "react-router-dom";
export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { isAuth, handleSubmit } = this.props;

    if (isAuth) {
      return <Redirect to="/todos" />;
    }

    return (
      <div>
        <form
          className="login"
          onSubmit={event => handleSubmit(event, this.state)}
        >
          <h2>Login</h2>
          <input className="user"
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="Authorised Username is : ToTheNew"
          />
          <input className="pwd"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="Authorised Password is : TTN"
          />
          <input className="btn" type="submit" />
        </form>

      </div>
    );
  }
}

export default LogIn;
