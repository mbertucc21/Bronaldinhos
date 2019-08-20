import React from 'react';
import './Navbar.css';
import user from './user.png';
import menu from './menu.png';

const Navbar = ({onMenuClick, onProfileClick, profilePhoto, signedIn}) => {
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
          { (!profilePhoto)
            ? <img
                className='profilePhoto link dim black underline pointer'
                src={user} alt='profile'
                onClick={() => onProfileClick()}
              />
            : <img
                className='profilePhoto new-profile-photo link dim black underline pointer'
                src={profilePhoto} alt='profile'
                onClick={() => onProfileClick()}
              />
          }
          { signedIn
            ? <p></p>
            : <p
              className='link dim underline pointer'
              onClick={() => onProfileClick()}>Sign In</p>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar
