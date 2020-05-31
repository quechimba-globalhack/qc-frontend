import React, { useState } from "react";

import AuctionCard from "./AuctionCard";
import Gallery from "../../shared/gallery/Gallery";

import Background3 from "../../../images/backgrounds/background_3.png";
import Background2 from "../../../images/backgrounds/background_2.png";
import Background1 from "../../../images/backgrounds/background_2.png";
import RoundedImage from "../../../images/backgrounds/circle_background.png";

const cardInfoWin = {
  image: RoundedImage,
  title: "Laguna de Tota",
  description: "5 días 4 noches",
  userOffer: "15",
  dueDate: "00:23:50",
  state: "win",
  active: true,
}

const cardInfoLose = {
  image: RoundedImage,
  title: "Laguna de Tota",
  description: "5 días 4 noches",
  userOffer: "1.200.000",
  dueDate: "08:23:50",
  state: "lose",
  active: true,
}

const cardInfoWinClosed = {
  image: RoundedImage,
  title: "Laguna de Tota",
  description: "5 días 4 noches",
  userOffer: "15",
  dueDate: "00:23:50",
  state: "win",
  active: false,
}

const cardInfoLoseClosed = {
  image: RoundedImage,
  title: "Laguna de Tota",
  description: "5 días 4 noches",
  userOffer: "1.200.000",
  dueDate: "08:23:50",
  state: "lose",
  active: false,
}

const images = [
  Background3,
  Background2,
  Background1,
];

const UserAuctions = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="user_auctions-container">
      <div className="tabs-container">
        <p>Mis ofertas</p>
        <div className="tabs-container__navbar">
          <a href="#active"
            data-toggle="tab"
            role="tablist"
            className={"" + ((openTab === 1) ? "active" : "closed")}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }
            }
          >
            Activas
          </a>
          <a href="#closed"
            data-toggle="tab"
            role="tablist"
            className={"" + ((openTab === 2) ? "active" : "closed")}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }
            }
          >
            Finalizadas
          </a>
        </div>
        <div className="tabs-container__tabs">
          <div className={(openTab === 1) ? "active-tab" : "hidden-tab"} id="active">
            <AuctionCard
              image={cardInfoWin.image}
              title={cardInfoWin.title}
              description={cardInfoWin.description}
              userOffer={cardInfoWin.userOffer}
              dueDate={cardInfoWin.dueDate}
              state={cardInfoWin.state}
              active={cardInfoWin.active} />
            <AuctionCard
              image={cardInfoLose.image}
              title={cardInfoLose.title}
              description={cardInfoLose.description}
              userOffer={cardInfoLose.userOffer}
              dueDate={cardInfoLose.dueDate}
              state={cardInfoLose.state}
              active={cardInfoLose.active} />

          </div>
          <div className={(openTab === 2) ? "active-tab" : "hidden-tab"} id="closed">
            <AuctionCard
              image={cardInfoLoseClosed.image}
              title={cardInfoLoseClosed.title}
              description={cardInfoLoseClosed.description}
              userOffer={cardInfoLoseClosed.userOffer}
              dueDate={cardInfoLoseClosed.dueDate}
              state={cardInfoLoseClosed.state}
              active={cardInfoLoseClosed.active} />
            <AuctionCard
              image={cardInfoWinClosed.image}
              title={cardInfoWinClosed.title}
              description={cardInfoWinClosed.description}
              userOffer={cardInfoWinClosed.userOffer}
              dueDate={cardInfoWinClosed.dueDate}
              state={cardInfoWinClosed.state}
              active={cardInfoWinClosed.active} />
          </div>
        </div>
      </div>
      <div className="gallery-container__recommended">
        <div className="gallery-container__title">
          <p>Recomendados</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={images} />
      </div>
    </div>
  );
}

export default UserAuctions;