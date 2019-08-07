import React from 'react';
import './Signin.css';

const Signin = ({signinClicked}) => {
  if (signinClicked){
    return (
      <div className="signinOpened">
        <h3>Sign In</h3>
        <form className="measure center">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input type="email" name="email-address" id="email-address" required />
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Password</label>
          <input type="password" name="password" id="password" required />
          <br/>
          <button class="btn success">Sign In</button>
        </form>
      </div>
    );
  } else {
    return(
      <div className="signinClosed">
      </div>
    );
  }
}

export default Signin
