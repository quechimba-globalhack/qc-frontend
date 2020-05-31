import React from "react";

import Filters from "./Filters";
import Gallery from "../../shared/gallery/Gallery";

import Background3 from "../../../images/backgrounds/background_3.png";
import Background2 from "../../../images/backgrounds/background_2.png";
import Background1 from "../../../images/backgrounds/background_2.png";

const images = [
  Background3,
  Background2,
  Background1,
];

// const images = [
//   {
//     src: Background3,
//     time: "12:50:52",
//     title: "Laguna de Tota",
//     description: "5 días 4 noches",
//     price: "1.200.000",
//   },
//   {
//     src: Background2,
//     time: "12:50:52",
//     title: "Laguna de Tota",
//     description: "5 días 4 noches",
//     price: "1.200.000",
//   },
//   {
//     src: Background1,
//     time: "12:50:52",
//     title: "Laguna de Tota",
//     description: "5 días 4 noches",
//     price: "1.200.000",
//   },
// ];

const Home = () => {
  return (
    <div className="home-container">
      <Filters />
      <div className="home-container__auctions-to-end">
        <div className="gallery-container auctions-to-end__title">
          <p>Subastas por finalizar</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={images} />
      </div>
      <div className="home-container__user-auctions">
        <div className="gallery-container user-auctions__title">
          <p>Oferté</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={images} />
      </div>
      <div className="home-container__recommended-auction">
        <div className="gallery-container recommended-auctions__title">
          <p>Recomendados</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={images} />
      </div>
    </div>
  );
}

export default Home;