import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserBids = () => {
  const [tokens, setTokens] = useState("");

  type offerProps = {
    tokens: number;
  };

  const { register, handleSubmit } = useForm<offerProps>();
  const onSubmit = handleSubmit(({ tokens }) => {
    console.debug(tokens);
  });

  return (
    <form onSubmit={onSubmit}>
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
            onChange={(e) => setTokens(e.target.value)}
            name="tokens"
            type="number"
            ref={register}
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
          <button className="btn-green" type="submit">
            Ofertar
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserBids;
