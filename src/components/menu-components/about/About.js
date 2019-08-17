import React from 'react';
import './About.css';
import Patternbar from '../../patternbar/Patternbar';

const About = () => {
  return(
    <div className='about'>
      <div className='about-container'>
        <Patternbar />
        <p>About... </p>
      </div>
    </div>
  );
}

export default About
