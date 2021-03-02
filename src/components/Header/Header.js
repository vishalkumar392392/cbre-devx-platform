import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header(props) {
  return (
    <div>
      <div className="header">
        <h2>Paree looys, Guest!</h2>
        <h6>CBRE Service Catalog</h6>
      </div>

      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link links" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link links" to="/libraries">
                Libraries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link links" to="/ux">
                UX
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link links" to="/frameworks">
                Frameworks
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
