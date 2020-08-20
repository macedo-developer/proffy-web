import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
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
      </div>
      <div className="login-container">
        <h1>Fazer login</h1>

        <form>
          <Input label="Email" name="email" />
          <Input label="Senha" name="password" />

          <div className="form-footer">
            <p>Lembrar-me</p>
            <p>Esqueci minha senha</p>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>

      <div className="footer">
        <div className="question">
          <p>Não tem conta?</p>
          <p>
            É de graça
            <img src={purpleHeartImg} alt="Coração" />
          </p>
        </div>

        <Link to="/">Cadastra-se</Link>
      </div>
    </div>
  );
}

export default Login;
