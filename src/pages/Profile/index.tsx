import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/icons/warning.svg";
import api from "../../services/api";

import "./styles.css";

// import convertHourToMinute from "../../utils/convertMinuteToHour";

interface UserItem {
  id: number;
  user_id: number;
  name: string;
  last_name: string;
  avatar: string;
  email: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface ScheculeItem {
  id: number;
  week_day: number;
  from: number;
  to: number;
}

function Profile() {
  const [user, setUser] = useState<UserItem>();
  const [schedules, setSchedules] = useState<ScheculeItem[]>([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    api.get(`/user/${id}`).then((response) => {
      setUser(response.data[0]);

      if (!user) return;

      api.get(`schedule/${user.id}`).then((response) => {
        setSchedules(response.data);
      });
    });
  }, [user]);

  if (!user) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div id="page-profile">
      <PageHeader page="Meu perfil">
        <div className="infos-profile">
          <img src={user.avatar} alt="Avatar" />
          <h2>{user.name}</h2>
          <span>{user.subject}</span>
        </div>
      </PageHeader>

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>

            <div className="input-group">
              <Input label="Nome" name="name" value={user.name} />
              <Input label="Sobrenome" name="surname" value={user.last_name} />
            </div>
            <div className="input-group">
              <Input label="E-mail" name="email" value={user.email} />
              <Input label="Whatsapp" name="whatsapp" value={user.whatsapp} />
            </div>

            <Textarea label="Biografia" name="bio" value={user.bio} />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <div className="input-group">
              <Select
                label="Matéria"
                name="subject"
                value={user.subject}
                options={[
                  { value: "Artes", label: "Artes" },
                  { value: "Matemática", label: "Matemática" },
                  { value: "Ciências", label: "Ciências" },
                  { value: "Portugês", label: "Portugês" },
                  { value: "Química", label: "Química" },
                  { value: "Física", label: "Física" },
                  { value: "Geografia", label: "Geografia" },
                  { value: "Filosofia", label: "Filosofia" },
                  { value: "Sociologia", label: "Sociologia" },
                  { value: "Educação Física", label: "Educação Física" },
                ]}
              />
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={user.cost}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Horários Disponíveis
              <button>+ Novo horário</button>
            </legend>
            {schedules.map((schedule) => {
              return (
                <div key={schedule.id} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={schedule.week_day}
                    options={[
                      { value: "1", label: "Domingo" },
                      { value: "2", label: "Segunda" },
                      { value: "3", label: "Terça" },
                      { value: "4", label: "Quarta" },
                      { value: "5", label: "Quinta" },
                      { value: "6", label: "Sexta" },
                      { value: "7", label: "Sábado" },
                    ]}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    // value={convertHourToMinute(schedule.from)}
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    // value={convertHourToMinute(schedule.to)}
                  />
                </div>
              );
            })}
            <div className="button-del">
              <hr />
              <button>Excluir horário</button>
            </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Profile;
