import React from 'react';
import './Navbar.css';
import profilePic from './user.png';
import menu from './menu.png';

const SignIn = ({onMenuClick}) => {
  return (
    <nav>
      <div className='menuFlex'>
        <div className='menuBox'>
          <img
            className='link dim black underline pointer'
            src={menu} alt='menu'
            style={{height: 30}}
            onClick={() => onMenuClick()}
          />
        </div>
      </div>
      <div className='titleFlex'>
        <div className='titleBox'>
          <h2>Bronaldinhos</h2>
        </div>
      </div>
      <div className='signInFlex'>
        <div className='signInBox'>
          <img className='profilePhoto link dim black underline pointer' src={profilePic} alt='profilePic' style={{height: 30}} />
          <p className='link dim underline pointer'>Sign In</p>
        </div>
      </div>
    </nav>
  );
}

export default SignIn
