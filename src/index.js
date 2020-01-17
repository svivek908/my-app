import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact'  
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';

const routing = (  
    <Router>  
    <div>
      <img src={logo}></img>  
       {/* <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        <li>  
          <Link to="/contact">Contact</Link>  
        </li>  
      </ul>    */}
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>   
  )  
 
 ReactDOM.render(routing, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();
