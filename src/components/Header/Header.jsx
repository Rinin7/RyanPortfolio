import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import RD from "../../assets/logos/Logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <img src={RD} className="header__logo" />
        </div>
      </Link>
      <div className="header__nav">
        <Link to="/about">
          <h3 className="header__links">about</h3>
        </Link>
        <Link to="/projects">
          <h3 className="header__links">projects</h3>
        </Link>
        <Link to="/contact">
          <h3 className="header__links">contact</h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
