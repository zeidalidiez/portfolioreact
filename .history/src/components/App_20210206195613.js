// App.jsx
 
import React from 'react';
// Replace SVG file with your logo
import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App"> // Use 'className' instead of 'class'
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">
          <a href="" className="item">Projects</div>
          <a href="" className="item">Articles</div>
          <a href="" className="item">About</div>
        </div>
      </div>
    </div>
  );
}
 
export default App;