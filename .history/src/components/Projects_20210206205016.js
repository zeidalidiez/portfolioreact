import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/dogwalker"
        image="https://i.imgur.com/BLBVkZO.png"
        title="Pandemic DogWalkers"
        category=""
      />
      <Thumbnail
        link="/spacedrep"
        image="https://i.imgur.com/M4Og8gT.png"
        title="Spaced Repetition Language Learning"
        category=""
      />
      <Thumbnail
        link="/readnext"
        image="https://i.imgur.com/1eDLzS9.png"
        title=""
        category=""
      />
      <Thumbnail
        link="/phasertest"
        image="https://i.imgur.com/QIRiV4R.png"
        title=""
        category=""
      />  
    </div>
  )
}
 
export default Projects;