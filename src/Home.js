import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { withAuth } from './auth';
import './App.css';
import './css/materialize.css'

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
     <div className="navbar-fixed">
       <nav>
     <div className="nav-wrapper">
       <div id="logo">
         <img src={logo} href="/" className="App-logo brand-logo" alt="logo" />
         <h1 className="Logo-text brand-logo">iDidit</h1>
       </div>
       <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
       <ul className="right hide-on-med-and-down">
         <li><a href="sass.html">My Dashboard</a></li>
         {button}

       </ul>
       <ul className="side-nav" id="mobile-demo">
         <li><a href="sass.html">Dashboard</a></li>
         <li><a href="badges.html">Login</a></li>
         <li><a href="collapsible.html">Logout</a></li>

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
 <h3> Procrastination Meets Its Match </h3>
 </div>


   <div id="header-2">
     <h4 id="instructions-title"> How it works: </h4>
     <div id="instructions">
       <div className="instruction-steps">
       <i className="large material-icons">assignment</i>
       <h5 className="steps"> 1. Create tasks </h5>
       </div>

       <div className="instruction-steps">
       <i className="large material-icons">sms_failed</i>
       <h5 className="steps"> 2. Receive reminders </h5>
       </div>

       <div className="instruction-steps">
       <i className="large material-icons">done_all</i>
       <h5 className="steps"> 3. Get stuff done </h5>
       </div>

     </div>
     <a id="save-button" className="waves-effect waves-light btn-large" href="/home">I'm Ready!</a>
   </div>

   <footer className="page-footer">
       <div className="container">
         <div className="row">
           <div className="col l6 s12">
             <h5 className="white-text">Footer Content</h5>
             <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
           </div>
           <div className="col l4 offset-l2 s12">
             <h5 className="white-text">Links</h5>
             <ul>
               <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
               <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
             </ul>
           </div>
         </div>
       </div>
       <div className="footer-copyright">
         <div className="container">
         © 2014 Copyright Text
         <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
         </div>
       </div>
     </footer>
 </div>
    </div>
  );
}));
