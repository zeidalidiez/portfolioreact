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
        link="https://github.com/zeidalidiez/spaced-repetition"
        image="https://i.imgur.com/M4Og8gT.png"
        title="Spaced Repetition Language Learning"
        category=""
      />
      <Thumbnail
        link="https://github.com/zeidalidiez/ZRPG_Frontend"
        image="https://i.imgur.com/1eDLzS9.png"
        title="ReadNext - A book reader's To-Do List"
        category=""
      />
      <Thumbnail
        link="https://github.com/zeidalidiez/Phaser-Test"
        image="https://i.imgur.com/QIRiV4R.png"
        title="Phaser 2D webrpg proof of concept"
        category=""
      />  
    </div>
  )
}
 
export default Projects;