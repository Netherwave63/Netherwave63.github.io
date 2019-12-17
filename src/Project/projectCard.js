// dependencies
import React from 'react';

// ProjectCard
const ProjectCard = ({ project }) => {
  const {
    imgSrc1,
    imgSrc2,
    title,
    description,
    link,
    features
  } = project;

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h2 className="title"><a href={link} target="_blank">{ title }</a></h2>
          <br />

          <h3 className="title is-size-5">Description</h3>
          <p>{ description }</p>
          <br />

          <h3 className="title is-size-5">Screenshot</h3>
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <img src={imgSrc1} alt="screenshot-1" />
              </figure>
            </div>
            <div className="column is-4">
              <figure className="image">
                <img src={imgSrc2} alt="screenshot-2" />
              </figure>
            </div>
            {project.imgSrc3 &&
              <div className="column is-4">
                <figure className="image">
                  <img src={project.imgSrc3} alt="screenshot-3" />
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
          <p><a href={link} target="_blank">{ link }</a></p>
          <br />

          <hr />
        </div>
      </section>
    </React.Fragment>
  );
};

const Tag = ({ children }) => (
  <span>
    <span className="tag is-dark">
      {children}
    </span> 
    &nbsp;
  </span>
);

// export
export default ProjectCard;