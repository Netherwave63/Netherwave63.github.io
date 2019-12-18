// dependencies
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// others
import { projects } from './constants';
import { doToggleModal } from '../Modal/action';

// ProjectCard
const ProjectDetails = ({ match, onToggleModal }) => {
  const {
    imgSrc1,
    imgSrc2,
    imgSrc3 = null,
    title,
    description,
    link,
    features
  } = projects[match.params.id];

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h2 className="title"><a href={link} target="_blank" rel="noopener noreferrer">{ title }</a></h2>
          <br />

          <h3 className="title is-size-5">Description</h3>
          <p>{ description }</p>
          <br />

          <h3 className="title is-size-5">Screenshot</h3>
          <div className="columns">
            <div className="column is-4">
              <figure className="image" onClick={() => onToggleModal(imgSrc1)}>
                <img src={imgSrc1} alt="screenshot-1" />
              </figure>
            </div>
            <div className="column is-4">
              <figure className="image" onClick={() => onToggleModal(imgSrc2)}>
                <img src={imgSrc2} alt="screenshot-2" />
              </figure>
            </div>
            {imgSrc3 &&
              <div className="column is-4">
                <figure className="image" onClick={() => onToggleModal(imgSrc1)}>
                  <img src={imgSrc3} alt="screenshot-3" />
                </figure>
              </div>
            }
          </div>
          <br />

          <h3 className="title is-size-5">Features</h3>
          <div className="content">
            <ul>
              {features.map(feature =>
                <li key={feature}>{feature}</li>
              )}
            </ul>
          </div>
          <br />
          
          <h3 className="title is-size-5">Link to the project</h3>
          <p><a href={link} target="_blank" rel="noopener noreferrer">{ link }</a></p>
          <br />
          <br />

          <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
            <button className="button">Back to Lists</button>
          </Link>
          <br />

          <hr />
        </div>
      </section>
    </React.Fragment>
  );
};

// export
const mapDispatchToProps = dispatch => ({
  onToggleModal: src => dispatch(doToggleModal(src))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(ProjectDetails));