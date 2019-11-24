// dependencies
import React from 'react';
import { compose } from 'recompose';

// higher order components
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

// components
import { SignUpLink } from '../SignUp';

// constants
import * as ROUTES from '../../constants/routes';

// main component -> SignInPage
const SignInPage = () => (
  <section class="section">
    <div class="container">
      <div class="box">
        <SignInForm />
      </div>
    </div>
  </section>
);

// component -> SignInForm
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = event => {
    const {
      email,
      password
    } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password, 
      error
    } = this.state;

    const isInvalid =
      email === '' ||
      password === '';

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 className="title has-text-centered">Sign In</h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                name="email"
                value={email}
                onChange={this.onChange}
                type="email"          
                placeholder="Email"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" disabled={isInvalid} className="button is-link">Login</button>
            </div>
          </div>
          
          {error && <p className="help">{error.message}</p>}

          <hr />

          <SignUpLink />
        </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;
