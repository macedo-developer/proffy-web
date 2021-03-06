import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RedefinePassword from "./pages/RedefinePassword";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import MessageSuccess from "./components/MessageSuccess";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/redefine-password" component={RedefinePassword} />
      <Route path="/landing" component={Landing} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/success" component={MessageSuccess} />
    </BrowserRouter>
  );
}

export default Routes;
