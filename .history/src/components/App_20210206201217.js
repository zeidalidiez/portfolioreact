// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="./components/Projects" component={Projects} />
        <Route path="./components/Articles" component={Articles} />
        <Route path="./components/About" component={About} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="./components/Projects" className="item">Projects</Link>
            <Link to="./components/Articles" className="item">Articles</Link>
            <Link to="./components/About" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;