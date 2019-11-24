// dependencies
import React from 'react';
import { compose } from 'recompose';

// higher order components
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

// contexts
import { AuthUserContext } from '../Session';

// constants
import * as ROUTES from '../../constants/routes';

// higher order components
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.LANDING);
        };
      })  
    }

    componentWillUnmount = () => {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? (
            <Component {...this.props} /> 
            ) : (
            null
          )}
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
} 

export default withAuthorization;