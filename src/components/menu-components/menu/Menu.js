import React from 'react';
import './Menu.css';

const Menu = ({menuClicked, onMenuClick, updateMenuRoute}) => {
  if (menuClicked){
    return(
      <div className="menuOpened">
        <h5 className="closebtn" onClick={() => onMenuClick()}>&times;</h5>
        <p onClick={() => updateMenuRoute("about")}>About</p>
        <p onClick={() => updateMenuRoute("schedule")}>Schedule</p>
        <p onClick={() => updateMenuRoute("stats")}>Stats</p>
        <p onClick={() => updateMenuRoute("photos")}>Photos</p>
        <p onClick={() => updateMenuRoute("chat")}>Chat</p>
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
