import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navigation from './Navigation';
import Landing from './Landing';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Forget from './auth/Forget';
import Account from './user/Account';
import Home from './home/Home';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>

      <Route exact path={routes.LANDING} component={() => <Landing />} />
      <Route exact path={routes.SIGNUP} component={() => <Signup />} />
      <Route exact path={routes.SIGNIN} component={() => <Signin />} />
      <Route exact path={routes.FORGET} component={() => <Forget />} />
      <Route exact path={routes.HOME} component={() => <Home />} />
      <Route exact path={routes.ACCOUNT} component={() => <Account />} />
    </div>
  </Router>

export default App;
