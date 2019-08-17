import React, {Component} from 'react';
import './Profile.css';
import Patternbar from '../../patternbar/Patternbar';
import profilePic from './user.png';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }

  onImageChange = (event) => {
    console.log(event.target.files[0].type);
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }

  render() {
    return(
      <div className='profile'>
        <div className='profile-container'>
          <Patternbar />
          <div>
          </div>
          <p>Here is your profile information...</p>
          <p>Hello {`${this.props.currentUser.name}`}, welcome to your dashboard</p>
          <p>Please select a profile image: </p>
          { !this.state.image
            ? <img className="emptyUploadImg" src={profilePic} alt='profilePic' />
            : <img className="uploadImg" src={this.state.image} alt="profileImg" />
          }
          <br/>
          <input id="files" className="hidden" type="file" onChange={this.onImageChange} />
          <label className="selectFile" htmlFor="files">Select file</label>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Profile
