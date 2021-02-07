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
        <Route path="./Projects" component={Projects} />
        <Route path="./Articles" component={Articles} />
        <Route path="./About" component={About} />
  
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="./Projects" className="item">Projects</Link>
            <Link to="./Articles" className="item">Articles</Link>
            <Link to="./About" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;