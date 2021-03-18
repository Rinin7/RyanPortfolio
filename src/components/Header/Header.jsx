import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <h2 className="header__logo">Ry</h2>
          <h2 className="header__logo">Doob</h2>
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
