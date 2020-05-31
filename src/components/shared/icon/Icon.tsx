import React from "react";

// svg files
import AirplaneIcon from "../../../images/icons/icono_airplane.svg";
import GrillIcon from "../../../images/icons/icono_asado.svg";
import AuctionIcon from "../../../images/icons/icono_auctions.svg";
import BackIcon from "../../../images/icons/icono_back.svg";
import BackWhiteIcon from "../../../images/icons/icono_back_white.svg";
import DivingMaskIcon from "../../../images/icons/icono_buceo.svg";
import TentIcon from "../../../images/icons/icono_camping.svg";
import QueChimbaIcon from "../../../images/icons/icono_chimba.svg";
import CoctailIcon from "../../../images/icons/icono_coctel.svg";
import PasswordIcon from "../../../images/icons/icono_contrasena.svg";
import LeafIcon from "../../../images/icons/icono_eco.svg";
import FingerprintIcon from "../../../images/icons/icono_huella.svg";
import LikeIcon from "../../../images/icons/icono_like.svg";
import MenuIcon from "../../../images/icons/icono_menu.svg";
import PalmTreeIcon from "../../../images/icons/icono_palmera.svg";
import SearchIcon from "../../../images/icons/icono_search.svg";
import StarIcon from "../../../images/icons/icono_star.svg";
import StarFilledIcon from "../../../images/icons/icono_star_filled.svg";
import UnlikeIcon from "../../../images/icons/icono_unlike.svg";
import UserIcon from "../../../images/icons/icono_user.svg";

const icons = [
  {
    name: "airplane",
    svg: AirplaneIcon,
  },
  {
    name: "grill",
    svg: GrillIcon,
  },
  {
    name: "auction",
    svg: AuctionIcon,
  },
  {
    name: "back",
    svg: BackIcon,
  },
  {
    name: "back_white",
    svg: BackWhiteIcon,
  },
  {
    name: "divingMask",
    svg: DivingMaskIcon,
  },
  {
    name: "tent",
    svg: TentIcon,
  },
  {
    name: "chimba",
    svg: QueChimbaIcon,
  },
  {
    name: "cocktail",
    svg: CoctailIcon,
  },
  {
    name: "password",
    svg: PasswordIcon,
  },
  {
    name: "leaf",
    svg: LeafIcon,
  },
  {
    name: "fingerprint",
    svg: FingerprintIcon,
  },
  {
    name: "like",
    svg: LikeIcon,
  },
  {
    name: "menu",
    svg: MenuIcon,
  },
  {
    name: "palmTree",
    svg: PalmTreeIcon,
  },
  {
    name: "search",
    svg: SearchIcon,
  },
  {
    name: "star",
    svg: StarIcon,
  },
  {
    name: "star_filled",
    svg: StarFilledIcon,
  },
  {
    name: "unlike",
    svg: UnlikeIcon,
  },
  {
    name: "user",
    svg: UserIcon,
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
