// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <header>
    <Router>
      <div className="App">
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={About} />
  <nav>
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/Projects" className="item">Projects</Link>
            <Link to="/Contact" className="item">Contact</Link>
            <Link to="/About" className="item">About</Link>
  
          </div>
        </div>
        </nav>
      </div>
    </Router>
    <menu>

</menu>
    </header>


  );
}
 
export default App;