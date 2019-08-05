import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Patternbar from './components/patternbar/Patternbar';
import Menu from './components/menu/Menu';
import Schedule from './components/schedule/Schedule';


class App extends Component {

  STATE
  constructor() {
    super();
    this.state = {
      menuClicked: false,
      menuRoute: 'home'
    }
  }

  onMenuClick = () => {
    if (!this.state.menuClicked){
      this.setState({menuClicked: true});
    } else {
      this.setState({menuClicked: false});
    }
  }

  onScheduleClick = () => {
    console.log('scheduleClick');
    this.setState({menuRoute: 'schedule'});
  }

  render() {
    return (
      <div className="App">
        <Navbar onMenuClick={this.onMenuClick}/>
        <Schedule />
        <Menu className="sidenav" onMenuClick={this.onMenuClick} menuClicked={this.state.menuClicked} onScheduleClick={this.onScheduleClick}/>
        { this.state.menuRoute === 'schedule'
          ? <Schedule />
          : <div>
          </div>
        }

      </div>
    );
  }
}

export default App;
