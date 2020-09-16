import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
import api from "../../services/api";

function TeacherList() {
  const [teachres, setTeachres] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  // Teacher de  teste, apenas para desenvolvimento do layout
  const teacher: Teacher = {
    id: 1,
    name: "Renata Macedo",
    avatar:
      "https://avatars0.githubusercontent.com/u/51935321?s=460&u=96e365fd38fcdabd5aa97ab462db5bc4499f49e2&v=4",
    bio:
      'Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
    cost: 80,
    subject: "Geografia",
    whatsapp: "5583994658",
    user_id: "1",
    schedule: [
      {
        id: 1,
        week_day: "Segunda-Feira",
        from: "08:00",
        to: "12:00",
      },
      {
        id: 2,
        week_day: "Terça-Feira",
        from: "13:00",
        to: "15:00",
      },
      {
        id: 3,
        week_day: "Quinta-Feira",
        from: "20:00",
        to: "22:00",
      },
    ],
  };

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setTeachres(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis." page="Estudar">
        <form onSubmit={searchTeachers} id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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

          <Select
            name="week_day"
            label="Dia da Semana"
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            name="time"
            label="Hora"
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        <TeacherItem teacher={teacher} />

        {teachres.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
