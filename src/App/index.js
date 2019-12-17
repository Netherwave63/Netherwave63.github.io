// dependencies
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

// others
import Navigation from '../Navigation';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';

// App
const App = () => (
  <Router>
    <Navigation />

    <main>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>

    <footer className="footer">
      <p>By Netherwave @2019 <br/> Website in progress...</p>
    </footer>
  </Router>
);

// export 
export default App;