import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import Icon from "../icon/Icon";

type NavItemProps = {
  itemName: string;
  to: any;
  icon: string;
  page?: string;
};

const NavbarItem = ({ itemName, to, icon, page }: NavItemProps) => {
  const redirect = (path: string) => {
    if (path === "/home") {
      window.location.replace("/home");
    }
  };

  return (
    <div className="navbar__item-container">
      <NavLink
        onClick={() => redirect(page)}
        to={to}
        className="navbar__item-icon"
      >
        <Icon icon={icon} />
      </NavLink>
    </div>
  );
};

export default NavbarItem;
