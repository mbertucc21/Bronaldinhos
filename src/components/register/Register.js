import React, {Component} from 'react';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
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

  onSubmitRegister = (e) => {
    e.preventDefault()
    // console.log(this.state)
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
        if (user) {
          console.log('*Register Success');
          // console.log('### USER ###');
          // console.log(user);
          this.props.loadUser(user)
          this.props.updateMenuRoute("profile");
        }
      })
  }

  render() {
    const { updateProfileRoute } = this.props;
    return (
      <div className="registerOpened">
        <h3>Register</h3>
        <form className="measure center">
          <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
          <input
            onChange={this.onUsernameChange}
            type="text" name="username" id="username" required />
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
            onClick={this.onSubmitRegister}>Register</button>
          <br/>
          <button onClick={() => updateProfileRoute("signin")}>Sign In</button>
        </form>
      </div>
    );

  }
}

export default Register

// = ({updateProfileRoute}) =>
