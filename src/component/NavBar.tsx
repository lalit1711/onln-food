import React, { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = (props: any) => {
  const [navMenu, setNavmenu] = useState(false);
  return (
    <div>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} width="40" height="40" />
          </a>
          <a className="navbar-item" href="#"></a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={e => {
              setNavmenu(!navMenu);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={navMenu ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <img
                    className="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
              <div className="navbar-item has-text-white">
                <i className="fa fa-map-marker"></i> &nbsp;&nbsp;Bangalore
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
