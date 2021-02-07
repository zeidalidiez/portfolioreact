import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-image">
            <br>
          <img src={props.image} alt="selected thumbnail"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
            </a>
    </div>
  )
}
 
export default Thumbnail;