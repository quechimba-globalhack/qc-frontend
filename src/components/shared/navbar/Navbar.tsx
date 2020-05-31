import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLazyQuery } from "react-apollo";

// components
import NavbarItem from "./NavbarItem";
import { GET_BALANCE_QUERY, LukasData, GetBalanceVariables } from "../resolvers/lukas";
import { useStateWithLocalStorage } from "../../../utils/useStateWithLocalStorage";

// images

const Navbar = () => {
  const location = useLocation();
  const [balance, setBalance] = useState<number>(0);
  const { value } = useStateWithLocalStorage("username");
  const [navBar, setNavBar] = useState<boolean>(
    !!(location.state as any)?.mainNavBar
  );
  const [query, { loading, data }] = useLazyQuery<LukasData, GetBalanceVariables>(
    GET_BALANCE_QUERY,
    {
      variables: { user: value },
    }
  );

  useEffect(() => {
    query();
  }, [location])

  useEffect(() => {
    if (data?.getBalace) {
      setBalance(Number(data.getBalace.balance));
    }
  }, [data])


  const routeOptionsWhite = {
    state: { mainNavBar: true },
  };
  const routeOptionsGreen = {
    state: { mainNavBar: false },
  };

  useEffect(() => {
    setNavBar((location.state as any)?.mainNavBar);
  }, []);

  return (
    <header
      className={`"header-navbar ${
        location.pathname === "/" || location.pathname === "/login"
          ? "hidden"
          : "active"
        }`}
    >
      <nav className={`${!navBar ? "navbar" : "navbar--white"}`}>
        <div className="navbar__left-section">
          <NavbarItem
            itemName="menu"
            to={{ ...routeOptionsGreen, pathname: "/home" }}
            icon={`${!navBar ? "menu" : "menuGreen"}`}
          />
        </div>
        <div className="navbar__middle-section">
          {!navBar ? (
            <p className="crypto-white">
              <span className="lks-icon-green"></span>{balance}
            </p>
          ) : (
              <p className="crypto-green">
                <span className="lks-icon-white"></span>{balance}
              </p>
            )}
        </div>
        <div className="navbar__right-section">
          <NavbarItem
            itemName="auction"
            to={{ ...routeOptionsWhite, pathname: "/user-auctions" }}
            icon={`${!navBar ? "auction" : "auctionGreen"}`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
