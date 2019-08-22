import React from 'react';
import './About.css';

const About = () => {
  return(
    <div className='about'>
      <div className='about-title'>
        <h3>About</h3>
      </div>
      <div className='about-container'>
        <p> Welcome to the Bronaldinhos (Beta) Web App!  This web application
        was designed by <u>key</u> team member Marco Bertucci. </p>
        <p> This Web App is currently in the Beta stages of testing, and some
        components are still under development.  The completed Web App will be
        able to display the Bronaldinho's team schedule, stats and photos. A
        message board is also currently under development.  Users are welcome to
        register accounts. </p>
        <p> Feel free to play around with the Web App.  If you have any comments,
        concerns or suggestions to improve this app, please do not hesitate
        to email Marco at <u>mbertucci92@gmail.com</u>.  Thank you for visiting
        the Bronaldinhos (Beta) Web App! </p>
      </div>
    </div>
  );
}

export default About
