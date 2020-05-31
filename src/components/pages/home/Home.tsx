import React, { useEffect } from "react";

import Filters from "./Filters";
import { useQuery, useMutation } from "react-apollo";
import {
  QueChimbaData,
  GetQueChimbaVariables,
  QUE_CHIMBA_QUERY,
} from "./api/queries/quechimba";
import {
  RpcProcessedResponse,
  SendTransactionVariales,
  SEND_TRANSACTION_MUTATION,
} from "../../shared/resolvers/eosioTransaction";
import Gallery, { GaleryItem } from "../../shared/gallery/Gallery";
import { images, getImages, to1, to2 } from "../../../utils/mockData";
import { ExperienceData, GetExperienceVariables, GET_EXPERIENCE_QUERY } from "../experience/api/queries/experience";
import Background1 from "../../../images/backgrounds/background_2.png";
import Background2 from "../../../images/backgrounds/background_3.png";

const imagesRecomendados = [{
  src: Background1,
  to: to1
}, {
  src: Background2,
  to: to2
}];

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
  const { loading, data } = useQuery<ExperienceData, GetExperienceVariables>(
    GET_EXPERIENCE_QUERY,
    {
      variables: { expid: 0 },
    }
  );
  console.debug("loading?", loading);
  console.debug("data?", data?.getExperience);

  return (
    <div className="home-container">
      <Filters />
      <div className="home-container__auctions-to-end">
        <div className="gallery-container auctions-to-end__title">
          <p>Subastas por finalizar</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={getImages(4)} />
      </div>
      <div className="home-container__user-auctions">
        <div className="gallery-container user-auctions__title">
          <p>Oferté</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={getImages(3)} />
      </div>
      <div className="home-container__recommended-auction">
        <div className="gallery-container recommended-auctions__title">
          <p>Recomendados</p>
          <a href="/">Ver todo</a>
        </div>
        <Gallery items={imagesRecomendados} />
      </div>
    </div>
  );
};

export default Home;
