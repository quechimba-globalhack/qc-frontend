import React, { Fragment } from "react";
import Icon from "../../shared/icon/Icon";
import Timer from "../../shared/timer/Timer";

type InfoExperienceHeader = {
  src: string;
  dueDate: string;
  title: string;
  duration: string;
  description: string;
  price: string;
  like: boolean;
  eco: number;
  stars: number;
  offers: number;
};

const ExperienceHeader = (props: InfoExperienceHeader) => {
  const background = {
    backgroundImage: `url(${props.src})`,
  };

  const generateLeafs = (eco: number) => {
    let leafs: any[] = [];
    for (let i = 1; i <= eco; i++) {
      leafs.push(<Icon icon="leaf" key={i} />);
    }
    return leafs;
  };

  const generateStars = (stars: number) => {
    let starsList: any[] = [];
    for (let i = 1; i <= 5; i++) {
      starsList.push(
        i <= stars ? <Icon icon="starFilled" key={i} /> : <Icon icon="star" key={i} />
      );
    }
    return starsList;
  };

  return (
    <Fragment>
      <div className="image-container" style={background}>
        <div className="image-container__content">
          <p>{props.title}</p>
          <p>{props.duration}</p>
          <div className="image-container__icons">
            <div className="icons__ratings">
              <div className="icons-container">{generateLeafs(props.eco)}</div>
              <div className="icons-container">
                {generateStars(props.stars)}
              </div>
            </div>
            <div className="icons__like-button">
              <Icon icon="unlike" />
            </div>
          </div>
          <div className="image-container__terms">
            <p>ks {props.price}</p>
            <p>{props.offers + " ofertas"}</p>
          </div>
        </div>
      </div>
      <div className="discount-container">
        <p>Obtén un 50% de descuento</p>
      </div>
      <div className="due-time-container">
        <Timer dueDate={props.dueDate} />
      </div>
    </Fragment>
  );
};

export default ExperienceHeader;
