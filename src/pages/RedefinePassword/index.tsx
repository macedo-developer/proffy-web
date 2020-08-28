import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import backImg from "../../assets/icons/back.svg";

import "./styles.css";
import Input from "../../components/Input";

function RedefinePassword() {
  return (
    <div id="page-redefine">
      <div className="page-redefine-content">
        <div className="redefine-container">
          <header>
            <Link to="/">
              <img src={backImg} alt="Votar para Login" />
            </Link>
          </header>

          <form>
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso.</p>

            <Input label="Email" name="email" />

            <button type="submit">Enviar</button>
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

export default RedefinePassword;
