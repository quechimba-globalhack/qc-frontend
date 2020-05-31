import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// components
import NavbarItem from "./NavbarItem";

// images

const Navbar = () => {
  const location = useLocation()
  const [navBar, setNavBar] = useState<boolean>(!!(location.state as any)?.mainNavBar);

  console.debug(location.pathname === "/" || location.pathname === "/login" ? "hidden" : "active");

  const routeOptionsWhite = {
    state: { mainNavBar: true }
  };
  const routeOptionsGreen = {
    state: { mainNavBar: false }
  };

  useEffect(() => {
    setNavBar((location.state as any)?.mainNavBar)
  }, [])

  return (
    <header className={`"header-navbar ${location.pathname === "/home" || location.pathname === "/login" ? "hidden" : "active"}`}>
      <nav className={`${!navBar ? "navbar" : "navbar--white"}`}>
        <div className="navbar__left-section">
          <NavbarItem itemName="menu" to={{ ...routeOptionsGreen, pathname: '/home' }} icon={`${!navBar ? "menu" : "menuGreen"}`} />
        </div>
        <div className="navbar__right-section">
          <NavbarItem itemName="auction" to={{ ...routeOptionsWhite, pathname: '/user-auctions' }} icon={`${!navBar ? "auction" : "auctionGreen"}`} />
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
