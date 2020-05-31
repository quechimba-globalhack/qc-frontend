import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";

import Icon from "../../shared/icon/Icon";
import { useStateWithLocalStorage } from "../../../utils/useStateWithLocalStorage";

import FingerPrintAnimation from "../../../images/animations/fingerprint.json";

type UserProps = {
  username: string;
  // TODO: After MVP password will be implemented
  // password: string;
};

const Login = () => {
  const history = useHistory();
  const { setValue } = useStateWithLocalStorage("username");
  const { register, handleSubmit } = useForm<UserProps>();
  const onSubmit = handleSubmit(({ username }) => {
    setValue(username.toLowerCase());
    window.location.replace("/home");
    // history.push("/home");
  });

  // Lottie animation config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FingerPrintAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <form onSubmit={onSubmit} className="login-container">
      <div className="login-container__logo">
        <Icon icon={"chimba"} />
      </div>
      <div className="login-container__title">
        <h1>Bienvenido!</h1>
      </div>
      <div className="form-container">
        <label>Usuario</label>
        <input
          className="user-input"
          type="text"
          name="username"
          ref={register}
          required
        />
        <label>Contraseña</label>
        <input className="password-input" type="password" name="password" />
      </div>
      <div className="login-container__checkbox">
        <input type="checkbox" id="remember-me" value="true" />
        <label>Recordarme</label>
      </div>
      <div className="login-container__submit">
        <button type="submit" className="btn-primary" ref={register}>
          Entrar
        </button>
      </div>
      <div className="login-controls-container">
        <a href="/">Atras</a>
        <a href="/">Olvidé mi contraseña</a>
      </div>
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </form>
  );
};

export default Login;
