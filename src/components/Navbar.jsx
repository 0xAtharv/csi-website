import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
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
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/teams">TEAM</NavLink>
        </li>
        <li>
          <NavLink to="/Events">EVENTS</NavLink>
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
