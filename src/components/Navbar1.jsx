import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "../App"


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
       <nav className="navbar">
        <div className="nav-container">
          <a href="/#" className="nav-logo">
            <img src={Logo} alt="" />
          </a>
          <div className="menu-links flex flex-col">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a href="/#">Events</a>
              </li>
              <li className="nav-item">
                <a href="/#">About</a>
              </li>
              <li className="nav-item">
                <a href="/#">Sponsership</a>
              </li>
              <li className="nav-item">
                <a href="/#">Team</a>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;