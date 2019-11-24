// dependencies
import React from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

// higher order components
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

// constants
import * as ROUTES from '../../constants/routes';

// main component -> SignUpPage
const SignUpPage = () => (
  <section className="section">
    <div className="container">
      <div className="box">
        <SignUpForm />
      </div>
    </div>
  </section>
);

// component -> SignUpForm
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.SIGN_IN);
      })
      .catch(error => {
        this.setState({ error });
      });
    
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onClick = event => {
    this.props.history.push(ROUTES.LANDING);
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;
    
    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 className="title has-text-centered">Sign Up</h1>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input 
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Username"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                name="email"
                value={email}
                onChange={this.onChange}
                type="email"
                placeholder="Email address"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input 
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm password"
                className="input"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button 
                disabled={isInvalid} 
                type="submit" 
                className="button is-link"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                type="button"
                onClick={this.onClick}
                className="button is-link is-light"
              >
                Back
              </button>
            </div>
          </div>

          {error && <p className="help">{error.message}</p>}
        </form>    
      </div>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

// component -> SignUpLink
const SignUpLink = () => (
  <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
);

export default SignUpPage;

export { SignUpLink };