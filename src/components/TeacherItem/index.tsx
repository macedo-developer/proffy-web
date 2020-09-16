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
  schedule: Array<ScheduleItens>;
}

interface ScheduleItens {
  id: number;
  week_day: string;
  from: string;
  to: string;
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

      <div className="list-schedules">
        <ul>
          {teacher.schedule.map((item) => {
            return (
              <li key={item.id}>
                <div className="week_day">
                  <span>Dia</span>
                  <strong>{item.week_day}</strong>
                </div>
                <div className="hours">
                  <span>Horário</span>
                  <strong>{`${item.from}h - ${item.to}h`}</strong>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

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
          rel="noopener noreferrer"
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
