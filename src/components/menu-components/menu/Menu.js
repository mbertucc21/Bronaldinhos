import React from 'react';
import './Menu.css';

const Menu = ({menuClicked, onMenuClick, updateMenuRoute}) => {

  // for inline styles in React, need to set style={object}
  let componentUnderDevStyle = {
    color: 'rgb(169,169,169)',
  };

  if (menuClicked){
    return(
      <div className="menuOpened">
        <h5 className="closebtn" onClick={() => onMenuClick()}>&times;</h5>
        <p onClick={() => updateMenuRoute("about")}>About</p>
        <p onClick={() => updateMenuRoute("schedule")}>Schedule</p>
        <p onClick={() => updateMenuRoute("stats")}>Stats</p>
        <p style={componentUnderDevStyle} onClick={() => updateMenuRoute("photos")}>Photos</p>
        <p style={componentUnderDevStyle} onClick={() => updateMenuRoute("chat")}>Chat</p>
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
