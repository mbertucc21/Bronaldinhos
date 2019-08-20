import React, {Component} from 'react';
import './Profile.css';
import user from './user.png';

// Leave as class component for now.
// Will want to update profilePhoto state in backend
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      profilePhoto: '',
    }
  }

  onImageChange = (event) => {
    // console.log(event.target.files[0].type);
    if (event.target.files && event.target.files[0]) {
      let image = URL.createObjectURL(event.target.files[0])
      this.props.newProfilePhoto(image);
    }
  }

  render() {
    return(
      <div className='profile'>
        <div className='profile-container'>
          <h3>Profile</h3>
          <p>Hello {`${this.props.currentUser.name}`}, welcome to your dashboard</p>
          <p>Change your profile photo: </p>
          { !this.props.profilePhoto
            ? <img className="emptyUploadImg" src={user} alt="profile" />
            : <img className="uploadImg" src={this.props.profilePhoto} alt="profile" />
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
