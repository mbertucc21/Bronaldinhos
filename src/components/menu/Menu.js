import React from 'react';
import './Menu.css';

const Menu = ({onMenuClick, menuClicked, onScheduleClick}) => {
  if (menuClicked){
    return(
      <div className="menuOpened">
        <p className="closebtn" onClick={() => onMenuClick()}>&times;</p>
        <p>Home</p>
        <p onClick={() => onScheduleClick()}>Schedule</p>
        <p>Stats</p>
        <p>Photos</p>
        <p>Chat</p>
      </div>
    );
  } else {
    return(
      <div className="menuClosed">
      </div>
    );
  }
}

export default Menu
