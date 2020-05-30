import React from "react";

// import Icon from "../../shared/icon/Icon";

import CircleLogo from "../../../images/icons/circle-logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container__logo">
        <img src={CircleLogo} alt="quechimba logo" />
      </div>
      <div className="login-container__title">
        <h1>Qué hubo bacan</h1>
      </div>
      <div className="login-container__description">
        <h3>Ingresa a la mejor experiencia de viajes y subastas de latinoamérica</h3>
      </div>
      <div className="login-container__button">
        <a className="btn-blue">Regístrate</a>
      </div>
      <div className="login-container__login-link">
        <a>Inicia sesión</a>
      </div>
    </div>
  );
};

export default Login;
