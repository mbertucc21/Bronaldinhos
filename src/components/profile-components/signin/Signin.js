import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      signInError: false
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  updateSigninError = (boolean) => {
    this.setState({signInError: boolean})
  };

  renderSigninError = (error) => {
    if (this.state.signInError) return (<p className="error-msg">Error: Invalid email or password</p>)
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
        // console.log("User:", user)
        if (user !== "INVALID SIGNIN") {
          // console.log('*Sign In Success');
          // this.updateSigninError(false);
          this.props.loadUser(user);
          this.props.onSignInOut('signIn');
        } else {
          // alert("sign in error: invalid username or password")
          this.updateSigninError(true);
        }
      })
  }

  render() {
    const { updateProfileRoute } = this.props;
    return (
    <div className="signinOpened">
      <h3>Sign In</h3>
      {this.renderSigninError(this.state.error)}
      <form method="POST" className="measure center">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email:</label>
        <input
          onChange={this.onEmailChange}
          type="email" name="email-address" id="email-address" required />
        <label className="db fw6 lh-copy f6" htmlFor="password">Password:</label>
        <input
          onChange={this.onPasswordChange}
          type="password" name="password" id="password" required />
        <br/>
        <button
          className="signin"
          onClick={this.onSubmitSignIn}>Sign In</button>
        <br/>
        <button
          className="register"
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
