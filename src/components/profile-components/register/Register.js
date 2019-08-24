import React, {Component} from 'react';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      registerError: ''
    }
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  updateRegisterError = (errorMsg) => {
    this.setState({registerError: errorMsg})
  };

  renderRegisterError = (error) => {
    if (this.state.registerError === 'error01') return (<p className="error-msg">Error: Please enter a username</p>)
    if (this.state.registerError === 'error02') return (<p className="error-msg">Error: Invalid Email</p>)
    if (this.state.registerError === 'error03') return (<p className="error-msg">Error: Password must be at least 6 characters long</p>)
    if (this.state.registerError === 'error04') return (<p className="error-msg">Error: Email already registered</p>)
  }

  // Should do this in backend too
  validateUsername = (username) => {
    if (username.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // Should do this in the backend
  validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // For now, just need 6 characters
  validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  onSubmitRegister = (e) => {
    e.preventDefault()

    let validUsername = false;
    let validEmail = false;
    let validPassword = false;
    // IF VALID USERNAME
    if (this.validateUsername(this.state.username)) validUsername = true;
    else this.updateRegisterError("error01");
    // IF VALID USERNAME, CHECK IF VALID EMAIL 
    if (validUsername) {
      if (this.validateEmail(this.state.email)) validEmail = true;
      else this.updateRegisterError("error02");
    }
    // IF VALID USERNAME && EMAIL, CHECK IF VALID PASSWORD
    if (validUsername && validEmail) {
      if (this.validatePassword(this.state.password)) validPassword = true;
      else this.updateRegisterError("error03");
    }

    if (validUsername && validEmail && validPassword) {
      fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user !== 'INVALID REGISTER') {
          // console.log('*Register Success');
          // console.log(user);
          this.props.loadUser(user)
          this.props.onSignInOut('signIn');
        } else {
          // alert("register error: email already registered")
          this.updateRegisterError("error04");
        }
      })
    }
  }

  render() {
    const { updateProfileRoute } = this.props;
    return (
      <div className="registerOpened">
        <h3>Register</h3>
        {this.renderRegisterError(this.state.error)}
        <form className="measure center">
          <label className="db fw6 lh-copy f6" htmlFor="username">Username:</label>
          <input
            onChange={this.onUsernameChange}
            type="text" name="username" id="username" required />
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
            className="register"
            onClick={this.onSubmitRegister}>Register</button>
          <br/>
          <button
            className="signin"
            onClick={() => updateProfileRoute("signin")}>Sign In</button>
        </form>
      </div>
    );

  }
}

export default Register

// = ({updateProfileRoute}) =>
