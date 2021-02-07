// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <header>
    <Router>
      <div className="App">
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/About" component={About} />
  <nav>
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/Projects" className="item">Projects</Link>
            <Link to="/Articles" className="item">Articles</Link>
            <Link to="/About" className="item">About</Link>
  
          </div>
        </div>
        </nav>
      </div>
    </Router>
    <menu>
<h1> Example of fixed nav</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque exercitationem ipsa quisquam sunt ex blanditiis iure vero molestias impedit recusandae eius quasi unde assumenda molestiae, dolorem illum, aliquid aut neque?
        Error aut voluptatum molestias ad quidem odio labore eaque veniam fugiat earum, aliquid incidunt beatae nam pariatur minus voluptates atque suscipit cupiditate et! Tenetur eveniet delectus aspernatur? Perferendis, modi similique.
        Debitis eaque suscipit tenetur, laboriosam perferendis possimus voluptas expedita labore aspernatur. Nobis cum vel quae voluptates pariatur architecto quas labore assumenda ipsam sint tenetur, nisi in non alias quisquam atque.
        Animi, exercitationem ullam laudantium dolores praesentium distinctio illo, fugiat iusto soluta quibusdam eius? Quaerat reiciendis voluptatum voluptatibus porro saepe blanditiis nam iure odio soluta, cum ipsam, suscipit molestiae natus eius!
        Quasi, quae harum? Fuga facere facilis, cumque veniam voluptatum itaque aspernatur natus ratione nesciunt dolores qui, iste ullam dolorem totam accusantium officiis nisi hic esse reiciendis molestias. Unde, inventore fugiat?
        Corrupti similique consequatur provident aliquam voluptates minima modi voluptatibus exercitationem magni, consectetur delectus? Rerum quo cumque dolorem voluptatibus tempora, nesciunt laboriosam eum assumenda deserunt error ullam asperiores velit suscipit corrupti!
        Perspiciatis architecto illo quis dolore necessitatibus ad accusantium voluptatem esse ducimus! Modi facilis consequuntur mollitia asperiores praesentium. Tempora vero quod aliquam, alias quis, nisi cumque totam sed odit, hic suscipit.
        Aut molestias minus accusantium, cumque, aspernatur quia aliquam accusamus nostrum saepe, eius vero velit. Labore a deserunt voluptate illo, eum eos, ad saepe, eius temporibus quis eaque ea reiciendis soluta!
    </p>
</menu>
    </header>


  );
}
 
export default App;