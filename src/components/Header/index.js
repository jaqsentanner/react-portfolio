import React from 'react';
// import { Link } from 'react-router-dom';



const Header = () => {

    return (
      <nav>
        <div>
          <a
            title="More"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              className="fa-solid fa-bars tripleline"
              style={{ fontSize: 1.95 + "em" }}
            ></i>
          </a>
          <div className="dropdown-menu navdropdown dropdowncolor">
            <a
              className="dropdown-item dropdowncolor dropdownnav"
              href="/"
            >
              <i class="fa-solid fa-house"></i>
            </a>
            <a
              className="dropdown-item dropdowncolor dropdownnav"
              href="/personalprojects"
            >
              <i className="fa-solid fa-laptop"></i>
            </a>
            <a className="dropdown-item dropdowncolor dropdownnav" href="/bootcamp">
            <img
                    src="uofm_smol.png"
                    width="26px"
                    height="16px"
                    style={{ marginBottom: 4 + "px" }}
                  ></img>
            </a>
            <a className="dropdown-item dropdowncolor dropdownnav" href="/resume">
                <i className="fa-regular fa-file"></i>
            </a>
            <a className="dropdown-item dropdowncolor dropdownnav" href="/faq">
                <i className="fa-solid fa-question"></i>
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item dropdowncolor dropdownnav" href="/contact">
                <i className="fa-regular fa-bell"></i>
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Header;