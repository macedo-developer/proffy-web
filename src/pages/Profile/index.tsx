import React from "react";
import PageHeader from "../../components/PageHeader";

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
    </div>
  );
}

export default Profile;
