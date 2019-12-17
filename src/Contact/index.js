// dependencies
import React from 'react';

// Contact
const Contact = () => {
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');

  const onSubmit = event => {
    alert("Thank you for submitting.");
    setUsername('');
    setMessage('');
    event.preventDefault();
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Contact me</h1>

        <div className="columns">
          <div className="column is-7">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                    type="text"
                    className="input"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea 
                    className="textarea" 
                    placeholder="Your message here"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-dark">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// export
export default Contact;