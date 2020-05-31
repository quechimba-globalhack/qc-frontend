import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

import Icon from "../../shared/icon/Icon";

type UserProps = {
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit } = useForm<UserProps>();
  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

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
        <input className="user-input" type="email" name="email" ref={register} />
        <label>Contraseña</label>
        <input className="password-input" type="password" name="password" ref={register} />
      </div>
      <div className="login-container__checkbox">
        <input type="checkbox" id="remember-me" value="true" />
        <label>Recordarme</label>
      </div>
      <div className="login-container__submit">
        <button type="submit" className="btn-primary">Entrar</button>
      </div>
      <div className="login-controls-container">
        <a href="/">Atras</a>
        <a href="/">Olvidé mi contraseña</a>
      </div>
    </form>
  );
};

export default Login;
