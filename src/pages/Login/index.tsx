import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import logoPrimaryImg from "../../assets/logo-primary.svg";
import purpleHeartImg from "../../assets/icons/purple-heart.svg";

import "./styles.css";
import Input from "../../components/Input";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [eyePassword, setEyePassword] = useState(false);

  function handleSubmit() {
    history.push("/landing");
  }

  return (
    <div id="page-login">
      <div className="page-login-content">
        <div className="logo-container">
          <img src={logoImg} alt="Logo Proffy" />
          <p>Sua plataforma de estudos online.</p>
          <p>(Em desenvolvimento)</p>
          <a href="https://www.linkedin.com/in/macedorenata/">Linkedin</a>
        </div>

        <div className="login-container">
          <img className="logo-mobile" src={logoPrimaryImg} alt="Logo Proffy" />
          <form onSubmit={handleSubmit}>
            <h1>Fazer login</h1>
            <Input
              label="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="email"
              autoFocus
            />
            <div className="pass-group">
              <Input
                label="Senha"
                type={eyePassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
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

            <div className="form-footer">
              <div className="check-group">
                <input type="checkbox" name="remember" id="remember"></input>
                <p>Lembrar-me</p>
              </div>
              <Link to="/">Esqueci minha senha</Link>
            </div>

            <button
              disabled={username !== "" && password !== "" ? false : true}
              type="submit"
            >
              Entrar
            </button>
          </form>

          <div className="footer">
            <div className="question">
              <p>
                Não tem conta?
                <br />
                <Link className="button" to="/register">
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
