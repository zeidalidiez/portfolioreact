import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link=""
        image=""
        title=""
        category=""
      />
    </div>
  )
}
 
export default Projects;