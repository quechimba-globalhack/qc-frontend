import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "../icon/Icon";

type NavItemProps = {
  itemName: string;
  to: any;
  icon: string;
};

const NavbarItem = ({ itemName, to, icon }: NavItemProps) => {
  return (
    <div className="navbar__item-container">
      <NavLink to={to} className="navbar__item-icon">
        <Icon icon={icon} />
      </NavLink>
    </div>
  );
};

export default NavbarItem;
