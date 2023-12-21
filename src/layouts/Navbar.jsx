import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h3>Student Portal</h3>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink className="nav_links" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_links" to="/students">
                  All Students
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_links" to="/addstudent">
                  Add Student
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_links" to="/contact">
                  Conatct
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;