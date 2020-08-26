import React from "react";

import logoImg from "../../assets/logo.svg";

import "./styles.css";
import Input from "../../components/Input";

function Register() {
  return (
    <div id="page-register">
      <div className="page-register-content">
        <div className="register-container">
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar</p>

          <form>
            <Input label="Nome" name="name" autoFocus />
            <Input label="Sobrenome" name="surname" />
            <Input label="E-mail" name="email" />
            <Input label="Senha" name="password" />
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
