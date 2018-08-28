import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignupPage from './auth/Signup';
import SigninPage from './auth/Signin';
import ForgetPage from './auth/Forget';
import AccountPage from './user/Account';
import HomePage from './home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr/>

          <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.SIGNUP} component={() => <SignupPage />} />
          <Route exact path={routes.SIGNIN} component={() => <SigninPage />} />
          <Route exact path={routes.FORGET} component={() => <ForgetPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        </div>
      </Router>
    )
  }
}


export default App;
