// dependencies
import React from 'react';

// higher order components
import { AuthUserContext } from './';
import { withFirebase } from '../Firebase';

// higher order component
const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData.map(provider => provider.providerId).includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isSent: false 
      };
    }
    
    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    }
    
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => 
            needsEmailVerification(authUser) ? (
            <section className="section">
              <div className="container has-text-centered">
                {this.state.isSent ? (
                  <p className="subtitle">
                    E-mail confirmation sent: Check your E-mails (Spam folder included) for a confirmation E-mail.
                    Refresh this page once you confirmed your E-Mail.
                  </p>
                ) : (
                  <p className="subtitle">
                    <span>Verify your Email: Check your E-mails (Spam folder included) for a confirmation E-mail or </span>
                    <span>
                      <a 
                        onClick={this.onSendEmailVerification}
                      >
                        send another confirmation E-mail
                      </a>
                    </span>
                  </p>
                )}
                
              </div>
            </section>
          ) : (
            <Component {...this.props} />
          )}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithEmailVerification);
}

export default withEmailVerification;