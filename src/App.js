import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Patternbar from './components/patternbar/Patternbar';
import Menu from './components/menu-components/menu/Menu';
import About from './components/menu-components/about/About';
import Schedule from './components/menu-components/schedule/Schedule';
import Stats from './components/menu-components/stats/Stats';
import Photos from './components/menu-components/photos/Photos';
import Chat from './components/menu-components/chat/Chat';
import Signin from './components/profile-components/signin/Signin';
import Register from './components/profile-components/register/Register';
import Profile from './components/profile-components/profile/Profile';

class App extends Component {
  ////////////////////
  // STATE
  ////////////////////
  constructor() {
    super();
    this.state = {
      menuClicked: false,
      menuRoute: '',
      profileClicked: false,
      profileRoute: '',
      signedIn: false,
      currentUser: {
        id: '',
        name: '',
        email: '',
        joined: new Date()
      }
    }
  }

  ///////////////////////////////
  // MENU COMPONENT FUNCTIONS
  ///////////////////////////////
  onMenuClick = () => {
    if (!this.state.menuClicked){
      this.setState({menuClicked: true});
      this.setState({profileRoute: ''});
      this.setState({profileClicked: false});
    } else {
      this.setState({menuClicked: false});
      this.setState({menuRoute: ''});
    }
  }

  updateMenuRoute = (menuRoute) => { this.setState({menuRoute: menuRoute}) };

  renderMenuComponents = (menuRoute) => {
    if (menuRoute === "about") return (<About />);
    if (menuRoute === "schedule") return (<Schedule />);
    if (menuRoute === "stats") return (<Stats />);
    if (menuRoute === "photos") return (<Photos />);
    if (menuRoute === "chat") return (<Chat />);
  }

  ///////////////////////////////
  // PROFILE COMPONENT FUNCTIONS
  ///////////////////////////////
  onProfileClick = () => {
    if (!this.state.profileClicked){
      this.setState({profileClicked: true});
      this.setState({menuRoute: ''});
      this.setState({menuClicked: false});
      // If not signed in, updateProfileRoute to "signin" else gp tp "profile"
      this.updateProfileRoute("signin");
    } else {
      this.setState({profileClicked: false});
      this.setState({profileRoute: ''});
    }
  }

  updateProfileRoute = (profileRoute) => { this.setState({profileRoute: profileRoute}) };

  // Used in Signin and Register components
  loadUser = (data) => {
    this.setState({currentUser: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
      }
    })
  }

  // Used in Signin and Register components
  onSignedIn = () => { this.setState({signedIn: true}) };

  renderProfileComponents = (profileRoute) => {
    if (profileRoute === "signin") {
      return (
        <Signin
          updateProfileRoute={this.updateProfileRoute}
          loadUser={this.loadUser}
          onSignedIn={this.onSignedIn}
        />
      );
    }
    if (profileRoute === "register") {
      return (
        <Register
          updateProfileRoute={this.updateProfileRoute}
          loadUser={this.loadUser}
          onSignedIn={this.onSignedIn}
        />
      );
    }
    if (profileRoute === "profile") return (<Profile currentUser={this.state.currentUser} />);
  }

  ////////////////////
  // RENDER
  ////////////////////
  render() {
    return (
      <div className="App">

        {/* onsole.log("Width: ", window.innerWidth) */}
        {/* console.log("Height: ", window.innerHeight) */}
        {/* console.log("Menu Route: ", this.state.menuRoute) */}
        {/* console.log("Profile Route: ", this.state.profileRoute) */}

        <Navbar
          onMenuClick={this.onMenuClick}
          onProfileClick={this.onProfileClick}
          signedIn={this.state.signedIn}
        />

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

        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
          >
          {this.renderProfileComponents(this.state.profileRoute)}
        </CSSTransitionGroup>

      </div>
    );
  }

}

export default App;
