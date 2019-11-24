// dependencies
import React from 'react';

// higher order components
import { withFirebase } from '../Firebase';

// contexts
import { AuthUserContext } from './index';

// higher order component
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: JSON.parse(localStorage.getItem('authUser'))
      };
    }

    componentDidMount = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          this.setState({ authUser }) 
        } else {
          this.setState({ authUser: null });
        };
      });
    }

    componentWillUnmount = () => {
      this.listener();
      localStorage.removeItem('authUser');
    }

    render() {
      return (
        <AuthUserContext.Provider value={ this.state.authUser }>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }

  }

  return withFirebase(WithAuthentication);
}

export default withAuthentication;