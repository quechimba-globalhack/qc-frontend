import React from "react";

type CardProps = {
  image?: string,
  title?: string,
  description?: string,
  userOffer?: string,
  dueDate?: string,
  state?: string,
  active?: boolean,
}

const Message = (props: CardProps) => {
  const win = <p className="message win">Que chimba, vas ganando!</p>
  const lose = <p className="message lose">Un Bacán ofertó más que tú</p>
  const won = <p className="message win">Que chimba, has ganado!</p>
  console.table(props);
  console.log(`aa ${(props.active) ? ((props.state === "win") ? win : lose) : ((props.state === "lose") ? lose : won)}`);
  return (props.active) ? ((props.state === "win") ? win : lose) : ((props.state === "win") ? won : lose);
}

const AuctionCard = (props: CardProps) => {

  // const buttonOfferStyles = `btn-green ${(props.active) ? ((props.state === "win") ? "active-auction" : "closed-auction") : "closed-auction"}`;
  // console.table(props);
  // console.log(`btn-green ${buttonOfferStyles}`);
  // console.log(buttonOfferStyles);
  return (
    <div className="card-container">
      <div className="card-container__top-section">
        <div className="top-section__left-column">
          <img src={props.image} alt="" />
        </div>
        <div className="top-section__right-column">
          <p>{props.title}</p>
          <p>{props.description}</p>
          <p>Ofertaste: {props.userOffer}</p>
          <p>Subasta finaliza en: {props.dueDate}</p>
          <Message state={props.state} active={props.active} />
        </div>
      </div>
      <div className="card-container__bottom-section">
        <p>1 potenciador activado</p>
      </div>
      <div className={`card-container__bottom-auction ${(props.active) ? ((props.state === "win") ? "closed-auction" : "active-auction") : "closed-auction"}`}>
        <a href="/" className="btn-green">Ofertar</a>
      </div>
    </div>
  );
}

export default AuctionCard;