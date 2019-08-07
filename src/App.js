import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/Signin';
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
      signinClicked: false,
      menuRoute: 'home'
    }
  }

  // FUNCTIONS
  onMenuClick = () => {
    if (!this.state.menuClicked){
      this.setState({menuClicked: true});
    } else {
      this.setState({menuClicked: false});
      this.setState({menuRoute: 'home'})
    }
  }

  onSigninClick = () => {
    if (!this.state.signinClicked){
      this.setState({signinClicked: true});
    } else {
      this.setState({signinClicked: false});
    }
  }

  updateMenuRoute = (menuRoute) => {
    this.setState({menuRoute: menuRoute});
  }

  renderComponents = (menuRoute) => {
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

    return (
      <div className="App">
        {console.log("Width: ", window.innerWidth)}
        {console.log("Height: ", window.innerHeight)}
        <Navbar
          onMenuClick={this.onMenuClick}
          onSigninClick={this.onSigninClick}
        />
        <Signin
          signinClicked={this.state.signinClicked}
        />
        <Menu
          menuClicked={this.state.menuClicked}
          onMenuClick={this.onMenuClick}
          updateMenuRoute={this.updateMenuRoute}
        />
        {console.log(this.state.CSSTransition)}
        <CSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
          >
          {this.renderComponents(this.state.menuRoute)}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
