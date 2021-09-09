import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Form from "./src/Components/Form"; //registration form (signup)
import Login from "./src/Components/login"; //login page (signin)
import NotFound from "./Components/NotFound"; //404 not found
import Forgot from "./Components/forgot"; //forgot-password
import Todolists from "./Components/Todolists"; //add todo-lists
import ListItems from './Components/ListItems';//edit&delete todo-lists


function App () {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Form} />
      <Route exact path="/forgot-password" component={Forgot} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
