import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-circle">

          <svg
            className="circle-svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M 50,50
                  m -35,0
                  a 35,35 0 1,1 70,0
                  a 35,35 0 1,1 -70,0
                "
              />
            </defs>

            <text className="circle-text">
              <textPath href="#circlePath">
                STAYZEN • STAYZEN • STAYZEN • STAYZEN •
              </textPath>
            </text>
          </svg>

          <div className="center-text">
            StayZen
          </div>

        </div>
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#properties">
            Properties
          </a>
        </li>

        <li>
          <a href="#faq">FAQ</a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

        <li className="mobile-btn">
          <button className="enroll-btn">
            Enroll Now
          </button>
        </li>
      </ul>

      <div className="right-section">

        <button
          className="theme-toggle"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>

        <button className="enroll-btn desktop-btn">
          Enroll Now
        </button>

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;