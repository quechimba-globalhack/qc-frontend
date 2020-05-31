import React from "react";
import { useMutation } from "react-apollo";
import {
  RpcProcessedResponse,
  SendTransactionVariales,
  SEND_TRANSACTION_MUTATION,
} from "../../shared/resolvers/eosioTransaction";
import { createAuctionCancel } from "../../../application/transactions/auction";

type CardProps = {
  image?: string;
  title?: string;
  description?: string;
  userOffer?: string;
  dueDate?: string;
  state?: string;
  active?: boolean;
};

const Message = (props: CardProps) => {
  const win = <p className="message win">Que chimba, vas ganando!</p>;
  const lose = <p className="message lose">Un Bacán ofertó más que tú</p>;
  const won = <p className="message win">Que chimba, has ganado!</p>;
  return props.active
    ? props.state === "win"
      ? win
      : lose
    : props.state === "win"
    ? won
    : lose;
};

const AuctionCard = (props: CardProps) => {
  const [sendTransaction, { error, data: mdata }] = useMutation<
    RpcProcessedResponse,
    SendTransactionVariales
  >(SEND_TRANSACTION_MUTATION, {
    variables: {
      user: "expublish",
      data: {
        name: "expublish",
        signatures: ["234567890"],
        hexData: "4567890",
      },
    },
  });

  console.debug(error, mdata);
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
      <div
        className={`card-container__bottom-auction ${
          props.active
            ? props.state === "win"
              ? "closed-auction"
              : "active-auction"
            : "closed-auction"
        }`}
      >
        <button
          className="btn-green"
          onClick={async () => {
            const data = await createAuctionCancel("agency1", {
              actnid: 0,
              owner: "agency1",
            });
            sendTransaction({
              variables: {
                user: "agency1",
                data,
              },
            });
          }}
        >
          Ofertar
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
