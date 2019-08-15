import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
// import Patternbar from './components/patternbar/Patternbar';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Schedule from './components/schedule/Schedule';
import Stats from './components/stats/Stats';
import Photos from './components/photos/Photos';
import Chat from './components/chat/Chat';

class App extends Component {

  // STATE
  constructor() {
    super();
    this.state = {
      menuClicked: false,
      menuRoute: 'home',
      profileRoute: 'home',
      signedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: new Date()
      }
    }
    // console.log("---constructor---")
  }

  // ComponentDidMount (Fetching from BackEnd Database)
  componentDidMount() {
    console.log("---componentDidMount---")
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(console.log)
  }

  // FUNCTIONS
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
      }
    })
  }

  onMenuClick = () => {
    if (!this.state.menuClicked){
      this.setState({menuClicked: true});
    } else {
      this.setState({menuClicked: false});
      this.setState({menuRoute: 'home'})
    }
  }

  onSignedIn = () => {
    this.setState({signedIn: true});
  }

  updateProfileRoute = (profileRoute) => {
    this.setState({menuRoute: "home"});
    this.setState({profileRoute: profileRoute});
  }

  renderProfileComponents = (profileRoute) => {
    // console.log("profileRoute: ", profileRoute)
    if (profileRoute === "signin") return (<Signin updateProfileRoute={this.updateProfileRoute} updateMenuRoute={this.updateMenuRoute} loadUser={this.loadUser} onSignedIn={this.onSignedIn}/>);
    if (profileRoute === "register") return (<Register updateProfileRoute={this.updateProfileRoute} updateMenuRoute={this.updateMenuRoute} loadUser={this.loadUser} onSignedIn={this.onSignedIn}/>);
  }

  updateMenuRoute = (menuRoute) => {
    this.setState({profileRoute: "home"});
    this.setState({menuRoute: menuRoute});
  }

  renderMenuComponents = (menuRoute) => {
    if (menuRoute === "profile") return (<Profile user={this.state.user} />);
    if (menuRoute === "about") return (<About />);
    if (menuRoute === "schedule") return (<Schedule />);
    if (menuRoute === "stats") return (<Stats />);
    if (menuRoute === "photos") return (<Photos />);
    if (menuRoute === "chat") return (<Chat />);
  }

  renderNullComponent = () => {
    this.setState({CSSTransition: true});
    return null;
  }

  // RENDER
  render() {
    // console.log("---render---")
    return (
      <div className="App">

        {/* onsole.log("Width: ", window.innerWidth) */}
        {/* console.log("Height: ", window.innerHeight) */}

        <Navbar
          updateProfileRoute={this.updateProfileRoute}
          onMenuClick={this.onMenuClick}
          signedIn={this.state.signedIn}
        />

        {this.renderProfileComponents(this.state.profileRoute)}

        <Menu
          menuClicked={this.state.menuClicked}
          onMenuClick={this.onMenuClick}
          updateMenuRoute={this.updateMenuRoute}
        />

        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
          >
          {this.renderMenuComponents(this.state.menuRoute)}
        </CSSTransitionGroup>

      </div>
    );
  }
}

export default App;
