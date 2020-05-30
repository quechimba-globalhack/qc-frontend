import React from "react";

// components
import NavbarItem from "./NavbarItem";

// images

const Navbar = () => {
  return (
    <header className="header-navbar">
      <nav className="navbar">
        <div className="navbar__left-section">
          <NavbarItem itemName="burguer" to="/menu" icon="palmtree" />
        </div>
        <div className="navbar__middle-section">
          <NavbarItem itemName="quechimba" to="/" icon="cocktail" />
        </div>
        <div className="navbar__right-section">
          <NavbarItem itemName="auction" to="/auction" icon="auction" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
