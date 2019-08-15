import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = (e) => {
    e.preventDefault()
    // console.log(this.state)
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log("User:", user)
        // if (data === 'success') {
        if (user) {
          console.log('*Sign In Success');
          this.props.loadUser(user);
          this.props.onSignedIn();
          this.props.updateMenuRoute("profile");
        }
      })
  }

  render() {
    const { updateProfileRoute } = this.props;
    return (
    <div className="signinOpened">
      <h3>Sign In</h3>
      <form method="POST" className="measure center">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
          onChange={this.onEmailChange}
          type="email" name="email-address" id="email-address" required />
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
          onChange={this.onPasswordChange}
          type="password" name="password" id="password" required />
        <br/>
        <button
          onClick={this.onSubmitSignIn}>Sign In</button>
        <br/>
        <button
          onClick={() => updateProfileRoute("register")}>Register</button>
      </form>
    </div>
    );
  }
}

export default Signin

// Previously a function component
// = ({updateProfileRoute}) =>
// Now need to change to this.props.updateProfileRoute...
