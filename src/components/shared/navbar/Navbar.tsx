import React from "react";
import { Switch, Router, Route } from "react-router-dom";

// components
import NavbarItem from "./NavbarItem";

// images

const Navbar = () => {
  return (
    <header className="header-navbar">

      <nav className="navbar">
        <div className="navbar__left-section">
          <NavbarItem itemName="menu" to="/menu" icon="menu" />
        </div>
        <div className="navbar__right-section">
          <NavbarItem itemName="auction" to="/auctions" icon="auction" />
        </div>
      </nav>

      <nav className="navbar--white">
        <div className="navbar__left-section">
          <NavbarItem itemName="menu" to="/menu" icon="menuGreen" />
        </div>
        <div className="navbar__right-section">
          <NavbarItem itemName="auction" to="/auctions" icon="auctionGreen" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
