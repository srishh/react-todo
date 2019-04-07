import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
 
} from "react-router-dom";

import TodoListStyle from './Components/TodoList';
import LogIn from "./Components/LogIn";
import LogOut from "./Components/LogOut";
import HomeStyle from "./Components/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      username: "ToTheNew",
      password: "TTN"
    };
  }

  handleSubmit = (event, item) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (item.username === username && item.password === password) {
      this.setState({
        isAuth: true
      });
    } else {
      this.setState({
        isAuth: false
      });
    }
  };

  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth
    });
  };

  render() {
    return (
      <Router>
      <HomeStyle isAuth={this.state.isAuth} />

      <Route
        exact
        path="/"
        render={() => <p>You have to Login first to see this content</p>}
      />

      <PrivateComponent
        path="/todos"
        isAuth={this.state.isAuth}
        component={TodoListStyle}
      />

    
      <Route
        path="/login"
        component={path => (
          <LogIn
            handleSubmit={this.handleSubmit}
            isRedirected={path}
            isAuth={this.state.isAuth}
          />
        )}
      />
      <Route
        path="/logout"
        component={() => (
          <LogOut
            toggleAuth={this.toggleAuth}
            isAuth={this.state.isAuth}
          />
        )}
      />
    </Router>
    );
  }

}

export default App;

const PrivateComponent = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: isAuth
            }}
          />
        )
      }
    />
  );
};