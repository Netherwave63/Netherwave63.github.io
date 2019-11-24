// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// component
import SignOutButton from '../SignOut';

// contexts
import { AuthUserContext} from '../Session';

// constants
import * as ROUTES from '../../constants/routes';

// main component -> Navigation
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth />
      ) : (
        <NavigationNonAuth />
    )}
  </AuthUserContext.Consumer>
);

// component -> NavigationAuth
const NavigationNonAuth = () => (
  <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <Link className="link title" to={ROUTES.LANDING}>ToDo</Link>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <Link className="button" to={ROUTES.SIGN_IN}>Login</Link>
              </div>
              <div className="level-item">
                <Link className="button is-link" to={ROUTES.SIGN_UP}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

// component -> NavigationNonAuth
const NavigationAuth = () => (
  <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <Link className="link title" to={ROUTES.LANDING}>ToDo</Link>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default Navigation;