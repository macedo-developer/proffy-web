import React from "react";

import logoImg from "../../assets/logo.svg";
import logoPrimaryImg from "../../assets/logo-primary.svg";
import backImg from "../../assets/icons/back.svg";

import "./styles.css";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div id="page-register">
      <div className="page-register-content">
        <div className="register-container">
          <header>
            <Link to="/">
              <img src={backImg} alt="Voltar" />
            </Link>
            <img src={logoPrimaryImg} alt="Logo Proffy" />
          </header>
          <form>
            <h1>Cadastro</h1>

            <p>Preencha os dados abaixo para começar</p>
            <div className="input-group">
              <Input label="Nome" name="name" autoFocus />
              <Input label="Sobrenome" name="surname" />
            </div>
            <Input label="E-mail" name="email" />
            <Input label="Senha" name="password" />

            <button type="submit" disabled>
              Concluir cadastro
            </button>
          </form>
        </div>
        <div className="register-logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <p>Sua plataforma de estudos online.</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
