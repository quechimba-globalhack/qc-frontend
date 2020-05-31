import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation, useLazyQuery } from "react-apollo";
import { useLocation, useHistory, NavLink } from "react-router-dom";

import ExperienceHeader from "./ExperienceHeader";
import Icon from "../../shared/icon/Icon";
import Gallery from "../../shared/gallery/Gallery";

import Background from "../../../images/backgrounds/background_1_filter.png";
import { getImages } from "../../../utils/mockData";
import { createAuctionStartTransaction } from "../../../application/transactions/auction";
import { RpcProcessedResponse, SendTransactionVariales, SEND_TRANSACTION_MUTATION } from "../../shared/resolvers/eosioTransaction";
import { GET_EXPERIENCE_QUERY, ExperienceData, GetExperienceVariables } from "./api/queries/experience";
import { useStateWithLocalStorage } from "../../../utils/useStateWithLocalStorage";

type ExperienceDataView = {
  src: string;
  dueDate: Date;
  title: string;
  duration: string;
  description: string;
  price: string;
  like: boolean;
  eco: number;
  stars: number;
  offers: number;
  bknBid?: number
  actnId?: number
}

const infoExperience: ExperienceDataView = {
  src: Background,
  dueDate: new Date("2020-06-27"),
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
  const history = useHistory();
  const location = useLocation();
  const { value } = useStateWithLocalStorage("username");
  const [expId, setExpId] = useState<string>("")
  const [expData, setExpData] = useState<ExperienceDataView>(infoExperience);
  const [query, { loading, data }] = useLazyQuery<ExperienceData, GetExperienceVariables>(
    GET_EXPERIENCE_QUERY,
    {
      variables: { expid: Number(expId) },
    }
  );
  useEffect(() => {
    const idExp = (location?.state as any)?.expid ?? "";
    setExpId(idExp);
    if (idExp === "") {
      history.push("/home");
    }

  }, [])

  useEffect(() => {
    console.debug("DAta changing")
    if (data?.getExperience) {
      console.debug("Heyyyy ", data.getExperience);
      const { base_val, maxactntdate, actn } = data.getExperience;
      setExpData({
        ...infoExperience,
        price: base_val,
        dueDate: maxactntdate,
        bknBid: actn && actn.bkn === value ? actn.highest_bid : null,
        actnId: actn ? actn.actn_id : null,
      })
    }
  }, [data])

  useEffect(() => {
    query()
  }, [expId])

  const [openTab, setOpenTab] = useState(1);

  const [sendTransaction, { error, data: mdata }] = useMutation<
    RpcProcessedResponse,
    SendTransactionVariales
  >(SEND_TRANSACTION_MUTATION, {});

  const startAuction = async () => {
    try {
      if (!expId) return;
      const data = await createAuctionStartTransaction("agency1", {
        owner: "agency1",
        expid: Number(expId),
        start_date: new Date("2020-07-28T17:01:20"),
      });
      await sendTransaction({
        variables: {
          user: "agency1",
          data,
        },
      });
      // Navigate to bids route
      history.push("/bids");
    } catch (err) {
      const error = new Error(err);
      toast(
        error.message.replace(
          "GraphQL error: Error: assertion failure with message",
          ""
        )
      );
    }
  };

  const stateRouter = {
    state: { actnId: expData.actnId }
  };

  return (
    <Fragment>
      <ExperienceHeader
        src={expData.src}
        dueDate={expData.dueDate}
        title={expData.title}
        duration={expData.duration}
        description={expData.description}
        price={expData.price}
        like={expData.like}
        eco={expData.eco}
        stars={expData.stars}
        offers={expData.offers}
      />
      {/* Incluir la clase hidden para ocultar el div */}
      <div className="bidded-container">
        <p>
          ya realisaste una oferta, espera <strong>30 minutos</strong> para
          realizar una nueva
        </p>
      </div>
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
            <Gallery items={getImages(2)} />
          </div>
          <div className="offer-container">
            {expData.bknBid && <p className="offer-container__user-offer">Tu oferta {expData.bknBid}</p>}
            {!expData.bknBid && expData.actnId &&
              <NavLink to={{ ...stateRouter, pathname: '/bids' }}>
                <button className="btn-green">
                  Ofertar
              </button>
              </NavLink>
            }
            <button onClick={startAuction} className="btn-green">
              Iniciar subasta Demo ....
             </button>
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
