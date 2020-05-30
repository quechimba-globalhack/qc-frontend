import React from "react";

// svg files
import AuctionIcon from "../../../images/icons/auction_icon.svg";
import CoctailIcon from "../../../images/icons/coctail_icon.svg";
import DivingMaskIcon from "../../../images/icons/diving_mask_icon.svg";
import GrillIcon from "../../../images/icons/grill_icon.svg";
import PalmTreeIcon from "../../../images/icons/palm_tree_icon.svg";
import TentIcon from "../../../images/icons/tent_icon.svg";

const icons = [
  {
    name: "auction",
    svg: AuctionIcon,
  },
  {
    name: "cocktail",
    svg: CoctailIcon,
  },
  {
    name: "divingMask",
    svg: DivingMaskIcon,
  },
  {
    name: "grill",
    svg: GrillIcon,
  },
  {
    name: "palmTree",
    svg: PalmTreeIcon,
  },
  {
    name: "tent",
    svg: TentIcon,
  },
];

type IconProps = {
  icon: string;
};

const getIcon = (icon: string) => {
  return icons.find((ic) => ic.name === icon)?.svg ?? icons[0].svg;
};

const Icon = ({ icon }: IconProps) => {
  return <img src={getIcon(icon)} alt="{icon}" />;
};

export default Icon;
