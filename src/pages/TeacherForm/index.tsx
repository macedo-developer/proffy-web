import React, { useState, FormEvent } from "react";

import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import api from "../../services/api";

import warningIcon from "../../assets/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 1,
        from: "",
        to: "",
      },
    ]);
  }

  function setScheduleItemValue(
    position: Number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClasses(e: FormEvent) {
    e.preventDefault();

    if (
      name === "" ||
      avatar === "" ||
      whatsapp === "" ||
      bio === "" ||
      subject === "" ||
      cost === "" ||
      scheduleItems === []
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    };

    api
      .post("classes", data)
      .then((response) => {
        history.push({
          pathname: "/success",
          state: {
            title: "Cadastro salvo!",
            description:
              "Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.",
          },
        });
      })
      .catch((err) => alert(err));
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        page="Dar aulas"
      />

      <main>
        <form onSubmit={handleCreateClasses}>
          <fieldset>
            <legend>Seus dados</legend>

            <div className="group-itens">
              <div className="name-avatar">
                <img
                  src="https://avatars0.githubusercontent.com/u/51935321?s=460&u=96e365fd38fcdabd5aa97ab462db5bc4499f49e2&v=4"
                  alt="Avatar"
                />
                <p>Renata Macedo</p>
              </div>

              <Input
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
            </div>
            {/* <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            /> */}

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <div className="input-group">
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
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
