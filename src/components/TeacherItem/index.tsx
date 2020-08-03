import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEvtVgK-GfmDg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=akDu05-FPWT2bupIHQWFnV5Ffsd-eZ0eDV11obWdHME"
          alt="Renata Macedo"
        />
        <div>
          <strong>Renata Macedo</strong>
          <span>Lógica de Programação</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de Programação
        <br /> <br />
        Apaixonada por aprender e ensinar lógica de programação, sempre
        repassando esse conhecimento da melhor forma.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
