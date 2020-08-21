import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import logoPrimaryImg from "../../assets/logo-primary.svg";
import purpleHeartImg from "../../assets/icons/purple-heart.svg";

import "./styles.css";
import Input from "../../components/Input";

function Login() {
  return (
    <div id="page-login">
      <div className="page-login-content">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <p>Sua plataforma de estudos online.</p>
        </div>

        <div className="login-container">
          <img className="logo-mobile" src={logoPrimaryImg} alt="Logo Proffy" />
          <form>
            <h1>Fazer login</h1>
            <Input label="Email" name="email" />
            <Input label="Senha" name="password" />

            <div className="form-footer">
              <div className="check-group">
                <input type="checkbox" name="remember" id="remember"></input>
                <p>Lembrar-me</p>
              </div>
              <Link to="/">Esqueci minha senha</Link>
            </div>

            <button disabled type="submit">
              Entrar
            </button>
          </form>

          <div className="footer">
            <div className="question">
              <p>
                Não tem conta?
                <br />
                <Link className="button" to="/">
                  Cadastra-se
                </Link>
              </p>
              <span>
                É de graça
                <img src={purpleHeartImg} alt="Coração" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
