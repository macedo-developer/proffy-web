import React, { useState, FormEvent } from "react";

import { Link, useHistory } from "react-router-dom";

import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../../components/Input";

import logoImg from "../../assets/logo.svg";
import logoPrimaryImg from "../../assets/logo-primary.svg";
import backImg from "../../assets/icons/back.svg";

import "./styles.css";

function Register() {
  const history = useHistory();

  const [eyePassword, setEyePassword] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    history.push({
      pathname: "success",
      state: {
        title: "Cadastro Concluído!",
        description:
          "Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.",
        link: "/",
        titleButton: "Fazer login",
      },
    });
  }

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
          <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>

            <p>Preencha os dados abaixo para começar</p>
            <div className="input-group">
              <Input
                label="Nome"
                name="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Sobrenome"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <Input
              label="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="pass-group">
              <Input
                label="Senha"
                type={eyePassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {eyePassword ? (
                <FiEyeOff
                  onClick={() => setEyePassword(!eyePassword)}
                  color="#8257e5"
                  size={20}
                />
              ) : (
                <FiEye
                  onClick={() => setEyePassword(!eyePassword)}
                  color="#8257e5"
                  size={20}
                />
              )}
            </div>

            <button
              type="submit"
              disabled={
                name !== "" && surname !== "" && email !== "" && password !== ""
                  ? false
                  : true
              }
            >
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
