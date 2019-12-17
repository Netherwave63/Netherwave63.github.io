// dependencies
import React from 'react';

// About
const skills = [
  "HTML/CSS",
  "Javascript ES6",
  "CSS Framework (Bootstrap, Materialize, Bulma)",
  "Javascript Framework/ Library (React, Redux, Redux-Saga)",
	"Version Control with Git",	
  "Testing/ Mocking (Jest, Enzyme)",
	"Responsive Design",
	"Browser Developer Tools",
	"Command Line (Window Terminal)",
	"Integrate with Cloud Storage, Database, REST API, user authentication",
	"IDE Tools (Visual studio code, Atom, Notepad++)",
  "Basic Deployment"	
];

const About = () => (
  <React.Fragment>
    <section className="section">
      <div className="container">
        <h1 className="title">About me</h1>
        <p>Hello, I'm Netherwave, a passionate in web development. I am working towards the goal of becoming a web developer.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="content">
          <ul>
            {skills.map(skill =>
              <li key={skill}>{skill}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

const ProgressBar = ({ value, children }) => (
  <div>
    <p className="subtitle">{children}</p>
    <progress className="progress" value={value} max="100"></progress>
    <br />
  </div>
)

// export
export default About;