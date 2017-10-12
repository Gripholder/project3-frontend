import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { withAuth } from './auth';
import './App.css';
import './css/materialize.css'
// import './js/materialize.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import logo from './smiley-phone.png'
import video from './phone-scroll.mp4'

export default withAuth(withRouter(props => {
  // Change the button that's displayed, based on our authentication status
  const button = props.auth.isAuthenticated() ?
    <li><a onClick={props.auth.logout.bind(null, props.history)}>Logout</a></li> :
    <li><a onClick={props.auth.login.bind(null, props.history)}>Login</a></li>;

  return (
    <div>
      <div>
     <header>
     <div class="navbar-fixed">
       <nav>
     <div class="nav-wrapper">
       <div id="logo">
         <img src={logo} href="/" className="App-logo brand-logo" alt="logo" />
         <h1 className="Logo-text brand-logo">iDidit</h1>
       </div>
       <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
       <ul class="right hide-on-med-and-down">
         <li><a href="sass.html">My Dashboard</a></li>
         {button}
         <li><a href="mobile.html">Mobile</a></li>
       </ul>
       <ul class="side-nav" id="mobile-demo">
         <li><a href="sass.html">Dashboard</a></li>
         <li><a href="badges.html">Login</a></li>
         <li><a href="collapsible.html">Logout</a></li>
         <li><a href="mobile.html">Mobile</a></li>
       </ul>
     </div>
   </nav>
 </div>
 </header>

 <div id="header-1">
   <video id="background-video" loop autoPlay>
     <source src={video} type="video/mp4" />
     <source src={video}  type="video/ogg" />
     Your browser does not support the video tag.
   </video>
 <h1 className="App-title">iDidit</h1>
 <h3> Procrastination meets its match </h3>
 </div>


   <div id="header-2">
     <h4 id="instructions-title"> How it works: </h4>
     <div id="instructions">
       <div class="instruction-steps">
       <i class="large material-icons">assignment</i>
       <h5 className="steps"> 1. Create tasks </h5>
       </div>

       <div class="instruction-steps">
       <i class="large material-icons">sms_failed</i>
       <h5 className="steps"> 2. Receive reminders </h5>
       </div>

       <div class="instruction-steps">
       <i class="large material-icons">done_all</i>
       <h5 className="steps"> 3. Get stuff done </h5>
       </div>

     </div>
     <a id="save-button" class="waves-effect waves-light btn-large" href="/home">I'm Ready!</a>
   </div>

   <footer class="page-footer">
       <div class="container">
         <div class="row">
           <div class="col l6 s12">
             <h5 class="white-text">Footer Content</h5>
             <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
           </div>
           <div class="col l4 offset-l2 s12">
             <h5 class="white-text">Links</h5>
             <ul>
               <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
               <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
               <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
               <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div class="footer-copyright">
         <div class="container">
         © 2014 Copyright Text
         <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
         </div>
       </div>
     </footer>

 </div>
   )
    </div>
  );
}));
