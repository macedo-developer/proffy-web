import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/icons/warning.svg";

import "./styles.css";

function Profile() {
  return (
    <div id="page-profile">
      <PageHeader page="Meu perfil">
        <div className="infos-profile">
          <img
            src="https://avatars0.githubusercontent.com/u/51935321?s=460&u=96e365fd38fcdabd5aa97ab462db5bc4499f49e2&v=4"
            alt="Avatar"
          />
          <h2>Renata Macedo</h2>
          <span>Matemática</span>
        </div>
      </PageHeader>

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>

            <div className="input-group">
              <Input label="Nome" name="name" />
              <Input label="Sobrenome" name="surname" />
            </div>
            <div className="input-group">
              <Input label="E-mail" name="email" />
              <Input label="Whatsapp" name="whatsapp" />
            </div>

            <Textarea label="Biografia" name="bio" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <div className="input-group">
              <Select
                label="Matéria"
                name="subject"
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
              <Input name="cost" label="Custo da sua hora por aula" />
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Horários Disponíveis
              <button>+ Novo horário</button>
            </legend>

            <div className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
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

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
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
