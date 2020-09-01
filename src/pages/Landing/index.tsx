import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FiPower } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import landingImg from "../../assets/landing.svg";
import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";
import api from "../../services/api";

import "./styles.css";

function Landing() {
  const [totalConnections, setTotalConnection] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnection(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <header>
        <div className="avatar">
          <img
            src="https://avatars0.githubusercontent.com/u/51935321?s=460&u=96e365fd38fcdabd5aa97ab462db5bc4499f49e2&v=4"
            alt="Avatar"
          />
          <p>Renata Macedo </p>
        </div>

        <Link to="/">
          <FiPower color="#fff" size={24} />
        </Link>
      </header>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />
      </div>

      <div className="footer">
        <h2>Seja bem vindo.</h2>
        <strong>O que deseja fazer?</strong>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
