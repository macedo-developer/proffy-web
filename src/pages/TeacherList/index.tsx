import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
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
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
