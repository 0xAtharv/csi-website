import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-10">
      <Link to="/" className="logo">
        <img src="/csi-logo.png" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          {/* <NavLink to="/home">HOME</NavLink> */}
          {/* <NavLink to="/" exact>
            HOME
          </NavLink> */}
          <NavLink to="/home">HOME</NavLink>
          {/* <NavLink to={["/", "/home"]}>HOME</NavLink> */}
        </li>
        <li>
          <NavLink to="">
            <div className="dropdown rounded-md ">
              {/* <button className="dropbtn rounded-md"> */}
              TEAMS
              {/* <i className="fa fa-caret-down"></i> */}
              {/* </button> */}
              <div className="dropdown-content rounded-md">
                <NavLink  to="" className="a">Core</NavLink>
                <NavLink to="/teams" className="a">Working Committee</NavLink>
                <NavLink to="" className="a">Ex-Core</NavLink>
              </div>
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/teams">TEAM</NavLink>
        </li> */}
        <li>
          <NavLink to="">
            <div className="dropdown rounded-md ">
              {/* <button className="dropbtn rounded-md bg-white"> */}
              EVENTS
              {/* <i className="fa fa-caret-down"></i> */}
              {/* </button> */}
              <div className="dropdown-content rounded-md">
                <NavLink to="/events" className="a">2023-24</NavLink>
                <NavLink to="/prev-events" className="a">2022-23</NavLink>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/magazine">MAGAZINE</NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">SPONSORS</NavLink>
        </li>
      </ul>
    </nav>
  );
};
