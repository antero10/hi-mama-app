import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PrivateRoute from 'react-private-route';
import logo from './logo.svg';
import './App.sass';
import PinCode from '../PinCode';
import Login from '../Login';
import Teachers from '../Teachers'

class App extends React.Component<any, any> {

  public isLoggedIn(): Boolean {
    return localStorage.getItem('user') !== null;
  }
  public render() {
    return (
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={PinCode} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/teachers" component={Teachers} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
