// dependencies
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// components
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';

// higher order components
import { withAuthentication } from '../Session';

// constants
import * as ROUTES from '../../constants/routes';

// main component -> App
const App = () => (
  <Router>
    <Navigation />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
  </Router>
);

export default withAuthentication(App);

