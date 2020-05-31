import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import ExperienceHeader from "./ExperienceHeader";
import Icon from "../../shared/icon/Icon";
import Gallery from "../../shared/gallery/Gallery";

import Background from "../../../images/backgrounds/background_1_filter.png";
import Background3 from "../../../images/backgrounds/background_3.png";
import Background2 from "../../../images/backgrounds/background_2.png";

const images = [Background3, Background2];

const infoExperience = {
  src: Background,
  time: "96 : 23 : 50",
  title: "Laguna de Tota",
  duration: "5 días 4 noches",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  price: "15",
  like: false,
  eco: 3,
  stars: 4,
  offers: 12,
};

type OfferProps = {
  tokens: number;
};

const Experience = () => {
  const [openTab, setOpenTab] = useState(1);

  const { register, handleSubmit } = useForm<OfferProps>();
  const onSubmit = handleSubmit(({ tokens }) => {
    console.debug(tokens);
  });

  return (
    <Fragment>
      <ExperienceHeader
        src={infoExperience.src}
        time={infoExperience.time}
        title={infoExperience.title}
        duration={infoExperience.duration}
        description={infoExperience.description}
        price={infoExperience.price}
        like={infoExperience.like}
        eco={infoExperience.eco}
        stars={infoExperience.stars}
        offers={infoExperience.offers}
      />
      <div className="tabs-container__navbar">
        <a
          href="#overview"
          data-toggle="tab"
          role="tablist"
          className={"" + (openTab === 1 ? "active" : "closed")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
        >
          Resumen
        </a>
        <a
          href="#schedule"
          data-toggle="tab"
          role="tablist"
          className={"" + (openTab === 2 ? "active" : "closed")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Itinerario
        </a>
        <a
          href="#reviews"
          data-toggle="tab"
          role="tablist"
          className={"" + (openTab === 3 ? "active" : "closed")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
        >
          Reseñas
        </a>
      </div>
      <div className="tabs-container__tabs">
        <div
          className={`tab-item tab-overview ${
            openTab === 1 ? "active-tab" : "hidden-tab"
            }`}
          id="active"
        >
          <p>{infoExperience.title}</p>
          <p>{infoExperience.duration}</p>
          <p>{infoExperience.description}</p>
          <div className="activities-container__icons">
            <a href="/">
              <Icon icon={"divingMask"} />
              Actividades acuáticas
            </a>
            <a href="/">
              <Icon icon={"grill"} />
              Parrilla
            </a>
            <a href="/">
              <Icon icon={"cocktail"} />
              Cocteles
            </a>
            <a href="/">
              <Icon icon={"palmTree"} />
              Playa
            </a>
          </div>
          <div className="tags-container">
            <p>Tags</p>
            <p>Camping</p>
            <p>Ecológico</p>
            <p>Naturaleza</p>
            <p>Frio</p>
            <p>Deportes naúticos</p>
          </div>
          <div className="gallery-experience-container">
            <div className="gallery-experience-container__title">
              <p>Recomendados</p>
            </div>
            <Gallery items={images} />
          </div>
          <div className="offer-container">
            <p className="offer-container__title">Valor</p>
            <div className="data-auction__titles">
              <p>Precio base</p>
              <p>Ofertas</p>
            </div>
            <div className="data-auction__quantity">
              <p>{infoExperience.price}</p>
              <p>{infoExperience.offers}</p>
            </div>
            <p className="offer-container__user-offer">Tu oferta</p>
            <form onSubmit={onSubmit}>
              <input
                className="data-auction__value"
                name="tokens"
                type="number"
                ref={register}
              ></input>
              <button className="btn-green" type="submit">
                Ofertar
              </button>
            </form>
          </div>
        </div>
        <div
          className={`tab-item ${openTab === 2 ? "active-tab" : "hidden-tab"}`}
          id="closed"
        ></div>
      </div>
    </Fragment>
  );
};

export default Experience;
