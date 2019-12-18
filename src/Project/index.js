// dependencies
import React from 'react';

// others
import ProjectCard from './projectCard';

// state
import { projects } from './constants';

// Project
const Project = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Projects</h1>
        <br />
        <div className="columns">
        {projects.map(project =>
          <article key={project.id}>
            <ProjectCard project={project} />
            <br />
          </article>
        )}    
        </div>
    </div>
  </section>
);

// export 
export default Project;