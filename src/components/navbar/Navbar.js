import React from 'react';
import './Navbar.css';
import profilePic from './user.png';
import menu from './menu.png';

const Navbar = ({onMenuClick, onProfileClick, signedIn}) => {
  return (
    <nav>
      <div className='menuFlex'>
        <div className='menuBox'>
          <img
            className='link dim black underline pointer'
            src={menu} alt='menu'
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
          <img
            className='profilePhoto link dim black underline pointer'
            src={profilePic} alt='profilePic'
            onClick={() => onProfileClick()}
          />
          { signedIn
            ? <p>IN</p>
            : <p
              className='link dim underline pointer'
              onClick={() => onProfileClick()}
              >Sign In</p>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar
