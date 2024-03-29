import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  md sumon ahamed
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu-active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu-active"
                        className="nav-link"
                        to="/Services"
                      >
                        services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu-active"
                        className="nav-link"
                        to="/About"
                      >
                        about
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu-active"
                        className="nav-link"
                        to="/Contact"
                      >
                        contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
