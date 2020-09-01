import React from "react";
import { useLocation, Link } from "react-router-dom";

import feitoImg from "../../assets/feito.svg";

import "./styles.css";

interface MessageSuccessProps {
  title: string;
  description: string;
  link: string;
  titleButton: string;
}

const MessageSuccess: React.FC = () => {
  const location = useLocation();
  const props = location.state as MessageSuccessProps;

  return (
    <div id="page-message-success">
      <div className="background">
        <div className="message">
          <img src={feitoImg} alt="Feito" />
          <h1>{props.title}</h1>
          <p>{props.description}</p>

          <Link to={props.link}>{props.titleButton}</Link>
        </div>
      </div>
    </div>
  );
};

export default MessageSuccess;
