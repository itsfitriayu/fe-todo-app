import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";
import Form from "./Components/Form"; //registration form (signup)
import Login from "./Components/login"; //login page (signin)

function App () {
  return (
    /* <router>
        <switch>
          <Route exact path="/" component={login} />
          <Route exact path="/signup" component={Form} />
        </switch>
      </router> */
      
    <div>
    <Login/>
    </div>
  );
};

export default App;
