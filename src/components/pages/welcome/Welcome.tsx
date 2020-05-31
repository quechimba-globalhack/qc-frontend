import React from "react";

import Icon from "../../shared/icon/Icon";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
const Welcome = () => {
  const notify = () => toast("Que chimba rules !");
  return (
    <div className="welcome-container">
      <div className="welcome-container__logo">
        <Icon icon={"chimba"} />
      </div>
      <div className="welcome-container__title">
        <h1>Qué hubo bacan</h1>
      </div>
      <div className="welcome-container__description">
        <h3>Ingresa a la mejor experiencia de viajes y subastas de latinoamérica</h3>
      </div>
      <div className="welcome-container__button">
        <button onClick={() => notify()} className="btn-primary">Regístrate</button>
      </div>
      <div className="welcome-container__login-link">
        <NavLink to="/login">
          <p>Inicia sesión</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
