import React from "react";

import api from "../../services/api";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;

  subject: string;
  whatsapp: string;
  user_id: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.user_id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora{" "}
          <strong>
            {Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(teacher.cost)}
          </strong>
        </p>

        <a
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
