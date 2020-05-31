import React from "react";

import Icon from "../../shared/icon/Icon";

const Welcome = () => {
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
        <a className="btn-primary">Regístrate</a>
      </div>
      <div className="welcome-container__login-link">
        <a>Inicia sesión</a>
      </div>
    </div>
  );
};

export default Welcome;
