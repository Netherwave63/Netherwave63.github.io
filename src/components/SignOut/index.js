import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    className="button is-link"
    onClick={() => firebase.doSignOut()}
  >
    Logout
  </button>
);

export default withFirebase(SignOutButton);