import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/logo.svg";
import logoPrimaryImg from "../../assets/logo-primary.svg";
import backImg from "../../assets/icons/back.svg";

import "./styles.css";
import Input from "../../components/Input";

function RedefinePassword() {
  const history = useHistory();

  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    history.push({
      pathname: "/success",
      state: {
        title: "Redefinição enviada!",
        description:
          "Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveite os estudos.",
        titleButton: "Voltar ao Login",
        link: "/",
      },
    });
  }

  return (
    <div id="page-redefine">
      <div className="page-redefine-content">
        <div className="redefine-container">
          <header>
            <Link to="/">
              <img src={backImg} alt="Votar para Login" />
            </Link>
            <img src={logoPrimaryImg} alt="Logo proffy" />
          </header>

          <form onSubmit={handleSubmit}>
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso.</p>

            <Input
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" disabled={email !== "" ? false : true}>
              Enviar
            </button>
          </form>
        </div>
        <div className="redefine-logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <p>Sua plataforma de estudos online.</p>
        </div>
      </div>
    </div>
  );
}

export default RedefinePassword;
