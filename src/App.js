import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Main from "./Components/mainpage"; //homepage
import Form from "./Components/Form"; //registration form (signup)
import Loginform from "./Components/login"; //login page (signin)
import NotFound from "./Components/NotFound"; //404 not found
import Forgot from "./Components/forgot"; //forgot-passw
import Todo from "./Components/todo/todo"; //forgot-passw




function App () {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Loginform} />
      <Route exact path="/register" component={Form} />
      <Route exact path="/forgot-password" component={Forgot} />
      <Route exact path="/todo" component={Todo} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
