import React from 'react';
import { Link } from 'react-router-dom';

const Navigation =  () => {
  const [isActive, toggleNavbar] = React.useState(false);

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Netherwave63
        </Link>
        <a 
          role="button"
          className={isActive ? "navbar-burger is-active" : "navbar-burger"}
          onClick={() => toggleNavbar(!isActive)}
          aria-label="menu"  
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item" onClick={() => toggleNavbar(!isActive)}>
            About
          </Link>
          <Link to="/projects" className="navbar-item" onClick={() => toggleNavbar(!isActive)}>
            Projects
          </Link>
          <Link to="/contact" className="navbar-item" onClick={() => toggleNavbar(!isActive)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;