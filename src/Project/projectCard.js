// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// ProjectCard
const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    imgSrc1,
    id
  } = project;

  return (
    <div className="column">
      <Link to={`/projects/${id}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="card">
        <div className="card-image" style={{ borderBottom: "1px solid #d3d3d3"}}>
          <figure className="image">
            <img src={ imgSrc1 } alt={ title } />
          </figure>
        </div>
        
        <div className="card-content">
          <p className="subtitle">{ title }</p>   
          <p>{ description }</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

// export
export default ProjectCard;