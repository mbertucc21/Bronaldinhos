import React from 'react';
import './Profile.css';
import Patternbar from '../patternbar/Patternbar';

const Profile = ({user}) => {
  return(
    <div className='profile'>
      <div className='profile-container'>
        <Patternbar />
        <div>
        </div>
        <p>Here is your profile information...</p>
        <p>Hello {`${user.name}`}, welcome to your dashboard</p>
        <p>Please select a profile image: </p>
        <input type="file" />
      </div>
    </div>
  );
}

export default Profile
