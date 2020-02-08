// dependencies
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import { connect } from 'react-redux';

// others
import Navigation from '../Navigation';
import About from '../About';
import Project from '../Project';
import ProjectDetails from '../Project/projectDetails';
import Contact from '../Contact';
import Modal from '../Modal';

// App
const App = ({ isActive }) => (
  <Router>
    <Navigation />

    <main>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      {isActive ? <Modal /> : null}
    </main>

    <footer className="footer">
      <p>By Netherwave @2020 <br/> Website in progress...</p>
    </footer>
  </Router>
);

// export 
const mapStateToProps = state => ({
  isActive: state.modalState.isActive
});

export default connect(
  mapStateToProps
)(App);