import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo";

import AirplaneAnimation from "../../../images/animations/flight.json";
import { createAuctionBid } from "../../../application/transactions/auction";
import { RpcProcessedResponse, SendTransactionVariales, SEND_TRANSACTION_MUTATION } from "../../shared/resolvers/eosioTransaction";
import { useStateWithLocalStorage } from "../../../utils/useStateWithLocalStorage";

type offerProps = {
  tokens: number;
};
const UserBids = () => {
  const history = useHistory();
  const [tokens, setTokens] = useState<number>(0);
  const [sendTransaction, { error, data: mdata }] = useMutation<
    RpcProcessedResponse,
    SendTransactionVariales
  >(SEND_TRANSACTION_MUTATION, {});
  const { value: bakan } = useStateWithLocalStorage('username');
  // const { register, handleSubmit } = useForm<offerProps>();
  // const onSubmit = handleSubmit(({ tokens }) => {
  //   console.debug(tokens);
  // });
  const sendBid = async () => {
    try {
      if (!tokens) {
        toast("Por favor ingresa una cantidad")
        return;
      };
      if (!bakan) {
        toast("Imposible realizar la oferta")
        return;
      };
      const data = await createAuctionBid("maluma", {
        actnid: 0, // TODO: get auction
        // LKS has a precision of 4
        bidprice: tokens * 10000,
        bkn: bakan,
      });
      await sendTransaction({
        variables: {
          user: bakan,
          data,
        }
      });
      // Navigate to bids route
      history.push('/user-auctions');
    } catch (err) {
      const error = new Error(err);
      toast(error.message.replace("GraphQL error: Error: assertion failure with message", ""))
    }

  }
  // Lottie animation config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AirplaneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    // <form onSubmit={onSubmit}>
    <>
      <div className="bid-container">
        <div className="bid-container__title">
          <p>Ofertar</p>
        </div>
        <div className="bid-container__offer-title">
          <p>Tu oferta</p>
        </div>
        <div className="bid-container__offer-value">
          <input
            value={tokens}
            onChange={(e) => setTokens(Number(e.target.value))}
            name="tokens"
            type="number"
            // ref={register}
            required
          ></input>
        </div>
        <div className="bid-container__power-title">
          <p>Elige un potenciador</p>
        </div>
        <div className="bid-container__power-list">
          <select>
            <option value="extra">Extra oferta</option>
          </select>
        </div>
        <div className="bid-container__total-offer-title">
          <p>{`Total  ${tokens}`}</p>
        </div>
        <div className="bid-container__offer-button">
          <button className="btn-green" onClick={sendBid}>
            Ofertar
          </button>
        </div>
      </div>
      <div className="animation-container">
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      {/* </form> */}
    </>
  );
};

export default UserBids;
